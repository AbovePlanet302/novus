const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setTitle("New Update!")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .setDescription("We're online 24/7!");

    message.channel.send(botembed);
}

module.exports.help = {
  name:"update"
}
