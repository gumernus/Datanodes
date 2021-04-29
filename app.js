const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const keepAlive = require("./server");
require("events").EventEmitter.defaultMaxListeners = 15;


//commands
const { helpCommand, helpNormalCommand, helpAdminCommand } = require("./commands/normal/help");
const {joinCommand, leaveCommand} = require("./commands/normal/join_leave")
const {sayCommand} = require("./commands/normal/easy")

client.on("guildMemberAdd", (member) => {
  joinCommand(member, client, Discord);
});

client.on("guildMemberRemove", (member) => {
  leaveCommand(member, client, Discord);
});

client.on("ready", () => {
  console.log("The client is ready!");
  client.user.setStatus("available");
  client.user.setActivity(config.status);

  client.on("message", (message) => {
    if (message.author.bot) {
      return
    }
    else{
      if (message.content === ".help") {
        helpCommand(message, Discord);
      }
      if (message.content === ".help normal") {
        helpNormalCommand(message, Discord);
      }
      if (message.content === ".help admin") {
        helpAdminCommand(message, Discord);
      }
      if (message.content.startsWith(".say")){
        sayCommand(message, Discord)
      }
    }
  });
});

keepAlive();
client.login(config.token);
