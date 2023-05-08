const { SlashCommandBuilder } = require('discord.js')



module.exports = {
    data: new SlashCommandBuilder()
        .setName('hello')
        .setDescription(" Say hello"),
    async execute(interaction){
        const user = interaction.user
        const username = user.username
        const id = user.id
        await interaction.reply(`Hello ${username} your user id: ${id}`)
    }
};