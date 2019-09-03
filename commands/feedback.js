
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

    let rreason = args.join(" ").slice(0);

    if(!rreason) return errors.noReason(message.channel);



    let reportEmbed = new Discord.RichEmbed()

    .setDescription("New Feedback")

    .setColor(green)

    .addField("User", `${message.author}`)

    .addField("Server Name", message.guild.name)

    .addField("Feedback", rreason);

    bot.channels.get("618228346337361950").send(reportEmbed);



}



module.exports.help = {

  name: "feedback"

}
