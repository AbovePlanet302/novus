const Discord = require("discord.js");
if (condition) {

module.exports.run = async (bot, message, args) => {

let premiumRole = message.guild.roles.find(val => val.name === 'Crystal Premium');
let staffRole = message.guild.roles.find(val => val.name === 'Staff');

if(message.member.roles.has(premiumRole) || message.member.roles.has(staffRole));
    
    let joinembed = new Discord.RichEmbed()
    .setDescription("Join Information")
    .setColor("#d604cf")
    .addField("Username", message.author.name)
    .addField("Rank", "Crystal Premium")
    .addField("Premium", "True");


    message.channel.send(joinembed);
}

module.exports.help = {
  name:"premium"
}
}
