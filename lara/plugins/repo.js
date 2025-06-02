const { cmd, commands } = require('../command');

cmd({
    pattern: "repo",
    alias: "src",
    desc: "To download songs.",
    react: "🌺",
    category: "download",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
    
let cap =`
✾━┫ *⚬Lααɾα-repo⚬* ┣━✾
              *ᴸ  ͣ  ͣ  ͬ  ͣ  ✻  ᴸ  ͣ  ͣ  ͬ  ͣ*
              
> *ɢɪᴛʜᴜʙ ʟɪɴᴋ :*
https://tharumin.github.io/Lara-Web

> *ꜱᴇꜱꜱɪᴏɴ ɪᴅ ʟɪɴᴋ :*
https://webpair-mega-jxq2.onrender.com

> *ᴅᴇᴘʟᴏʏ ᴠɪᴅᴇᴏ :*
https://youtu.be/PZVJ6V2XIFE?si=fsaO59NMHKmWHJlG

> *ᴅᴇᴠᴇʟᴏᴘᴇʀ*
Sadeesha Tharumin

*ᴅᴇᴘʟᴏʏ & ᴇɴᴊᴏʏ ʟᴀʀᴀ ᴍᴅ 3ᴠ*
`;

await conn.sendMessage(from, {
            image: { url: `https://i.ibb.co/TD5qh4JJ/20250224-022914.jpg`}, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
            caption: cap,
         contextInfo: {
                mentionedJid: ['94779062397@s.whatsapp.net'], // specify mentioned JID(s) if any
                groupMentions: [],
                forwardingScore: 1,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363192254044294@newsletter',
                    newsletterName: "Lααɾα-ᴍᴅ ✻",
                    serverMessageId: 999
                }          
            }
     }, {quoted: mek});

  } catch (error) {
    console.error(error);
    reply("Error: " + error.message);
  }
});