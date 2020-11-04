const Discord = require("discord.js");
const client = new Discord.Client();
const config = require('../config/config')





// client.on();



start(token, clientID);















function start(token, clientID) {
try {
  client.login(token)
  console.log(`docURL${clientID}`)
} catch (err) {
  console.log(err)
}
}