const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('hello')
        .setDescription('Replies with your input!')
        .addSubcommand(subcommand =>
            subcommand
                .setName('user')
                .setDescription('Info user')
                .addUserOption(option =>
                    option
                        .setName('target')
                        .setDescription('The input to echo back')))
        .addSubcommand(subcommand => 
            subcommand 
                .setName('server')
                .setDescription('Info server')),

    async execute(interaction) {
        if(interaction.options.getSubcommand() === 'user'){
            const user = interaction.options.getUser('target');

            if(user){
                await interaction.reply(`username: ${user.username}\n ID: ${user.id}`);
            }
            else{
                await interaction.reply(`Your username ${interaction.user.username}\n Your ID: ${interaction.user.id}`)
            }
        }
        else if(interaction.options.getSubcommand() === 'server'){
            await interaction.reply(`Server name ${interaction.guild.name}\n Total member ${interaction.guild.memberCount}`)
        }
    }
};