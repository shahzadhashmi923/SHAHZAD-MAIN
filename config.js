// config.js - ESM Version
import dotenv from 'dotenv';
dotenv.config();

const config = {
    // MongoDB Configuration (only this is from process.env)
    MONGODB_URL: process.env.MONGODB_URL || 'mongodb+srv://jawadmd:irfanmd@cluster0.cqcxhti.mongodb.net/?appName=Cluster0',
    
    // Fixed Database Name
    DB_NAME: process.env.DB_NAME || 'queenmd',
    
    // Collections Configuration
    COLLECTIONS: {
        SESSIONS: 'whatsapp_sessions',
        NUMBERS: 'active_numbers',
        CONFIGS: 'bot_configs'
    },
    
    // Bot Configuration
    AUTO_VIEW_STATUS: 'true',
    ANTI_STATUS: 'false',
    AUTO_LIKE_STATUS: 'false',
    MENTION_REPLY: 'false',
    AUTO_RECORDING: 'false',
    AUTO_REACT: 'false',
    AUTO_TYPING: 'false',
    ALWAYS_ONLINE: 'false',
    VERSION: '3.0.0 Bᴇᴛᴀ',
    DESCRIPTION: '*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ SHAHZAD-MD🦋*',
    ANTI_DELETE_PATH: 'inbox',
    ANTI_DELETE: 'false',
    ANTI_EDIT_PATH: 'inbox',
    ANTI_EDIT: 'false',
    STICKER_NAME: '𝙌𝙐𝙀𝙀𝙉🦋🫠❤️‍🩹',
    ANTI_LINK: 'true',
    WELCOME: 'false',
    GOODBYE: 'false',
    WELCOME_MESSAGE: '*_✨ Welcome @user! 🌸 Glad to have you here in this group. Enjoy your stay! 🫶_*',
    GOODBYE_MESSAGE: '*_👋 Goodbye @user! 🌙 We will miss you, take care! 💫_*',
    ADMIN_ACTION: 'false',
    MODE: 'public',
    PREFIX: '.',
    ANTI_CALL: 'false',
    REJECT_MSG: '*Call Rejected Automatically 📵*',
    READ_MESSAGE: 'false',
    AUTO_STATUS_SEEN: 'true',
    OWNER_REACT: 'false',
    AUTO_LIKE_EMOJI: ['❤️', '🔥', '👑', '🖤', '😍', '💎'],
    REACT_EMOJIS: ['🌈', '🕊️', '🌚', '🦢', '🎀', '💗', '🌺', '🌝', '🦋', '💐', '👀', '🍂', '🫶', '🤌', '💕', '🫠', '🫀', '🫰', '🪽', '🪐', '🍓', '💍', '🌷'],
    STATUS_REACT_EMOJIS: ['💗', '🎀', '🫶🏻', '🌚', '💐', '🦋'],
    
    // Bot Identity
    BOT_NAME: '𝙌𝙐𝙀𝙀𝙉-𝗠𝗗',
    OWNER_NAME: 'SHAHZAD-MD🦋',
    OWNER_NUMBER: '923205610677',
    DEV: '923205610677',
    IK_IMAGE_PATH: './lib/queenmd.jpg',
    BOT_IMAGE: 'https://files.catbox.moe/33a8lk.jpg',
    CONNECT_MSG_IMAGE: 'https://files.catbox.moe/33a8lk.jpg',
    NEWSLETTER_JID: '120363431481085222@newsletter',
    NEWSLETTER_NAME: '𝙌𝙐𝙀𝙀𝙉-𝗠𝗗',
      
    // System Configuration
    MAX_RETRIES: 3,
    OTP_EXPIRY: 300000,
    SUDO: ["43233795166283@lid", "178662821380156@lid", "923027137877@s.whatsapp.net", "923221540695@s.whatsapp.net", "923147385565@s.whatsapp.net", "923035277944@s.whatsapp.net", "923259158117@s.whatsapp.net", "923437385525@s.whatsapp.net"],
    
    // Default Settings Template
    DEFAULT_SETTINGS: {
        AUTO_VIEW_STATUS: 'true',
        ANTI_STATUS: 'false',
        AUTO_LIKE_STATUS: 'false',
        MENTION_REPLY: 'false',
        AUTO_STATUS_SEEN: 'true',
        READ_MESSAGE: 'false',
        
        AUTO_RECORDING: 'false',
        AUTO_REACT: 'false',
        AUTO_TYPING: 'false',
        ALWAYS_ONLINE: 'false',
        OWNER_REACT: 'false',
        
        ANTI_DELETE: 'false',
        ANTI_DELETE_PATH: 'inbox',
        ANTI_CALL: 'false',
        ANTI_LINK: 'true',
        
        WELCOME: 'false',
        GOODBYE: 'false',
        ADMIN_ACTION: 'false',
        
        WELCOME_MESSAGE: '*_✨ Welcome @user! 🌸 Glad to have you here in this group. Enjoy your stay! 🫶_*',
        GOODBYE_MESSAGE: '*_👋 Goodbye @user! 🌙 We will miss you, take care! 💫_*',
        REJECT_MSG: '*Call Rejected Automatically 📵*',
        
        VERSION: '7.0.0 Bᴇᴛᴀ',
        OWNER_NAME: 'SHAHZAD-MD🦋',
        OWNER_NUMBER: '923205610677',
        DEV: '923205610677',
        DESCRIPTION: '*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ SHAHZAD-MD🦋*',
        STICKER_NAME: '𝙌𝙐𝙀𝙀𝙉🦋🫠❤️‍🩹',
        MODE: 'public',
        PREFIX: '.',
        BOT_NAME: '𝙌𝙐𝙀𝙀𝙉-𝗠𝗗',
        BOT_IMAGE: 'https://files.catbox.moe/33a8lk.jpg',
        CONNECT_MSG_IMAGE: 'https://files.catbox.moe/33a8lk.jpg',
        NEWSLETTER_JID: '120363431481085222@newsletter',
        NEWSLETTER_NAME: '𝙌𝙐𝙀𝙀𝙉-𝗠𝗗',
        AUTO_LIKE_EMOJI: ['❤️', '🔥', '👑', '🖤', '😍', '💎'],
        REACT_EMOJIS: ['🌈', '🕊️', '🌚', '🦢', '🎀', '💗', '🌺', '🌝', '🦋', '💐', '👀', '🍂', '🫶', '🤌', '💕', '🫠', '🫀', '🫰', '🪽', '🪐', '🍓', '💍', '🌷'],
        STATUS_REACT_EMOJIS: ['💗', '🎀', '🫶🏻', '🌚', '💐', '🦋'],
      
        SUDO: ["43233795166283@lid", "178662821380156@lid", "923027137877@s.whatsapp.net", "923221540695@s.whatsapp.net", "923147385565@s.whatsapp.net", "923035277944@s.whatsapp.net", "923259158117@s.whatsapp.net", "923437385525@s.whatsapp.net"]
    }
};

export default config;
