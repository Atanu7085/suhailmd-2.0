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
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_38_11_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTEzLFxuICAgICAgICA3NyxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDc2LFxuICAgICAgICA0OCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxODcsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDM4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI3LFxuICAgICAgICAyNixcbiAgICAgICAgNjksXG4gICAgICAgIDk4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjEzLFxuICAgICAgICA0MCxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDg5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDk1LFxuICAgICAgICAxODcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOTIsXG4gICAgICAgIDkxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDYyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDQzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDg3LFxuICAgICAgICA1MyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTEwLFxuICAgICAgICA2OCxcbiAgICAgICAgODAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDU0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDYwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjQwLFxuICAgICAgICAzNyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxODMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMjksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNjksXG4gICAgICAgIDE5NixcbiAgICAgICAgMTA4LFxuICAgICAgICA0MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgODYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxOCxcbiAgICAgICAgMSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MyxcbiAgICAgICAgMjM4LFxuICAgICAgICA1NixcbiAgICAgICAgMTAzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDM5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNTksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTM3LFxuICAgICAgICA4MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAzMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxODYsXG4gICAgICAgIDU5LFxuICAgICAgICAyMDksXG4gICAgICAgIDc3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIzLFxuICAgICAgICA2NixcbiAgICAgICAgODUsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjksXG4gICAgICAgIDY0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTk0LFxuICAgICAgICA2MSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxODYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTM2LFxuICAgICAgICAyNSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MixcbiAgICAgICAgMTA2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDU0LFxuICAgICAgICA1MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTYzLFxuICAgICAgICA1OCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMzksXG4gICAgICAgIDQsXG4gICAgICAgIDc2LFxuICAgICAgICAyNyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMzcsXG4gICAgICAgIDIyNixcbiAgICAgICAgOSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA5NyxcbiAgICAgICAgMjUyLFxuICAgICAgICA5OCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjEzLFxuICAgICAgICA5MSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE4MixcbiAgICAgICAgNixcbiAgICAgICAgNyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNixcbiAgICAgICAgMzQsXG4gICAgICAgIDk2LFxuICAgICAgICAxNDksXG4gICAgICAgIDIxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyOSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDMzLFxuICAgICAgICA4MyxcbiAgICAgICAgMTc5LFxuICAgICAgICA3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDgzLFxuICAgICAgICAzMixcbiAgICAgICAgMTg1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDMxLFxuICAgICAgICA1OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDkyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjMzLFxuICAgICAgICA2MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIzLFxuICAgICAgICA0NyxcbiAgICAgICAgMTUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE2MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJLMTYyWnJuU1QxNXVNaUdHY0hzei9xNDFJclBrMXQyTFpYUnRhQTJjYmE4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJLTHpqTHB5clNObUVfN2JURWc1RG1RXCIsXG4gIFwicGhvbmVJZFwiOiBcIjU0NWY0Y2ZiLTY1ZmEtNDJjMS04ZDFmLTVlMTliMTA3ZDJmZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODYsXG4gICAgICAxODIsXG4gICAgICAxNzIsXG4gICAgICA1MSxcbiAgICAgIDE2MyxcbiAgICAgIDE3NCxcbiAgICAgIDI0OCxcbiAgICAgIDk2LFxuICAgICAgOTksXG4gICAgICAxMzAsXG4gICAgICAxODUsXG4gICAgICAxMTQsXG4gICAgICA1MSxcbiAgICAgIDc4LFxuICAgICAgNzUsXG4gICAgICAyMjcsXG4gICAgICAyMjIsXG4gICAgICAxNTgsXG4gICAgICAyMjksXG4gICAgICA3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwOCxcbiAgICAgIDIyMCxcbiAgICAgIDIwNyxcbiAgICAgIDE3MSxcbiAgICAgIDM1LFxuICAgICAgMixcbiAgICAgIDg4LFxuICAgICAgMTk4LFxuICAgICAgMTM5LFxuICAgICAgMTI0LFxuICAgICAgMTU1LFxuICAgICAgMjQ1LFxuICAgICAgMjMxLFxuICAgICAgMTM0LFxuICAgICAgMTE4LFxuICAgICAgMTEwLFxuICAgICAgOTEsXG4gICAgICAyMjUsXG4gICAgICA0NCxcbiAgICAgIDMxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjZQRFczMkU1XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTcwNzY0MDEzOTM6NjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJzIHUgbiBOIE4geeClpCBiYnlcIixcbiAgICBcImxpZFwiOiBcIjUyNzI1MzU0MDkwNTU4OjYwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1B1eDR1WUJFTk9kM2JrR0dBUWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiRHgzSDFpUnVqNVVhbUhLR0FFbkJ6QjRibjhTbmdaNWlMOXQzS2t0YWFuYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJLVGVobmNvZzkvTTEwekJRajFLU0pOY0xrdFVCQy85T29NSlJjWkllcW9Ydkt3clpsZllLVC9VM0Y5U0xLY3E3SFJPYno2VDFWdjY3aDIxeVZEY3JDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJqcDlPMUNVOUFmZVY4ZklWcFI1M0lneUhnSENHTitFanU3N1FvaG1HdkdzUEJPb3NQZ082M2dNTFdGYk1Relk0M0RxWUdKckFuOEJKYkowN3R4MmdqQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MTcwNzY0MDEzOTM6NjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDExOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMxNjc3OTExLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBT1B2XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPUHYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ1V2h4ZXdZdlN1eHZGRDhmZjYrL0ZUSCthWHI4YjNIWUR1cHZKTXFiQVBVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQ4Mzk1Njk4NixcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
