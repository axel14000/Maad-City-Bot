const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = "!";

client.login(process.env.token);
client.on("ready", () => {
    console.log('bot prêt');
} );

client.on('message', message => {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if(message.content.startsWith("Bonjour") || message.content.startsWith("bonjour")){
        message.reply("salut, comment ça va?");
        console.log('le bot dit bonjour et demande comment ça va?');
    }

    if(message.content.startsWith === "oui et toi"){
        message.reply("je te remercie je vais toujour bien, tu peut allez voté sur https://gta.top-serveurs.net/maad-city-rp ainsi que vous @everyone :heart:");
        console.log('le bot remerci et donne le lien du vote');
}

    if(command === "vote"){
        message.reply("@everyone Goo voteerrrr :heart: https://gta.top-serveurs.net/maad-city-rp");
        console.log('le bot donne le lien du vote');
    }
});