const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('gpt')
		.setDescription('Replies answer of user'),
	async execute(interaction) {
		await interaction.reply('Pong!');
	},
};