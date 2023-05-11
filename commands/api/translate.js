const { SlashCommandBuilder } = require('discord.js');

const { tranapi_code } = require('../../components/translates/translate_code')
const { tranapi } = require('../../components/translates/translate_msg')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('translate')
		.setDescription('Translate message')
        .addStringOption(option => 
            option
                .setName('message')
                .setDescription('Input your message'))
        .addStringOption(option => 
            option
                .setName('lang')
                .setDescription('Input ypur lang to translate')),
	async execute(interaction) {
		const msg = interaction.options.getString('message');
        const lang = interaction.options.getString('lang');
        const call = async (result) => {
            await interaction.reply(result)
        }
        await tranapi_code(lang, async (codel) => {
            await tranapi(msg,codel,call)
        })
	},
};