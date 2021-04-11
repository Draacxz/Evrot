// Puxa a variável prefix localizada na config jhonson
const { MessageEmbed } = require('discord.js');
const {prefix} = require('../../config.json');

// Uma forma de exportar o arquivo no index.js = comando(client).
module.exports = (client) => {
	
	// Evento de mensagem.
    client.on('message', message => {
		
		// Verificando se a mensagem não começou com prefix e se o autor da mensagem é um bot.
        if(!message.content.startsWith(prefix) || message.author.bot) return;
	
		// Variável projetada para adquirir os argumentos de cada comando.
        const args = message.content.slice(prefix.length).trim().split(/ +/);
		// Variável projetada para adquirir o argumento "comando" = "/argumento".
        const command = args.shift().toLowerCase();

        var ArrayList = [
            '<:coin:830801763983949834> A moeda terminou de girar e o resultado foi **Cara**.',
            '<:coin:830801763983949834> A moeda terminou de girar e o resultado foi **Coroa**.'
        ];

        var resultado = ArrayList[Math.floor(Math.random() * ArrayList.length)];

        const processo = new MessageEmbed()
            .setColor('#FFF300')
            .setDescription('<:coin:830801763983949834> Girando a moeda...')

        const sucess = new MessageEmbed()
            .setColor('#0DFF00')
            .setDescription(resultado);
		
		// Verificando se o comando for igual à String dita abaixo.
		if(command === 'flipcoin') {

            message.channel.send(processo)
            .then(msg => {
                setTimeout(function() {
                    msg.edit(`${message.author}`, sucess);
                }, 3000);
            })
			
		}
        
    })
}