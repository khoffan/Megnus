const { SlashCommandBuilder } = require('discord.js');

const { tranapi_code } = require('../../components/translates/translate_code')
const { tranapi } = require('../../components/translates/translate_msg')
const { aiChatgpt } = require('../../components/genarategpt');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('mugnus')
        .setDescription('Translate message')
        .addSubcommand(subcommand =>
            subcommand
                .setName('translate')
                .setDescription('Translate message')
                .addStringOption(option =>
                    option
                        .setName('message')
                        .setDescription('Input your message'))
                .addStringOption(option =>
                    option
                        .setName('lang')
                        .setDescription('Input ypur lang to translate')))
        .addSubcommand(subcommand =>
            subcommand
                .setName('gpt')
                .setDescription('Replies answer of user')
                .addStringOption(option =>
                    option
                        .setName('search')
                        .setDescription('Search for your answer'))),
    async execute(interaction) {
        if (interaction.options.getSubcommand() === 'translate') {
            const msg = interaction.options.getString('message');
            const lang = interaction.options.getString('lang');
            const call = async (result) => {
                await interaction.reply(result)
            }
            await tranapi_code(lang, async (codel) => {
                await tranapi(msg, codel, call)
            })
        }
        if (interaction.options.getSubcommand() === 'gpt') {
            const msg = interaction.options.getString('search');
            const call = async (result) => {
                return await interaction.reply(result);
            }
            await aiChatgpt(msg, call);
        }
    },
};