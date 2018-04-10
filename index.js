const Discord = require('Discord.js');

const client = new Discord.Client();

var prefix = "!";

client.login("NDMzMDI2Mzc4MTA0MDQ1NTg4.Da5meQ.3uahIbm5hND3vFz2GFcAshyRyZw");

client.on('message', message => {
    if(message.content === "Bonjour"){
        message.reply("salut, comment ça va?");
        console.log('le bot dit bonjour et demande comment ça va?');
    }

    if(message.content.startsWith === "oui et toi"){
        message.reply("je te remercie je vais toujour bien, tu peut allez voté sur https://gta.top-serveurs.net/maad-city-rp ainsi que vous @everyone :heart:");
        console.log('le bot remerci et donne le lien du vote');
}

    if(message.content === "!vote"){
        message.reply("@everyone Goo voteerrrr :heart: https://gta.top-serveurs.net/maad-city-rp");
        console.log('le bot donne le lien du vote');
    }
});

