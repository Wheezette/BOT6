const config = {
  "admins": [],
  "support": [],
  "token": process.env.TOKEN,
  "dashboard" : {
    "oauthSecret": process.env.SECRET,
    "callbackURL": 'http://localhost:8181/callback',
    "sessionSecret": "nsfw",
    "domain": "localhost",
    "port": 81
  },
  defaultSettings: {
  "prefix": "-",
  "modLogChannel": "mod-log",
  "modRole": "Moderator",
  "adminRole": "🏰 Administrator",
  "systemNotice": "true",
  "welcomeChannel": "welcome",
  "welcomeMessage": "Czesc {{user}}.",
  "welcomeEnabled": "false",
  "supportRole": "💁 Supporter"
  },
  permLevels: [
    { level: 0,
      name: "Użytkownik", 
      check: () => true
    },
    { level: 1,
      name: "Support",
      check: (message) => {
        try {
          const supportRole = message.guild.roles.find(r => r.name.toLowerCase() === message.settings.supportRole.toLowerCase());
          if (supportRole && message.member.roles.has(supportRole.id)) return true;
        } catch (e) {
          return false;
        }
      }
    },
    { level: 2,
      name: "Moderator",
      check: (message) => {
        try {
          const modRole = message.guild.roles.find(r => r.name.toLowerCase() === message.settings.modRole.toLowerCase());
          if (modRole && message.member.roles.has(modRole.id)) return true;
        } catch (e) {
          return false;
        }
      }
    },
    { level: 3,
      name: "Administrator", 
      check: (message) => {
        try {
          const adminRole = message.guild.roles.find(r => r.name.toLowerCase() === message.settings.adminRole.toLowerCase());
          return (adminRole && message.member.roles.has(adminRole.id));
        } catch (e) {
          return false;
        }
      }
    },
    { level: 4,
      name: "Właściciel Serwera", 
      check: (message) => message.channel.type === "text" ? (message.guild.owner.user.id === message.author.id ? true : false) : false
    },
    { level: 8,
      name: "Bot Support",
      check: (message) => config.support.includes(message.author.id)
    },
    { level: 9,
      name: "Bot Admin",
      check: (message) => config.admins.includes(message.author.id)
    },
    { level: 10,
      name: "Developer", 
      check: (message) => message.client.appInfo.owner.id === message.author.id
    }
  ]
};

module.exports = config;
