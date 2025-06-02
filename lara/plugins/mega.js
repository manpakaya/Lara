const { cmd, commands } = require('../command');
const { File } = require("megajs");

cmd({
    pattern: "mega",
    desc: "commands panel",
    react: "🎀",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
    // Validate the provided URL
    if (!q || !isUrl(q) || !q.includes("mega.nz")) {
      return reply("Please provide a valid Mega.nz file URL.");
    }

    // Extract file URL and decryption key
    const [fileUrl, decryptionKey] = q.split('#');
    if (!decryptionKey) {
      return reply("Error: Decryption key is missing in the provided URL.");
    }

    // Start file download
    const megaFile = File.fromURL(fileUrl + '#' + decryptionKey);
    megaFile.on("progress", (downloaded, total) => {
      const progressPercentage = ((downloaded / total) * 100).toFixed(2);
      reply(`Downloading: ${progressPercentage}% (${(downloaded / 1024 / 1024).toFixed(2)} MB of ${(total / 1024 / 1024).toFixed(2)} MB)`);
    });

    // Download file and send it
    const fileBuffer = await megaFile.downloadBuffer();

    await conn.sendMessage(from, {
      document: { url: fileBuffer},
      mimetype: application/octet-stream,
      fileName: mega_downloaded_file, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
      caption: info,
      contextInfo: {
          externalAdReply: {
              title: "LARA-MD",
              body: "ꜱᴀᴅᴇᴇꜱʜᴀ ᴛʜᴀʀᴜᴍɪɴ",
              mediaType: 1,
              sourceUrl: "https://www.github.com",
              thumbnailUrl: "https://i.ibb.co/TD5qh4JJ/20250224-022914.jpg", // This should match the image URL provided above
              renderLargerThumbnail: false,
              showAdAttribution: true
          }
      }
                          
    }, { quoted: mek });
  } catch (error) {
    console.error(error);
    reply("Error: " + error.message);
  }
});