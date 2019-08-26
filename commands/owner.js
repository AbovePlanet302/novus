const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
    let sicon = message.guild.iconURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Bot Information")
    .setColor("#d604cf")
    .setThumbnail(sicon)
    .addField("Bot Name", bot.user.username)
    .addField("Created On", bot.user.createdAt)
    .addField("Author", "FluffyThePanda");

    message.channel.send(botembed);

    let serverembed = new Discord.RichEmbed()
    .setDescription("Server Information")
    .setColor("#d604cf")
    .setThumbnail(sicon)
    .addField("Server Name", message.guild.name)
    .addField("Server Owner", message.guild.owner)
    .addField("Created On", message.guild.createdAt)
    .addField("You Joined", message.member.joinedAt)
    .addField("Total Members", message.guild.memberCount);

    message.channel.send(serverembed);
}

module.exports.help = {
  name:"owner"
}