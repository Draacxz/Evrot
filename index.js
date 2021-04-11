// Variáveis necessárias para o funcionamento do bot.
const Discord = require('discord.js');
const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]});

// Variáveis necessárias para registrar os comandos.
const ban = require('./comandos/moderation/ban');
const kick = require('./comandos/moderation/kick');
const mute = require('./comandos/moderation/mute');
const mamar = require('./comandos/fun/mamar');
const mcserver = require('./comandos/minecraft/mcserver');
const clear = require('./comandos/others/clear');
const mcskin = require('./comandos/minecraft/mcskin');
const mcconquista = require('./comandos/minecraft/mcconquista');
const mchead = require('./comandos/minecraft/mchead');
const mcuuid = require('./comandos/minecraft/mcuuid');
const mcavatar = require('./comandos/minecraft/mcavatar');
const flipcoin = require('./comandos/fun/flipcoin');
const escolha = require('./comandos/fun/escolha');
const maconha = require('./comandos/fun/maconha');
const guarana = require('./comandos/fun/guarana');
const perguntar = require('./comandos/fun/perguntar');
const coca = require('./comandos/fun/coca');
const coffee = require('./comandos/fun/coffee');
const autor = require('./comandos/others/autor');
const avatar = require('./comandos/fun/avatar');
const anunciar = require('./comandos/others/anunciar');
const corona = require('./comandos/corona/corona');
const ping = require('./comandos/others/ping');

// Variável necessária para puxar o token do bot na config.json.
const {token} = require('./config.json');
const ajuda = require('./comandos/others/ajuda');


// Client que executará todo código que estiver dentro dele assim que o bot iniciar.
client.on('ready', () => {

    // Código feito para alterar o status do bot.
    client.user.setPresence({
        status: 'idle'
    });


    // Tirando o limites de comandos.
    client.setMaxListeners(0);

    // Código enviará mensagens para console assim que o bot iniciar.
    console.log(`Logado com sucesso como ${client.user.tag}.`)

    // Código feito para definir uma atividade no status do bot, como: "Assistindo", "Ouvindo", "Transmintindo".
    client.user.setActivity('Anny ❤️', {type: "LISTENING"})


    // Exportação feita para registrar o arquivo JavaScript.
    ban(client);
    kick(client);
    mcavatar(client);
    mcuuid(client);
    mcserver(client);
    clear(client);
    perguntar(client);
    mchead(client);
    escolha(client);
    ping(client);
    mcconquista(client);
    mute(client);
    ajuda(client);
    guarana(client);
    mamar(client);
    coca(client);
    mcskin(client);
    avatar(client);
    corona(client);
    anunciar(client);
    flipcoin(client);
    maconha(client);
    coffee(client);
    autor(client);

})

// Código feito para interligar toda a source com o bot.
client.login(token);