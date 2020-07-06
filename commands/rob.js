const Discord = require('discord.js');
const db = require('quick.db');
const ms = require('ms')

module.exports = {
  name: 'rob',
  description: 'robbing from people',
  async execute(msg, args){

    let user = msg.author;
    let targetuser = msg.mentions.members.first();
    let targetuseruser = msg.mentions.users.first();


    let timeout = 60000; // 24 hours in milliseconds, change if you'd like.
    // random amount: Math.floor(Math.random() * 1000) + 1;

    let robtime = await db.fetch(`robtime_${msg.author.id}`);

    if (robtime !== null && timeout - (Date.now() - robtime) > 0) {
      let time = ms(timeout - (Date.now() - robtime));
        const robcool = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .addField('**You will be Suspended !**', `How dare you steal from that poor kid ? I will stay here for the next **${time}** to ensure you dont dare steal again !`)
        .setFooter('Mini Game - Prathiba')
        msg.channel.send(robcool);

    } else {
      if(!targetuser) {
        msg.channel.send("Don\'t be dumb ! Do you think you can steal just a random paper ? Mention who you want to steal the paper of !")
      }
      if(targetuseruser == user){
        const robself = new Discord.MessageEmbed()
        .setAuthor(`${user.username}`)
        .setDescription(`You can\'t rob yourself you dumb fool!`)
        .setFooter(`Mini Game - Prathiba`)
        msg.channel.send(robself);
      }
      else{
        let targetsmoney = await db.fetch(`money_${targetuseruser.id}`);
        let usersmoney = await db.fetch(`money_${msg.author.id}`);
        let usermoney = `money_${msg.author.id}`;
        let targetmoney = `money_${targetuseruser.id}`;
        var stolenchance = targetsmoney / 1.33;
        var points = Math.floor(Math.random() * Math.floor(stolenchance))
        if(usersmoney < 5){
          msg.reply("You need to have atleast 5 marks !")
        }
        else if(targetsmoney < 5){
          msg.reply("It is not worth stealing the paper that has a dissapointing score of less than 5 marks ! Try Better next time...")
        }
        else{
          db.set(`robtime_${msg.author.id}`, Date.now());
          db.add(`money_${msg.author.id}`, points)
          db.subtract(targetmoney, points)  
          if(points == '0'){
          const failrob = new Discord.MessageEmbed()
            .setColor('RED')
            .setDescription(`**${user.username}** retreated, after an unsuccessful paper robbery. \n**${targetuseruser.username}** got lucky this time.`)
            msg.channel.send(failrob)
          }
          else{
            const succrob = new Discord.MessageEmbed()
            .setColor('GREEN')
            .setDescription(`**${user.username}** succesfully stole the papers from **${targetuseruser.username}** \n and got away with **` + points + `** marks...`)
            msg.channel.send(succrob)
          }
        }
      }
    }
  }
}