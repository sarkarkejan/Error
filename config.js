//GIFTED-MD//
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "bandahealimaree.com";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkdxLy9yTmVQb2tsclVUbDlwbytMTEZhQ2M5UWYyKzd5TWtyeDlGbW5uWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRy9qMFJSNURLOXhMU1lTdmJzM3k2YWZCQk1jNnp2eHhDdmxncis0T0ZDZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxSEFyelUycVlGcjRaS0JERVZLSGpIOStTZUs3RGhBUXZRTFY1SkdPbjBjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrQUQ0dVpqNlFKdjAyWHRSVTd5OC9oY3cvVG9aQW4vNC8ycEVIVTBDdVNrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktFeXhSQnFEUnozMlNyMmoyclVtaitXc2FHRjZENVlYcjVMZnJBNkQxSEk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5QNHZoaFhqakJOMzRCWVNXTUIydk1Za2hBNjMxQ0NDaFRjYTNzOFNJRTA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUMxZTdySGhNN2tSeEF4V0ZtVlBxd3NFTUdFQ1l0K3pJSThFbTJzSVIxVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZWdOa1pmSWxGMW5zRjNGSEU1KzlPdnZFMU1YTTJZQnU1VkxOb21IdmVYbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZhWEJhQVplMEpmT1p3YlZxdDJWWTVWTUg2Qk13UnhZanVaeERndGk2T3hSb0dCVEFIUmU3YU9rd3M5ODN0Z0xhU28wVjBjMmlEUmxORFo2dDBXbUJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAsImFkdlNlY3JldEtleSI6ImY5RHVHZFRVK0p5NnNNSjlEaU8yS0ljbE93dFdRalNaUHdxK0Z2Y2Fnc0k9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMjUzNjE3NDIyQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6Ijk1QjZEMEYzNTI5MzMyMzkxNzRBRThBMjUwQzRCOTM4In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjA5MzM1Mzd9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzI1MzYxNzQyMkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJEMzU1ODVGNDBBRTkxMDg0MDVGMzNEMEFCMjkwNEJERSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIwOTMzNTM3fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI3a2plV0lOZ1NZR05oWXMzV3JIbXFnIiwicGhvbmVJZCI6Ijc0ZWI2NTAxLWRiYzctNDVhYS1iMGI3LWYwOThlNzAzMjZkZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxNGFXOU1LNmlXT0tmSHRaUjhoeTh3bzljS1E9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQkh1OURiYVFlSWZrNjEwK2pYUzFvRUNTRTVvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkIyV0RCNDZMIiwibWUiOnsiaWQiOiI5MjMyNTM2MTc0MjI6MUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSnZNN2RRSEVJKzV6YlFHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiZXloWlN1UE41YTZ3NGFwQ2hNcjRIaTlsSXhxS1RJYldnZU05TVhHMG0wVT0iLCJhY2NvdW50U2lnbmF0dXJlIjoibngxOHZtSFY0cVBMNlQzSldMc1Z3eXgwRUZWam1jZG05MG5URVNkOTEvS0FQUU05eVFTUkU3WUVadDJGSDFWaWZidHdxUW1UaUV5N3BXbEVLOGRIRFE9PSIsImRldmljZVNpZ25hdHVyZSI6Im5jcW9Ta1drVnFDeXRvclF5emNoNFVkRkJyYUhGcGZCdTFCQW9uQkNNRGVsdlFIWWtSVU9UNlZpd0hWOThyVWkvSTFoaEZiVk4xRjh0THdFNnlEQUJnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMjUzNjE3NDIyOjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWHNvV1VyanplV3VzT0dxUW9USytCNHZaU01haWt5RzFvSGpQVEZ4dEp0RiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMDkzMzUzMiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFDVDQifQ=="
module.exports = {
  menu: process.env.MENU_STYLE || "G1", /*Leave it in Default else bot will Crash*/
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "4.0.0",
  caption: process.env.CAPTION ||"`DOWNLOADED BY BANDAH E ALI`",
  author: process.env.STICKER_AUTHOR || "S A R K A R",
  packname: process.env.STICKER_NAME || "❤️",
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


