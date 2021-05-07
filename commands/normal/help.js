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
        value: "`" + `${config.prefix}help normal` + "`",
      })
      .addFields({
        name: "Commandy pro admin team",
        value: "`" + `${config.prefix}help admin` + "`",
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
      name: "Napíše tvou zprávu",
      value: "`" + `${config.prefix}say <zpráva>` + "`",
    })
    .addFields({
      name: "Vytvoří nekonečný invite",
      value: "`" + `${config.prefix}create invite` + "`",
    })
    .addFields({
      name: "Přivolá pomoc moderátorů",
      value: "`" + `${config.prefix}mod alert` + "`",
    })
    .addFields({
      name: "Přivolá pomoc adminů",
      value: "`" + `${config.prefix}admin alert` + "`",
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
        value: "`" + `${config.prefix}warn <@ping>` + "`",
      })
      .addFields({
        name: "Mutne uživatele",
        value: "`" + `${config.prefix}mute <@ping>` + "`",
      })
      .addFields({
        name: "Kickne uživatele",
        value: "`" + `${config.prefix}kick <@ping>` + "`",
      })
      .addFields({
        name: "Zabanuje uživatele",
        value: "`" + `${config.prefix}ban <@ping>` + "`",
      })
    .setFooter(config.footer, config.footerImage);
  message.channel.send(AdminHelpEmbed);
}

module.exports = {
  helpCommand,
  helpNormalCommand,
  helpAdminCommand,
};
