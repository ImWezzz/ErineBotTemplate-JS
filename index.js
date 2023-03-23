const { ErineClient } = require('erine');

const bot = new ErineClient({
  intents: [
    'Guilds',
    'GuildMessages',
    'MessageContent'
  ],
  prefix: '!',
});

bot.load_commands("./commands");
bot.load_events("./events");

bot.login("TOKEN")
