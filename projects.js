/* =====================================================================
   YOUR WORK. This is the only file you need to edit to add work.
   =====================================================================

   ADD A PIECE IN 3 STEPS
     1. Put the image or video in the "work" folder.
     2. Copy any line in PROJECTS below, paste it where you want it to
        appear, then change the file name, title and category.
     3. Save, then refresh the page in your browser.

   WHAT EACH PART MEANS
     cat       Which filter it appears under. Use one of the keys from
               CATEGORIES below: motion, branding, event, print, mockup.
     file      The file name inside the work folder, for example
               my-logo-reveal.mp4 or event-map.png. It can also be a full
               link to a YouTube, Vimeo or Google Drive video. Leave file
               out completely to get an "Add your work here" tile.
     title     The name shown on the card.
     desc      Optional. A sentence or two shown when someone clicks the card.
     size      Optional. 'sm', 'md' or 'lg' (tile width). Default is 'md'.
     thumb     Optional. A cover image (file in work, or a link) for videos
               that are links.
     featured  Optional. Put featured:true on ONE line to show it in the big
               "Latest motion work" section near the top of the page.

   TIPS
     - Order matters. The first line is the first tile on the page, so put
       your newest work at the TOP of the list.
     - Images: .jpg .png .webp .gif      Videos: .mp4 .webm .mov
     - Keep videos short and under about 10 MB (HandBrake can shrink them).
     - File names must match exactly, including capital letters and spaces.
     - If your text contains an apostrophe, wrap the text in double quotes,
       like this:  title:"Client's logo"   (or use a curly one: ’ )
     - Every line except the last one in the list ends with a comma.
     - To hide a piece without deleting it, put // at the start of its line.
   ===================================================================== */


/* Set to false before sending the site to clients. This hides the
   "Add your work here" tiles, and any category with no work in it. */
const SHOW_PLACEHOLDERS = true;


/* The filter buttons. Keep "all" first. To add a category, add a line here,
   then use its key in the cat part of your work. */
const CATEGORIES = [
  {key:'all',      label:'All work'},
  {key:'motion',   label:'Motion & Animation'},
  {key:'branding', label:'Branding & Identity'},
  {key:'event',    label:'Event Graphics'},
  {key:'print',    label:'Print & Mockups'},
  {key:'social',   label:'Social Media Posts'}
];


/* ---------------------------------------------------------------------
   THE WORK. Copy a line, paste it, edit it.
   --------------------------------------------------------------------- */
