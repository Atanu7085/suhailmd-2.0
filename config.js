const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Kolkata";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaZ31elGE56hPfwhM10B";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaZ31elGE56hPfwhM10B" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/fe01b578f73294993cdd2.jpg" || "https://telegra.ph/file/fe01b578f73294993cdd2.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "\n*RAJ-BOT-OFC ī.am RAJ-KUMAR*\n*Contact Me:- 🪀+994407122025*" 


global.devs = "994407122025" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "994407122025";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "994407122025";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.imgur.com/e6TVzEU.mp4" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "994407122025,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_06_24_11_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDgwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDY3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjM5LFxuICAgICAgICA1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDc2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMSxcbiAgICAgICAgMTY2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNixcbiAgICAgICAgNDYsXG4gICAgICAgIDI2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTc4LFxuICAgICAgICAxODcsXG4gICAgICAgIDg2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTA4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDkzLFxuICAgICAgICAyMzksXG4gICAgICAgIDIxNixcbiAgICAgICAgNTYsXG4gICAgICAgIDcyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTA2LFxuICAgICAgICA4NCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDM0LFxuICAgICAgICA3MSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMzdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE4MixcbiAgICAgICAgNDcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjQzLFxuICAgICAgICA3NCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDYxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNDAsXG4gICAgICAgIDYwLFxuICAgICAgICAzNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgNDksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNSxcbiAgICAgICAgMTE2LFxuICAgICAgICAzNyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDksXG4gICAgICAgIDIzNixcbiAgICAgICAgMjM2LFxuICAgICAgICA1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjI1LFxuICAgICAgICA1NyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTg5LFxuICAgICAgICA3NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDY4LFxuICAgICAgICA4NixcbiAgICAgICAgMjQ5LFxuICAgICAgICA3MixcbiAgICAgICAgODcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMixcbiAgICAgICAgMjA2LFxuICAgICAgICA4MixcbiAgICAgICAgNTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICA5NyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMTksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDMsXG4gICAgICAgIDg1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDU2LFxuICAgICAgICA0NixcbiAgICAgICAgMTUzLFxuICAgICAgICA4MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjM3LFxuICAgICAgICA0NyxcbiAgICAgICAgMTczLFxuICAgICAgICAxODksXG4gICAgICAgIDgwLFxuICAgICAgICAxODEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTY3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTk5LFxuICAgICAgICA5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU1LFxuICAgICAgICA5MSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDUxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTY2LFxuICAgICAgICA4MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNSxcbiAgICAgICAgNzEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTA1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMzNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMTdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNTIsXG4gICAgICAgIDQyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTE4LFxuICAgICAgICA3LFxuICAgICAgICA0NixcbiAgICAgICAgMTk5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDg3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMTksXG4gICAgICAgIDY4LFxuICAgICAgICA5NixcbiAgICAgICAgODAsXG4gICAgICAgIDU4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTA0LFxuICAgICAgICA5MyxcbiAgICAgICAgMTI1LFxuICAgICAgICAzOSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTgzLFxuICAgICAgICAxMTksXG4gICAgICAgIDE5LFxuICAgICAgICAxODYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTg0LFxuICAgICAgICA1NSxcbiAgICAgICAgMjI2LFxuICAgICAgICA2OCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTY5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEwLFxuICAgICAgICA3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDMsXG4gICAgICAgIDEyOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjM3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIi9WbUdvZnRXU3o4ZlZCTUU2eU9jcnRud1BVSzdkMGtrQzhUSElnNUxSOG89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTE5MzgyNjEzODYxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJBQTFENUEzMDMwRTI1N0I0QzAyMUI2MTMzOERCNTU5NlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzI2MDIyOTZcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUXVKdmdNWGxTSHVPcEcydEVQMlhvUVwiLFxuICBcInBob25lSWRcIjogXCI3ODE2MWYxNy04ZTE3LTRmMjYtYWNlZC1lOWZiZGIyYzZkOTdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTYxLFxuICAgICAgNzUsXG4gICAgICAxNjUsXG4gICAgICA0OCxcbiAgICAgIDExNCxcbiAgICAgIDEyNCxcbiAgICAgIDE4MCxcbiAgICAgIDI1NCxcbiAgICAgIDE1MSxcbiAgICAgIDE3NyxcbiAgICAgIDQxLFxuICAgICAgMTA1LFxuICAgICAgNDAsXG4gICAgICA3NSxcbiAgICAgIDE3NCxcbiAgICAgIDUwLFxuICAgICAgMTI3LFxuICAgICAgNzYsXG4gICAgICAyMjIsXG4gICAgICAzNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4OCxcbiAgICAgIDE5LFxuICAgICAgMTA5LFxuICAgICAgMjUzLFxuICAgICAgODQsXG4gICAgICAxMzUsXG4gICAgICAxNTAsXG4gICAgICAyNTUsXG4gICAgICAxMDEsXG4gICAgICAxNDYsXG4gICAgICAxNTMsXG4gICAgICAyMTgsXG4gICAgICAyNTEsXG4gICAgICAxNTAsXG4gICAgICAxOTgsXG4gICAgICAxOTAsXG4gICAgICAxMDEsXG4gICAgICAyMyxcbiAgICAgIDYyLFxuICAgICAgMjEzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjMxMUExUTZDXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTkzODI2MTM4NjE6OTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJBVEFOVSAgICAgICAgICAgIFBBVFJBXCIsXG4gICAgXCJsaWRcIjogXCIxODg2NTIzOTUxNjc5MTY6OTJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTEdVbGVNQ0VLL1RsYm9HR0FnZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJIeGxSZWh0dXdLajVXSFNpK1BWelN1eTAxdVFzNTZtZSsxUmJlTjJxc1RBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkpLMkxBUnY1ck9QbEl1L0JYZktuU2xiekhTYzg1ZDg1R2VDRHhVREorbHdwaUM5eEhkUE05VjdFV1RjZDdTM0tKMzZNNlU2alFpK1ZHSGo3SHhmckRRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInBPbzVZdmk3RjMrQkxFeU1WMHRXNnpIbWxQZ3hEc3VRZGI0Y1o2ZWcrMHNUZmI3cCtmck1wblRwQmE4UnBHcmtINWZxTHdxd3ZKcW1QWTNLUVk3N2hBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkxOTM4MjYxMzg2MTo5MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA0OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMyNjAyMjkwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSGRqXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIZGouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ6ajcxZFJGcW5PZmpjSC95U1FLZE5sTzg0UXFFWWlTQmNNTlg1M3U4ZWtrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjc0NDgzNTYzMixcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "+994407122025",
  packname: process.env.PACK_NAME || "RAJ-BOT-OFC",
  botname : process.env.BOT_NAME  || "★★𝗥𝐀𝐉-𝐁𝐎𝐓-𝐎𝐅𝐂★★",
  ownername:process.env.OWNER_NAME|| "RAJ-WA-OFC",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
