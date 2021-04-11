// Puxa a variável prefix localizada na config jhonson
const axios = require('axios');
const { MessageEmbed } = require('discord.js');
const {prefix} = require('../../config.json');

// Uma forma de exportar o arquivo no index.js = comando(client).
module.exports = (client) => {
	
	// Evento de mensagem.
    client.on('message', async message => {
		
		// Verificando se a mensagem não começou com prefix e se o autor da mensagem é um bot.
        if(!message.content.startsWith(prefix) || message.author.bot) return;
	
		// Variável projetada para adquirir os argumentos de cada comando.
        const args = message.content.slice(prefix.length).trim().split(/ +/);
		// Variável projetada para adquirir o argumento "comando" = "/argumento".
        const command = args.shift().toLowerCase();
		
		// Verificando se o comando for igual à String dita abaixo.
		if(command === 'corona' || command === 'covid' || command === 'covid-19') {
			const basedUrl = "https://corona.lmao.ninja/v2";
            let url, response, corona;

            try {
                url = args[0] ? `${basedUrl}/countries/${args[0]}`:`${basedUrl}/all`
                response = await axios.get(url)
                corona = response.data
            } catch (error) {
                return message.channel.send(`***${args[0]}*** não encontrado.`)
            }
            
            const embed = new MessageEmbed()
                .setTitle('<:covid:830893468590276619>  -  COVID-19')
                .setColor('#FF0000')
                .setFooter('Eu sinto muito por toda a dor que as familias de cada um dos mortos devem estar passando agora.')
                .setThumbnail(args[0] ? corona.countryInfo.flag : 'https://i.giphy.com/YPbrUhP9Ryhgi2psz3.gif')
                .addFields(
                    {
                        name: 'Total de Casos',
                        value: corona.cases.toLocaleString(),
                        inline: true
                    },
                    {
                        name: 'Total de Mortos',
                        value: corona.deaths.toLocaleString(),
                        inline: true
                    },
                    {
                        name: 'Total de Recuperados',
                        value: corona.recovered.toLocaleString(),
                        inline: true
                    },
                    {
                        name: 'Casos Ativos',
                        value: corona.active.toLocaleString(),
                        inline: true
                    },
                    {
                        name: 'Casos Críticos',
                        value: corona.critical.toLocaleString(),
                        inline: true
                    },
                    {
                        name: 'Total de Recuperados (Hoje)',
                        value: corona.todayRecovered.toLocaleString().replace("-", ""),
                        inline: true
                    },
                    {
                        name: 'Total de Mortes (Hoje)',
                        value: corona.todayDeaths.toLocaleString(),
                        inline: true
                    }

                )
                await message.channel.send(embed);
		}
        
    })
}