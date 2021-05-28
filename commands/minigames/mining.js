//IMPORT CONFIG
    const config = require("../../config.json");
    const { newObj, deleteObj, addItem } = require("../../database/database");

//CHECKER
    function check(message, Discord, client) {
        if(message.content === `${config.prefix}mine`){
            addItem("železo", 1, message.author.id)
            message.channel.send("úspěšně jsi obdržel/a 1 železo")
        }
        else{
            message.delete()
        }
    }

//EXPORT MODULES
    module.exports = {
        check
    }