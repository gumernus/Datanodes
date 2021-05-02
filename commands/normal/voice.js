async function voiceJoin(message) {
  const { voice } = message.member;
  if (!voice.channelID) {
    message.reply("musíš být v nějaké roomce");
    return;
  }
  if (voice.channelID) {
    const connection = await message.member.voice.channel.join();
  }
}

async function voiceLeave(message) {
  const connection = await message.member.voice.channel.join();
  connection.disconnect();
}

module.exports = {
  voiceJoin,
  voiceLeave,
};
