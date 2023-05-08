const { SlashCommandBuilder } = require('discord.js')

const menus = ['ข้าวมันไก่','ข้าวไข่เจียว','ข้าวกระเพราไก่']

module.exports = {
    data: new SlashCommandBuilder()
        .setName('menu')
        .setDescription("random menu in list"),
    async execute(interaction){
        const menu = menus[Math.floor(Math.random() * menus.length)];
        // const string = interaction.option.getString('input')
        await interaction.reply(menu)
    }
};