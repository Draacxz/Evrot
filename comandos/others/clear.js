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

        // Messagem Embed. Caso seja não informado um motivo irá enviar esta mensagem.
        const sucess = new MessageEmbed()
			.setColor('#30FF00')
			.setDescription(`<:check:829822821337268255> Foram deletadas **${args[0]} mensagens**.`);

        const guia = new MessageEmbed()
            .setColor('#FF0000')
                .setDescription(
                    '<:cross:829822810884538378> Poucos argumentos foram atribuídos para a execução do comando. \n\n' +
                    '**Como usar:** `/clear <amount>` \n\n' +
                    '**Problemas:** \n' +
                    '<:cross:829822810884538378> `Amount` não foi informado. \n\n' +
                    '**Sinônimos:** \n' +
                    '<:warn:829823546733101057> `/clear | /cc` \n\n' +
                    '**Argumentos:** \n' +
                    '<:cross:829822810884538378> `Amount:` Quantidade de mensagens que serão deletadas. \n\n' +
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
                    '**Como usar:** `/clear <amount>` \n\n' +
                    '**Problemas:** \n' +
                    '<:cross:829822810884538378> `Amount` deve estar entre os valores `2 e 100`. \n\n' +
                    '**Sinônimos:** \n' +
                    '<:warn:829823546733101057> `/clear | /cc` \n\n' +
                    '**Argumentos:** \n' +
                    '<:cross:829822810884538378> `Amount:` Quantidade de mensagens que serão deletadas. \n\n' +
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
                    '**Como usar:** `/clear <amount>` \n\n' +
                    '**Problemas:** \n' +
                    '<:cross:829822810884538378> `Permission:` Você não tem a permissão de `Gerenciar mensagens`. \n\n' +
                    '**Sinônimos:** \n' +
                    '<:warn:829823546733101057> `/clear | /cc` \n\n' +
                    '**Argumentos:** \n' +
                    '<:cross:829822810884538378> `Amount:` Quantidade de mensagens que serão deletadas. \n\n' +
                    '**Informações:** \n' +
                    '<:check:829822821337268255> - Atribuído. \n' +
                    '<:warn:829823546733101057> - Não atribuído / Não obrigatório. \n' +
                    '<:cross:829822810884538378> - Não atribuído / Obrigatório. \n' +
                    '`<Argumento>` - Obrigatório. \n' +
                    '`[Argumento]` - Opcional.' 
        )

        const guiaisNaN = new MessageEmbed()
            .setColor('#FF0000')
                .setDescription(
                    '<:cross:829822810884538378> Houve um erro nos argumentos que foram atribuídos para a execução do comando. \n\n' +
                    '**Como usar:** `/clear <amount>` \n\n' +
                    '**Problemas:** \n' +
                    '<:cross:829822810884538378> `Amount` não é um número válido. \n\n' +
                    '**Sinônimos:** \n' +
                    '<:warn:829823546733101057> `/clear | /cc` \n\n' +
                    '**Argumentos:** \n' +
                    '<:cross:829822810884538378> `Amount:` Quantidade de mensagens que serão deletadas. \n\n' +
                    '**Informações:** \n' +
                    '<:check:829822821337268255> - Atribuído. \n' +
                    '<:warn:829823546733101057> - Não atribuído / Não obrigatório. \n' +
                    '<:cross:829822810884538378> - Não atribuído / Obrigatório. \n' +
                    '`<Argumento>` - Obrigatório. \n' +
                    '`[Argumento]` - Opcional.' 
        )

        const guiaBot = new MessageEmbed()
            .setColor('#FF0000')
                .setDescription(
                    '<:cross:829822810884538378> Ocorreu um erro na execução do comando. \n\n' +
                    '**Como usar:** `/clear <amount>` \n\n' +
                    '**Problemas:** \n' +
                    '<:cross:829822810884538378> `Permission:` É necessário que eu tenha a permissão `Gerenciar mensagens`. \n\n' +
                    '**Sinônimos:** \n' +
                    '<:warn:829823546733101057> `/clear | /cc` \n\n' +
                    '**Argumentos:** \n' +
                    '<:cross:829822810884538378> `Amount:` Quantidade de mensagens que serão deletadas. \n\n' +
                    '**Informações:** \n' +
                    '<:check:829822821337268255> - Atribuído. \n' +
                    '<:warn:829823546733101057> - Não atribuído / Não obrigatório. \n' +
                    '<:cross:829822810884538378> - Não atribuído / Obrigatório. \n' +
                    '`<Argumento>` - Obrigatório. \n' +
                    '`[Argumento]` - Opcional.' 
        )
		
		// Verificando se o comando for igual à String dita abaixo.
		if(command === 'clear' || command === 'cc') {
			
            // Verificando se o bot e o usuário possuem as permissões necessárias.
            if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(guiaPermissions);
            if(!message.guild.me.hasPermission('MANAGE_MESSAGES')) return message.channel.send(guiaBot);

            // Varíavel para obter a string contida no argumento0.
            const value = args[0];

            // Verificando se há um valor informado.
            if(!value) {

                // Caso a verificação esteja correta, irá executar o código abaixo.
                return message.channel.send(guia);
             
            // Irá verificar o contrário da verificação anterior.
            } else {

                // Verificando se o argumento0 é realmente um número.
                if(isNaN(value)) {

                    // Caso a verificação esteja correta, irá executar o código abaixo.
                    return message.channel.send(guiaisNaN)

                }

                // Definindo limites da variável.
                if(value > 100 || value < 2) {

                // Caso a verificação esteja correta, irá executar o código abaixo.
                return message.channel.send(guiaLimites);

                }

                // Caso já tenha passado por todas as verificação e não houve nenhum problema, irá executar o código abaixo.
                message.channel.bulkDelete(value);
                message.channel.send(sucess);

            }



		}
        
    })
}