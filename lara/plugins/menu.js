const { cmd, commands } = require('../command');
const os = require("os");
const {runtime} = require('../functions');

cmd({
    pattern: "menu",
    alias: ["list","help","panel"],
    desc: "commands panel",
    react: "🌸",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
const cap = `
┏━┫ *⚬Lααɾα-ᴍᴅ-ᴍᴇɴᴜ⚬* ┣━✾
┃            *ᴸ  ͣ  ͣ  ͬ  ͣ  ✻  ᴸ  ͣ  ͣ  ͬ  ͣ*
┻╭─────────────✑
◉│ *1*    *ᴅᴏᴡɴʟᴏᴀᴅ ᴄᴍᴅ*
◉│ *2*    *ꜱᴇᴀʀᴄʜ ᴄᴍᴅ*
◉│ *3*    *ᴀɴɪᴍᴇ ᴄᴍᴅ*
◉│ *4*    *ꜰᴜɴ ᴄᴍᴅ*
◉│ *5*    *ᴄᴏɴᴠᴇʀᴛᴇᴅ ᴄᴍᴅ*
◉│ *6*    *ᴀɪ ᴄᴍᴅ*
◉│ *7*    *ɢʀᴏᴜᴘ ᴄᴍᴅ*
◉│ *8*    *ᴏᴡɴᴇʀ ᴄᴍᴅ*
◉│ *9*    *ꜱʏꜱᴛᴇᴍ ᴄᴍᴅ*
◉│ *10*   *ʀᴀɴᴅᴏᴍ ᴄᴍᴅ*
┳╰─────────────✑
⁠⁠⁠⁠┗━┫ *⚬Lααɾα-ᴍᴅ-ᴍᴇɴᴜ⚬* ┣━✾

*ᴍᴇɴᴛɪᴏɴ & ʀᴇᴘʟʏ ᴛᴏ ɴᴜᴍʙᴇʀ ꜱᴇʟᴇᴄᴛ ᴡɪᴛʜ ᴄᴀᴛᴇɢᴏʀʏ*

> Lααɾα-ᴍᴅ ✻
`
let menu1 = `
┏━┫ *⚬Lααɾα-ᴍᴅ-ᴅᴏᴡɴ ᴄᴍᴅ⚬* ┣━✾
┃            *ᴸ  ͣ  ͣ  ͬ  ͣ  ✻  ᴸ  ͣ  ͣ  ͬ  ͣ*
┻
╭━━━━━━━━━━━━━━━
         *.song*
         *.song2*
         *.song3*
         *.song4*
 (_Downloading you tube song_)

- _🌸 Ex :  .song lelena_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.video*
         *.video2*
         *.video3*
 (_Downloading you tube video_)

- _🌸 Ex :  .video lelena_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.fb*
         *.fb2*
 (_Downloading facebook video_)

- _🌸 Ex :  .fb <url>_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.tiktok*
         *.tiktok2*
         *.tiktok3*
 (_Downloading tiktok_)

- _🌸 Ex :  .tiktok <url>_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.apk*
 (_Downloading apk_)

- _🌸 Ex :  .apk whatsapp_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.mfire*
 (_Downloading mediafire_)

- _🌸 Ex :  .mfire <url>_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.gdrive*
         *.gdrive2*

 (_Downloading google drive file_)

- _🌸 Ex :  .gdrive <link>_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.ig*

 (_Downloading instagrm_)

- _🌸 Ex :  .ig <link>_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.twdl*

 (_Downloading twiter_)

- _🌸 Ex :  .twdl <url>_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.mega*

 (_Downloading mega file_)

- _🌸 Ex :  .mega <url>_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.download*
         *.downurl*
 (_Downloading direct url_)

- _🌸 Ex :  .download <url>_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.gitclone*

 (_Downloading github repository_)

- _🌸 Ex :  .gitclone <url>_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.ringtone*

 (_Downloading ringtone_)

- _🌸 Ex :  .ringtone suna_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.pinterest*

 (_Downloading pinterest img_)

- _🌸 Ex :  .pinterest baby_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.movie*

 (_Downloading sinhala sub movie_)

- _🌸 Ex :  .movie spider man_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.baiscope*

 (_Downloading baiscope movie_)

- _🌸 Ex :  .baiscope flash_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.ginisisila*

 (_Downloading ginisisila cartoon_)

- _🌸 Ex :  .ginisisila ben 10_
╰━━━━━━━━━━━━━━━

╭━━━━━━━━━━━━━━━
         *.xvdl*

 (_Downloading xvideos videos_)

- _🌸 Ex :  .xvdl <link>_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.xnxxdl*

 (_Downloading xnxx video_)

- _🌸 Ex :  .xnxxdl <link>_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.xnxx*

 (_Downloading xnxx video_)

- _🌸 Ex :  .xnxxdl sri Lanka_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.pornhub*
         *.phub*

 (_Downloading pornhub video_)

- _🌸 Ex :  .pornhub sri Lanka_
╰━━━━━━━━━━━━━━━

> Lααɾα-ᴍᴅ ✻
`
let menu2 = `
┏━┫ *⚬Lααɾα-ꜱᴇᴀʀᴄʜ ᴄᴍᴅ⚬* ┣━✾
┃            *ᴸ  ͣ  ͣ  ͬ  ͣ  ✻  ᴸ  ͣ  ͣ  ͬ  ͣ*
┻
╭━━━━━━━━━━━━━━━
         *.img*
         *.img2*
         *.img3*

 (_Searching to google image)_

- _🌸 Ex :  .img cars_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.githubstalk*

 (_Searching to github profile_)

- _🌸 Ex :  .githubstalk sadiyamin_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.tiktokstalk*

 (_Searching to tiktok users)_

- _🌸 Ex :  .tiktokstalk sadiyamin_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.tiktoksearch*

 (_Searching to tiktok video)_

- _🌸 Ex :  .tiktoksearch sadiyamin_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.xstalk*

 (_Searching to twitter users)_

- _🌸 Ex :  .xstalk sadiyamin_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.npmstalk*

 (_Searching to npm package)_

- _🌸 Ex :  .npmstalk whiskeysockets/baileys_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.ytstalk*

 (_Searching to youtube users)_

- _🌸 Ex :  .ytstalk Sadeesha Coder_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.country*

 (_Searching to country)_

- _🌸 Ex :  .country SriLanka_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.wether*

 (_Searching to wether)_

- _🌸 Ex :  .wether mathara_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.movieinfo*

 (_Searching to movie details)_

- _🌸 Ex :  .movieinfo spider man_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.nasa*

 (_Searching to nasa news)_

- _🌸 Ex :  .nasa_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.yts*

 (_Searching to you tube links)_

- _🌸 Ex :  .yts lara md whatsapp bot_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.ss*

 _(take url screenshots)_

- _🌸 Ex :  .ss <url>_
╰━━━━━━━━━━━━━━━

> Lααɾα-ᴍᴅ ✻
`
let menu3 = `
┏━┫ *⚬Lααɾα-ᴀɴɪᴍᴇ ᴄᴍᴅ⚬* ┣━✾
┃            *ᴸ  ͣ  ͣ  ͬ  ͣ  ✻  ᴸ  ͣ  ͣ  ͬ  ͣ*
┻
╭━━━━━━━━━━━━━━━
         *.loli*

 (_Random loli image_)

- _🌸 Ex :  .loli_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.waifu*

 (_Random waifu image_)

- _🌸 Ex :  .waifu_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.neko*

 (_Random neko image_)

- _🌸 Ex :  .neko_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.megumin*

 (_Random megumin image_)

- _🌸 Ex :  .megumin_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.maid*

 (_Random maid image_)

- _🌸 Ex :  .maid_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.awoo*

 (_Random awoo image_)

- _🌸 Ex :  .awoo_
╰━━━━━━━━━━━━━━━

> Lααɾα-ᴍᴅ ✻
`
let menu4 = `
┏━┫ *⚬Lααɾα-ꜰᴜɴ ᴄᴍᴅ⚬* ┣━✾
┃            *ᴸ  ͣ  ͣ  ͬ  ͣ  ✻  ᴸ  ͣ  ͣ  ͬ  ͣ*
┻
╭━━━━━━━━━━━━━━━
         *.hack*

 _(Hack Frank)_

- _🌸 Ex :  .hack_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.spam*

 _(Spam Frank)_

- _🌸 Ex :  .spam_
╰━━━━━━━━━━━━━━━

> Lααɾα-ᴍᴅ ✻
`
let menu5 = `
┏━┫ *⚬Lααɾα-ᴄᴏɴᴠᴇʀᴛ ᴄᴍᴅ⚬* ┣━✾
┃            *ᴸ  ͣ  ͣ  ͬ  ͣ  ✻  ᴸ  ͣ  ͣ  ͬ  ͣ*
┻
╭━━━━━━━━━━━━━━━
         *.logo*
         *.logo2*
         *.logo3*

 _(Generated logo)_

- _🌸 Ex :  .logo Sadeesha_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.sticker*
         *.s*
         *.s2*

 _(Photo to convert sticker)_

- _🌸 Ex :  .sticker <reply to photo or short video_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.take*
         *.rename*

 _(Add sticker tocustom pack name)_

- _🌸 Ex :  .take Sadeesha Coder_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.vv*
         *.vv2*

 _(Views one image send)_

- _🌸 Ex :  .vv @mention viewsone_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.toimg*

 _(Sticker convert to photo)_

- _🌸 Ex :  .toimg @mention sticker_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.url*
         *.tourl*

 _(Convert media to Catbox URL)_

- _🌸 Ex :  .url @mention image_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.tempnum*

 _(Get temporary numbers)_

- _🌸 Ex :  .tempnum +94_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.templist*

 _(Get temporary numbers list)_

- _🌸 Ex :  .templist_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.otpbox*

 _(Check OTP messages for number)_

- _🌸 Ex :  .otpbox <tempnumber>_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.tts*

 _(Generated ai voice)_

- _🌸 Ex :  .tts Hello World_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.trt*

 _(Translate to all language)_

- _🌸 Ex :  .trt si how are you_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.fancy*

 _(Convert text into various fonts)_

- _🌸 Ex :  .fancy Sadeesha_
╰━━━━━━━━━━━━━━━

> Lααɾα-ᴍᴅ ✻
`
let menu6 = `
┏━┫ *⚬Lααɾα-ᴀɪ ᴄᴍᴅ⚬* ┣━✾
┃            *ᴸ  ͣ  ͣ  ͬ  ͣ  ✻  ᴸ  ͣ  ͣ  ͬ  ͣ*
┻
╭━━━━━━━━━━━━━━━
         *.ai*

 _(Chat with ai)_

- _🌸 Ex :  .ai how are you_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.deepseek*

 _(Deepseek)_

- _🌸 Ex :  .deepseek what's node.js_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.gpt*

 _(Chat gpt)_

- _🌸 Ex :  .gpt what's node.js_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.openai*

 _(Openai)_

- _🌸 Ex :  .openai what's node.js_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.fluxai*

 _(Fluxai image created ai)_

- _🌸 Ex :  .fluxai creat gtr r35 car_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.stablediffusion*
         *.sdiffusion*

 _(Stablediffusion image created ai)_

- _🌸 Ex :  .stablediffusion car_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.stabilityai*
         *.stability*

 _(stability ai image created)_

- _🌸 Ex :  .stabilityai car_
╰━━━━━━━━━━━━━━━

> Lααɾα-ᴍᴅ ✻
`
let menu7 = `
┏━┫ *⚬Lααɾα-ɢʀᴏᴜᴘ ᴄᴍᴅ⚬* ┣━✾
┃            *ᴸ  ͣ  ͣ  ͬ  ͣ  ✻  ᴸ  ͣ  ͣ  ͬ  ͣ*
┻
╭━━━━━━━━━━━━━━━
         *.mute*

 _(Group close)_

- _🌸 Ex :  .mute_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.unmute*

 _(Group open)_

- _🌸 Ex :  .unmute_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.tagall*

 _(Group tag to all members)_

- _🌸 Ex :  .tagall Hi_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.hidetag*

 _(Group tag to all members)_

- _🌸 Ex :  .hidetag Hi_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.promote*

 _(Group members promoted)_

- _🌸 Ex :  .promote @mention_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.demote*

 _(Group members demoted)_

- _🌸 Ex :  .demote @mention_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.approve*

 _(Group members approved)_

- _🌸 Ex :  .approve_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.requests*

 _(View pending join requests)_

- _🌸 Ex :  .requests
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.accept*

 _(Accept group join request_

- _🌸 Ex :  .accept <request number>_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.reject*

 _(Reject group join request)_

- _🌸 Ex :  .reject <request number>_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.del*

 _(Group message delete)_

- _🌸 Ex :  .del @mention_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.leave*

 _(Leave from Groups)_

- _🌸 Ex :  .leave_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.invite*

 _(Get Group invite link )_

- _🌸 Ex :  .invite_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.add*

 _(Group members add)_

- _🌸 Ex :  .add 9477×××××_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.join*

 _(Join Group in invite link)_

- _🌸 Ex :  .join <invitation link>_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.kick*

 _(Group members remove)_

- _🌸 Ex :  .kick @mention_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.kickall*

 _(Group all members remove)_
*⚠️ Warning*
- _🌸 Ex :  .kickall_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.end*

 _(All Group members remove)_

- _🌸 Ex :  .end_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.tagadmin*

 _(Group Admins tag)_

- _🌸 Ex :  .tagadmin_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.setname*

 _(Set Group name)_

- _🌸 Ex :  .setname <group name>_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.setdesc*

 _(Set Group description)_

- _🌸 Ex :  .setdesc <description>
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.opentime*

 _(Set Group open time)_

- _🌸 Ex :  .opentime 10 second_
           _.opentime 1 minute_
           _.opentime 1 hour_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.closetime*

 _(Set Group close time)_

- _🌸 Ex :  .closetime 10 second_
           _.closetime 1 minute_
           _.closetime 1 hour_
╰━━━━━━━━━━━━━━━

> Lααɾα-ᴍᴅ ✻
`
let menu8 = `
┏━┫ *⚬Lααɾα-ᴏᴡɴᴇʀ ᴄᴍᴅ⚬* ┣━✾
┃            *ᴸ  ͣ  ͣ  ͬ  ͣ  ✻  ᴸ  ͣ  ͣ  ͬ  ͣ*
┻
╭━━━━━━━━━━━━━━━
         *.privacy*

 _(Get the privacy menu)_

- _🌸 Ex :  .privacy_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.block*

 _(Block user)_

- _🌸 Ex :  .block_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.ublock*

 _(Unblock user)_

- _🌸 Ex :  .unblock_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.jid*

 _(Send to chat jid)_

- _🌸 Ex :  .jid_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.gjid*

 _(Send to group jid)_

- _🌸 Ex :  .gjid_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.clearchats*

 _(Delete in all your chats)_

- _🌸 Ex :  .clearchats_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.restart*

 _(Restarting the bot)_

- _🌸 Ex :  .restart_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.update*

 _(Updating the bot)_

- _🌸 Ex :  .update_
╰━━━━━━━━━━━━━━━

> Lααɾα-ᴍᴅ ✻
`
let menu9 = `
┏━┫ *⚬Lααɾα-ꜱʏꜱᴛᴇᴍ ᴄᴍᴅ⚬* ┣━✾
┃            *ᴸ  ͣ  ͣ  ͬ  ͣ  ✻  ᴸ  ͣ  ͣ  ͬ  ͣ*
┻
╭━━━━━━━━━━━━━━━
         *.ping*

 _(Test bot speed)_

- _🌸 Ex :  .ping
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.system*

 _(Check bot status)_

- _🌸 Ex :  .system_
╰━━━━━━━━━━━━━━━

╭━━━━━━━━━━━━━━━
         *.restart*

 _(Restarting alxa bot)_

- _🌸 Ex :  .restart_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.owner*

 _(Alexa developer team)_

- _🌸 Ex :  .owner_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.repo*
         *.src*
 _(Alexa bot github repo)_

- _🌸 Ex :  .repo_
╰━━━━━━━━━━━━━━━

> Lααɾα-ᴍᴅ ✻
`

let menu10 =`
┏━┫ *⚬ʀᴀɴᴅᴏᴍ ᴄᴍᴅ⚬* ┣━✾
┃            *ᴸ  ͣ  ͣ  ͬ  ͣ  ✻  ᴸ  ͣ  ͣ  ͬ  ͣ*
┻
╭━━━━━━━━━━━━━━━
         *.china*

 _(Create random china girl)_

- _🌸 Ex :  .china_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.japan*

 _(Create random japan girl)_

- _🌸 Ex :  .japan_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.indonesia*

 _(Create random indonesia girl)_

- _🌸 Ex :  .indonesia_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.vietnam*

 _(Create random vietnam girl)_

- _🌸 Ex :  .vietnam_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.korea*

 _(Create random korea girl)_

- _🌸 Ex :  .korea_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.malaysia*

 _(Create random malaysia girl)_

- _🌸 Ex :  .malaysia_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.thailand*

 _(Create random thailand girl)_

- _🌸 Ex :  .thailand_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.asupan*

 _(Create random asupan video)_

- _🌸 Ex :  .asupan_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.gore*

 _(Create random gore video)_

- _🌸 Ex :  .gore_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.hentai*

 _(Create random hentai video)_

- _🌸 Ex :  .hentai_
╰━━━━━━━━━━━━━━━

> Lααɾα-ᴍᴅ ✻
`
await conn.sendMessage(from, { 
                        audio: { url: `https://github.com/manpakaya/Lara_Data_Base/raw/refs/heads/main/Lara_V3.5.mp3` }, 
                        mimetype: "audio/mpeg" ,
                        ptt: "true" ,
                        contextInfo: {
                            externalAdReply: {
                                title: "Lara-MD",
                                body: "ꜱᴀᴅᴇᴇꜱʜᴀ ᴛʜᴀʀᴜᴍɪɴ",
                                mediaType: 1,
                                sourceUrl: "https://github.com/tharumin",
                                thumbnailUrl: "https://github.com/manpakaya/Lara_Data_Base/raw/refs/heads/main/20250224_162020.jpg", // This should match the image URL provided above
                                renderLargerThumbnail: true,
                                showAdAttribution: true
                            }
                        }
                    
                    }, { quoted: mek });
     const sentMsg = await conn.sendMessage(from, {
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
      
      const messageID = sentMsg.key.id; // Save the message ID for later reference


        // Listen for the user's response
        conn.ev.on('messages.upsert', async (messageUpdate) => {
            const mek = messageUpdate.messages[0];
            if (!mek.message) return;
            const messageType = mek.message.conversation || mek.message.extendedTextMessage?.text;
            const from = mek.key.remoteJid;
            const sender = mek.key.participant || mek.key.remoteJid;

            // Check if the message is a reply to the previously sent message
            const isReplyToSentMsg = mek.message.extendedTextMessage && mek.message.extendedTextMessage.contextInfo.stanzaId === messageID;
            if (isReplyToSentMsg) {
                if (messageType === '1') {
                    // Handle option 1 (Audio File)
                    await conn.sendMessage(from, {
            image: { url: `https://i.ibb.co/TD5qh4JJ/20250224-022914.jpg`}, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
            caption: menu1,
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
                } else if (messageType === '2') {
                    // Handle option 2 (Document File)
                    await conn.sendMessage(from, {
            image: { url: `https://i.ibb.co/TD5qh4JJ/20250224-022914.jpg`}, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
            caption: menu2,
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
                  } else if (messageType === '3') {
                    // Handle option 2 (Document File)
                    await conn.sendMessage(from, {
            image: { url: `https://i.ibb.co/TD5qh4JJ/20250224-022914.jpg`}, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
            caption: menu3,
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
                  } else if (messageType === '4') {
                    // Handle option 2 (Document File)
                    await conn.sendMessage(from, {
            image: { url: `https://i.ibb.co/TD5qh4JJ/20250224-022914.jpg`}, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
            caption: menu4,
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
                  } else if (messageType === '5') {
                    // Handle option 2 (Document File)
                    await conn.sendMessage(from, {
            image: { url: `https://i.ibb.co/TD5qh4JJ/20250224-022914.jpg`}, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
            caption: menu5,
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
                  } else if (messageType === '6') {
                    // Handle option 2 (Document File)
                    await conn.sendMessage(from, {
            image: { url: `https://i.ibb.co/TD5qh4JJ/20250224-022914.jpg`}, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
            caption: menu6,
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
                  } else if (messageType === '7') {
                    // Handle option 2 (Document File)
                    await conn.sendMessage(from, {
            image: { url: `https://i.ibb.co/TD5qh4JJ/20250224-022914.jpg`}, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
            caption: menu7,
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
                  } else if (messageType === '8') {
                    // Handle option 2 (Document File)
                    await conn.sendMessage(from, {
            image: { url: `https://i.ibb.co/TD5qh4JJ/20250224-022914.jpg`}, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
            caption: menu8,
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
                  } else if (messageType === '9') {
                    // Handle option 2 (Document File)
                    await conn.sendMessage(from, {
            image: { url: `https://i.ibb.co/TD5qh4JJ/20250224-022914.jpg`}, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
            caption: menu9,
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
                    
                } else if (messageType === '10') {
                    // Handle option 2 (Document File)
                    await conn.sendMessage(from, {
            image: { url: `https://i.ibb.co/TD5qh4JJ/20250224-022914.jpg`}, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
            caption: menu10,
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
                
            }
            }
            });

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});  