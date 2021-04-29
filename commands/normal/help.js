const config = require("../../config.json");

function helpCommand(message, Discord) {
  const MainHelpEmbed = new Discord.MessageEmbed()
    .setColor(config.barva)
    .setTitle(`**➤⌠🌍⌡Informace**`)
    .setDescription(
      "Informace o možných commandech"
    )
    .addFields({
        name: "Commandy pro členy serveru",
        value: "`" + ".help normal" + "`",
      })
      .addFields({
        name: "Commandy pro admin team",
        value: "`" + ".help admin" + "`",
      })
    
    .setFooter(config.footer, config.footerImage);
  message.channel.send(MainHelpEmbed);
}

function helpNormalCommand(message, Discord) {
  const NormalHelpEmbed = new Discord.MessageEmbed()
    .setColor(config.barva)
    .setTitle(`**➤⌠🌍⌡Informace pro členy**`)
    .setDescription("Veškeré commandy pro členy serveru.")
    .addFields({
      name: "Přivolá pomoc admin teamu",
      value: "`" + ".alert" + "`",
    })
    .addFields({
      name: "Napíše tvou zprávu",
      value: "`" + ".say <zpráva>" + "`",
    })
    .setFooter(config.footer, config.footerImage);
  message.channel.send(NormalHelpEmbed);
}

function helpAdminCommand(message, Discord) {
  const AdminHelpEmbed = new Discord.MessageEmbed()
    .setColor(config.barva)
    .setTitle(`**➤⌠🌍⌡Informace pro moderátory a adminy**`)
    .setDescription( "Veškeré commandy pro admin team."
    )
    .addFields({
        name: "Varuje uživatele",
        value: "`" + ".warn <@ping>" + "`",
      })
      .addFields({
        name: "Mutne uživatele",
        value: "`" + ".mute <@ping>" + "`",
      })
      .addFields({
        name: "Kickne uživatele",
        value: "`" + "kick <@ping>" + "`",
      })
      .addFields({
        name: "Zabanuje uživatele",
        value: "`" + ".ban <@ping>" + "`",
      })
    .setFooter(config.footer, config.footerImage);
  message.channel.send(AdminHelpEmbed);
}

module.exports = {
  helpCommand,
  helpNormalCommand,
  helpAdminCommand,
};
