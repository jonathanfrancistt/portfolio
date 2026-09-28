#!/usr/bin/env python3
"""
Bundle the whole site (index.html + projects.js + everything in the assets
and work folders) into ONE html file you can email, upload, or send to a client.

How to run (from inside this folder):
    python build-single-file.py          (on Mac/Linux you may need: python3 build-single-file.py)

It writes Chameleon_Portfolio.html next to index.html.
Your original files are never changed.
"""
import base64
import mimetypes
import os
import re
import sys
from urllib.parse import unquote

ROOT = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(ROOT, "Chameleon_Portfolio.html")

MIME = {
    ".mp4": "video/mp4", ".m4v": "video/mp4", ".webm": "video/webm", ".mov": "video/quicktime",
    ".ogv": "video/ogg", ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg",
    ".webp": "image/webp", ".gif": "image/gif", ".svg": "image/svg+xml", ".ico": "image/x-icon",
}

missing = []
total_bytes = 0


def data_uri(path):
    global total_bytes
    ext = os.path.splitext(path)[1].lower()
    mime = MIME.get(ext) or mimetypes.guess_type(path)[0] or "application/octet-stream"
    with open(path, "rb") as f:
        raw = f.read()
    total_bytes += len(raw)
    return "data:%s;base64,%s" % (mime, base64.b64encode(raw).decode("ascii"))


def is_link(value):
    return bool(re.match(r"^(https?:)?//", value, re.I) or value.lower().startswith("data:"))


def inline_projects(js):
    """Swap file names in projects.js for the files themselves."""
    pattern = re.compile(r"""(\b(?:file|thumb)\s*:\s*)(['"])(.*?)\2""")
    out_lines = []
    in_block_comment = False
    for line in js.splitlines(keepends=True):
        stripped = line.strip()
        if in_block_comment:
            out_lines.append(line)
            if "*/" in stripped:
                in_block_comment = False
            continue
        if stripped.startswith("/*"):
            out_lines.append(line)
            if "*/" not in stripped:
                in_block_comment = True
            continue
        if stripped.startswith("//"):
            out_lines.append(line)  # commented-out work is skipped
            continue

        def repl(m):
            prefix, quote, value = m.group(1), m.group(2), m.group(3)
            if is_link(value):
                return m.group(0)
            name = re.sub(r"^(\./)?(work/)?", "", value, flags=re.I)
            path = os.path.join(ROOT, "work", *name.split("/"))
            if not os.path.isfile(path):
                missing.append("work/" + name)
                return m.group(0)
            return prefix + quote + data_uri(path) + quote

        out_lines.append(pattern.sub(repl, line))
    return "".join(out_lines)


def main():
    index_path = os.path.join(ROOT, "index.html")
    projects_path = os.path.join(ROOT, "projects.js")
    for p in (index_path, projects_path):
        if not os.path.isfile(p):
            sys.exit("Could not find %s. Run this script from inside the portfolio folder." % os.path.basename(p))

    with open(index_path, encoding="utf-8") as f:
        html = f.read()
    with open(projects_path, encoding="utf-8") as f:
        projects = f.read()

    # 1. put projects.js straight into the page
    html = html.replace('<script src="projects.js"></script>',
                        "<script>\n" + inline_projects(projects) + "\n</script>")

    # 2. inline every file the page itself points at (logos, favicon, hero video...)
    def repl_attr(m):
        attr, rel = m.group(1), unquote(m.group(2))
        path = os.path.join(ROOT, *rel.split("/"))
        if not os.path.isfile(path):
            missing.append(rel)
            return m.group(0)
        return '%s="%s"' % (attr, data_uri(path))

    html = re.sub(r'\b(src|href)="((?:assets|work)/[^"]+)"', repl_attr, html)

    with open(OUT, "w", encoding="utf-8") as f:
        f.write(html)

    size_mb = os.path.getsize(OUT) / (1024 * 1024)
    print("Done: %s  (%.1f MB)" % (os.path.basename(OUT), size_mb))
    if missing:
        print("\nThese files were listed but not found, so they were left out:")
        for name in sorted(set(missing)):
            print("  -", name)
        print("Check the spelling in projects.js and that the file is in the work folder.")
    if size_mb > 20:
        print("\nHeads up: this file is over 20 MB, which many email services will reject.")
        print("Try shorter/smaller videos, or upload the whole folder to a web host instead.")


if __name__ == "__main__":
    main()
