
const {prefix} = require('../../config.json');
const pagination = require('discord.js-pagination');
const { MessageEmbed } = require('discord.js');

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

        const Principal = new MessageEmbed()
            .setAuthor(message.guild.name, message.guild.iconURL())
            .setColor('#006BFF')
            .setDescription(
                '📂 **Categorias:** *Minecraft, Moderação, Fun, Outros e Corona.*\n\n' +
                '📋 **Opções:**\n\n' +
                '▶️ - Próxima página.\n' +
                '◀️ - Página anterior.\n\n' +
                '☎️ - Em casos de dúvidas / problemsa contate o autor do bot no privado.'
            )
            .setFooter('Página 1 / 6.')
            .setTimestamp();


        const Minecraft = new MessageEmbed()
            .setAuthor(message.guild.name, message.guild.iconURL())
            .setColor('#006BFF')
            .setDescription(
                '📂 **Minecraft**\n\n' +
                `**${prefix}mcavatar** - Comando feito para adquirir o Avatar da skin informada. \n` +
                `**${prefix}mcconquista** - Comando feito para criar mensagens em design de conquista no minecraft. \n` +
                `**${prefix}mchead** - Comando feito para adquirir a Cabeça da skin informada. \n` +
                `**${prefix}mcserver** - Comando feito para ter mais informações sobre um servidor de minecraft. \n` +
                `**${prefix}mcskin** - Comando feito para visualizar a skin informada. \n` +
                `**${prefix}mcuuid** - Comando feito para adquirir o **UUID** do usuário informado. \n`
            )
            .setFooter('Página 2 / 6.')
            .setTimestamp();

        const Moderacao = new MessageEmbed()
            .setAuthor(message.guild.name, message.guild.iconURL())
            .setColor('#006BFF')
            .setDescription(
                '📂 **Moderação**\n\n' +
                `**${prefix}ban** - Comando feito para banir o usuário informado. \n` +
                `**${prefix}mute** - Comando feito para silenciar o usuário informado. \n` +
                `**${prefix}kick** - Comando feito para expulsar o usuário informado. \n` +
                `**${prefix}clear** - Comando feito para limpar o chat. \n` +
                `**${prefix}anunciar** - Comando feito para realizar anúncios. \n`
            )
            .setFooter('Página 3 / 6.')
            .setTimestamp();

        const Fun = new MessageEmbed()
            .setAuthor(message.guild.name, message.guild.iconURL())
            .setColor('#006BFF')
            .setDescription(
                '📂 **Fun / Diversão**\n\n' +
                `**${prefix}coca** - Comando feito para adquirir uma coca geladinha. \n` +
                `**${prefix}cafe** - Comando feito para adquirir um café quentinho. \n` +
                `**${prefix}escolha** - Comando feito para o bot realizar as escolhas por você. \n` +
                `**${prefix}flipcoin** - Comando feito para girar uma moeda, podendo obter **Cara** ou **Coroa**. \n` +
                `**${prefix}guarana** - Comando feito para adquirir um Refrigerante Guaraná geladinho. \n` +
                `**${prefix}maconha** - Comando feito para enrolar um baseado. \n` +
                `**${prefix}mamar** - Comando feito para mamar um usuário. \n` +
                `**${prefix}perguntar** - Comando feito para o bot responder suas perguntas com respostas aleatórias.` 
            )
            .setFooter('Página 4 / 6.')
            .setTimestamp();


        const Outros = new MessageEmbed()
            .setAuthor(message.guild.name, message.guild.iconURL())
            .setColor('#006BFF')
            .setDescription(
                '📂 **Outros**\n\n' +
                `**${prefix}botinfo** - Comando feito para adquirir mais informações sobre o bot. \n` +
                `**${prefix}ping** - Comando feito para adquirir informações sobre a latência do discord. \n` +
                `**${prefix}ajuda** - Comando feito para adquirir mais informações sobre os comandos. ` 
            )
            .setFooter('Página 5 / 6.')
            .setTimestamp();

        const Corona = new MessageEmbed()
            .setAuthor(message.guild.name, message.guild.iconURL())
            .setColor('#006BFF')
            .setDescription(
                '📂 **Corona**\n\n' +
                `**${prefix}corona** - Comando feito para adquirir mais informações sobre os casos de Covid-19.` 
            )
            .setFooter('Página 6 / 6.')
            .setTimestamp();

            
        const pages = [
            Principal,
            Minecraft,
            Moderacao,
            Fun,
            Outros,
            Corona
        ];

        const emojilist = ["◀️", "▶️"];

        const timeout = '120000';


		
		// Verificando se o comando for igual à String dita abaixo.
		if(command === 'ajuda') {
            pagination(message, pages, emojilist, timeout);
		}
        
    })
}