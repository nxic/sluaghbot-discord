require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;

bot.once('ready', () => {
console.log('Ready!');
});
bot.login(TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  } else if (msg.content.startsWith('!kick')) {
    if (msg.mentions.users.size) {
      const taggedUser = msg.mentions.users.first();
      msg.channel.send(`You wanted to kick: ${taggedUser.username}`);
    } else {
      msg.reply('Please tag a valid user!');
    }
  } else if (msg.content === '!server') {
    msg.channel.send(`This server's name is: ${msg.guild.name}`);
  } else if (msg.content === 'Who is the boss') {
    msg.reply('is the boss');
  } else if(msg.content === '!mybotinfo') {
    msg.reply(JSON.stringify(bot.user));
  }
});
