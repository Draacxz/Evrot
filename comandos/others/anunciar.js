// Puxa a variável prefix localizada na config jhonson
const { MessageEmbed } = require('discord.js');
const {prefix, anunciarID} = require('../../config.json');

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
        const content = args.join(' ');
        const guia = new MessageEmbed()
        .setColor('#FF0000')
        .setDescription(
        '<:cross:829822810884538378> Poucos argumentos foram atribuídos para a execução do comando. \n\n' +
        '**Como usar:** `/anunciar <announcement>` \n\n' +
        '**Problemas:** \n' +
        '<:cross:829822810884538378> `Announcement` ainda não foi informado. \n\n' +
        '**Argumentos:** \n' +
        '<:cross:829822810884538378> `Announcement:` O conteúdo do anúncio que será publicado. \n\n' +
        '**Informações:** \n' +
        '<:check:829822821337268255> - Atribuído. \n' +
        '<:warn:829823546733101057> - Não atribuído / Não obrigatório. \n' +
        '<:cross:829822810884538378> - Não atribuído / Obrigatório. \n' +
        '`<Argumento>` - Obrigatório. \n' +
        '`[Argumento]` - Opcional.' 
        )

        const guiaLimites = new MessageEmbed()
        .setColor('#FF0000')
        .setDescription(
        '<:cross:829822810884538378> Houve um erro nos argumentos que foram atribuídos para a execução do comando. \n\n' +
        '**Como usar:** `/anunciar <announcement>` \n\n' +
        '**Problemas:** \n' +
        '<:cross:829822810884538378> `Announcement` não pode ultrapassar os 1000 caracteres. \n\n' +
        '**Argumentos:** \n' +
        '<:cross:829822810884538378> `Announcement:` O conteúdo do anúncio que será publicado. \n\n' +
        '**Informações:** \n' +
        '<:check:829822821337268255> - Atribuído. \n' +
        '<:warn:829823546733101057> - Não atribuído / Não obrigatório. \n' +
        '<:cross:829822810884538378> - Não atribuído / Obrigatório. \n' +
        '`<Argumento>` - Obrigatório. \n' +
        '`[Argumento]` - Opcional.' 
        )

        const guiaPermissions = new MessageEmbed()
        .setColor('#FF0000')
        .setDescription(
        '<:cross:829822810884538378> Ocorreu um erro na execução do comando. \n\n' +
        '**Como usar:** `/anunciar <announcement>` \n\n' +
        '**Problemas:** \n' +
        '<:cross:829822810884538378> `Permission:` você não tem a permissão `ADMINISTRADOR`. \n\n' +
        '**Argumentos:** \n' +
        '<:cross:829822810884538378> `Announcement:` O conteúdo do anúncio que será publicado. \n\n' +
        '**Informações:** \n' +
        '<:check:829822821337268255> - Atribuído. \n' +
        '<:warn:829823546733101057> - Não atribuído / Não obrigatório. \n' +
        '<:cross:829822810884538378> - Não atribuído / Obrigatório. \n' +
        '`<Argumento>` - Obrigatório. \n' +
        '`[Argumento]` - Opcional.' 
        )

        const anuncio = new MessageEmbed()
            .setTitle('📢  -  ANÚNCIO')
            .setColor('#24FF00')
            .setDescription(`${content}\n\n***Com os melhores cumprimentos***,\n***Evrot***.`)
            .setImage('https://thumbs.gfycat.com/AffectionateCheapFeline-small.gif')

        const sucess = new MessageEmbed()
			.setColor('#30FF00')
			.setDescription(`<:check:829822821337268255> Seu anúncio foi enviado com sucesso.`);


        const canal = message.guild.channels.cache.find(a => a.id === anunciarID)
		
		// Verificando se o comando for igual à String dita abaixo.
		if(command === 'anunciar') {
			if(message.member.hasPermission('ADMINISTRATOR')) {
                if(!content) {
                    return message.channel.send(guia)
                } else if(content > 1000) {
                    return message.channel.send(guiaLimites)
                } else {
                    canal.send(anuncio);
                    return message.channel.send(sucess);
                }
            } else {
                return message.channel.send(guiaPermissions);
            }
		} // announcement
        
    })
}