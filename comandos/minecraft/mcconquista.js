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

        const titulo = args[0];
        const subtitulo = args.slice(1).join('+');

        const guia = new MessageEmbed()
            .setColor('#FF0000')
            .setDescription(
                '<:cross:829822810884538378> Poucos argumentos foram atribuídos para a execução do comando. \n\n' +
                '**Como usar:** `/mcconquista <title> <sub-title>` \n\n' +
                '**Problemas:** \n' +
                '<:cross:829822810884538378> `Title` ainda não foi informado. \n\n' +
                '**Sinônimos:** \n' +
                '<:warn:829823546733101057> `/mcachievement` \n\n' +
                '**Argumentos:** \n' +
                '<:cross:829822810884538378> `Title:` Título que irá aparece sob a conquista. (Utilize titulo+titulo) para representar espaços.\n' +
                '<:warn:829823546733101057> `Sub-title:` Motivo explicando o porquê do comando ser executado. \n\n' +
                '**Informações:** \n' +
                '<:check:829822821337268255> - Atribuído. \n' +
                '<:warn:829823546733101057> - Não atribuído / Não obrigatório. \n' +
                '<:cross:829822810884538378> - Não atribuído / Obrigatório. \n' +
                '`<Argumento>` - Obrigatório. \n' +
                '`[Argumento]` - Opcional.' 
        )

        const guiaLimites1 = new MessageEmbed()
            .setColor('#FF0000')
            .setDescription(
                '<:cross:829822810884538378> Poucos argumentos foram atribuídos para a execução do comando. \n\n' +
                '**Como usar:** `/mcconquista <title> <sub-title>` \n\n' +
                '**Problemas:** \n' +
                '<:cross:829822810884538378> `Title` não pode ultrapassar 20 caracteres. \n\n' +
                '**Sinônimos:** \n' +
                '<:warn:829823546733101057> `/mcachievement` \n\n' +
                '**Argumentos:** \n' +
                '<:cross:829822810884538378> `Title:` Título que irá aparece sob a conquista. (Utilize titulo+titulo) para representar espaços.\n' +
                '<:warn:829823546733101057> `Sub-title:` Motivo explicando o porquê do comando ser executado. \n\n' +
                '**Informações:** \n' +
                '<:check:829822821337268255> - Atribuído. \n' +
                '<:warn:829823546733101057> - Não atribuído / Não obrigatório. \n' +
                '<:cross:829822810884538378> - Não atribuído / Obrigatório. \n' +
                '`<Argumento>` - Obrigatório. \n' +
                '`[Argumento]` - Opcional.' 
        )

        const sucess = new MessageEmbed()
            .setColor('#30FF00')
            .setDescription('<:check:829822821337268255> Aqui está a sua conquista.')
            .setImage(`https://minecraftskinstealer.com/achievement/8/${titulo}/${subtitulo}`);

        const guiaLimites2 = new MessageEmbed()
            .setColor('#FF0000')
            .setDescription(
                '<:cross:829822810884538378> Poucos argumentos foram atribuídos para a execução do comando. \n\n' +
                '**Como usar:** `/mcconquista <title> <sub-title>` \n\n' +
                '**Problemas:** \n' +
                '<:cross:829822810884538378> `Sub-title` não pode ultrapassar 20 caracteres. \n\n' +
                '**Sinônimos:** \n' +
                '<:warn:829823546733101057> `/mcachievement` \n\n' +
                '**Argumentos:** \n' +
                '<:cross:829822810884538378> `Title:` Título que irá aparece sob a conquista. (Utilize titulo+titulo) para representar espaços.\n' +
                '<:warn:829823546733101057> `Sub-title:` Motivo explicando o porquê do comando ser executado. \n\n' +
                '**Informações:** \n' +
                '<:check:829822821337268255> - Atribuído. \n' +
                '<:warn:829823546733101057> - Não atribuído / Não obrigatório. \n' +
                '<:cross:829822810884538378> - Não atribuído / Obrigatório. \n' +
                '`<Argumento>` - Obrigatório. \n' +
                '`[Argumento]` - Opcional.' 
        )

        // https://minecraftskinstealer.com/achievement/8/a/a
		
		// Verificando se o comando for igual à String dita abaixo.
		if(command === 'mcconquista' || command === 'mcachievement') {
            
            if(titulo > 20) {
                return message.channel.send(guiaLimites1);
            }
            if(subtitulo > 20) {
                return message.channel.send(guiaLimites2);
            }
            if(!args[0]) {
                return message.channel.send(guia);
            } else {
                return message.channel.send(sucess);
            }
			
		}
        
    })
}