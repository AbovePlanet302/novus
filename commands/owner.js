const Discord = require("discord.js");
const ownerID = '612500043844550666';


module.exports.run = async (bot, message, args) => {
    let sicon = message.guild.iconURL;
    let joinembed = new Discord.RichEmbed()
    .setDescription("Join Information")
    .setColor("#d604cf")
    .setThumbnail(sicon)
    .addField("Server Owner", message.guild.owner)
    .addField("Name", message.guild.name)
    .addField("ID", message.guild.Id)
    .addField("Members", message.guild.memberCount);


    message.channel.send(joinembed);
}

module.exports.help = {
  name:"owner"
}