const PROJECTS = [

  // ---- Motion & Animation ----
  { cat:'motion',   file:'chameleon-logo-animation.mp4', title:'Chameleon Brand Animation', desc:'The studio’s own logo reveal — built for use as a video intro across social posts and event openers.', size:'lg', },
  { cat:'motion',   file:'DreeVay-Flyer-Final.mp4',  title:'DreeVay Flyer', desc:'An animated flyer for a local marketing campaign.', size:'md', featured:true},
  { cat:'motion',   file:'EP-Animated-Grid.mp4',  title:'Essentials Pharmacy Animation', desc:'A motion graphic done for Essentials Pharmacy', size:'sm' },
  { cat:'motion',   file:'DreeVay-Flyer-Final.mp4',  title:'DreeVay Flyer', desc:'A motion graphic done for Essentials Pharmacy', size:'sm' },
  { cat:'motion',   file:'Food Truck Park Animated Flyer.mp4',  title:'Food Truck Park Animated Flyer', desc:'An animated flyer for a local marketing campaign.', size:'sm' },
  { cat:'motion',   file:'Fun Nation Christmas Package.mp4',  title:'Fun Nation Christmas Package', desc:'A motion graphic done for Fun Nation', size:'sm' },
  { cat:'motion',   file:'KillerTech Logo Animation.mp4',  title:'KillerTech Logo Animation', desc:'A logo animation done for KillerTech', size:'sm' },
  { cat:'motion',   file:'MaPau Carnival Post.mp4',  title:'MaPau Carnival Post', desc:'A motion graphic done for MaPau', size:'sm' },
  { cat:'motion',   file:'MPA CPL.mp4',  title:'CPL Motion Graphic for MaPau', desc:'A motion graphic done for MaPau', size:'sm' },
  { cat:'motion',   file:'Shade House Loop Animation.mp4',  title:'Shade House Loop Animation', desc:'A motion graphic done for Shade House', size:'sm' },
  { cat:'motion',   file:'Starlift Screen Final.mp4',  title:'Starlift Screen', desc:'A motion graphic done for Starlift', size:'sm' },
  { cat:'motion',   file:'Tap and Win DFL.mp4',  title:'D Fast Lime Motion Graphic', desc:'A motion graphic done for D Fast Lime', size:'sm' },
  { cat:'motion',   file:'SRFD Logo Animation Final.mp4',  title:'Santa Rosa Family Dentist Logo Animation', desc:'A motion graphic done for Santa Rosa Family Dentist', size:'sm' },
  { cat:'motion',   file:'Cert Games Teaser Final.mp4',  title:'Cert Games Motion Graphic', desc:'A motion graphic done for Cert Games', size:'sm' },
  { cat:'motion',   file:'Dry Season Intro.mp4',  title:'Dry Season Motion Graphic', desc:'A motion graphic done for the Ministry of Rural Development and Local Government', size:'sm' },
  { cat:'motion',   file:'CERT Jingle Final.mp4',  title:'Lyric Video for CERT Games Jingle', desc:'A lyric video for the CERT Games jingle', size:'sm' },
  { cat:'motion',   file:'Rain Campaign Teaser.mp4',  title:'Rainy Season Campaign Motion Graphic', desc:'A motion graphic done for the Ministry of Rural Development and Local Government', size:'sm' },


  // ---- Branding & Identity ----
  { cat:'branding', file:'GreenHorse-Logo.png', title:'Green Horse', desc:'Studio identity — corporate branding for a local business.', size:'md' },
  { cat:'branding', file:'Balanced-Blends-Logo.jpg', title:'Balanced Blends', desc:'Studio identity — corporate branding for a local business.', size:'md' },
  { cat:'branding', file:'Hairology-Logo.png', title:'Hairology', desc:'A logo suite and brand mark built for a local business.', size:'sm' },
  { cat:'branding', file:'IBC-Logo.png', title:'Island Boy Coconut Water', desc:'A logo built for a local business.', size:'md' },
  { cat:'branding', file:'Pelois-Delivery-Services.jpg', title:'Pelois Delivery Services', desc:'Studio identity — corporate branding for a local business.', size:'md' },
  { cat:'branding', file:'Tankalana-Desserts-Logo.png', title:'Tankalana Desserts', desc:'Studio identity — corporate branding for a local business.', size:'md' },
  { cat:'branding', file:'VW-LOGO-BLACK.png', title:'Village Wallawah Logo', desc:'A logo suite and brand mark built for a local business.', size:'md' },
  { cat:'branding', file:'Saegel-Logo.jpg', title:'Saegel', desc:'A logo built for a local business.', size:'sm' },
  { cat:'branding', file:'Dynasty-Logo.png', title:'Dynasty', desc:'A logo suite and brand mark built for a local business.', size:'sm' },
  { cat:'branding', file:'Chillax_Profile_Pic1.png', title:'Chillax', desc:'A logo built for a local business.', size:'sm' },
    { cat:'branding', file:'Kairi_Spirit_Full_Colour_Light.jpg', title:'Kairi Spirit', desc:'A logo suite and brand mark built for a local business.', size:'sm' },
  { cat:'branding', file:'EC_COLOUR_LIGHT_JPG.jpg', title:'Elite Clean', desc:'A logo built for a local business.', size:'sm' },
  { cat:'branding', file:'Cajoja_Naturals_V1.png', title:'Cajoja Naturals', desc:'A logo built for a local business.', size:'sm' },

  // ---- Event Graphics ----
  { cat:'event',    file:'STS_EventMap_Full.png', title:'Soaka Till Sunrise Event Map', desc:'An event map for the Soaka Till Sunrise fete', size:'md' },
  { cat:'event',    file:'STS_RoadMap.png', title:'Soaka Till Sunrise Road Map', desc:'A road map for the Soaka Till Sunrise fete', size:'md' },
  { cat:'event',    file:'Napa Event Floor Plan.png', title:'WoW Market Floor Plan', desc:'A floor plan for the WoW Market', size:'md' },

  // ---- Print & Mockups ----
  { cat:'print',    file:'Kinks Body Butter.png',   title:'Kinks Body Butter',   desc:'A label design for a natural skincare product.', size:'md' },
  { cat:'print',    file:'Ponche De Creme Label Mockup.png', title:'Ponche De Creme', desc:'A label design for a local christmas beverage in Trinidad and Tobago.', size:'md' },
  { cat:'print',    file:'Tankalanka Box Mockup.png', title:'Tankalanka Box', desc:'A box design for a local dessert brand.', size:'md' },
  { cat:'print',    file:'College Cool Final.png', title:'College Cool', desc:'A package design for a school water bottle.', size:'md' },

  // ---- Social Media Posts ----
  { cat:'social',   file:'Camp Studio (Easter Sunday).png',title:'Camp Studio Easter Sunday Flyer', desc:'A flyer done for Camp Studio', size:'md' },
  { cat:'social',   file:'Checkup_Post.png', title:'Social Media Post for Dentistry', desc:'A social media post for a dental practice.', size:'md' },
  { cat:'social',   file:'Comfort Starts With Cake Post.png',title:'Spice Life Cake Flyer', desc:'A flyer done for Spice Life', size:'md' },
  { cat:'social',   file:'SRFD Cleaning Special.png', title:'SRFD Cleaning Special', desc:'A social media post for a dental practice.', size:'sm' },
  { cat:'social',   file:'Fun Nation TIcket Giveaway.png',title:'Fun Nation Ticket Giveaway Flyer', desc:'A flyer done for Fun Nation', size:'sm' },
  { cat:'social',   file:'Save the Date.png', title:'Village Wallawah Save the Date', desc:'A save the date flyer for Village Wallawah', size:'sm' },
  { cat:'social',   file:'TT Food Truck Flyer Movie Night-04.png',title:'Tantra Teraces Movie Night Flyer', desc:'A flyer done for Tantra Teraces', size:'sm' },
  { cat:'social',   file:'Festival of Flames Contact.png', title:'Festival of Flames Flyer', desc:'A social media post for the Festival of Flames 2025 Event', size:'sm' },
  { cat:'social',   file:'FOF 2026 Poster.png',title:'Festival of Flames Poster', desc:'A flyer done for the Festival of Flames 2026 Event', size:'sm' },
  { cat:'social',   file:'JAVA Family Fun Flyer.png', title:'JAVA Family Fun Flyer', desc:'A social media post for JAVA Family Fun', size:'sm' },

];
