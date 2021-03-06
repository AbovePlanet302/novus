const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const red = botconfig.red;
const green = botconfig.green;
const orange = botconfig.orange;
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {
    message.delete();
    if(args[0] == "help"){
      message.reply("Usage: !report <user> <reason>");
      return;
    }
    let rreason = args.join(" ").slice(22);
    let wwreason = args.join(" ").slice(22);
    if(!rreason) return errors.noReason(message.channel);
    if(!wweason) return errors.noReason(message.channel);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Verification Accepted / Awaiting Invite")
    .setColor(orange)
    .addField("Bot Username / Prefix", rreason)
    .addField("Bot Invite", wwreason)
    .addField("Accepted By", `${message.author}`);

    let reportschannel = message.guild.channels.find(`name`, "invites");
    if(!reportschannel) return message.channel.send("Couldn't find reports channel.");
    reportschannel.send(reportEmbed);

}

module.exports.help = {
  name: "accept"
}
