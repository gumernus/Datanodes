const config = require("../../config.json");


function Kick(message, Discord) {
  const { member, mentions } = message;
  if (
    member.hasPermission("ADMINISTRATOR") ||
    member.hasPermission("KICK_MEMBERS")
  ) {
    const target = mentions.users.first();
    if (target) {
      const targetMember = message.guild.members.cache.get(target.id);
      targetMember.kick();
      const Embed = new Discord.MessageEmbed()
        .setColor(config.barva)
        .setTitle(`🚪 | Uživatel ${target.tag} byl úspěšně vyhozen`)
        .setDescription(
          `Uživatel ${target.tag} byl vyhozen administrátorem ${message.author.tag}`
        )
        .setThumbnail(config.photo)
        .setFooter(config.footer, config.footerImage);
      message.channel.send(Embed);
    } else {
      const Embed = new Discord.MessageEmbed()
        .setColor(config.barva)
        .setTitle(`🚪 | ${message.author.tag} Specifikuj koho chceš vyhodit`)
        .setDescription(
          `Nejspíše jsi neoznačil/a nebo špatně napsal/a jméno uživatele kterého chceš vyhodit`
        )
        .setThumbnail(config.photo)
        .setFooter(config.footer, config.footerImage);
      message.channel.send(Embed);
    }
  } else {
    const Embed = new Discord.MessageEmbed()
      .setColor(config.barva)
      .setTitle(`🚪 | ${message.author.tag} Nemáš oprávnění vyhodit člena`)
      .setDescription(
        `Tvá oprávnění nejsou dostatečně velká na to aby mohla vyhodit člena`
      )
      .setThumbnail(config.photo)
      .setFooter(config.footer, config.footerImage);
    message.channel.send(Embed);
  }
}

function Ban(message, Discord) {
  const { member, mentions } = message;
  if (
    member.hasPermission("ADMINISTRATOR") ||
    member.hasPermission("BAN_MEMBERS")
  ) {
    const target = mentions.users.first();
    if (target) {
      const targetMember = message.guild.members.cache.get(target.id);
      targetMember.ban();
      const Embed = new Discord.MessageEmbed()
        .setColor(config.barva)
        .setTitle(`⛔️ | Uživatel ${target.tag} byl úspěšně zabanován`)
        .setDescription(
          `Uživatel ${target.tag} byl zabanován administrátorem ${message.author.tag}`
        )
        .setThumbnail(config.photo)
        .setFooter(config.footer, config.footerImage);
      message.channel.send(Embed);
    } else {
      const Embed = new Discord.MessageEmbed()
        .setColor(config.barva)
        .setTitle(`⛔️ | ${message.author.tag} Specifikuj komu chceš dát ban`)
        .setDescription(
          `Nejspíše jsi neoznačil/a nebo špatně napsal/a jméno uživatele kterého chceš zabanovat`
        )
        .setThumbnail(config.photo)
        .setFooter(config.footer, config.footerImage);
      message.channel.send(Embed);
    }
  } else {
    const Embed = new Discord.MessageEmbed()
      .setColor(config.barva)
      .setTitle(`⛔️ | ${message.author.tag} Nemáš oprávnění zabanovat člena`)
      .setDescription(
        `Tvá oprávnění nejsou dostatečně velká na to aby mohla zabanovat člena`
      )
      .setThumbnail(config.photo)
      .setFooter(config.footer, config.footerImage);
    message.channel.send(Embed);
  }
}

