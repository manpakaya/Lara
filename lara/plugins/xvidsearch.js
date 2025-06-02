const { cmd } = require('../command');
const { fetchJson } = require('../functions');

cmd({
    pattern: "xvidsearch",
    react: '🔎',
    filename: __filename
}, async (conn, m, mek, { from, q, reply }) => {
    try {
if (!q) return reply('*Please give me words to search*');    
const searchVid =`https://apis-keith.vercel.app/search/searchxvideos?q=${q}`;
let response = await fetchJson(searchVid);
const selectVid = response.data.result;

let resultsMessage = ``
selectVid.forEach((result, index) => {
            resultsMessage += `*${index + 1}.* ${data.result.title}\n🔗 Link: ${data.result.url}\n\n`;
        });
await conn.sendMessage(from , { text:  resultsMessage,
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
    
 } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});