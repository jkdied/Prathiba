  const Discord = require('discord.js');
const db = require('quick.db');
const ms = require('ms')

module.exports = {
  name: 'test',
  description: 'write a test',
  async execute(msg, args){

    let user = msg.author;
    let usermoney = await db.fetch(`money_${msg.author.id}`);
    if(usermoney == null) usermoney = 0;
    var learnt = Math.floor(Math.random() * Math.floor(10)) + 1;
    var funny1 = ['Einstein is the defence minister of India', 'Modi is trump\'s son', 'Gay means happy', 'you are funny', 'chinmaya is bad', 'homophobic means scared of happiness']
    var funny = funny1[Math.floor(Math.random() * funny1.length)];

    let timeout = 120000;
    let testtime = await db.fetch(`testtime_${msg.author.id}`);

    if (testtime !== null && timeout - (Date.now() - testtime) > 0) {
      let time = ms(timeout - (Date.now() - testtime));
        const testcool = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .addField('You just wrote a test!', `Do you think we can make questions in a Svedburg ? Wait for a goddamn **${time}** !`)
        .setFooter('Mini Game - Prathiba')
        msg.channel.send(testcool);

    } else {

      var situation = new Discord.MessageEmbed()
      .setAuthor(user.username)
      .setDescription(`Out of the 10 chapter you had to learn, you studied ${learnt} chapters. \nChoose what you want to do now,\`be honest\` or \`cheat\`.`)
      .setFooter(`Mini Game - Prathiba`)
      msg.channel.send(situation);

      filter = m => m.author.id === msg.author.id;
      var choice1 = await msg.channel.awaitMessages(filter, { max: 1});
      var choice = choice1.first();
      if(choice.content.toLowerCase().includes('honest')){
        if(learnt < 5 || learnt == 5){
          var marks = Math.floor(Math.random() * Math.floor(5)) + 1;
          db.set(`testtime_${msg.author.id}`, Date.now());
          db.add(`money_${user.id}`, marks)
          const holow = new Discord.MessageEmbed()
          .setAuthor(user.username)
          .setDescription(`You got only **${marks}/10**. You will have to improve !`)
          .setFooter(`Mini Game - Prathiba`)
          msg.channel.send(holow);
        }
        else{
          var marks = Math.floor(Math.random() * Math.floor(6)) + 4;
          db.set(`testtime_${msg.author.id}`, Date.now());
          db.add(`money_${user.id}`, marks)
          const hohi = new Discord.MessageEmbed()
          .setAuthor(user.username)
          .setDescription(`You got **${marks}/10**. You have improved a bit I guess.`)
          .setFooter(`Mini Game - Prathiba`)
          msg.channel.send(hohi);          
        }
      }
      else if(choice.content.toLowerCase().includes('cheat')){
        var maamcan = Math.floor(Math.random() * Math.floor(100)) + 1;
        if(maamcan < 50 || maamcan == 50){
          db.set(`testtime_${msg.author.id}`, Date.now());
          const caught = new Discord.MessageEmbed()
          .setAuthor(user.username)
          .setDescription(`How dare you ? I saw you cheat!. \n You are eliminated from this exam !`)
          .setFooter(`Mini Game - Prathiba`)
          msg.channel.send(caught);  
        }
        else{
          var dumborsmart = Math.floor(Math.random() * Math.floor(100)) + 1;
          if(dumborsmart < 50 || dumborsmart == 50){
            if(dumborsmart < 30){
              var marks = Math.floor(Math.random() * Math.floor(2))+ 1;
              db.set(`testtime_${msg.author.id}`, Date.now()); 
              db.add(`money_${user.id}`, marks)
              const chvlo = new Discord.MessageEmbed()
              .setAuthor(user.username)
              .setDescription(`The person next to you was a retard. He wrote that ${funny}. \nYou got only **${marks}/10**. Next time you better study. God is watching.`)
              .setFooter(`Mini Game - Prathiba`)
              msg.channel.send(chvlo);  
            }
            else{
              var marks = Math.floor(Math.random() * Math.floor(4)) + 2;
              db.set(`testtime_${msg.author.id}`, Date.now());
              db.add(`money_${user.id}`, marks)
              const chlo = new Discord.MessageEmbed()
              .setAuthor(user.username)
              .setDescription(`The person next to you was not very smart. \nBut you still got **${marks}/10**. Next time you better study. God is watching.`)
              .setFooter(`Mini Game - Prathiba`)
              msg.channel.send(chlo);  
            }              
            }
          }
          if(dumborsmart > 50){
            var marks = Math.floor(Math.random() * Math.floor(4)) + 6;
            db.set(`testtime_${msg.author.id}`, Date.now());
            db.add(`money_${user.id}`, marks)
            const chhi = new Discord.MessageEmbed()
            .setAuthor(user.username)
            .setDescription(`The person next to you was a nerd. You got **${marks}/10**. Next time you better study. God is watching.`)
            .setFooter(`Mini Game - Prathiba`)
            msg.channel.send(chhi);  
          }
        }
      else{
        db.set(`testtime_${msg.author.id}`, Date.now());
        const embed = new Discord.MessageEmbed()
        .setAuthor(user.username)
        .setDescription(`So you just sat there, doing (${choice}), and didn't write anything.`)
        .setFooter(`Mini Game - Prathiba`)
        msg.channel.send(embed); 
      }
      }
  }
}