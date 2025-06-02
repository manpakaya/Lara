const { cmd } = require('../command');
const axios = require('axios');

cmd({
  pattern: "ss",
  alias: ["ssweb"],
  react: "🔰",
  desc: "WEBSITE SCREENSHOT",
  category: "other",
  use: ".ss (url)",
  filename: __filename,
}, 
async (conn, mek, m, {
  from, q, reply
}) => {
  if (!q) return reply("PLEASE GIVE A URL.");

  const isValidUrl = /^https?:\/\/[^\s$.?#].[^\s]*$/gm.test(q);
  if (!isValidUrl) return reply("PLEASE ENTER A VALID URL (include http/https).");

  try {
    const encodedUrl = encodeURIComponent(q);
    const apiKey = "king"; // Replace with your actual API key if needed

    const urlss = (`https://apis-nothing.xyz/api/tools/ssweb?url=${encodedUrl}&apikey=ben-bot`);

    await conn.sendMessage(from, {
      image: { url: urlss },
      caption: "*SSWEB DOWNLOADER*\n\n> *Lααɾα-ᴍᴅ*",
      contextInfo: {
        mentionedJid: [m.sender],
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: '120363192254044294@newsletter',
          newsletterName: "Lααɾα-ᴍᴅ",
          serverMessageId: 143,
        },
      },
    }, { quoted: m });

  } catch (err) {
    console.error("Screenshot Error:", err.message);
    reply("ERROR FETCHING SCREENSHOT. PLEASE TRY AGAIN LATER.");
  }
});
