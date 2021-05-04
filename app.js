const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const keepAlive = require("./server");
require("events").EventEmitter.defaultMaxListeners = 15;

//commands
const {
  helpCommand,
  helpNormalCommand,
  helpAdminCommand,
} = require("./commands/normal/help");
const { joinCommand, leaveCommand } = require("./commands/normal/join_leave");
const { sayCommand } = require("./commands/normal/easy");
const { newObj, addItem, deleteObj } = require("./database/database");
const { voiceJoin, voiceLeave } = require("./commands/normal/voice");
const { serverInfo } = require("./commands/normal/info");

client.on("guildMemberAdd", (member) => {
  joinCommand(member, client, Discord);
});

client.on("guildMemberRemove", (member) => {
  leaveCommand(member, client, Discord);
});

client.on("ready", () => {
  console.log("The client is ready!");
  client.user.setStatus("available");
  client.user.setActivity(config.prefix + config.status);

  client.on("message", (message) => {
    if (message.author.bot) {
      return;
    } else {
      if (message.content.startsWith(`${config.prefix}help`)) {
        helpCommand(message, Discord);
        return;
      }
      if (message.content.startsWith(`${config.prefix}help normal`)) {
        helpNormalCommand(message, Discord);
        return;
      }
      if (message.content.startsWith(`${config.prefix}help admin`)) {
        helpAdminCommand(message, Discord);
        return;
      }
      if (message.content.startsWith(`${config.prefix}say`)) {
        sayCommand(message, Discord);
        return;
      }
      //databse testing
      if (message.content.startsWith(`${config.prefix}create`)) {
        newObj(message.author.tag, message.author.id);
        return;
      }
      if (message.content.startsWith(`${config.prefix}delete`)) {
        deleteObj(message.author.id);
        return;
      }
      if (message.content.startsWith(`${config.prefix}update`)) {
        addItem("gej xdddd", message.author.id);
        return;
      }
      if (message.content.startsWith(`${config.prefix}join`)) {
        voiceJoin(message);
        return;
      }
      if (message.content.startsWith(`${config.prefix}leave`)) {
        voiceLeave(message);
        return;
      }
      if (message.content.startsWith(`${config.prefix}server info`)) {
        serverInfo(message, Discord);
        return;
      }
    }
  });
});

keepAlive();
client.login(config.token);
