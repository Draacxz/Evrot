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
        '**Como usar:** `/perguntar <question>` \n\n' +
        '**Problemas:** \n' +
        '<:cross:829822810884538378> `Question` ainda não foi informada. \n\n' +
        '**Argumentos:** \n' +
        '<:cross:829822810884538378> `Question:` A pergunta que o bot irá responder de forma aleatória.\n\n' +
        '**Informações:** \n' +
        '<:check:829822821337268255> - Atribuído. \n' +
        '<:warn:829823546733101057> - Não atribuído / Não obrigatório. \n' +
        '<:cross:829822810884538378> - Não atribuído / Obrigatório. \n' +
        '`<Argumento>` - Obrigatório. \n' +
        '`[Argumento]` - Opcional.' 
        )

        const guiaError = new MessageEmbed()
        .setColor('#FF0000')
        .setDescription(
        '<:cross:829822810884538378> Poucos argumentos foram atribuídos para a execução do comando. \n\n' +
        '**Como usar:** `/perguntar <question>` \n\n' +
        '**Problemas:** \n' +
        '<:cross:829822810884538378> `Question` não é uma pergunta válida. \n\n' +
        '**Argumentos:** \n' +
        '<:cross:829822810884538378> `Question:` A pergunta que o bot irá responder de forma aleatória.\n\n' +
        '**Informações:** \n' +
        '<:check:829822821337268255> - Atribuído. \n' +
        '<:warn:829823546733101057> - Não atribuído / Não obrigatório. \n' +
        '<:cross:829822810884538378> - Não atribuído / Obrigatório. \n' +
        '`<Argumento>` - Obrigatório. \n' +
        '`[Argumento]` - Opcional.' 
        )

        var frases = [
            'Provavelmente sim.',
            'Provavelmente não.',
            'Sim.',
            'Não.',
            'Talvez.',
            'Com certeza.',
            'Será?',
            'Você tá viajando mano :man_shrugging:. ',
            'Você ainda tem dúvidas?'
        ];


        var resultado = frases[Math.floor(Math.random() * frases.length)];


        const sucess = new MessageEmbed()
            .setColor('#0DFF00')
            .setDescription(resultado);

		// Verificando se o comando for igual à String dita abaixo.
		if(command === 'perguntar' || command === 'pergunta') {
			if(!args[0]) {
                return message.channel.send(guia)
            } else {
                if(message.content.endsWith('?')) {
                    return message.channel.send(sucess);
                } else {
                    return message.channel.send(guiaError)
                }
            }
		}
        
    })
}