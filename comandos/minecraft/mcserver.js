// Puxa a variável prefix localizada na config jhonson
const { MessageEmbed } = require('discord.js');
const {prefix} = require('../../config.json');
const util = require('minecraft-server-util');

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
                '**Como usar:** `/mcserver <IP>` \n\n' +
                '**Problemas:** \n' +
                '<:cross:829822810884538378> `IP` ainda não foi informado. \n\n' +
                '**Argumentos:** \n' +
                '<:cross:829822810884538378> `IP:` Endereço ip de um servidor de Minecraft. \n\n' +
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
                '<:cross:829822810884538378> Houve um erro nos argumentos que foram atribuídos para a execução do comando. \n\n' +
                '**Como usar:** `/mcserver <IP>` \n\n' +
                '**Problemas:** \n' +
                '<:cross:829822810884538378> `IP` não é um servidor válido. \n\n' +
                '**Argumentos:** \n' +
                '<:cross:829822810884538378> `IP:` Endereço ip de um servidor de Minecraft. \n\n' +
                '**Informações:** \n' +
                '<:check:829822821337268255> - Atribuído. \n' +
                '<:warn:829823546733101057> - Não atribuído / Não obrigatório. \n' +
                '<:cross:829822810884538378> - Não atribuído / Obrigatório. \n' +
                '`<Argumento>` - Obrigatório. \n' +
                '`[Argumento]` - Opcional.' 
            )

			
		
		// Verificando se o comando for igual à String dita abaixo.
		if(command === 'mcserver') {

            var ip = args[0];
			
            // Verificando se está faltando o argumento0.
            if(!args[0]) {

                // Caso a verificação esteja correta, irá executar o código abaixo.
                return message.channel.send(guia);
            
            // Irá verificar o contrário da verificação anterior.
            } else {

                util.status(args[0])
                .then((response) => {
                    const sucess = new MessageEmbed()
			            .setColor('#30FF00')
                        .addField('Status', '<:on:829425431563206688>', true)
                        .addField('IP', `${response.host}`, true)
                        .addField('Porta', response.port, true)
                        .addField('Jogadores', `${response.onlinePlayers}/${response.maxPlayers}`)
                        .addField('Versão', response.version)
                        .setThumbnail(`https://eu.mc-api.net/v3/server/favicon/${args[0]}`)
                        .setImage(`http://status.mclive.eu/${args[0]}/${args[0]}/25565/banner.png`)
                        return message.channel.send(sucess);
                })
                .catch((error) => {
                    console.log(error)
                    return message.channel.send(guiaError);
                })



            }

		}
        
    })
}