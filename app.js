const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const keepAlive = require("./server");
require("events").EventEmitter.defaultMaxListeners = 15;


//commands
const { helpCommand, helpNormalCommand, helpAdminCommand } = require("./commands/normal/help");
const {joinCommand, leaveCommand} = require("./commands/normal/join_leave")
const {sayCommand} = require("./commands/normal/easy")
const {newObj, updateObj, deleteObj} = require("./database/database")

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
      return
    }
    else{
      if (message.content === `${config.prefix}help`) {
        helpCommand(message, Discord);
      }
      if (message.content === `${config.prefix}help normal`) {
        helpNormalCommand(message, Discord);
      }
      if (message.content === `${config.prefix}help admin`) {
        helpAdminCommand(message, Discord);
      }
      if (message.content.startsWith(`${config.prefix}say`)){
        sayCommand(message, Discord)
      }
      //databse testing
      if (message.content.startsWith(`${config.prefix}create`)){
        newObj(message.author.tag, message.author.id)
      }
      if (message.content.startsWith(`${config.prefix}delete`)){
        deleteObj(message.author.id)
      }
      if (message.content.startsWith(`${config.prefix}update`)){
        updateObj("gej xdddd", message.author.id)
      }
    }
  });
});

keepAlive();
client.login(config.token);
