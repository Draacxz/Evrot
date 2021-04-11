// Puxa a variável prefix localizada na config jhonson
const { MessageEmbed } = require('discord.js');
const {prefix} = require('../../config.json');

// Uma forma de exportar o arquivo no index.js = comando(client).
module.exports = (client) => {
	
	// Evento de mensagem.
    client.on('message', message => {


	// Mensagens Embeds. Utilizadas para melhorar a estética do bot.


	// Apenas tudo estética.
		const processo = new MessageEmbed()
			.setColor('#E9FF00')
			.setDescription('<:warn:829823546733101057> O seu pedido para banir tal usuário está sendo processado.')
			.setFooter('Este processo pode demorar alguns segundos.')
			.setTimestamp();

		const sucess = new MessageEmbed()
			.setColor('#30FF00')
			.setDescription('<:check:829822821337268255> O usuário informado acaba de ser banido pelo motivo: ***Indeterminado***.');
		
        // Mensagem Embed. Será enviada caso não mencione um usuário.
        const guia = new MessageEmbed()
            .setColor('#FF0000')
            .setDescription('<:cross:829822810884538378> Poucos argumentos foram atribuídos para a execução do comando.\n\n**Como usar:** `/ban <user> [reason]`\n\n**Problemas:**\n<:cross:829822810884538378> `User:` é necessário que um usuário seja marcado.\n\n**Sinônimos:**\n<:warn:829823546733101057> `/banir`.\n\n**Argumentos:**\n<:cross:829822810884538378> `User:` Menção de usuário (@Draacxz#1953). O usuário tem que estar no servidor.\n<:warn:829823546733101057> `Reason:` motivo pelo qual o usuário será punido com banimento permanente.\n\n**Informações:**\n<:check:829822821337268255> - Atribuído.\n<:warn:829823546733101057> - Não atribuído / Não obrigatório.\n<:cross:829822810884538378> - Não atribuído / Obrigatório.\n`<Argumento>` - Obrigatório.\n`[Argumento]` - Opcional.')

		// Mensagem Embed. Será enviada caso o usuário não tenha permissão.
		const guiaPermissions = new MessageEmbed()
            .setColor('#FF0000')
            .setDescription('<:cross:829822810884538378> Ocorreu um erro na execução do comando.\n\n**Como usar:** `/ban <user> [reason]`\n\n**Problemas:**\n<:cross:829822810884538378> `Permission:` é necessário que você tenha a permissão `Banir membros`.\n\n**Sinônimos:**\n<:warn:829823546733101057> `/banir`.\n\n**Argumentos:**\n<:cross:829822810884538378> `User:` Menção de usuário (@Draacxz#1953). O usuário tem que estar no servidor.\n<:warn:829823546733101057> `Reason:` motivo pelo qual o usuário será punido com banimento permanente.\n\n**Informações:**\n<:check:829822821337268255> - Atribuído.\n<:warn:829823546733101057> - Não atribuído / Não obrigatório.\n<:cross:829822810884538378> - Não atribuído / Obrigatório.\n`<Argumento>` - Obrigatório.\n`[Argumento]` - Opcional.')

		// Mensagem Embed. Será enviada caso o usuário não tenha permissão.
		const guiaBot = new MessageEmbed()
            .setColor('#FF0000')
            .setDescription('<:cross:829822810884538378> Ocorreu um erro na execução do comando.\n\n**Como usar:** `/ban <user> [reason]`\n\n**Problemas:**\n<:cross:829822810884538378> `Permission:` é necessário que eu tenha a permissão `Banir membros` para prosseguir com o comando.\n\n**Sinônimos:**\n<:warn:829823546733101057> `/banir`.\n\n**Argumentos:**\n<:cross:829822810884538378> `User:` Menção de usuário (@Draacxz#1953). O usuário tem que estar no servidor.\n<:warn:829823546733101057> `Reason:` motivo pelo qual o usuário será punido com banimento permanente.\n\n**Informações:**\n<:check:829822821337268255> - Atribuído.\n<:warn:829823546733101057> - Não atribuído / Não obrigatório.\n<:cross:829822810884538378> - Não atribuído / Obrigatório.\n`<Argumento>` - Obrigatório.\n`[Argumento]` - Opcional.')
		
		// Mensagem Embed. Será enviada caso o usuário não exista.
		const guiaError = new MessageEmbed()
			.setColor('#FF0000')
			.setDescription('<:cross:829822810884538378> Houve um erro nos argumentos que foram atribuídos para a execução do comando.\n\n**Como usar:** `/ban <user> [reason]`\n\n**Problemas:**\n<:cross:829822810884538378> `User` deve ser um usuário válido.\n\n**Sinônimos:**\n<:warn:829823546733101057> `/banir`.\n\n**Argumentos:**\n<:cross:829822810884538378> `User:` Menção de usuário (@Draacxz#1953). O usuário tem que estar no servidor.\n<:warn:829823546733101057> `Reason:` motivo pelo qual o usuário será punido com banimento permanente.\n\n**Informações:**\n<:check:829822821337268255> - Atribuído.\n<:warn:829823546733101057> - Não atribuído / Não obrigatório.\n<:cross:829822810884538378> - Não atribuído / Obrigatório.\n`<Argumento>` - Obrigatório.\n`[Argumento]` - Opcional.')

		// Mensagem Embed. Será enviada caso o usuário seja @everyone.
		const guiaEveryone = new MessageEmbed()
			.setColor('#FF0000')
			.setDescription('<:cross:829822810884538378> Houve um erro nos argumentos que foram atribuídos para a execução do comando.\n\n**Como usar:** `/ban <user> [reason]`\n\n**Problemas:**\n<:cross:829822810884538378> `User:` `@everyone` não é um usuário válido.\n\n**Sinônimos:**\n<:warn:829823546733101057> `/banir`.\n\n**Argumentos:**\n<:cross:829822810884538378> `User:` Menção de usuário (@Draacxz#1953). O usuário tem que estar no servidor.\n<:warn:829823546733101057> `Reason:` motivo pelo qual o usuário será punido com banimento permanente.\n\n**Informações:**\n<:check:829822821337268255> - Atribuído.\n<:warn:829823546733101057> - Não atribuído / Não obrigatório.\n<:cross:829822810884538378> - Não atribuído / Obrigatório.\n`<Argumento>` - Obrigatório.\n`[Argumento]` - Opcional.')

		// Mensagem Embed. Será enviada caso o usuário seja a mesma pessoa que executou o comando.
		const guiaSelf = new MessageEmbed()
			.setColor('#FF0000')
			.setDescription('<:cross:829822810884538378> Houve um erro nos argumentos que foram atribuídos para a execução do comando.\n\n**Como usar:** `/ban <user> [reason]`\n\n**Problemas:**\n<:cross:829822810884538378> `User:` você não é um usuário válido.\n\n**Sinônimos:**\n<:warn:829823546733101057> `/banir`.\n\n**Argumentos:**\n<:cross:829822810884538378> `User:` Menção de usuário (@Draacxz#1953). O usuário tem que estar no servidor.\n<:warn:829823546733101057> `Reason:` motivo pelo qual o usuário será punido com banimento permanente.\n\n**Informações:**\n<:check:829822821337268255> - Atribuído.\n<:warn:829823546733101057> - Não atribuído / Não obrigatório.\n<:cross:829822810884538378> - Não atribuído / Obrigatório.\n`<Argumento>` - Obrigatório.\n`[Argumento]` - Opcional.')

		// Verificando se a mensagem não começou com prefix e se o autor da mensagem é um bot.
        if(!message.content.startsWith(prefix) || message.author.bot) return;
	
		// Variável projetada para adquirir os argumentos de cada comando.
        const args = message.content.slice(prefix.length).trim().split(/ +/);

		// Variável projetada para adquirir o argumento "comando" = "/argumento".
        const command = args.shift().toLowerCase();

		// Varíavel para conseguir o motivo do banimento.
		const reason = args.slice(1).join(' ');

		const sucessReason = new MessageEmbed()
			.setColor('#30FF00')
			.setDescription(`<:check:829822821337268255> O usuário informado acaba de ser banido pelo motivo: ***${reason}***.`);
		
		// Verificando se o comando for igual à String dita abaixo.
		if(command === 'ban' || command === 'banir') {

			// Código utilizado para obter o usuário que foi marcado.
			const target = message.mentions.members.first();

			// Verificando se o bot tem as permissões necessárias
			if(!message.guild.me.hasPermission('BAN_MEMBERS')) return message.channel.send(`${message.author}`, guiaBot);
			

			// Verificando se o usuário não possui a permissão de Banir Usuários.
			if(!message.member.hasPermission('BAN_MEMBERS')) {

				// Caso a verificação esteja correta, irá executar o código abaixo.
				return message.channel.send(`${message.author}`, guiaPermissions);

			// Verificando o contrário da verificação anterior.
			} else {

				// Verificando se realmente há um usuário que foi marcado.
				if(!target) {
					
					// Verificando se o argumento0 é idêntico a "@Everyone"
					if(args[0] === '@everyone') {

						// Caso a verificação esteja correta, irá executar o código abaixo.
						return message.channel.send(`${message.author}`, guiaEveryone);

					}

					// Verificando se está faltando o argumento0
					if(!args[0]) {

						// Caso a verificação esteja correta, irá executar o código abaixo.
						return message.channel.send(`${message.author}`, guia);

					// Verificando o contrário da verificação anterior.
					} else {

						// Caso a verificação esteja correta, irá executar o código abaixo.
						return message.channel.send(`${message.author}`, guiaError)

					}

				// Verificando o contrário da verificação anterior.
				} else {

					// Verificando se o ID do usuário informado é o mesmo que o ID do executor do comando.
					if(target.id === message.author.id) {
						
						// Caso a verificação esteja correta, irá executar o código abaixo.
						return message.channel.send(`${message.author}`, guiaSelf);

					}

					// Verificando se o usuário informou um motivo.
					if(!reason) {

						// Caso todas as verificações feitas estejam tudo certas, finalmente o usuário será banido.
						message.channel.send(processo)
						.then(msg => {
							setInterval(function() {
								msg.edit(sucess);
								target.ban();
							}, 3000);
					})

				// Verificando o contrário da verificação anterior.
				} else {

						// Caso todas as verificações feitas estejam tudo certas, finalmente o usuário será banido.
						message.channel.send(processo)
						.then(msg => {
							setInterval(function() {
								msg.edit(sucessReason);
								target.ban();
							}, 3000);

					})

				}


			}

		}


	}
        
})

}