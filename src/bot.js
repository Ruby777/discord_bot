require("dotenv").config();

console.log(process.env.DISCORD_BOT_TOKEN);

const { Client } = require('discord.js');

const client = new Client();

client.login(process.env.DISCORDJS_BOT_TOKEN);