//IMPORT CONFIG
  const config = require("../../config.json");



//ANNOUNCEMENTS ETC..
  function oznameni(message, Discord, client) {
    if (
      message.member.hasPermission("ADMINISTRATOR")
    ) {
      oznameniChannel = client.channels.cache.get(config.oznameniChannelId);
      let oznameniContent = message.content.replace(`${config.prefix}oznameni`, "");
      message.delete();
      oznameniChannel.send(oznameniContent).then(msg => {
        msg.react("📣")
        })
    } else {
      const Embed = new Discord.MessageEmbed()
        .setColor(config.barva)
        .setTitle(`🚪 | ${message.author.tag} Nemáš oprávnění napsat novinku`)
        .setDescription(
          `Tvá oprávnění nejsou dostatečně velká na to aby mohl/a napsat oznámení`
        )
        .setThumbnail(config.photo)
        .setFooter(config.footer, config.footerImage);
      message.channel.send(Embed)
    }
  }
  function anketa(message, Discord, client) {
    if (
      message.member.hasPermission("ADMINISTRATOR")
    ) {
      oznameniChannel = client.channels.cache.get(config.oznameniChannelId);
      let anketaContent = message.content.replace(`${config.prefix}anketa`, "");
      message.delete();
      oznameniChannel.send(anketaContent).then(msg => {
        msg.react("✅")
        msg.react("❎")
        })
    } else {
      const Embed = new Discord.MessageEmbed()
        .setColor(config.barva)
        .setTitle(`🚪 | ${message.author.tag} Nemáš oprávnění vytvořit anketu`)
        .setDescription(
          `Tvá oprávnění nejsou dostatečně velká na to aby mohl/a vytvořit anketu`
        )
        .setThumbnail(config.photo)
        .setFooter(config.footer, config.footerImage);
      message.channel.send(Embed)
    }
  }
  function novinky(message, Discord, client) {
    if (
      message.member.hasPermission("ADMINISTRATOR")
    ) {
      novinkyChannel = client.channels.cache.get(config.novinkyChannelId);
      let novinkyContent = message.content.replace(`${config.prefix}novinka`, "");
      message.delete();
      novinkyChannel.send(novinkyContent).then(msg => {
        msg.react("📰")
        })
    } else {
      const Embed = new Discord.MessageEmbed()
        .setColor(config.barva)
        .setTitle(`🚪 | ${message.author.tag} Nemáš oprávnění napsat novinku`)
        .setDescription(
          `Tvá oprávnění nejsou dostatečně velká na to aby mohl/a napsat novinku `
        )
        .setThumbnail(config.photo)
        .setFooter(config.footer, config.footerImage);
      message.channel.send(Embed)
    }
  }
  function giveaway(message, Discord, client) {
    if (
      message.member.hasPermission("ADMINISTRATOR")
    ) {
      oznameniChannel = client.channels.cache.get(config.oznameniChannelId);
      var randomUser = message.guild.members.cache.random();
      let giveawayContent = "Cena:" + message.content.replace(`${config.prefix}giveaway`, "") + ` Výherce: ${randomUser.user.tag}`;
      message.delete();
      oznameniChannel.send(giveawayContent).then(msg => {
        msg.react("🎉")
        })
    } else {
      const Embed = new Discord.MessageEmbed()
        .setColor(config.barva)
        .setTitle(`🚪 | ${message.author.tag} Nemáš oprávnění udělat giveaway`)
        .setDescription(
          `Tvá oprávnění nejsou dostatečně velká na to aby mohl/a udělat giveaway `
        )
        .setThumbnail(config.photo)
        .setFooter(config.footer, config.footerImage);
      message.channel.send(Embed)
    }
  }
  function partnership(message, Discord, client) {
    if (
      message.member.hasPermission("ADMINISTRATOR")
    ) {
      partnershipChannel = client.channels.cache.get(config.partnershipChannelId);
      let partnershipContent = message.content.replace(`${config.prefix}partnership`, "");
      message.delete();
      partnershipChannel.send(partnershipContent).then(msg => {
        msg.react("⭐")
        })
    } else {
      const Embed = new Discord.MessageEmbed()
        .setColor(config.barva)
        .setTitle(`🚪 | ${message.author.tag} Nemáš oprávnění udělat spolupráci`)
        .setDescription(
          `Tvá oprávnění nejsou dostatečně velká na to aby mohl/a udělat spolupráci `
        )
        .setThumbnail(config.photo)
        .setFooter(config.footer, config.footerImage);
      message.channel.send(Embed)
    }
  }



//ALERTS  
  function adminAlert(message, Discord) {
    message.channel.send(`<@&${config.adminRoleId}>`);
  }
  function modAlert(message, Discord) {
    message.channel.send(`<@&${config.modRoleId}>`);
  }

//OTHERS
  function sayCommand(message, Discord) {
    if (message.content === ".say") {
      const ErrorEmbed = new Discord.MessageEmbed()
        .setColor(config.barva)
        .setTitle(`**➤⌠⚠️⌡Error**`)
        .setDescription("Něco se pokazilo")
        .addFields({
          name: "Špatně jsi to napsal/a",
          value: "Funguje pouze " + "`" + ".say <zpráva>" + "`",
        })
        .setFooter(config.footer, config.footerImage);
      message.channel.send(ErrorEmbed);
    } else {
      let sayContent = message.content.replace(`${config.prefix}say`, "");
      message.delete();
      message.channel.send(sayContent);
    }
  }
  function permaInvite(message, Discord) {
    let invite = message.channel
      .createInvite({
        maxAge: 0,
        maxUses: 0,
      })
      .then((invite) => message.channel.send(`https://discord.gg/${invite.code}`))
      .catch(console.error);
  }

  

//EXPORT MODULES
  module.exports = {
    sayCommand,
    permaInvite,
    adminAlert,
    modAlert,
    oznameni,
    novinky,
    giveaway,
    partnership,
    anketa
  };
