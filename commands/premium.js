const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let premiumRole = message.guild.roles.find(val => val.name === 'Crystal Premium');
let staffRole = message.guild.roles.find(val => val.name === 'Staff');

if(message.member.roles.has(premiumRole) || message.member.roles.has(staffRole))

    let serverembed = new Discord.RichEmbed()

    .setDescription("User Profile")

    .setColor("#fffc57")

    .addField("Username", `**${message.author.username}**`)

    .addField("Rank", "**Crystal Premium**")

    .addField("Premium", "**True**");



    message.channel.send(serverembed);

}



module.exports.help = {

  name:"premium"

}
