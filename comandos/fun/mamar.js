// Puxa a variável prefix localizada na config jhonson
const { MessageEmbed } = require('discord.js');
const {prefix} = require('../../config.json');

// Uma forma de exportar o arquivo no index.js = comando(client).
module.exports = (client) => {
	
	// Evento de mensagem. // O async é utilizado para o termo "await" funcionar.
    client.on('message', async message => {

        // Código utilizado para obter o usuário que foi marcado.
        const target = message.mentions.members.first();

        // ArrayList contendo as frases que serão utilizadas na execução do comando.
        var frases = [
            `<:heart:830223825206640640> O(a) ${message.author} acabou de mamar ${target} de uma forma nunca vista antes.`,
            `<:heart:830223825206640640> Eita a mamada que o(a) ${message.author} acabou de dar para ${target} não foi normal.`,
            `<:heart:830223825206640640> Misericórdia que mamada surreal que o(a) ${message.author} acabou de fazer em ${target}.`,
            `<:heart:830223825206640640> O(a) ${target} acabou de botar ${message.author} para mamar.`,
            `<:heart:830223825206640640> Meu deus, o(a) ${message.author} acabou de mamar ${target} e fez uma cara totalmente praz...`
        ];

        // ArrayList contendo as cores que serão utilizadas na execução do comando.
        var cores = [
            `#FFA600`,
            `#FFFB00`,
            `#9FFF00`,
            `#00FF25`,
            `#00FF7E`,
            `#00FFD3`,
            `#00D7FF`,
            `#0082FF`,
            `#0016FF`,
            `#6500FF`,
            `#A700FF`,
            `#E100FF`,
            `#FF00B5`,
            `#FF0064`,
            `#FF0032`,
            `#ABABAB`,
            `#90E9F6`,
            `#FFFFFF`,
            `#98FF00`,
            `#89EF9D`,
            `#D789EF`,
            `#EF89C7`,
            `#EF8989`
        ];

        // ArrayList contendo as imagens que serão utilizadas na execução do comando.
        var imgs = [
            'https://media1.tenor.com/images/ea9a07318bd8400fbfbd658e9f5ecd5d/tenor.gif?itemid=12612515',
            'https://media1.tenor.com/images/b8d0152fbe9ecc061f9ad7ff74533396/tenor.gif?itemid=5372258',
            'https://media1.tenor.com/images/6f455ef36a0eb011a60fad110a44ce68/tenor.gif?itemid=13658106',
            'https://media1.tenor.com/images/e00f3104927ae27d7d6a32393d163176/tenor.gif?itemid=12192866',
            'https://media1.tenor.com/images/230e9fd40cd15e3f27fc891bac04248e/tenor.gif?itemid=14751754',
            'https://media1.tenor.com/images/34ecc943dd11f0c55689e25f1bacddfb/tenor.gif?itemid=14816388',
            'https://media1.tenor.com/images/3deb7cd6c872b3774485ae2b3b2f657c/tenor.gif?itemid=13907866',
            'https://media1.tenor.com/images/ed08cf43156133b615d427773005083c/tenor.gif?itemid=15810155',
            'https://media1.tenor.com/images/2182d81bc459732fdf9bf94d1dd068c4/tenor.gif?itemid=6155634',
            'https://media1.tenor.com/images/105a7ad7edbe74e5ca834348025cc650/tenor.gif?itemid=9158317',
            'https://media1.tenor.com/images/503bb007a3c84b569153dcfaaf9df46a/tenor.gif?itemid=17382412'
        ];

        // Código utilizado para receber um resultado aleatório baseado na quantidade de itens presente na ArrayList.
        var randomFrases = frases[Math.floor(Math.random() * frases.length)];
        var randomImgs = imgs[Math.floor(Math.random() * imgs.length)];
        var randomCores = cores[Math.floor(Math.random() * cores.length)];

    // Mensagens Embeds. Utilizadas para melhorar a estética do bot.

        // Mensagem Embed. Será enviada caso não mencione um usuário.
        const guia = new MessageEmbed()
            .setColor('#FF0000')
            .setDescription('<:cross:829822810884538378> Poucos argumentos foram atribuídos para a execução do comando.\n\n**Como usar:** `/mamar <user>`\n\n**Problemas:**\n<:cross:829822810884538378> `User:` é necessário que um usuário seja marcado.\n\n**Argumentos:**\n<:cross:829822810884538378> `User:` Menção de usuário (@Draacxz#1953). O usuário tem que estar no servidor.\n\n**Informações:**\n<:check:829822821337268255> - Atribuído.\n<:warn:829823546733101057> - Não atribuído / Não obrigatório.\n<:cross:829822810884538378> - Não atribuído / Obrigatório.\n`<Argumento>` - Obrigatório.\n`[Argumento]` - Opcional.')
		
        // Mensagem Embed. Será enviada caso o usuário não exista.
        const guiaError = new MessageEmbed()
            .setColor('#FF0000')
            .setDescription('<:cross:829822810884538378> Houve um erro nos argumentos que foram atribuídos para a execução do comando.\n\n**Como usar:** `/mamar <user>`\n\n**Problemas:**\n<:cross:829822810884538378> `User` deve ser um usuário válido.\n\n**Argumentos:**\n<:cross:829822810884538378> `User:` Menção de usuário (@Draacxz#1953). O usuário tem que estar no servidor.\n\n**Informações:**\n<:check:829822821337268255> - Atribuído.\n<:warn:829823546733101057> - Não atribuído / Não obrigatório.\n<:cross:829822810884538378> - Não atribuído / Obrigatório.\n`<Argumento>` - Obrigatório.\n`[Argumento]` - Opcional.')

        // Mensagem Embed. Será enviada caso o usuário seja @everyone.
         const guiaEveryone = new MessageEmbed()
            .setColor('#FF0000')
            .setDescription('<:cross:829822810884538378> Houve um erro nos argumentos que foram atribuídos para a execução do comando.\n\n**Como usar:** `/mamar <user>`\n\n**Problemas:**\n<:cross:829822810884538378> `User:` `@everyone` não é um usuário válido.\n\n**Argumentos:**\n<:cross:829822810884538378> `User:` Menção de usuário (@Draacxz#1953). O usuário tem que estar no servidor.\n\n**Informações:**\n<:check:829822821337268255> - Atribuído.\n<:warn:829823546733101057> - Não atribuído / Não obrigatório.\n<:cross:829822810884538378> - Não atribuído / Obrigatório.\n`<Argumento>` - Obrigatório.\n`[Argumento]` - Opcional.')

        // Mensagem Embed. Será enviada caso o usuário seja a mesma pessoa que executou o comando.
        const guiaSelf = new MessageEmbed()
            .setColor('#FF0000')
            .setDescription('<:cross:829822810884538378> Houve um erro nos argumentos que foram atribuídos para a execução do comando.\n\n**Como usar:** `/mamar <user>`\n\n**Problemas:**\n<:cross:829822810884538378> `User:` você não é um usuário válido.\n\n**Argumentos:**\n<:cross:829822810884538378> `User:` Menção de usuário (@Draacxz#1953). O usuário tem que estar no servidor.\n\n**Informações:**\n<:check:829822821337268255> - Atribuído.\n<:warn:829823546733101057> - Não atribuído / Não obrigatório.\n<:cross:829822810884538378> - Não atribuído / Obrigatório.\n`<Argumento>` - Obrigatório.\n`[Argumento]` - Opcional.')

        // Mensagem Embed. Será enviada caso o comando seja feito da maneira certa.
        const mamarSucess = new MessageEmbed()
            .setColor(randomCores)
            .setImage(randomImgs)
            .setDescription(randomFrases);


		// Verificando se a mensagem não começou com prefix e se o autor da mensagem é um bot.
        if(!message.content.startsWith(prefix) || message.author.bot) return;
	
		// Variável projetada para adquirir os argumentos de cada comando. (Exemplo: /argumento args[0] args[1] args[2])
        const args = message.content.slice(prefix.length).trim().split(/ +/);
		
        // Variável projetada para adquirir o argumento "comando" = "/argumento".
        const command = args.shift().toLowerCase();

        // Verificando se o comando for igual à String dita abaixo.
		if(command === 'mamar') {

            // Verificando se não mencionou um usuário.
			if(!target) {

                // Verificando se o argumento 0 é igual a @everyone.
                if(args[0] === '@everyone') {

                    // Caso a verificação esteja correta, irá executar o código abaixo.
                    return message.channel.send(`${message.author}`, guiaEveryone)

                }
                
                // Verificando se há o argumento 0.
                if(!args[0]) {

                    // Caso a verificação esteja correta, irá executar o código abaixo.
                    return message.channel.send(`${message.author}`, guia)

                // Verificando o contrário da verificação anterior.
                } else {

                    // Caso a verificação esteja correta, irá executar o código abaixo.
                    return message.channel.send(`${message.author}`, guiaError)

                }

            // Verificando o contrário da verificação anterior.
            } else {

                // Verificando se o ID do usuário mencionado é o mesmo ID do autor da mensagem.
                if(target.id === message.author.id) {

                    // Caso a verificação esteja correta, irá executar o código abaixo.
                    return message.channel.send(guiaSelf)

                }

                // Caso todas as verificações feitas anteriormentes estejam corretas, irá executar o código abaixo.
                return message.channel.send(mamarSucess)

            }

		}
        
    })
}