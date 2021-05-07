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

function permaInvite(message, Discord) {
  let invite = message.channel.createInvite({
      maxAge: 0, 
      maxUses: 0 
    })
    .then(invite => message.channel.send(`https://discord.gg/${invite.code}`))
  .catch(console.error);
    
}

function adminAlert(message, Discord) {
  message.channel.send("<@&825457047054057530>")  
}

function modAlert(message, Discord) {
  message.channel.send("<@&825457047054057529>")  
}

function badWords (message, Discord) {
  forbidenWords = ["kokot", "piča", "debil", "zmrd", "čurák", "pica", "'Kokot", "Piča", "Debil", "Zmrd", "Čurák", "Pica"]
  for (var i = 0; i < forbidenWords.length; i++) {
    if (message.content.includes(forbidenWords[i])) {
      message.delete();
      return;
    }
  }
}


module.exports = {
  sayCommand,
  permaInvite,
  adminAlert,
  modAlert,
  badWords
};

