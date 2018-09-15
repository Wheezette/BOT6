const Command = require("../base/Command.js");

class Reload extends Command {
  constructor(client) {
    super(client, {
      name: "reload",
      description: "Reloads a command that has been modified.",
      category: "System",
      usage: "reload [command]",
      permLevel: "Bot Admin"
    });
  }

  async run(message, args, level) { // eslint-disable-line no-unused-vars
    if (!args || args.size < 1) return message.reply("Must provide a command to reload. Derp.");
    
    const commands = this.client.commands.get(args[0]) || this.client.commands.get(this.client.aliases.get(args[0]));
    if (!commands) return message.reply(`The command \`${args[0]}\` does not exist, nor is it an alias.`);

    let response = await this.client.unloadCommand(commands.conf.location, commands.help.name);
    if (response) return message.reply(`Błąd: ${response}`);

    response = this.client.loadCommand(commands.conf.location, commands.help.name);
    if (response) return message.reply(`Błąd: ${response}`);

    message.channel.send(`Polecenie noszące nazwę \`${commands.help.name}\` zostało przeładowane!`);
  }
}
module.exports = Reload;
