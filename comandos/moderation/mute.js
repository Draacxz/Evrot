// Puxa a variável prefix localizada na config jhonson
const { MessageEmbed } = require('discord.js');
const {prefix, muteID} = require('../../config.json');

// Uma forma de exportar o arquivo no index.js = comando(client).
module.exports = (client) => {
	
	// Evento de mensagem.
    client.on('message', message => {

		// Código utilizado para obter o usuário que foi marcado.
		const target = message.mentions.members.first();

    

	// Mensagens Embeds. Utilizadas para melhorar a estética do bot.


	// Apenas tudo estética.
		const processo = new MessageEmbed()
			.setColor('#E9FF00')
			.setDescription('<:warn:829823546733101057> O seu pedido para mutar tal usuário está sendo processado.')
			.setFooter('Este processo pode demorar alguns segundos.')
			.setTimestamp();
		
        // Mensagem Embed. Será enviada caso não mencione um usuário.
        const guia = new MessageEmbed()
            .setColor('#FF0000')
            .setDescription('<:cross:829822810884538378> Poucos argumentos foram atribuídos para a execução do comando.\n\n**Como usar:** `/mute <user> <time> <format> [reason]`\n\n**Problemas:**\n<:cross:829822810884538378> `User:` é necessário que um usuário seja marcado.\n\n**Sinônimos:**\n<:warn:829823546733101057> `/mutar | /silenciar`.\n\n**Argumentos:**\n<:cross:829822810884538378> `User:` Menção de usuário (@Draacxz#1953). O usuário tem que estar no servidor.\n<:cross:829822810884538378> `Time:` o tempo que irá durar o silenciamento.\n<:warn:829823546733101057> `Reason:` motivo pelo qual o usuário será punido com silenciamento.\n<:cross:829822810884538378> `Format:` Segundo, Minutos, Horas.\n\n**Informações:**\n<:check:829822821337268255> - Atribuído.\n<:warn:829823546733101057> - Não atribuído / Não obrigatório.\n<:cross:829822810884538378> - Não atribuído / Obrigatório.\n`<Argumento>` - Obrigatório.\n`[Argumento]` - Opcional.')

        // Mensagem Embed. Será enviada caso não informe um tempo.
        const guiaTime = new MessageEmbed()
            .setColor('#FF0000')
            .setDescription('<:cross:829822810884538378> Poucos argumentos foram atribuídos para a execução do comando.\n\n**Como usar:** `/mute <user> <time> <format> [reason]`\n\n**Problemas:**\n<:cross:829822810884538378> `Time:` é necessário que informe uma duração para o silenciamento.\n\n**Sinônimos:**\n<:warn:829823546733101057> `/mutar | /silenciar`.\n\n**Argumentos:**\n<:cross:829822810884538378> `User:` Menção de usuário (@Draacxz#1953). O usuário tem que estar no servidor.\n<:cross:829822810884538378> `Time:` o tempo que irá durar o silenciamento.\n<:warn:829823546733101057> `Reason:` motivo pelo qual o usuário será punido com silenciamento.\n<:cross:829822810884538378> `Format:` Segundo, Minutos, Horas.\n\n**Informações:**\n<:check:829822821337268255> - Atribuído.\n<:warn:829823546733101057> - Não atribuído / Não obrigatório.\n<:cross:829822810884538378> - Não atribuído / Obrigatório.\n`<Argumento>` - Obrigatório.\n`[Argumento]` - Opcional.')

		// Mensagem Embed. Será enviada caso não informe um tempo.
		const guiaTimeArray = new MessageEmbed()
			.setColor('#FF0000')
			.setDescription('<:cross:829822810884538378> Houve um erro nos argumentos que foram atribuídos para a execução do comando.\n\n**Como usar:** `/mute <user> <format> <time> [reason]`\n\n**Problemas:**\n<:cross:829822810884538378> `Time:` é necessário que informe o tipo de duração `[s | m | h]`.\n\n**Sinônimos:**\n<:warn:829823546733101057> `/mutar | /silenciar`.\n\n**Argumentos:**\n<:cross:829822810884538378> `User:` Menção de usuário (@Draacxz#1953). O usuário tem que estar no servidor.\n<:cross:829822810884538378> `Time:` o tempo que irá durar o silenciamento.\n<:warn:829823546733101057> `Reason:` motivo pelo qual o usuário será punido com silenciamento.\n<:cross:829822810884538378> `Format:` Segundo, Minutos, Horas.\n\n**Informações:**\n<:check:829822821337268255> - Atribuído.\n<:warn:829823546733101057> - Não atribuído / Não obrigatório.\n<:cross:829822810884538378> - Não atribuído / Obrigatório.\n`<Argumento>` - Obrigatório.\n`[Argumento]` - Opcional.')

		// Mensagem Embed. Será enviada caso não informe um tempo.
		const guiaisNaN = new MessageEmbed()
			.setColor('#FF0000')
			.setDescription('<:cross:829822810884538378> Houve um erro nos argumentos que foram atribuídos para a execução do comando.\n\n**Como usar:** `/mute <user> <time> <format> [reason]`\n\n**Problemas:**\n<:cross:829822810884538378> `Time` não é uma duração válida.\n\n**Sinônimos:**\n<:warn:829823546733101057> `/mutar | /silenciar`.\n\n**Argumentos:**\n<:cross:829822810884538378> `User:` Menção de usuário (@Draacxz#1953). O usuário tem que estar no servidor.\n<:cross:829822810884538378> `Time:` o tempo que irá durar o silenciamento.\n<:warn:829823546733101057> `Reason:` motivo pelo qual o usuário será punido com silenciamento.\n<:cross:829822810884538378> `Format:` Segundo, Minutos, Horas.\n\n**Informações:**\n<:check:829822821337268255> - Atribuído.\n<:warn:829823546733101057> - Não atribuído / Não obrigatório.\n<:cross:829822810884538378> - Não atribuído / Obrigatório.\n`<Argumento>` - Obrigatório.\n`[Argumento]` - Opcional.')

		// Mensagem Embed. Será enviada caso o usuário não tenha permissão.
		const guiaPermissions = new MessageEmbed()
            .setColor('#FF0000')
            .setDescription('<:cross:829822810884538378> Ocorreu um erro na execução do comando.\n\n**Como usar:** `/mute <user> <time> <format> [reason]`\n\n**Problemas:**\n<:cross:829822810884538378> `Permission:` é necessário que você tenha a permissão `Gerenciar mensagens`.\n\n**Sinônimos:**\n<:warn:829823546733101057> `/mutar | /silenciar`.\n\n**Argumentos:**\n<:cross:829822810884538378> `User:` Menção de usuário (@Draacxz#1953). O usuário tem que estar no servidor.\n<:cross:829822810884538378> `Time:` o tempo que irá durar o silenciamento.\n<:warn:829823546733101057> `Reason:` motivo pelo qual o usuário será punido com silenciamento.\n<:cross:829822810884538378> `Format:` Segundo, Minutos, Horas.\n\n**Informações:**\n<:check:829822821337268255> - Atribuído.\n<:warn:829823546733101057> - Não atribuído / Não obrigatório.\n<:cross:829822810884538378> - Não atribuído / Obrigatório.\n`<Argumento>` - Obrigatório.\n`[Argumento]` - Opcional.')

		// Mensagem Embed. Será enviada caso o usuário não tenha permissão.
		const guiaBot = new MessageEmbed()
            .setColor('#FF0000')
            .setDescription('<:cross:829822810884538378> Ocorreu um erro na execução do comando.\n\n**Como usar:** `/mute <user> <time> <format> [reason]`\n\n**Problemas:**\n<:cross:829822810884538378> `Permission:` é necessário que eu tenha a permissão `Gerenciar cargos` para prosseguir com o comando.\n\n**Sinônimos:**\n<:warn:829823546733101057> `/mutar | /silenciar`.\n\n**Argumentos:**\n<:cross:829822810884538378> `User:` Menção de usuário (@Draacxz#1953). O usuário tem que estar no servidor.\n<:cross:829822810884538378> `Time:` o tempo que irá durar o silenciamento.\n<:warn:829823546733101057> `Reason:` motivo pelo qual o usuário será punido com silenciamento.\n<:cross:829822810884538378> `Time:` o tempo que irá durar o silenciamento.\n<:cross:829822810884538378> `Format:` Segundo, Minutos, Horas.\n\n**Informações:**\n<:check:829822821337268255> - Atribuído.\n<:warn:829823546733101057> - Não atribuído / Não obrigatório.\n<:cross:829822810884538378> - Não atribuído / Obrigatório.\n`<Argumento>` - Obrigatório.\n`[Argumento]` - Opcional.')
		
		// Mensagem Embed. Será enviada caso o usuário não exista.
		const guiaError = new MessageEmbed()
			.setColor('#FF0000')
			.setDescription('<:cross:829822810884538378> Houve um erro nos argumentos que foram atribuídos para a execução do comando.\n\n**Como usar:** `/mute <user> <time> <format> [reason]`\n\n**Problemas:**\n<:cross:829822810884538378> `User` deve ser um usuário válido.\n\n**Sinônimos:**\n<:warn:829823546733101057> `/mutar | /silenciar`.\n\n**Argumentos:**\n<:cross:829822810884538378> `User:` Menção de usuário (@Draacxz#1953). O usuário tem que estar no servidor.\n<:cross:829822810884538378> `Time:` o tempo que irá durar o silenciamento.\n<:warn:829823546733101057> `Reason:` motivo pelo qual o usuário será punido com silenciamento.\n<:cross:829822810884538378> `Format:` Segundo, Minutos, Horas.\n\n**Informações:**\n<:check:829822821337268255> - Atribuído.\n<:warn:829823546733101057> - Não atribuído / Não obrigatório.\n<:cross:829822810884538378> - Não atribuído / Obrigatório.\n`<Argumento>` - Obrigatório.\n`[Argumento]` - Opcional.')

		// Mensagem Embed. Será enviada caso o usuário seja @everyone.
		const guiaEveryone = new MessageEmbed()
			.setColor('#FF0000')
			.setDescription('<:cross:829822810884538378> Houve um erro nos argumentos que foram atribuídos para a execução do comando.\n\n**Como usar:** `/mute <user> <time> <format> [reason]`\n\n**Problemas:**\n<:cross:829822810884538378> `User:` `@everyone` não é um usuário válido.\n\n**Sinônimos:**\n<:warn:829823546733101057> `/mutar | /silenciar`.\n\n**Argumentos:**\n<:cross:829822810884538378> `User:` Menção de usuário (@Draacxz#1953). O usuário tem que estar no servidor.\n<:cross:829822810884538378> `Time:` o tempo que irá durar o silenciamento.\n<:warn:829823546733101057> `Reason:` motivo pelo qual o usuário será punido com silenciamento.\n<:cross:829822810884538378> `Format:` Segundo, Minutos, Horas.\n\n**Informações:**\n<:check:829822821337268255> - Atribuído.\n<:warn:829823546733101057> - Não atribuído / Não obrigatório.\n<:cross:829822810884538378> - Não atribuído / Obrigatório.\n`<Argumento>` - Obrigatório.\n`[Argumento]` - Opcional.')

		// Mensagem Embed. Será enviada caso o usuário seja a mesma pessoa que executou o comando.
		const guiaSelf = new MessageEmbed()
			.setColor('#FF0000')
			.setDescription('<:cross:829822810884538378> Houve um erro nos argumentos que foram atribuídos para a execução do comando.\n\n**Como usar:** `/mute <user> <time> <format> [reason]`\n\n**Problemas:**\n<:cross:829822810884538378> `User:` você não é um usuário válido.\n\n**Sinônimos:**\n<:warn:829823546733101057> `/mutar | /silenciar`.\n\n**Argumentos:**\n<:cross:829822810884538378> `User:` Menção de usuário (@Draacxz#1953). O usuário tem que estar no servidor.\n<:cross:829822810884538378> `Time:` o tempo que irá durar o silenciamento.\n<:warn:829823546733101057> `Reason:` motivo pelo qual o usuário será punido com silenciamento.\n<:cross:829822810884538378> `Format:` Segundo, Minutos, Horas.\n\n**Informações:**\n<:check:829822821337268255> - Atribuído.\n<:warn:829823546733101057> - Não atribuído / Não obrigatório.\n<:cross:829822810884538378> - Não atribuído / Obrigatório.\n`<Argumento>` - Obrigatório.\n`[Argumento]` - Opcional.')

        // Mensagem Embed. Será enviada caso o usuário seja a mesma pessoa que executou o comando.
		const guiaRole = new MessageEmbed()
            .setColor('#FF0000')
            .setDescription('<:cross:829822810884538378> Houve um erro nos argumentos que foram atribuídos para a execução do comando.\n\n**Como usar:** `/mute <user> <time> <format> [reason]`\n\n**Problemas:**\n<:cross:829822810884538378> `User` já está silenciado.\n\n**Sinônimos:**\n<:warn:829823546733101057> `/mutar | /silenciar`.\n\n**Argumentos:**\n<:cross:829822810884538378> `User:` Menção de usuário (@Draacxz#1953). O usuário tem que estar no servidor.\n<:cross:829822810884538378> `Time:` o tempo que irá durar o silenciamento.\n<:warn:829823546733101057> `Reason:` motivo pelo qual o usuário será punido com silenciamento.\n<:cross:829822810884538378> `Format:` Segundo, Minutos, Horas.\n\n**Informações:**\n<:check:829822821337268255> - Atribuído.\n<:warn:829823546733101057> - Não atribuído / Não obrigatório.\n<:cross:829822810884538378> - Não atribuído / Obrigatório.\n`<Argumento>` - Obrigatório.\n`[Argumento]` - Opcional.')

		// Verificando se a mensagem não começou com prefix e se o autor da mensagem é um bot.
        if(!message.content.startsWith(prefix) || message.author.bot) return;
	
		// Variável projetada para adquirir os argumentos de cada comando.
        const args = message.content.slice(prefix.length).trim().split(/ +/);

		// Variável projetada para adquirir o argumento "comando" = "/argumento".
        const command = args.shift().toLowerCase();

		// Varíavel para conseguir o motivo do banimento.
		const reason = args.slice(3).join(' ');

        // Código utilizado para conseguir o tempo sugerido para o mute temporário.
        const time = args[1];

		// Variáveis que representam o tempo. M = minutos | S = Segundos | H = horas.
		const m = time * 60000;
		const s = time * 1000;
		const h = time * 3600000;

        // Variável feita para conseguir o cargo de "@Mutado".
        const role = message.guild.roles.cache.find(r => r.id === muteID); 

		// Messagem Embed. Caso seja não informado um motivo irá enviar esta mensagem.
        const sucessSegundos = new MessageEmbed()
			.setColor('#30FF00')
			.setDescription(`<:check:829822821337268255> O usuário informado acaba de mutado pelo motivo: ***Indeterminado***.\nDuração: ***${time} Segundos***.`);
		
        // Messagem Embed. Caso seja não informado um motivo irá enviar esta mensagem.
        const sucessMinutos = new MessageEmbed()
			.setColor('#30FF00')
			.setDescription(`<:check:829822821337268255> O usuário informado acaba de mutado pelo motivo: ***Indeterminado***.\nDuração: ***${time} Minutos***.`);

		// Messagem Embed. Caso seja não informado um motivo irá enviar esta mensagem.
		const sucessHoras = new MessageEmbed()
			.setColor('#30FF00')
			.setDescription(`<:check:829822821337268255> O usuário informado acaba de mutado pelo motivo: ***Indeterminado***.\nDuração: ***${time} Horas***.`);

        // Messagem Embed. Caso seja informado um motivo irá enviar esta mensagem.
		const sucessReason1 = new MessageEmbed()
			.setColor('#30FF00')
			.setDescription(`<:check:829822821337268255> O usuário informado acaba de ser mutado pelo motivo: ***${reason}***.\nDuração: ***${time} Segundos.***`);

		// Messagem Embed. Caso seja informado um motivo irá enviar esta mensagem.
		const sucessReason2 = new MessageEmbed()
			.setColor('#30FF00')
			.setDescription(`<:check:829822821337268255> O usuário informado acaba de ser mutado pelo motivo: ***${reason}***.\nDuração: ***${time} Minutos.***`);

		// Messagem Embed. Caso seja informado um motivo irá enviar esta mensagem.
		const sucessReason3 = new MessageEmbed()
			.setColor('#30FF00')
			.setDescription(`<:check:829822821337268255> O usuário informado acaba de ser mutado pelo motivo: ***${reason}***.\nDuração: ***${time} Horas.***`);
		
		// Verificando se o comando for igual à String dita abaixo.
		if(command === 'mute' || command === 'mutar' || command === 'silenciar'){

			// Verificando se o bot tem as permissões necessárias
			if(!message.guild.me.hasPermission('MANAGE_ROLES')) return message.channel.send(`${message.author}`, guiaBot);
			

			// Verificando se o usuário não possui a permissão de Banir Usuários.
			if(!message.member.hasPermission('MANAGE_MESSAGES')) {

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

                    // Verificando se o usuário informado já está silenciado.
                    if(target.roles.cache.find(r => r.id === muteID)) {

                        // Caso a verificação esteja correta, irá executar o código abaixo.
                        return message.channel.send(guiaRole)

                    }

                    // Verificando se o usuário informou uma duração para o silenciamento.
                    if(!time) {

                        // Caso todas as verificações feitas estejam tudo certas, finalmente o usuário será mutado.
                        return message.channel.send(guiaTime);

                    } else {

                        // Verificando se o usuário informou um motivo.
					    if(!reason) {
						
						var timeArray = [
							'minutos',
							'segundos',
							'horas',
							'm',
							's',
							'h'
						];

						// Verificando se o usuário colocou apenas números.
						if(!isNaN(args[2])) {

							// Caso a verificação esteja correta, irá executar o código abaixo.
							return message.channel.send(guiaisNaN);

						}

						// Verificando se o usuário usou as extensões, h | m | s.
						if(!args[2].includes(timeArray)) {

							// Caso a verificação esteja correta, irá executar o código abaixo.
							return message.channel.send(guiaTimeArray)


						}

						if(args[2].includes('m') || args[2].includes('minutos')) {
						
						// Caso todas as verificações feitas estejam tudo certas, finalmente o usuário será mutado.
						message.channel.send(processo)
						.then(msg => {
							setTimeout(function() {
                                target.roles.add(role);
								msg.edit(sucessMinutos);
							}, 3000);
					})

                    // Marcando o tempo que o mute acabará
                    setTimeout(() => {
                        target.roles.remove(role);
                    }, m);
					}

					if(args[2].includes('s') || args[2].includes('segundos')) {
						
						// Caso todas as verificações feitas estejam tudo certas, finalmente o usuário será mutado.
						message.channel.send(processo)
						.then(msg => {
							setTimeout(function() {
                                target.roles.add(role);
								msg.edit(sucessSegundos);
							}, 3000);
					})

                    // Marcando o tempo que o mute acabará
                    setTimeout(() => {
                        target.roles.remove(role);
                    }, s);
					}

					if(args[2].includes('h') || args[2].includes('horas')) {
						
						// Caso todas as verificações feitas estejam tudo certas, finalmente o usuário será mutado.
						message.channel.send(processo)
						.then(msg => {
							setTimeout(function() {
                                target.roles.add(role);
								msg.edit(sucessHoras);
							}, 3000);
					})

                    // Marcando o tempo que o mute acabará
                    setTimeout(() => {
                        target.roles.remove(role);
                    }, h);
					}

				    // Verificando o contrário da verificação anterior.
				    } else {

						// Caso todas as verificações feitas estejam tudo certas, finalmente o usuário será mutado.
						if(args[2].includes('m') || args[2].includes('minutos')) {
						
							// Caso todas as verificações feitas estejam tudo certas, finalmente o usuário será mutado.
							message.channel.send(processo)
							.then(msg => {
								setTimeout(function() {
									target.roles.add(role);
									msg.edit(sucessReason2);
								}, 3000);
						})
	
						// Marcando o tempo que o mute acabará
						setTimeout(() => {
							target.roles.remove(role);
						}, m);
						}
	
						if(args[2].includes('s') || args[2].includes('segundos')) {
							
							// Caso todas as verificações feitas estejam tudo certas, finalmente o usuário será mutado.
							message.channel.send(processo)
							.then(msg => {
								setTimeout(function() {
									target.roles.add(role);
									msg.edit(sucessReason1);
								}, 3000);
						})
	
						// Marcando o tempo que o mute acabará
						setTimeout(() => {
							target.roles.remove(role);
						}, s);
						}
	
						if(args[2].includes('h') || args[2].includes('horas')) {
							
							// Caso todas as verificações feitas estejam tudo certas, finalmente o usuário será mutado.
							message.channel.send(processo)
							.then(msg => {
								setTimeout(function() {
									target.roles.add(role);
									msg.edit(sucessReason3);
								}, 3000);
						})
	
						// Marcando o tempo que o mute acabará
						setTimeout(() => {
							target.roles.remove(role);
						}, h);
						}

				}

        }

					


			}

		}


	}

	// Mensagem Embed. Será enviada caso não mencione um usuário.
	const guia2 = new MessageEmbed()
		.setColor('#FF0000')
		.setDescription('<:cross:829822810884538378> Poucos argumentos foram atribuídos para a execução do comando.\n\n**Como usar:** `/unmute <user>`\n\n**Problemas:**\n<:cross:829822810884538378> `User:` é necessário que um usuário seja marcado.\n\n**Sinônimos:**\n<:warn:829823546733101057> `/desmutar`.\n\n**Argumentos:**\n<:cross:829822810884538378> `User:` Menção de usuário (@Draacxz#1953). O usuário tem que estar no servidor.\n<:cross:829822810884538378> `Time:` o tempo que irá durar o silenciamento.\n<:warn:829823546733101057> `Reason:` motivo pelo qual o usuário será punido com silenciamento.\n\n**Informações:**\n<:check:829822821337268255> - Atribuído.\n<:warn:829823546733101057> - Não atribuído / Não obrigatório.\n<:cross:829822810884538378> - Não atribuído / Obrigatório.\n`<Argumento>` - Obrigatório.\n`[Argumento]` - Opcional.')

	// Mensagem Embed. Será enviada caso o usuário não tenha permissão.
	const guiaBot2 = new MessageEmbed()
		.setColor('#FF0000')
		.setDescription('<:cross:829822810884538378> Ocorreu um erro na execução do comando.\n\n**Como usar:** `/unmute <user>`\n\n**Problemas:**\n<:cross:829822810884538378> `Permission:` é necessário que eu tenha a permissão `Gerenciar cargos` para prosseguir com o comando.\n\n**Sinônimos:**\n<:warn:829823546733101057> `/desmutar`.\n\n**Argumentos:**\n<:cross:829822810884538378> `User:` Menção de usuário (@Draacxz#1953). O usuário tem que estar no servidor.\n<:cross:829822810884538378> `Time:` o tempo que irá durar o silenciamento.\n<:warn:829823546733101057> `Reason:` motivo pelo qual o usuário será punido com silenciamento.\n\n**Informações:**\n<:check:829822821337268255> - Atribuído.\n<:warn:829823546733101057> - Não atribuído / Não obrigatório.\n<:cross:829822810884538378> - Não atribuído / Obrigatório.\n`<Argumento>` - Obrigatório.\n`[Argumento]` - Opcional.')

	// Mensagem Embed. Será enviada caso o usuário não tenha permissão.
	const guiaPermissions2 = new MessageEmbed()
        .setColor('#FF0000')
        .setDescription('<:cross:829822810884538378> Ocorreu um erro na execução do comando.\n\n**Como usar:** `/unmute <user>`\n\n**Problemas:**\n<:cross:829822810884538378> `Permission:` é necessário que você tenha a permissão `Gerenciar mensagens`.\n\n**Sinônimos:**\n<:warn:829823546733101057> `/desmutar`.\n\n**Argumentos:**\n<:cross:829822810884538378> `User:` Menção de usuário (@Draacxz#1953). O usuário tem que estar no servidor.\n<:cross:829822810884538378> `Time:` o tempo que irá durar o silenciamento.\n<:warn:829823546733101057> `Reason:` motivo pelo qual o usuário será punido com silenciamento.\n\n**Informações:**\n<:check:829822821337268255> - Atribuído.\n<:warn:829823546733101057> - Não atribuído / Não obrigatório.\n<:cross:829822810884538378> - Não atribuído / Obrigatório.\n`<Argumento>` - Obrigatório.\n`[Argumento]` - Opcional.')

	// Mensagem Embed. Será enviada caso o usuário não exista.
	const guiaError2 = new MessageEmbed()
		.setColor('#FF0000')
		.setDescription('<:cross:829822810884538378> Houve um erro nos argumentos que foram atribuídos para a execução do comando.\n\n**Como usar:** `/unmute <user>`\n\n**Problemas:**\n<:cross:829822810884538378> `User` deve ser um usuário válido.\n\n**Sinônimos:**\n<:warn:829823546733101057> `/desmutar`.\n\n**Argumentos:**\n<:cross:829822810884538378> `User:` Menção de usuário (@Draacxz#1953). O usuário tem que estar no servidor.\n<:cross:829822810884538378> `Time:` o tempo que irá durar o silenciamento.\n<:warn:829823546733101057> `Reason:` motivo pelo qual o usuário será punido com silenciamento.\n\n**Informações:**\n<:check:829822821337268255> - Atribuído.\n<:warn:829823546733101057> - Não atribuído / Não obrigatório.\n<:cross:829822810884538378> - Não atribuído / Obrigatório.\n`<Argumento>` - Obrigatório.\n`[Argumento]` - Opcional.')

	// Mensagem Embed. Será enviada caso o usuário seja @everyone.
	const guiaEveryone2 = new MessageEmbed()
		.setColor('#FF0000')
		.setDescription('<:cross:829822810884538378> Houve um erro nos argumentos que foram atribuídos para a execução do comando.\n\n**Como usar:** `/unmute <user>`\n\n**Problemas:**\n<:cross:829822810884538378> `User:` `@everyone` não é um usuário válido.\n\n**Sinônimos:**\n<:warn:829823546733101057> `/desmutar`.\n\n**Argumentos:**\n<:cross:829822810884538378> `User:` Menção de usuário (@Draacxz#1953). O usuário tem que estar no servidor.\n<:cross:829822810884538378> `Time:` o tempo que irá durar o silenciamento.\n<:warn:829823546733101057> `Reason:` motivo pelo qual o usuário será punido com silenciamento.\n\n**Informações:**\n<:check:829822821337268255> - Atribuído.\n<:warn:829823546733101057> - Não atribuído / Não obrigatório.\n<:cross:829822810884538378> - Não atribuído / Obrigatório.\n`<Argumento>` - Obrigatório.\n`[Argumento]` - Opcional.')

	// Mensagem Embed. Será enviada caso o usuário seja a mesma pessoa que executou o comando.
	const guiaSelf2 = new MessageEmbed()
		.setColor('#FF0000')
		.setDescription('<:cross:829822810884538378> Houve um erro nos argumentos que foram atribuídos para a execução do comando.\n\n**Como usar:** `/unmute <user>`\n\n**Problemas:**\n<:cross:829822810884538378> `User:` você não é um usuário válido.\n\n**Sinônimos:**\n<:warn:829823546733101057> `/desmutar`.\n\n**Argumentos:**\n<:cross:829822810884538378> `User:` Menção de usuário (@Draacxz#1953). O usuário tem que estar no servidor.\n<:cross:829822810884538378> `Time:` o tempo que irá durar o silenciamento.\n<:warn:829823546733101057> `Reason:` motivo pelo qual o usuário será punido com silenciamento.\n\n**Informações:**\n<:check:829822821337268255> - Atribuído.\n<:warn:829823546733101057> - Não atribuído / Não obrigatório.\n<:cross:829822810884538378> - Não atribuído / Obrigatório.\n`<Argumento>` - Obrigatório.\n`[Argumento]` - Opcional.')

	// Mensagem Embed. Será enviada caso o usuário seja a mesma pessoa que executou o comando.
	const guiaRole2 = new MessageEmbed()
		.setColor('#FF0000')
		.setDescription('<:cross:829822810884538378> Houve um erro nos argumentos que foram atribuídos para a execução do comando.\n\n**Como usar:** `/unmute <user>`\n\n**Problemas:**\n<:cross:829822810884538378> `User` não está silenciado.\n\n**Sinônimos:**\n<:warn:829823546733101057> `/desmutar`.\n\n**Argumentos:**\n<:cross:829822810884538378> `User:` Menção de usuário (@Draacxz#1953). O usuário tem que estar no servidor.\n<:cross:829822810884538378> `Time:` o tempo que irá durar o silenciamento.\n<:warn:829823546733101057> `Reason:` motivo pelo qual o usuário será punido com silenciamento.\n\n**Informações:**\n<:check:829822821337268255> - Atribuído.\n<:warn:829823546733101057> - Não atribuído / Não obrigatório.\n<:cross:829822810884538378> - Não atribuído / Obrigatório.\n`<Argumento>` - Obrigatório.\n`[Argumento]` - Opcional.')

	const processo2 = new MessageEmbed()
		.setColor('#E9FF00')
		.setDescription('<:warn:829823546733101057> O seu pedido para mutar tal usuário está sendo processado.')
		.setFooter('Este processo pode demorar alguns segundos.')
		.setTimestamp();

	// Messagem Embed. Caso seja não informado um motivo irá enviar esta mensagem.
   	const sucess2 = new MessageEmbed()
		.setColor('#30FF00')
		.setDescription(`<:check:829822821337268255> O usuário informado acaba de mutado pelo motivo: ***Indeterminado***.\nDuração: ***${time} Minutos***.`);

	
	// Verificando se o comando for igual à String dita abaixo.
	if(command === 'unmute' || command === 'desmutar') {

		// Verificando se o bot tem as permissões necessárias
		if(!message.guild.me.hasPermission('MANAGE_ROLES')) return message.channel.send(`${message.author}`, guiaBot2);
			

		// Verificando se o usuário não possui a permissão de Banir Usuários.
		if(!message.member.hasPermission('MANAGE_MESSAGES')) {

			// Caso a verificação esteja correta, irá executar o código abaixo.
			return message.channel.send(`${message.author}`, guiaPermissions2);

		// Verificando o contrário da verificação anterior.
		} else {


			// Verificando se realmente há um usuário que foi marcado.
			if(!target) {
					
				// Verificando se o argumento0 é idêntico a "@Everyone"
				if(args[0] === '@everyone') {

					// Caso a verificação esteja correta, irá executar o código abaixo.
					return message.channel.send(`${message.author}`, guiaEveryone2);

				}

				// Verificando se está faltando o argumento0
				if(!args[0]) {

					// Caso a verificação esteja correta, irá executar o código abaixo.
					return message.channel.send(`${message.author}`, guia2);

				// Verificando o contrário da verificação anterior.
				} else {

					// Caso a verificação esteja correta, irá executar o código abaixo.
					return message.channel.send(`${message.author}`, guiaError2)

				}

			// Verificando o contrário da verificação anterior.
			} else {


				// Verificando se o usuário informado já está silenciado.
				if(!target.roles.cache.find(r => r.id === '827972182839132180')) {

					// Caso a verificação esteja correta, irá executar o código abaixo.
					return message.channel.send(guiaRole2)

				// Verificando o contrário da verificação anterior.
				} else {

					// Caso todas as verificações feitas estejam tudo certas, finalmente o usuário será mutado.
					message.channel.send(processo2)
					.then(msg => {
						setTimeout(function() {
							target.roles.remove(role2);
							msg.edit(sucess2);
						}, 3000);

					})

				}


			}


		}


	}
        
})

}