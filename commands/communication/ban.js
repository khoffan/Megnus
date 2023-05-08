const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ban')
        .setDescription('Replies with your input!')
        .addUserOption(option => 
            option 
                .setName('target')
                .setDescription('The member to ban')
                .setRequired(true))
        .addStringOption(option => 
            option
                .setName('reason')
                .setDescription('Reason for ban member'))
        .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)
        .setDMPermission(false),
    async execute(interaction) {
        const target = interaction.options.getUser('target');
        const reason = interaction.options.getString('reason') ?? 'no reason';

        await interaction.reply(`Banning ${target.username} for reason ${reason}`);
        await interaction.guild.member.ban(target)
    }
};