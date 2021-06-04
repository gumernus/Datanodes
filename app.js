//IMPORT PACKAGES
    const Discord = require("discord.js");
    const client = new Discord.Client();
    const config = require("./config.json");
    const package = require("./package.json")
    const keepAlive = require("./server");
    require("events").EventEmitter.defaultMaxListeners = 15;
    const BotToken = config.token
    //process.env['DISCORD_BOT_TOKEN']
    //config.token



//IMPORT COLORS
    let CReset = "\x1b[0m";
    let CGreen = "\x1b[32m";
    let CRed = "\x1b[31m";



//IMPORT MODULES
    const { helpCommand, helpNormalCommand, helpAdminCommand } = require("./commands/normal/help");
    const { joinCommand, leaveCommand } = require("./commands/normal/join_leave");
    const { sayCommand ,permaInvite, adminAlert, modAlert, oznameni, novinky, giveaway, partnership, anketa } = require("./commands/normal/easy");
    const { newObj, deleteObj, addItem, lookInventory } = require("./database/database");
    const { voiceJoin, voiceLeave } = require("./commands/normal/voice");
    const { serverInfo } = require("./commands/normal/info");
    const { Kick, Ban, Mute, Warn, clearAll } = require("./commands/moderating/restrict");
    const { ReportByUser, badWords } = require("./commands/moderating/reports")
    const { resetBot } = require("./commands/admin/admin-only")
    const { check } = require("./commands/minigames/mining")



//JOIN & LEAVE
    client.on("guildMemberAdd", (member) => { joinCommand(member, client, Discord); });
    client.on("guildMemberRemove", (member) => { leaveCommand(member, client, Discord); });



//STARTING
    console.clear()
    
    client.on("ready", () => {
    console.log(CReset + "Bot starting.. " + CGreen + "PASSED")

    try {
        keepAlive();
        console.log(CReset + "Server starting.. " + CGreen + "PASSED")
      }
    catch(err) {
        console.log(CReset + "Server starting.. " + CRed + "FAILED")
        }

    try {
        client.user.setStatus("available");
        client.user.setActivity(config.status);
        console.log(CReset + "Setting configuration.. " + CGreen + "PASSED")
    }
    catch(err) {
        console.log(CReset + "Setting configuration.. " + CRed + "FAILED")
        }

    try {
        newObj("test tag", "test id")
        addItem("test item id", "test item name", "test id");
        deleteObj("test id")
        console.log(CReset + "Database testing.. " + CGreen + "PASSED")
        }
    catch(err) {
        console.log(CReset + "Database testing.. " + CRed + "FAILED")
        }

    try {
        const clientName = client.user.username;
        const clientNameCapitalized = clientName.charAt(0).toUpperCase() + clientName.slice(1);
        console.log(CReset + clientNameCapitalized + ` is online (version: ${package.version}).. ` + CGreen + "PASSED" + CReset)    
        }
    catch(err) {
        console.log(CReset + clientNameCapitalized + ` is online (version: ${package.version}).. ` + CRed + "FAILED" + CReset)    
        }
    

    

    

//SPECIAL COMMANDS
    client.on("message", (message) => {
    if(message.author.tag === config.disboardTag){
        if (message.embeds[0].description.includes("Vyčkej prosím")){
        message.delete()
        message.channel.send(message.embeds[0].description)
        }
        if (message.embeds[0].description.includes("Úspěšný bump")){
        message.delete()
        message.channel.send(message.embeds[0].description)
        }
    }
    if (message.author.bot) {
        return;
    }
    if (!message.guild) {
        return;
    } 
    if(message.content === `${config.prefix}reset123`){
        resetBot(message, client, BotToken)
    }
    else {
    badWords(message, Discord, client);

//MINIGAMES
    if(message.channel.id === config.miningChannelId){
        check(message, Discord, client);
        return
    }

//HELP COMMANDS
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



//NORMAL COMMANDS
    if (message.content.startsWith(`${config.prefix}say`)) {
    sayCommand(message, Discord);
    return;
    }
    if (message.content.startsWith(`${config.prefix}report`)) {
    ReportByUser(message, Discord, client);
    return;
    }
    if (message.content === `${config.prefix}server info`) {
    serverInfo(message, Discord);
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



//NEWS ETC...
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
    if (message.content.startsWith(`${config.prefix}anketa`)) {
    anketa(message, Discord, client);
    return;
    }


      
//TESTING
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
    if (message.content === `${config.prefix}add`) {
    addItem("luk", "longbow", message.author.id);
    return;
    }
    if (message.content === `${config.prefix}inventory`) {
    lookInventory(message, message.author.id)
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



//MODERATING COMMANDS
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
    }
  });
});

//START BOT
    client.login(BotToken);
