//IMPORT CONFIG
    const config = require("../../config.json");

    

//REPORT FUNCTIONS
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
  function badWords(message, Discord, client) {
    forbidenWords = [
      "mrdka",
      "kurva",
      "kokot",
      "piča",
      "debil",
      "zmrd",
      "čurák",
      "pica",
      "pico",
      "Mrdka",
      "Kurva",
      "Kokot",
      "Piča",
      "Debil",
      "Zmrd",
      "Čurák",
      "Pica",
      "Pico",
    ];
    doNotAlowedWords = [
      "discord.gg",
      "dsc.gg",
      "@here",
      "@everyone"
    ];

    forbidenWords2 = [
      "mrd*a",
      "kur*a",
      "kok*t",
      "pi*a",
      "deb*l",
      "zm*d",
      "čur*k",
      "pic*",
      "pic*",
      "Mrd*a",
      "Kur*a",
      "Kok*t",
      "Pi*a",
      "Deb*l",
      "Zm*d",
      "Čur*k",
      "Pi*a",
      "Pic*",
    ];
    doNotAlowedWords2 = [
      "discord.gg",
      "dsc.gg",
      "@he**",
      "@every***"
    ];
    for (var i = 0; i < forbidenWords.length; i++) {
      if (message.content.includes(forbidenWords[i])) {
          message.delete()
          Report(message, Discord, client);
          message.channel.send(`${message.author.tag} pozor na slovník. Konkrétně na slovo ${forbidenWords2[i]}`)
          return;
        }
      }
    }
    for (var i = 0; i < doNotAlowedWords.length; i++) {
      if (message.content.includes(doNotAlowedWords[i])) {
          message.delete()
          Report(message, Discord, client);
          message.channel.send(`${message.author.tag} pozor tohle tady nepovolujeme. Konkrétně frázi ${[doNotAlowedWords2[i]]}`)
          return;
      }
}



//EXPORT MODULES
    module.exports = {
    Report,
    ReportByUser,
    badWords
    };
