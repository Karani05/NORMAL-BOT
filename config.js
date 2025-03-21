const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VUWW+rOBj9L35NehO2bFKlAUIIELKQhYbRfXDAgANhswmBKv99RNOqfZjb6fBkAT4+Psv3CpIUE2SgGkxeQVbgK6SoXdI6Q2ACpNL3UQG6wIMUggnIxY3IKER3c2sW8bk+oNGV27qsJfEHHVvTXCfx+mbn2p5/BvcuyMpTjN1vAIMEk5XDs2Y/yszzWFryvM3I+sjBetaDzUHqQ3klXj2HTZ/BvUWEuMBJoGQhuqACxgaq1xAXP6Nvm7csyS8+VRTPUn3Ijp3IF2L+UC2ncsWuhjf9KC31c66YP6O/m6dShsP9TWUFZTqNHB5vetnaGOWLoBirtqLs/EbujJwmetAnOEiQp3kooZjWP9a9NBNVsubhwr5BtrHM/Sa+pBleLQReSIl45sJykdtaM7WrnxE/56VxXHrDznWfFdJC6ctJETQ3jTJhnRg8Z1Im1HbiWqv2X4mvi4+sRP9Hd3fe6y3nMOp06tlht6hD7BUny9nykB7cvbrjm7wPBWN+UsjP6GOzJ932fUYbDgMpOV4CVYW8ulsoqrGlZFiuVT+/Yl+IQv6TPqRl8R3Ll/4Z8c7evQpQk08VkefOfBsWjt2Xd4owe+mNlyJrGooaxSxK81Oxa8T1onPVT3FP8xxuPa2UsF8sj5btvRBSibVLpOr57UYRqjUPTJh7FxQowIQWkOI0ad+xbBdA77pFboHom7pgepXtudGTbvYw1f3lRavkFxLk455Fsbc8yQuu0jQq7Weq+wy6ICtSFxGCvDkmNC1qExECA0TA5O/fXZCgG3341p7GMV3g44LQfVJmcQq9D1M/PkLXTcuEbuvEldsFKsCk//kaUYqTgLQylgks3BBfkRxCSsDEhzFB9y7w0BW7qMUDdiQ0qXbdbZ/gaRa/cEsYmtGmpRymyeOX8YBFgjsePPncYPjEj4TB08kfME8s4tBgxPs8yzGgC/B7Zdo9f3TQd1k9v0KR5HqanGVBczf6ld8cy/FjHD2kRwXywIQWJeqCE3SjMtulEUq+q5/V5JknGuLePLMka8xZFK9PtVl0Rl9wH5aCyevnmJJTr8VjjY1tzZdH0AWXtwTi9uaswDMMy7CjISNMGO4v8qtqhYRZ9itBtMV9F73d4SEKcUzABMgrjg9SV1YWMBoveFUV3UCUAxF8mvQR9keaDqjQlIp3146q+if13HDWSpLwOpw6ZepcEkWZ3YIo1bJae/4XEDABXK85crwyOqrpSBfLq+yqHUdGHkLNUA6rmyaIiUlLVd1G1UxoopW1sLy+IupBSeK42ChNuFgJRobP1nTb2y4Hvbkht834CMvXww5Zx+0z2/FZWLO729jZHNxNv8o0mC+nxmF7gLzhy8Mhl7DpvLLF3TA7V8fRarTqsYkSlHku5fti2vMvfn7jxoG9b3hRDh41fBsD8fv4xW8NeX2Plo/R2zRL4AX9tzlfU96/d79gvM/HPyRJOrzktWSu5lPWChP2lo7G/V2wOZ75DXvKVSe7SZJ71A3ZcDG43393QRZD6qfFBUwATLwixR7oghgSKn4WdYcviFB4ycCEGfItdW447oJLLWbZlkL60W8gto8ebsD9H8cpTmT6BwAA',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "254710772666,254106727593",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.CHATBOT || 'no',
    CHATBOT1 : process.env.AUDIO_CHATBOT || 'yes',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE_MESSAGES || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  ANTILINK_GROUP : process.env.ANTILINK_GROUP || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'no',
                  AUTO_READ : process.env.AUTO_READ || 'no',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'no',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});





