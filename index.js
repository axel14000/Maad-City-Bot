const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = "!";

client.login(process.env.token);
client.on("ready", () => {
    console.log('bot prêt');
});

client.on('message', async message => {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if (message.content.startsWith("Bonjour") || message.content.startsWith("bonjour")) {
        message.reply("salut, comment ça va?");
        console.log('le bot dit bonjour et demande comment ça va?');
    }

    if (command === "serveur") {
        message.reply("le serveur se nomme **Maad City** et à 32 place de jeux.");
        consle.log('le bot donne toute les info du serveur');
    }

    if (message.content.startsWith("oui et toi")) {
        message.reply("je te remercie je vais toujours bien, tu peux aller voter sur https://gta.top-serveurs.net/maad-city-rp ainsi que vous @everyone :heart:");
        console.log('le bot remerci et donne le lien du vote');
    }
    if (message.content.startsWith === "non et toi"){
        message.reply("ah merde!! moi je vais bien merci. tu peux aller voter sur https://gta.top-serveurs.net/maad-city-rp ainsi que vous @everyone :heart:");
        console.log('le bot dit bonjour');
    }
    if (message.content.startsWith("bonne nuit") || message.content.startsWith("Bonne nuit")) {
        message.reply("bonne nuit à toi aussi moi je fais nuit blanche tous les jours xD");
        console.log('le bot dit bonne nuit en se la vantant')
    }

    if (command === "vote") {
        message.reply("@everyone Goo voteerrrr :heart: https://gta.top-serveurs.net/maad-city-rp");
        console.log('le bot donne le lien du vote');
    }
    if (command === 'clear') {
        const deleteCount = parseInt(args[0], 10);
        if (!deleteCount || deleteCount < 2 || deleteCount > 100)
            return message.reply("Merci de donner un nombre de 2 à 100 messages à supprimer.");
        const fetched = await message.channel.fetchMessages({
            limit: deleteCount
        });
        message.channel.bulkDelete(fetched)
            .catch(error => message.reply(`Erreur: ${error}`));
    }

});