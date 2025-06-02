
const config = require('../../settings')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../functions')

cmd({
    pattern: "system",
    alias: ["about","bot"],
    desc: "Check bot online or no.",
    category: "main",
    react: "📟",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

    let status = `
───────────────────
_*⚙️ Lααɾα Ｓｙｓｔｅｍ  Ｉｎｆｏ ⚙️*_
───────────────────

┌────────────────
│❖ *ᴜᴘᴛɪᴍᴇ :* _${runtime(process.uptime())}_
│❖ *ʀᴀᴍ ᴜꜱᴀɢᴇ :*  _${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB_
│❖ *ʜᴏꜱᴛ ɴᴀᴍᴇ :* _${os.hostname()}_
│❖ *ᴏᴡɴᴇʀ :* _Sadeesha Tharumin_
└────────────────

> *ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴇᴇꜱʜᴀ ᴛʜᴀʀᴜᴍɪɴ*    
`
await conn.sendMessage(from,{image: {url: `https://i.ibb.co/TD5qh4JJ/20250224-022914.jpg`},caption: status,
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
    
}catch(e){
    console.log(e)
    reply(`${e}`)
    }
    })


//__________ping______

cmd({
    pattern: "ping",
    desc: "Check bot online or no.",
    category: "main",
    react: "🚀",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    const startTime = Date.now()
        const message = await conn.sendMessage(from, { text: '*pong...*' })
        const endTime = Date.now()
        const ping = endTime - startTime
        await conn.sendMessage(from, { text: `*⚬Lααɾα-ᴍᴅ ꜱᴘᴇᴇᴅ : ${ping}ms*`,
                                      contextInfo: {
                mentionedJid: ['94779062397@s.whatsapp.net'], // specify mentioned JID(s) if any
                groupMentions: [],
                forwardingScore: 1,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363192254044294@newsletter',
                    newsletterName: "Lααɾα-ᴍᴅ ✻",
                    serverMessageId: 999
                },
                externalAdReply: {
                    title: 'LARA MD',
                    body: 'ꜱᴀᴅᴇᴇꜱʜᴀ ᴛʜᴀʀᴜᴍɪɴ',
                    mediaType: 1,
                    sourceUrl: "https://github.com/tharumin",
                    thumbnailUrl: 'https://github.com/manpakaya/Lara_Data_Base/raw/refs/heads/main/20250224_162020.jpg', // This should match the image URL provided above
                    renderLargerThumbnail: false,
                    showAdAttribution: true
                }
            }
     }, {quoted: mek});
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})

//Owner
cmd({
    pattern: "owner",
    desc: "cmd",
    category: "system",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let cap = `
┏━┫ *⚬Lααɾα-ᴍᴅ⚬* ┣━✾
┃
┣━━━━━━━━━━━━━━━
- *Sᴀᴅᴇᴇsʜᴀ* 💗⃤
        94779062397
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
- *Vɪʜᴀɴɢᴀ* 💗⃤
        94718276378
╰━━━━━━━━━━━━━━━
> Lααɾα-ᴍᴅ
`
return await conn.sendMessage(from,{image: {url: `https://i.ibb.co/TD5qh4JJ/20250224-022914.jpg`},caption: cap,
                                    contextInfo: {
                mentionedJid: ['94779062397@s.whatsapp.net'], // specify mentioned JID(s) if any
                groupMentions: [],
                forwardingScore: 1,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363192254044294@newsletter',
                    newsletterName: "Lααɾα-ᴍᴅ ✻",
                    serverMessageId: 999
                },
                externalAdReply: {
                    title: 'LARA MD',
                    body: 'ꜱᴀᴅᴇᴇꜱʜᴀ ᴛʜᴀʀᴜᴍɪɴ',
                    mediaType: 1,
                    sourceUrl: "https://github.com/sadiyamin",
                    thumbnailUrl: 'https://github.com/manpakaya/Lara_Data_Base/raw/refs/heads/main/20250224_162020.jpg', // This should match the image URL provided above
                    renderLargerThumbnail: true,
                    showAdAttribution: true
                }
            }
     }, {quoted: mek});
}catch(e){
console.log(e)
reply(`${e}`)
}
})
//______________restart_____________

cmd({
    pattern: "restart",
    alias: ["update","up"],
    desc: "restart the bot",
    category: "owner",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    if (!isOwner) return reply("*📛 ᴏɴʟʏ ᴛʜᴇ ᴏᴡɴᴇʀ ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ!*");
const {exec} = require("child_process")
reply("*restarting...*")
exec("pm2 restart all")
}catch(e){
console.log(e)
reply(`${e}`)
}
})

