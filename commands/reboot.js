const Command = require("../base/Command.js");

class Reboot extends Command {
  constructor(client) {
    super(client, {
      name: "reboot",
      description: "Restart bota",
      category: "System",
      usage: "reboot",
      aliases: [],
      permLevel: "Bot Admin"
    });
  }

  async run(message, args, level) { // eslint-disable-line no-unused-vars
    try {
      await message.reply("Trwa restartowanie bota...");
      this.client.commands.forEach(async cmd => {
        await this.client.unloadCommand(cmd);
      });
      process.exit(1);
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = Reboot;
