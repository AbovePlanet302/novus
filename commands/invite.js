const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setColor("#d604cf")
    .setDescription("Sorry Novus is a private bot, please DM FluffyThePanda#8531 for the invite link!");

    message.channel.send(serverembed);
}

module.exports.help = {
  name:"invite"
}
