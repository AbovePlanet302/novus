const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setColor("#15f153")
    .setThumbnail(sicon)
    .setTitle("**Member Commands**","Eveyone can use this!")
    .addField("coins","coins")
    .addField("pay","pay <user> <amount>")
    .addField("botinfo","botinfo")
    .addField("serverinfo","serverinfo")
    .addField("level","level")
    .addField("**Moderation Commands**","Moderators+ can only use this!")
    .addField("say","say <desired message here>")
    .addField("ban","ban <user> <reason>")
    .addField("kick","kick <user> <reason>")
    .addField("clear","clear <desired number here>")
    .addField("**Owner Commands**","Owners can only use this!")
    .addField("addrole","addrole <user> <role>")
    .addField("removerole","removerole <user> <role>")
    .addField("prefix","prefix <desired prefix here>");

    message.channel.send(serverembed);
}

module.exports.help = {
  name:"help"
}
