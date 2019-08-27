const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setTitle("Join Information")
    .setColor("#d604cf")
    .setThumbnail(sicon)
    .addField("Server Owner", message.guild.owner)
    .addField("Name", message.guild.name)
    .addField("ID", message.guild.Id)
    .addField("Members", message.guild.memberCount);

    message.channel.send(botembed);
}

module.exports.help = {
  name:"owner"
}
