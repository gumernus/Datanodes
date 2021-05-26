const config = require("../../config.json")


function resetBot(message, client, token) {
  if(message.author.tag === config.botOwnerTag){
    message.channel.send('Resetting...')
    .then(msg => client.destroy())
    .then(() => client.login(token));
}
}

//EXPORT MODULES
module.exports = {
resetBot
  };