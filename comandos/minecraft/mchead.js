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
            '**Como usar:** `/mchead <nick>` \n\n' +
            '**Problemas:** \n' +
            '<:cross:829822810884538378> `Nick` ainda não foi informado. \n\n' +
            '**Argumentos:** \n' +
            '<:cross:829822810884538378> `Nick:` Pseudônimo da conta de um minecraft original. \n\n' +
            '**Informações:** \n' +
            '<:check:829822821337268255> - Atribuído. \n' +
            '<:warn:829823546733101057> - Não atribuído / Não obrigatório. \n' +
            '<:cross:829822810884538378> - Não atribuído / Obrigatório. \n' +
            '`<Argumento>` - Obrigatório. \n' +
            '`[Argumento]` - Opcional.' 
            )

        const sucess = new MessageEmbed()
            .setColor('#30FF00')
            .setDescription('<:check:829822821337268255> Aqui está a cabeça da skin do usuário informado')
            .setImage(`http://cravatar.eu/helmhead/${args[0]}/300.png`)

		// Verificando se o comando for igual à String dita abaixo.
		if(command === 'mchead') {
			if(!args[0]) {

                return message.channel.send(guia);

            } else {
                
                return message.channel.send(sucess);

            }
		}
        
    })
}