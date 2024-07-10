//GIFTED-MD//
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "ngoyaibraah@gmail.com";
global.location = "pakistan,islamabad";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://giftedte:SER3spXjIJSOwrPT@cluster0.ni61idp.mongodb.net/?retryWrites=true&w=majority";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgres://giftedtech:ZMIkfrL3rHsvmfyGboVXKkeyoM0FPl6z@dpg-cpp83jlds78s73e39m10-a.oregon-postgres.render.com/giftedtech";
global.BUTTONS = process.env.BUTTON_MODE || "1";
global.timezone = process.env.TIME_ZONE || process.env.TIME_ZONE || "pakistan/karachi";
global.github = process.env.GITHUB || "https://github.com/ibrahimaitech/BLACK-PANTHER-XMD";
global.gurl = process.env.GURL || "https://wa.me/+923253617422?text=_Hello-sarkar-bandah-e-Ali_";
global.website = process.env.GURL || "https://youtube.com/@sarkarjiteach";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/93e19cd928fce970d5cab.jpg";
global.devs = "null";
global.sudo = process.env.SUDO_NUMBERS || "923253617422";
global.sudo = process.env.SUDO || "923253617422";
global.owner = process.env.OWNER_NUMBER || "923253617422";
global.style = process.env.STYLE || "1";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "true";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.MENU_VIDEOS || "";
global.waPresence = process.env.WAPRESENCE || "composing";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/93e19cd928fce970d5cab.jpg";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd.onrender.com";
global.scan = "https://whatsapp.com/channel/0029VaZuGSxEawdxZK9CzM0Y";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic09LK1lLVDRTWmFhVDU3aVg1Y3lPNjVWVjlWQVJIVlEyaTdHaTJxNDNVYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQTJGRDBHTnh5cVo1VzErZlIycFRicEpsVFAxZm1IU0xyZ1laZXlUVTF3ST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrTy9zS0xwWFhtR1Q5YUxFOWtEakNIM2VQb0tGWXN1cS9QK2FweGRlWlZRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4M3l4bTFBbGxwNnRhQzRIdjlvbW9sdGVQeUowd1pGSmpTVXBmRDNzL0ZrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFDWUZkTElZaFRMa0R6WVlsR09jVlRmVnR0NlFrS09tNS96SldYTTRZRzg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZYR1haanc2OW04RGV5Mk5qYlQybDFUMzVlTnVEOHdpM0V1K1U0aktmeHM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUJnajZBWjZDcWdHdjVUU08zMGEya0NkM200M0FWNkNmd3NlaU4zODRsaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNVpFK1FaUUJjdTNEWjNlMFBsakhJa05LMitFdVAvdXg0dFR3d2M2bE1pST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjkvMWpTTUlMZnhCVzNDdTcrVUsxTlljcUhmb0UwTHdpanhoaGYvNUIwMUQxSHFJQnJhTFRaQTJQU2VUQ0VSeEFGbVdVdVFyY1JXdG1DVHlNbDgvOUJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQ4LCJhZHZTZWNyZXRLZXkiOiJuVW5jM3Z6cjlkVFQ5bHlNU3VOTlhtOU1RQ2hFdUY2dTlnM0t5UlNvbjhvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJTc0ZoUmxUMFRhR2s4WU40UHhVNlpnIiwicGhvbmVJZCI6ImJhNThjMDlhLWExNWQtNGM1Yi04M2ZhLWU4MzEyMGMyZTljYSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjZU1iU012THl2UkhieExYZ24welV6QWkyUlE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUHFIOE95c1NjU0VJK2ZlNTBwVGN3cUFVNmMwPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlhDVjc4Nk5KIiwibWUiOnsiaWQiOiI5MjMyNTM2MTc0MjI6OTRAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0pmTTdkUUhFTGJEdXJRR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImV5aFpTdVBONWE2dzRhcENoTXI0SGk5bEl4cUtUSWJXZ2VNOU1YRzBtMFU9IiwiYWNjb3VudFNpZ25hdHVyZSI6InlrSnpuVjljZTllKzFyYjJ3K1lURFcvZ0twVmlLYXVwTFA5VVZhb2tsUWFYdk0rMFB3ZTFtMlVkZ3FQVWRvSXo5ck9oMjNpOVhta20xUXJoOHNiY0JBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ2d3U2ZkZ1U21jeWROcHlGUjRCemhVZ2Qxc0oyRDRLUlkwTXpoVm95azhWQnhmbXdudjlydm1LVExKd3JiV3BpNDRNa0VVY1hZcWtvOFUrVERPUjFDQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzI1MzYxNzQyMjo5NEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYc29XVXJqemVXdXNPR3FRb1RLK0I0dlpTTWFpa3lHMW9IalBURnh0SnRGIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwNjIzNTU1LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQVBObCJ9"
module.exports = {
  menu: process.env.MENU_STYLE || "G1", /*Leave it in Default else bot will Crash*/
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "4.0.0",
  caption: process.env.CAPTION ||"`DOWNLOADED BY BANDAH E ALI`",
  author: process.env.STICKER_AUTHOR || "S A R K A R",
  packname: process.env.STICKER_NAME || "😈",
  botname: process.env.BOT_NAME || "GUROJI",
  ownername: process.env.OWNER_NAME || "B A N D A H E A L I",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "ADAM").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});


