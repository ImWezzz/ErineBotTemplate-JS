# Erine
A powerful command framework for discord.js

# Install
```
npm install erine
```

# Features
- Hybrid Commands
- Hybrid Groups
- Command Handler
- Events Handler
- Plugins
- Discord.py interface
- Prefix interpreter
- Context base class

# Example (Setup)
```js
const { ErineClient } = require('erine');
const { GatewayIntentBits } = require('discord.js');
const { Guilds, GuildMessages, MessageContent } = GatewayIntentBits;

const client = new ErineClient({
  intents: [
    Guilds,
    GuildMessages,
    MessageContent
  ],
  prefix: '!'
});

client.login('TOKEN');
```
Check the [documentation](http://erine.cyberghxst.ga/) for more information.

# Disclaimer
Erine is not affiliated or associated with Discord, Discord.js development or any other services.

# Links
- [Documentation](https://erine.cyberghxst.ga/)
- [Support Server](https://discord.com/invite/PG7EFJQFWM)

# 🌙 Made by Moonlight Group members.
- Cyberghxst#2683
- Mid#1044
