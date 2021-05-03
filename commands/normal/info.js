const config = require("../../config.json");

function userInfo (message, Discord) {
  console.log(message)
    const UserInfoEmbed = new Discord.MessageEmbed()
    .setColor(config.barva)
    .setTitle(`**➤⌠👪⌡Update uživatele**`)
    .setDescription(`Informace o serveru`)
    .addFields({
        name: "Jméno",
        value: "`" + message.author.tag + "`",
      })
      .addFields({
        name: "Přezdívka",
        value: "`" + `${message.author.nickname ? `${message.author.nickname}` : 'nemá přezdívku'}` + "`", //nedoděláno (nefunguje)
      })
      .addFields({
        name: "Bot",
        value: "`" + `${message.author.bot ? `ano je bot` : 'není bot'}` + "`",
      })

    .setFooter(config.footer, config.footerImage);
  message.channel.send(UserInfoEmbed);
}

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
        value: "`" + message.guild.memberCount + "`",
      })
      .addFields({
        name: "Počet rolí",
        value: "`" + message.guild.roles.cache.size + "`",
      })
      .addFields({
        name: "Počet emoji",
        value: "`" + message.guild.emojis.cache.size + "`",
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
    userInfo,
    serverInfo
}
