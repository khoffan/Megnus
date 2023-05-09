const { SlashCommandBuilder } = require('discord.js');

const { aiChatgpt } = require('../../components/Genarategpt');
// const axios = require('axios');
// const zlib = require('zlib');
// const msg = 'hello'
// const call = (result) => {
//   return console.log(result)
// }
// aiChatgpt(msg, call)


module.exports = {
  data: new SlashCommandBuilder()
    .setName('gpt')
    .setDescription('Replies answer of user')
    .addStringOption(option =>
      option
        .setName('search')
        .setDescription('Search for your answer')),
  async execute(interaction) {
    const msg = interaction.option.getString('search');
    const call = async (result) => {
      return await interaction.reply(result); 
    }
    aiChatgpt(msg, call)
  },
};