// Discord Bot Example
const { Agent } = require('@agentx/toolkit');
const Discord = require('discord.js');

const agent = new Agent({ apiKey: process.env.AGENTX_API_KEY });
const client = new Discord.Client();

client.on('message', async (msg) => {
  if (msg.author.bot) return;
  const response = await agent.process(msg.content);
  msg.reply(response);
});

client.login(process.env.DISCORD_TOKEN);