//________Settings_________

cmd({
    pattern: "settings",
    alias: ["setting","st"],
    desc: "restart the bot",
    category: "owner",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

    if (!isOwner) return reply("*📛 ᴏɴʟʏ ᴛʜᴇ ᴏᴡɴᴇʀ ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ!*");
let cap = `
┏━┫ *⚬Lααɾα-ᴍᴅ-ꜱᴇᴛᴛɪɴɢꜱ⚬* ┣━✾
┃            *ᴸ  ͣ  ͣ  ͬ  ͣ  ✻  ᴸ  ͣ  ͣ  ͬ  ͣ*
┻
*ᴘʀᴇꜰɪx ➭* _${config.PREFIX}_
*ᴍᴏᴅᴇ ➭* _${config.MODE}_
*ᴠᴏɪᴄᴇ_ʀᴇᴘʟʏ ➭* _${config.AUTO_VOICE}_
*ᴀᴜᴛᴏ_ꜱᴛɪᴄᴋᴇʀ ➭* _${config.AUTO_STICKER}_
*ᴀᴜᴛᴏ_ʀᴇᴀᴅ_ꜱᴛᴀᴛᴜꜱ ➭* _${config.AUTO_READ_STATUS}_
*ᴀᴜᴛᴏ_ꜱᴛᴀᴛᴜꜱ_ʀᴇᴀᴄᴛ ➭* _${config.AUTO_STATUS_REACT}_
*ᴀᴜᴛᴏ_ꜱᴛᴀᴛᴜꜱ_ʀᴇᴘʟʏ ➭* _${config.AUTO_STATUS_REPLY}_
*ꜱᴛᴀᴛᴜꜱ_ʀᴇᴘʟʏ_ᴍꜱɢ ➭ ${config.STATUS_REPLY_MSG}
*ᴀᴜᴛᴏ_ʀᴇᴀᴄᴛ ➭* _${config.AUTO_REACT}_
*ᴀᴜᴛᴏ_ʀᴇᴀᴅ_ᴍꜱɢ ➭* _${config.READ_MESSAGE}_
*ꜰᴀᴋᴇ_ʀᴇᴄᴏʀᴅɪɴɢ ➭* _${config.FAKE_RECORDING}_
*ᴀᴜᴛᴏ_ᴛʏᴘɪɴɢ ➭* _${config.AUTO_TYPING}_
*ᴀɴᴛɪ_ʙᴀᴅ_ᴡᴏʀᴅ ➭* _${config.ANTI_BAD}_
*ᴀɴᴛɪ_ʟɪɴᴋ ➭* _${config.ANTI_LINK}_
*ᴀɴᴛɪ_ᴅᴇʟᴇᴛᴇ ➭* _${config.ANTI_DELETE}_
*ᴀɴᴛɪ_ᴄᴀʟʟ ➭* _${config.ANTI_CALL}_
*ɪɴʙᴏx_ʙʟᴏᴄᴋ ➭* _${config.INBOX_BLOCK}_
*ᴀʟᴡᴀʏꜱ_ᴏɴʟɪɴᴇ ➭* _${config.ALWAYS_ONLINE}_

type *${config.PREFIX}set* command\nsee how to change your settings

> Lααɾα-ᴍᴅ ✻
`

await conn.sendMessage(from,{image: {url: `https://i.ibb.co/TD5qh4JJ/20250224-022914.jpg`},caption: cap,
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
     
}catch(e){
console.log(e)
reply(`${e}`)
}
})

//SET
cmd({
    pattern: "set",
    alias: ["var","allvar"],
    desc: "restart the bot",
    category: "owner",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

    if (!isOwner) return reply("*📛 ᴏɴʟʏ ᴛʜᴇ ᴏᴡɴᴇʀ ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ!*");
let cap = `
┏━┫ *⚬Lααɾα-ᴍᴅ-ꜱᴇᴛᴛɪɴɢꜱ⚬* ┣━✾
┃            *ᴸ  ͣ  ͣ  ͬ  ͣ  ✻  ᴸ  ͣ  ͣ  ͬ  ͣ*
┻
╭━━━━━━━━━━━━━━━
*ᴘʀᴇꜰɪx ➭* _${config.PREFIX}_
* _${config.PREFIX}prefix \ ? ,_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
*ᴍᴏᴅᴇ ➭* _${config.MODE}_
* _${config.PREFIX}mode public_
* _${config.PREFIX}mode private_
* _${config.PREFIX}mode group_
* _${config.PREFIX}mode inbox_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
*ᴠᴏɪᴄᴇ_ʀᴇᴘʟʏ ➭* _${config.AUTO_VOICE}_
* _${config.PREFIX}
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
*ᴀᴜᴛᴏ_ʀᴇᴘʟʏ ➭* _${config.AUTO_REPLY}_
* _${config.PREFIX}autoreply on/off_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
*ᴀᴜᴛᴏ_ꜱᴛɪᴄᴋᴇʀ ➭* _${config.AUTO_STICKER}_
* _${config.PREFIX}autosticker on/off_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
*ᴀᴜᴛᴏ_ʀᴇᴀᴅ_ꜱᴛᴀᴛᴜꜱ ➭* _${config.AUTO_READ_STATUS}_
* _${config.PREFIX}autoreadstatus on/off_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
*ᴀᴜᴛᴏ_ꜱᴛᴀᴛᴜꜱ_ʀᴇᴀᴄᴛ ➭* _${config.AUTO_STATUS_REACT}_
* _${config.PREFIX}statusreact on/off_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
*ᴀᴜᴛᴏ_ꜱᴛᴀᴛᴜꜱ_ʀᴇᴘʟʏ ➭* _${config.AUTO_STATUS_REPLY}_
* _${config.PREFIX}statusreply on/off_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
*ꜱᴛᴀᴛᴜꜱ_ʀᴇᴘʟʏ_ᴍꜱɢ ➭ _random_
* _can't change this_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
*ᴀᴜᴛᴏ_ʀᴇᴀᴄᴛ ➭* _${config.AUTO_REACT}_
* _${config.PREFIX}autoreact on/off_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
*ᴀᴜᴛᴏ_ʀᴇᴀᴅ_ᴍꜱɢ ➭* _${config.READ_MESSAGE}_
* _${config.PREFIX}readmessage on/off_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
*ꜰᴀᴋᴇ_ʀᴇᴄᴏʀᴅɪɴɢ ➭* _${config.FAKE_RECORDING}_
* _${config.PREFIX}fakerecrding on/off_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
*ᴀᴜᴛᴏ_ᴛʏᴘɪɴɢ ➭* _${config.AUTO_TYPING}_
* _${config.PREFIX}autotyping on/off_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
*ᴀɴᴛɪ_ʙᴀᴅ_ᴡᴏʀᴅ ➭* _${config.ANTI_BAD}_
* _${config.PREFIX}antibad on/off_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
*ᴀɴᴛɪ_ʙᴏᴛ ➭* _default_
* _${config.PREFIX}antibot off_
* _${config.PREFIX}antibot warn_
* _${config.PREFIX}antibot delete_
* _${config.PREFIX}antibot kick_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
*ᴀɴᴛɪ_ʟɪɴᴋ ➭* _${config.ANTI_LINK}_
* _${config.PREFIX}antilink on/off_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
*ᴀɴᴛɪ_ʟɪɴᴋ 1 ➭* _default_
* _${config.PREFIX}antilink1 off_
* _${config.PREFIX}antilink1 warn_
* _${config.PREFIX}antilink1 delete_
* _${config.PREFIX}antilink1 kick_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
*ᴀɴᴛɪ_ᴅᴇʟᴇᴛᴇ ➭* _${config.ANTI_DELETE}_
* _${config.PREFIX}antidel on/off_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
*ᴀɴᴛɪ_ᴄᴀʟʟ ➭* _${config.ANTI_CALL}_
* _${config.PREFIX}anticall on/off
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
*ɪɴʙᴏx_ʙʟᴏᴄᴋ ➭* _${config.INBOX_BLOCK}_
* _${config.PREFIX}inboxblock on/off_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
*ᴀʟᴡᴀʏꜱ_ᴏɴʟɪɴᴇ ➭* _${config.ALWAYS_ONLINE}_
* _${config.PREFIX}alwaysonline on/off_
╰━━━━━━━━━━━━━━━

> Lααɾα-ᴍᴅ ✻
`

await conn.sendMessage(from,{image: {url: `https://i.ibb.co/TD5qh4JJ/20250224-022914.jpg`},caption: cap,
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
     
}catch(e){
console.log(e)
reply(`${e}`)
}
})