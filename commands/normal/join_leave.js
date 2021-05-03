const config = require("../../config.json");
const { newObj, updateObj, deleteObj } = require("../../database/database");

function joinCommand(member, client, Discord) {
  let joinChannel = client.channels.cache.get("825472063804276746");
  let User = client.users.cache.get(member.id);
  newObj(User.tag, User.id);
  function changeChannelName(n) {
    var channel = client.channels.cache.get("825467962344603689");
    channel.setName(`➤⌠👪⌡ ${member.guild.memberCount} / 100`);
  }
  setTimeout(changeChannelName, 10000);

  const ServerJoinEmbed = new Discord.MessageEmbed()
    .setColor(config.barva)
    .setTitle(`**➤⌠👪⌡Update uživatele**`)
    .setDescription(`Uživatel **${User.tag}** se připojil.`)
    .setFooter(config.footer, config.footerImage);
  joinChannel.send(ServerJoinEmbed);

  const MemberJoinEmbed = new Discord.MessageEmbed()
    .setColor(config.barva)
    .setTitle(`**➤⌠🚀⌡Vítej ${User.tag}**`)
    .setDescription(
      "Vítej na discord serveru Tavarx! Doufáme že se ti tu bude líbit a rozhodně se podívej na pravidla."
    )
    .setFooter(config.footer, config.footerImage);
  member.send(MemberJoinEmbed);
}

function leaveCommand(member, client, Discord) {
  let leftChannel = client.channels.cache.get("825472092798976080");
  let User = client.users.cache.get(member.id);
  deleteObj(User.id);

  const ServerLeaveEmbed = new Discord.MessageEmbed()
    .setColor(config.barva)
    .setTitle(`**➤⌠👪⌡Update uživatele**`)
    .setDescription(`Uživatel **${User.tag}** odešel.`)
    .setFooter(config.footer, config.footerImage);
  leftChannel.send(ServerLeaveEmbed);
}

module.exports = {
  joinCommand,
  leaveCommand,
};
