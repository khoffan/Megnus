// const { SlashCommandBuilder } = require('discord.js');

// // const axios = require('axios');
// // const zlib = require('zlib');
// // const msg = 'hello'
// // const call = (result) => {
// //   return result
// // }
// // const text = aiChatgpt(msg, call)
// // console.log(text)


// module.exports = {
//   data: new SlashCommandBuilder()
//     .setName('gpt')
//     .setDescription('Replies answer of user')
//     .addStringOption(option =>
//       option
//         .setName('search')
//         .setDescription('Search for your answer')),
//   async execute(interaction) {
//     const msg = interaction.options.getString('search');
//     const call = async (result) => {
//       return await interaction.reply(result); 
//     }
//     await aiChatgpt(msg, call);
//   },
// };