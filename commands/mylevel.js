const Command = require("../base/Command.js");

class Perms extends Command {
  constructor(client) {
    super(client, {
      name: "perms",
      description: "Wyświetli twój poziom uprawnień na serwerze.",
      usage: "perms",
      guildOnly: true
    });
  }

  async run(message, args, level) {
    const friendly = this.client.config.permLevels.find(l => l.level === level).name;
    message.channel.send(`Na tym serwerze twój poziom uprawnień wynosi: ${friendly} (${level}).`);
  }
}

module.exports = Perms;
