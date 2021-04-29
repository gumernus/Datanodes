const config = require("../../config.json");

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
    let sayContent = message.content.replace(".say ", "");
    message.delete();
    message.channel.send(sayContent);
  }
}

module.exports = {
  sayCommand,
};
