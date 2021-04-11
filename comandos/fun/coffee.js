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
		
        const processo = new MessageEmbed()
            .setColor('#FFF300')
            .setDescription('Aguarde enquanto seu café está sendo preparado.')

        const sucess = new MessageEmbed()
            .setColor('#523A33')
            .setFooter('"Nunca fomos tão grandes"')
            .setTimestamp()
            .setDescription('☕ Pronto! O seu café está quentinho.');

		// Verificando se o comando for igual à String dita abaixo.
		if(command === 'coffee' || command === 'cafe') {
			message.channel.send(processo)
            .then(msg => {
                setTimeout(function() {
                    msg.edit(`${message.author}`, sucess);
                }, 3000);
            })
		}
        
    })
}