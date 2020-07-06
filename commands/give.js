const Discord = require('discord.js');
const db = require('quick.db');
const ms = require('ms')

module.exports = {
  name: 'give',
  description: 'giving people',
  async execute(msg, args){

    let user = msg.author;
    let targetuser = msg.mentions.members.first();
    let targetuseruser = msg.mentions.users.first();


    let timeout = 10000;
    let givetime = await db.fetch(`givetime_${msg.author.id}`);

    if (givetime !== null && timeout - (Date.now() - givetime) > 0) {
      let time = ms(timeout - (Date.now() - givetime));
        const robcool = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .addField('**You will be Suspended !**', `Stop sharing marks! I will stay here for the next **${time}** to ensure you don\'t keep sharing papers again !`)
        .setFooter('Mini Game - Prathiba')
        msg.channel.send(robcool);

    } else {
      if(!targetuser) {
        msg.channel.send("Don\'t be dumb ! Do you think you can give noone a paper ? Mention who you want to give the paper to !")
      }
      if(targetuseruser == user){
        const robself = new Discord.MessageEmbed()
        .setAuthor(`${user.username}`)
        .setDescription(`You can\'t share with yourself you dumb fool!`)
        .setFooter(`Mini Game - Prathiba`)
        msg.channel.send(robself);
      }
      else{
        let targetsmoney = await db.fetch(`money_${targetuseruser.id}`);
        let usersmoney = await db.fetch(`money_${msg.author.id}`);
        let usermoney = `money_${msg.author.id}`;
        let targetmoney = `money_${targetuseruser.id}`;
        if(!isNaN(args[3])){
          var points = Math.floor(args[3]);
          if(usersmoney < points){
            const givemorethan = new Discord.MessageEmbed()
            .setDescription('Do you really think you can give more than what you have ?')
            .setFooter(`Mini Game - Prathiba`)
            msg.channel.send(givemorethan)
          }
          else if(points < 0){
            const negval = new Discord.MessageEmbed()
            .setAuthor(`${user.username}`)
            .setDescription(`You cannot share negative marks now can you ?`)
            msg.channel.send(negval)
          }        
          else{
            db.set(`givetime_${msg.author.id}`, Date.now());
            db.subtract(`money_${msg.author.id}`, points)
            db.add(targetmoney, points)  
            const gave = new Discord.MessageEmbed()
            .setColor('GREEN')
            .setDescription(`**${user.username}** shared ${points} marks with **${targetuseruser.username}**...`)
            .setFooter(`Mini Game - Prathiba`)
            msg.channel.send(gave)
          }
        }
        else if(!isNaN(args[2])){
          var points = Math.floor(args[2]);

          if(usersmoney < points){
            const givemorethan = new Discord.MessageEmbed()
            .setDescription('Do you really think you can give more than what you have ?')
            .setFooter(`Mini Game - Prathiba`)
            msg.channel.send(givemorethan)
          }
          else if(points < 0){
            const negval = new Discord.MessageEmbed()
            .setAuthor(`${user.username}`)
            .setDescription(`You cannot share negative marks now can you ?`)
            msg.channel.send(negval)
          }
          else{
            db.set(`givetime_${msg.author.id}`, Date.now());
            db.subtract(`money_${msg.author.id}`, points)
            db.add(targetmoney, points)  
            const gave = new Discord.MessageEmbed()
            .setColor('GREEN')
            .setDescription(`**${user.username}** shared ${points} marks with **${targetuseruser.username}**...`)
            .setFooter(`Mini Game - Prathiba`)
            msg.channel.send(gave)
          }
        }
        else if(args[3] == 'all' || args[2] == 'all'){
          var points = usersmoney;
          db.set(`givetime_${msg.author.id}`, Date.now());
          db.subtract(`money_${msg.author.id}`, points)
          db.add(targetmoney, points)  
          const gaveall = new Discord.MessageEmbed()
          .setColor('GREEN')
          .setDescription(`**${user.username}** shared ${points} marks with **${targetuseruser.username}**...`)
          .setFooter(`Mini Game - Prathiba`)
          msg.channel.send(gaveall)
        }
        else{
          const nonumber = new Discord.MessageEmbed()
          .setDescription('You will have to mention the amount of marks you have to give, Stupid.')
          .setAuthor(user.username)
          .setFooter('Mini Game - Prathiba')
        }
      }
    }
  }
}