function Mute(message, Discord) {
  const { member, mentions } = message;
  if (
    member.hasPermission("ADMINISTRATOR") ||
    member.hasPermission("KICK_MEMBERS")
  ) {
    const autor = message.author.tag;
    const target = mentions.users.first();
    if (target) {
      let myrole = message.guild.roles.cache.find(
        (r) => r.id === config.muteRoleId
      );
      let targetmember = message.mentions.members.first();
      let member = message.guild.members.cache.get(targetmember.id);
      member.roles.add(myrole);

      const Embed = new Discord.MessageEmbed()
        .setColor(config.barva)
        .setTitle(`🔒 | Uživatel ${target.tag} dostal úspěšně mute`)
        .setDescription(
          `Uživatel ${target.tag} dostal mute od administrátora ${message.author.tag}`
        )
        .setThumbnail(config.photo)
        .setFooter(config.footer, config.footerImage);
      message.channel.send(Embed);
    } else {
      const Embed = new Discord.MessageEmbed()
        .setColor(config.barva)
        .setTitle(`🔒 | ${message.author.tag} Specifikuj komu chceš dát mute`)
        .setDescription(
          `Nejspíše jsi neoznačil/a nebo špatně napsal/a jméno uživatele kterému chceš dát mute`
        )
        .setThumbnail(config.photo)
        .setFooter(config.footer, config.footerImage);
      message.channel.send(Embed);
    }
  } else {
    const Embed = new Discord.MessageEmbed()
      .setColor(config.barva)
      .setTitle(`🔒 | ${message.author.tag} Nemáš oprávnění dát mute členovi`)
      .setDescription(
        `Tvá oprávnění nejsou dostatečně velká na to aby mohla mutnout člena`
      )
      .setThumbnail(config.photo)
      .setFooter(config.footer, config.footerImage);
    message.channel.send(Embed);
  }
}

function Warn(message, Discord) {
  const { member, mentions } = message;
  if (
    member.hasPermission("ADMINISTRATOR") ||
    member.hasPermission("KICK_MEMBERS")
  ) {
    const autor = message.author.tag;
    const target = mentions.users.first();
    if (target) {
      let targetmember = message.mentions.members.first();
      let member = message.guild.members.cache.get(targetmember.id);

      const Embed = new Discord.MessageEmbed()
        .setColor(config.barva)
        .setTitle(`🔒 | Uživatel ${target.tag} byl varován`)
        .setDescription(
          `Uživatele ${target.tag} varoval administrátor ${message.author.tag}`
        )
        .setThumbnail(config.photo)
        .setFooter(config.footer, config.footerImage);
      message.channel.send(Embed);
    } else {
      const Embed = new Discord.MessageEmbed()
        .setColor(config.barva)
        .setTitle(`🔒 | ${message.author.tag} Specifikuj komu chceš dát warn`)
        .setDescription(
          `Nejspíše jsi neoznačil/a nebo špatně napsal/a jméno uživatele kterému chceš dát warn`
        )
        .setThumbnail(config.photo)
        .setFooter(config.footer, config.footerImage);
      message.channel.send(Embed);
    }
  } else {
    const Embed = new Discord.MessageEmbed()
      .setColor(config.barva)
      .setTitle(`🔒 | ${message.author.tag} Nemáš oprávnění dát warn členovi`)
      .setDescription(
        `Tvá oprávnění nejsou dostatečně velká na to aby mohla varovat člena`
      )
      .setThumbnail(config.photo)
      .setFooter(config.footer, config.footerImage);
    message.channel.send(Embed);
  }
}

function Report(message, Discord, client) {
  reportChannel = client.channels.cache.get(config.reportsChannelId);
  reportChannel.send(`${message.author.tag} ${message.content}`);

}

function ReportByUser(message, Discord, client) {
    reportChannel = client.channels.cache.get(config.reportsChannelId);
    let reportContent = message.content.replace(`${config.prefix}report`, "");
    if (message.content.includes("https://discord.com/channels/")){
      message.delete();
      reportChannel.send(`Uživatel ${message.author.tag} reportoval zprávu ${reportContent}`);
    } else {
      message.channel.send(`${message.author.tag} musíš zkopírovat odkaz na zprávu kterou chceš reportovat.`)
    }
}



module.exports = {
  Kick,
  Ban,
  Mute,
  Warn,
  Report,
  ReportByUser
};

