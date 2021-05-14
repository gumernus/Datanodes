const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const keepAlive = require("./server");
require("events").EventEmitter.defaultMaxListeners = 15;

//colors
let CReset = "\x1b[0m";
let CYellow = "\x1b[33m";
let CRed = "\x1b[31m";

//commands
const {
  helpCommand,
  helpNormalCommand,
  helpAdminCommand,
} = require("./commands/normal/help");
const { joinCommand, leaveCommand } = require("./commands/normal/join_leave");
const {
  sayCommand,
  permaInvite,
  adminAlert,
  modAlert,
  badWords,
  oznameni,
  novinky,
  giveaway,
  partnership,
  clearAll
} = require("./commands/normal/easy");
const { newObj, deleteObj } = require("./database/database");
const { voiceJoin, voiceLeave } = require("./commands/normal/voice");
const { serverInfo } = require("./commands/normal/info");
const { Kick, Ban, Mute, Warn, ReportByUser } = require("./commands/moderating/restrict");

client.on("guildMemberAdd", (member) => {
  joinCommand(member, client, Discord);
});

client.on("guildMemberRemove", (member) => {
  leaveCommand(member, client, Discord);
});

client.on("ready", () => {
  const clientName = client.user.username;
  const clientNameCapitalized =
    clientName.charAt(0).toUpperCase() + clientName.slice(1);
  console.log(CYellow + "$ " + clientNameCapitalized, "is online ", CReset);
  client.user.setStatus("available");
  client.user.setActivity(config.status);

  client.on("message", (message) => {
    if (message.author.bot) {
      return;
    }
    if (!message.guild) {
      return;
    } else {
      badWords(message, Discord, client);
      if (message.content === `${config.prefix}help`) {
        helpCommand(message, Discord);
        return;
      }
      if (message.content === `${config.prefix}help normal`) {
        helpNormalCommand(message, Discord);
        return;
      }
      if (message.content === `${config.prefix}help admin`) {
        helpAdminCommand(message, Discord);
        return;
      }
      if (message.content.startsWith(`${config.prefix}say`)) {
        sayCommand(message, Discord);
        return;
      }
      if (message.content.startsWith(`${config.prefix}oznameni`)) {
        oznameni(message, Discord, client);
        return;
      }
      if (message.content.startsWith(`${config.prefix}novinka`)) {
        novinky(message, Discord, client);
        return;
      }
      if (message.content.startsWith(`${config.prefix}partnership`)) {
        partnership(message, Discord, client);
        return;
      }
      if (message.content.startsWith(`${config.prefix}giveaway`)) {
        giveaway(message, Discord, client);
        return;
      }
      if (message.content.startsWith(`${config.prefix}report`)) {
        ReportByUser(message, Discord, client);
        return;
      }
      //databse testing
      if (message.content === `${config.prefix}create`) {
        newObj(message.author.tag, message.author.id);
        return;
      }
      if (message.content === `${config.prefix}create all`) {
        client.guilds.fetch(message.guild.id).then((guild) => {
          guild.members.fetch().then((members) => {
            members.each((member) => newObj(member.user.tag, member.user.id));
          });
        });
        return;
      }
      if (message.content === `${config.prefix}delete`) {
        deleteObj(message.author.id);
        return;
      }
      if (message.content === `${config.prefix}join`) {
        voiceJoin(message);
        return;
      }
      if (message.content === `${config.prefix}leave`) {
        voiceLeave(message);
        return;
      }
      if (message.content === `${config.prefix}server info`) {
        serverInfo(message, Discord);
        return;
      }
      if (message.content.startsWith(`${config.prefix}kick`)) {
        Kick(message, Discord);
        return;
      }
      if (message.content.startsWith(`${config.prefix}ban`)) {
        Ban(message, Discord);
        return;
      }
      if (message.content.startsWith(`${config.prefix}mute`)) {
        Mute(message, Discord);
        return;
      }
      if (message.content.startsWith(`${config.prefix}warn`)) {
        Warn(message, Discord);
        return;
      }
      if (message.content === `${config.prefix}clear`) {
        clearAll(message, Discord, client)
        return;
      }
      if (message.content === `${config.prefix}create invite`) {
        permaInvite(message, Discord);
        return;
      }
      if (message.content === `${config.prefix}admin alert`) {
        adminAlert(message, Discord);
        return;
      }
      if (message.content === `${config.prefix}mod alert`) {
        modAlert(message, Discord);
        return;
      }
    }
  });
});

keepAlive();

//process.env['DISCORD_BOT_TOKEN']
//config.token

client.login(process.env['DISCORD_BOT_TOKEN']);
