const config = require("../../config.json");

function serverInfo (message, Discord) {
    const ServerInfoEmbed = new Discord.MessageEmbed()
    .setColor(config.barva)
    .setTitle(`**➤⌠👪⌡Update uživatele**`)
    .setDescription(`Informace o serveru`)
    .addFields({
        name: "Název serveru",
        value: "`" + message.guild.name + "`",
      })
      .addFields({
        name: "Majitel serveru",
        value: "`" + message.guild.owner.user.tag.toString() + "`",
      })
      .addFields({
        name: "Region",
        value: "`" + message.guild.region + "`",
      })
      .addFields({
        name: "Počet členů",
        value: "`" + message.guild.memberCount + "`", inline: true
      })
      .addFields({
        name: "Počet rolí",
        value: "`" + message.guild.roles.cache.size + "`", inline: true
      })
      .addFields({
        name: "Počet emoji",
        value: "`" + message.guild.emojis.cache.size + "`", inline: true
      })
      .addFields({
        name: "Čas vytvoření serveru",
        value: "`" + message.guild.createdAt.toLocaleString() + "`",
      })
      .addFields({
        name: "Úroveň verifikace",
        value: "`" + message.guild.verificationLevel + "`",
      })
    .setFooter(config.footer, config.footerImage);
  message.channel.send(ServerInfoEmbed);
}

module.exports = {
    serverInfo
}
