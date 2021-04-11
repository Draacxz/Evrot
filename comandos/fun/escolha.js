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
		

        const guia = new MessageEmbed()
        .setColor('#FF0000')
        .setDescription(
            '<:cross:829822810884538378> Poucos argumentos foram atribuídos para a execução do comando. \n\n' +
            '**Como usar:** `/escolha <escolha1 | escolha2>` \n\n' +
            '**Problemas:** \n' +
            '<:cross:829822810884538378> `Escolha1 / Escolha2` ambas não foram informadas. \n\n' +
            '**Sinônimos:** \n' +
            '<:warn:829823546733101057> `/escolhas | /choice` \n\n' +
            '**Argumentos:** \n' +
            '<:cross:829822810884538378> `Escolha1:` Uma possível alternativa de escolha para o bot. \n' +
            '<:warn:829823546733101057> `Escolha2:` Uma possível alternativa de escolha para o bot. \n\n' +
            '**Informações:** \n' +
            '<:check:829822821337268255> - Atribuído. \n' +
            '<:warn:829823546733101057> - Não atribuído / Não obrigatório. \n' +
            '<:cross:829822810884538378> - Não atribuído / Obrigatório. \n' +
            '`<Argumento>` - Obrigatório. \n' +
            '`[Argumento]` - Opcional.' 
        );
        

        const guiaEscolha2 = new MessageEmbed()
        .setColor('#FF0000')
        .setDescription(
        '<:cross:829822810884538378> Poucos argumentos foram atribuídos para a execução do comando. \n\n' +
        '**Como usar:** `/escolha <escolha1 | escolha2>` \n\n' +
        '**Problemas:** \n' +
        '<:cross:829822810884538378> `Escolha2` não foi informada. \n\n' +
        '**Sinônimos:** \n' +
        '<:warn:829823546733101057> `/escolhas | /choice` \n\n' +
        '**Argumentos:** \n' +
        '<:cross:829822810884538378> `Escolha1:` Uma possível alternativa de escolha para o bot. \n' +
        '<:warn:829823546733101057> `Escolha2:` Uma possível alternativa de escolha para o bot. \n\n' +
        '**Informações:** \n' +
        '<:check:829822821337268255> - Atribuído. \n' +
        '<:warn:829823546733101057> - Não atribuído / Não obrigatório. \n' +
        '<:cross:829822810884538378> - Não atribuído / Obrigatório. \n' +
        '`<Argumento>` - Obrigatório. \n' +
        '`[Argumento]` - Opcional.' 
        )

        const escolha1 = args.join(' ').split(' | ')[0]
        const escolha2 = args.join(' ').split(' | ')[1]
            
        var escolhas = [
            '🤔 Acho que você deveria ir de `' + escolha1 + '`.',
            '🤔 Acho que você deveria ir de `' + escolha2 + '`.'
        ]

        var resultado = escolhas[Math.floor(Math.random() * escolhas.length)]


        const sucess = new MessageEmbed()
            .setColor('#30FF00')
            .setDescription(resultado);

		// Verificando se o comando for igual à String dita abaixo.
		if(command === 'escolha' || command === 'choice' || command === 'escolhas') {
			if(!escolha1) {
                return message.channel.send(guia);
            }
            if(!message.content.includes('|')) {
                return message.channel.send(guiaEscolha2);
            }
            return message.channel.send(`${message.author}`, sucess);
		}
        
    })
}