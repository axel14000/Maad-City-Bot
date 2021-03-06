const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = "!";

client.login(process.env.token);
client.on("ready", () => {
    console.log('bot prêt et opérationel');
    client.user.setGame("!aide");

});

client.on('message', async message => {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    client.on("guildMemberAdd", function(member) {
        member.guild.channels.find("name", "arrivée-et-départ").sendMessage(" Bienvenue sur mon serveur " + member.toString());
        member.addRole(member.guild.roles.find("name", "Test"));
    });
    
    client.on("guildMemberRemove", function(member) {
        member.guild.channels.find("name", "arrivée-et-départ").sendMessage( member.toString() + "Nous a quitté ! ");
    });

    if (message.content.startsWith("Bonjour") || message.content.startsWith("bonjour") ||message.content.startsWith("Salut") || message.content.startsWith("salut") ){
        message.reply("Bonjour");
        console.log('le bot dit bonjour et demande comment ça va?');
    }

    if (message.content.startsWith("oui et toi") || message.content.startsWith("Oui et toi") || message.content.startsWith("Bien et toi") || message.content.startsWith("bien et toi")) {
        message.reply("je te remercie je vais toujours bien, tu peux aller voter sur https://gta.top-serveurs.net/maad-city-rp ainsi que vous @everyone :heart:");
        console.log('le bot remerci et donne le lien du vote');
    }
    if (message.content.startsWith("non et toi") ||message.content.startsWith("Non et toi") || message.content.startsWith("bof et toi") || message.content.startsWith("Bof et toi")) {
        message.reply("ah merde!! moi je vais bien merci. tu peux aller voter sur http://urlz.fr/6T3W ainsi que vous @everyone :heart:");
        console.log('le bot dit bonjour');
    }
    if (message.content.startsWith("bonne nuit") || message.content.startsWith("Bonne nuit")) {
        message.reply("bonne nuit à toi aussi moi je fais nuit blanche tous les jours xD");
        console.log('le bot dit bonne nuit en se la vantant')
    }

    if(message.content === prefix + "help"){
        var aide_embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle("Voici les commandes d'aide et différent amusement grace au bot!")
        .setDescription("je suis le bot du discord.")
        .addField("!help", "affiche les intéractions du bot")
        .addField("!info", "vous donne des infos sur le bot ainsi que le discord")
        .addField("!clear", "commande pour clear le chat (seulement pour les membre munit de la permission n'éssaire)")
        .addField("Bonjour", "entame une discusion avec le bot qui peut se continuer...")
        .setFooter("Menu d'aide")
        message.channel.sendMessage(aide_embed);
        console.log("un utilisateur a demandé de l'aide")
    }

    if(message.content === prefix + "info"){
        var info_embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle("voici les information sur moi et le serveur !")
        .addField(" :robot: Nom", `${client.user.tag}`, true)
        .addField("Descriminateur du bot :hash:", `#${client.user.discriminator}`)
        .addField("ID :id: ", `${client.user.id}`)
        .addField("Nombre de membres", message.guild.members.size)
        .addField("Nombre de catégories et de salon", message.guild.channels.size)
        .setFooter("Infos - Discord")
        message.channel.sendMessage(info_embed)
        console.log("Un utilisateur vien de demandé des Infos")
    }

    if (command === 'clear') {
        const deleteCount = parseInt(args[0], 10);
        if (!deleteCount || deleteCount < 2 || deleteCount > 1000)
            return message.reply("Merci de donner un nombre de 2 à 1000 messages à supprimer.");
        const fetched = await message.channel.fetchMessages({
            limit: deleteCount
        });
        message.channel.bulkDelete(fetched)
            .catch(error => message.reply(`Erreur: ${error}`));
    }

});

