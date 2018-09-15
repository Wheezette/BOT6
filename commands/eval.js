const Command = require("../base/Command.js");
const Discord = require("discord.js");

class Eval extends Command {
  constructor(client) {
    super(client, {
      name: "eval",
      description: "Evaluje podany kod.",
      category:"Bot Admins",
      usage: "eval <expression>",
      aliases: ["ev"],
      permLevel: "Developer"
    });
  }

  async run(message, args, level) { // eslint-disable-line no-unused-vars
  //  const code = args.join(" ");
 //   try {
    //  const evaled = eval(code);
  //    const clean = await this.client.clean(this.client, evaled);
 //     message.channel.send(`\`\`\`js\n${clean}\n\`\`\``);
  //  } catch (err) {
   //   message.channel.send(`\`ERROR\` \`\`\`xl\n${await this.client.clean(this.client, err)}\n\`\`\``);
 //   }
    if(!args[0]) return message.channel.send("Proszę, abyś podał(a) kod, który chcesz evalować. Jeśli nie wiesz o co chodzi, wpisz `cb!help eval`.")
    let result = eval(args.join(" ")).toString()
    let embed = new Discord.RichEmbed()
          //.setTitle("Eval")
    .addField(`Wejście`, "```"+args.join(" ")+"```")
    .addField(`Wyjście`, "```"+result+"```")
    .setColor("RANDOM")
    .setFooter(`Kod evalował(a) ${message.author.tag}`, `https://cdn.discordapp.com/emojis/472480341299298304.png?v=1`)
     message.channel.send(embed);
  }
}

module.exports = Eval;
