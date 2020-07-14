# discord.js-typing-stop
A module that adds a "typingStop" event to discord.js.

The **Discord API** doesn't emit a `TYPING_STOP` event. How it works in the different clients, is that the animation starts playing on the `TYPING_START` event, and stops either after a few seconds have passed, or after the user has sent a message.

This module handles that for you!

# Installation
    npm install discord.js-typing-stop

# Usage
The module exports a function, which you pass the `Discord` module to, and it will make the necessary changes. Here's an example:

```js
const Discord = require("discord.js-typing-stop")(require("discord.js"))
```

The **[Client](https://discord.js.org/#/docs/main/stable/class/Client)** class of this module will start emitting **typingStop** events, with the same arguments that are passed to the **[typingStart](https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-typingStart)** event handler.

The **[User](https://discord.js.org/#/docs/main/stable/class/User)** class of this module will have three new available properties; `typing` (**[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)**), `typingChannelID` (**?[Snowflake](https://discord.js.org/#/docs/main/stable/typedef/Snowflake)**), and `typingChannel` (**?[Channel](https://discord.js.org/#/docs/main/stable/class/Channel)**).