const { REST, Routes } = require('discord.js');
require('dotenv').config();

const commands = [
    {
        name: 'ping',
        description: 'Replies with pong!'
    },
    {
        name: 'meme',
        description: 'Replies with a meme from r/memes'
    }
]

const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);

(async () => {
    try {
        console.log('Started refreshing application (/) commands.');

      await rest.put(
        Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
        { body: commands },
      );
     
       console.log('Successfully reloaded application (/) commands.');
    } catch (error){
        console.error(`Error refreshing application (/) commands: ${error}`);
    }

})();