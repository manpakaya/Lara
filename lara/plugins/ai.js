const { cmd, commands } = require('../command');
const { fetchJson } = require("../functions");
const axios = require('axios');

cmd({
  'pattern': 'ai',
  'alias': ["bot", "lara"],
  'react': '🪄',
  'desc': "AI chat.",
  'category': 'main',
  'filename': __filename
},
async (conn, mek, m, { from, args, q, reply, react }) => {
  try {
    if (!q) {
      return reply("Please ask a question or provide input for the AI.");
    }

    // Fetch AI response from API
    const aiResponse = await fetchJson("https://pikabotzapi.vercel.app/ai/mistral/?apikey=anya-md&message=" + q);
    
    console.log(aiResponse);

    if (!aiResponse.message) {
      return reply("No response from the AI.");
    }

    return reply("*Lααɾα-ᴍᴅ ✻* " + aiResponse.message);
  } catch (error) {
    console.error(error);
    reply("An error occurred: " + error.message);
  }
});

cmd({
    pattern: "openai",
    alias: ["chatgpt", "gpt3", "gpt","gpt5"],
    desc: "Chat with OpenAI",
    category: "ai",
    react: "🧠",
    filename: __filename
},
async (conn, mek, m, { from, args, q, reply, react }) => {
    try {
        if (!q) return reply("Please provide a message for OpenAI.\nExample: `.openai Hello`");

        const apiUrl = `https://vapis.my.id/api/openai?q=${encodeURIComponent(q)}`;
        const { data } = await axios.get(apiUrl);

        if (!data || !data.result) {
            await react("❌");
            return reply("OpenAI failed to respond. Please try again later.");
        }

        await reply(`🧠 *Lααɾα-ᴍᴅ ✻*\n_OpenAI Response:_\n\n${data.result}`);
        await react("✅");
    } catch (e) {
        console.error("Error in OpenAI command:", e);
        await react("❌");
        reply("An error occurred while communicating with OpenAI.");
    }
});

cmd({
  pattern: "deepseek",
  alias: ["deep", "seekai"],
  desc: "Chat with DeepSeek AI",
  category: "ai",
  react: "👾",
  filename: __filename
},
async (conn, mek, m, { from, args, q, reply, react }) => {
  try {
      if (!q) return reply("Please provide a message for DeepSeek AI.\nExample: `.deepseek Hello`");

      const apiUrl = `https://api.ryzendesu.vip/api/ai/deepseek?text=${encodeURIComponent(q)}`;
      const { data } = await axios.get(apiUrl);

      if (!data || !data.answer) {
          await react("❌");
          return reply("DeepSeek AI failed to respond. Please try again later.");
      }

      await reply(`👾 *Lααɾα-ᴍᴅ ✻*\n_DeepSeek AI Response:_\n\n${data.answer}`);
      await react("✅");
  } catch (e) {
      console.error("Error in DeepSeek AI command:", e);
      await react("❌");
      reply("An error occurred while communicating with DeepSeek AI.");
  }
});