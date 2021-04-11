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
        
        const embed = new MessageEmbed()
    	.setColor('#FF0000')
		.setTitle('☕  -  Informações do Bot.')
    	.setDescription(
        '**Nome do Bot:** `' + client.user.tag + '` \n\n' +
        '**Informações:** \n' +
        '<:check:829822821337268255> `Servidores:` ' + client.guilds.cache.size + ' servidores.\n' +
		'<:check:829822821337268255> `Autor:` Draacxz#1953. \n\n' +
		'Em casos de dúvidas / problemas com o bot, me contate pelo discord.'
        )
		.setThumbnail('https://i.pinimg.com/564x/ae/fd/0e/aefd0e23d66c61a148f102cd07240577.jpg')
		// Verificando se o comando for igual à String dita abaixo.
		if(command === 'botinfo' || command === 'autor') {
			return message.channel.send(embed);
		}
        
    })
}