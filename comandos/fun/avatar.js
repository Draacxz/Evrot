// Puxa a variável prefix localizada na config jhonson
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
        const target = message.mentions.members.first();

        const embed = new MessageEmbed()
            .setColor('24FF00')
            .setDescription('<:check:829822821337268255> Aqui está o avatar que solicitou.')
            .setImage(message.author.displayAvatarURL() + '?size=1024');

            const avatarList = await message.mentions.users.map(user => {
                return new MessageEmbed()
                .setColor('24FF00')
                .setDescription('<:check:829822821337268255> Aqui está o avatar que solicitou.')
                .setImage(user.displayAvatarURL( {size: 1024} ));
            })

		
		// Verificando se o comando for igual à String dita abaixo.
		if(command === 'avatar') {
            if(target) {
                return message.channel.send(`${message.author}`, avatarList);
            } else {
                return message.channel.send(`${message.author}`, embed);
            }
		}
        
    })
}