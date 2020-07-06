const Discord = require('discord.js');
const db = require('quick.db');
const ms = require('ms')

module.exports = {
  name: 'buy',
  description: 'buy stuff',
  async execute(msg, args){

    let user = msg.author;
    let usermoneyfetch = await db.fetch(`money_${msg.author.id}`)
    if(usermoneyfetch == null) usermoneyfetch = 0;
    let usermoney = `money_${msg.author.id}`;
    let books = await db.fetch(`${msg.author.id}_books`)
    let bookuser = `${msg.author.id}_books`
    if(books == null) books = 0;

    let fairrec = await db.fetch(`${msg.author.id}_fair_record`)
    let fairrecord = `${msg.author.id}_fair_record`
    if(fairrec == null) fairrec = 0;    

    let timeout = 5000;
    let buytime = await db.fetch(`buytime_${msg.author.id}`);

    if (buytime !== null && timeout - (Date.now() - buytime) > 0) {
      let time = ms(timeout - (Date.now() - buytime));
        const depcool = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setDescription(`Wait for **${time}**. You just left the shop, silly !`)
        .setFooter('Mini Game - Prathiba')
        msg.channel.send(depcool);

    } else {
      if(!args[2]){
        const depcool = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setDescription(`Mention what you want to buy, Idiot`)
        .setFooter('Mini Game - Prathiba')
        msg.channel.send(depcool);
      }
      if(args[2].toLowerCase() == 'book'){

        if(usermoneyfetch < 30){
          
          const nomon = new Discord.MessageEmbed()
          .setColor('RANDOM')
          .setDescription(`You do not have enough marks! Its 30 marks.`)
          .setFooter('Mini Game - Prathiba')
          msg.channel.send(nomon);
        }
        else{
          db.subtract(usermoney, 30);
          db.add(bookuser, 1);
          const baught = new Discord.MessageEmbed()
          .setColor('RANDOM')
          .setDescription(`**${user.username}** bought a book written by Prathiba V herself.`)
          .setFooter('Mini Game - Prathiba')
          msg.channel.send(baught);          
        }
      }
      else if(args[2].toLowerCase() == 'carrot'){
        const baught = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setDescription(`We are currently out of stock on those`)
        .setFooter('Mini Game - Prathiba')
        msg.channel.send(baught);  
      }
      else if(args[2].toLowerCase() == 'pgibc'){
        const baught = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setDescription(`We will be getting a few copies of thhose soon...`)
        .setFooter('Mini Game - Prathiba')
        msg.channel.send(baught);  
      }
      else if(args[2].toLowerCase() == 'fair' && args[3].toLowerCase() == 'record'){
        if(usermoneyfetch < 100){
          const nomon = new Discord.MessageEmbed()
          .setColor('RANDOM')
          .setDescription(`You do not have enough marks! Its 100 marks.`)
          .setFooter('Mini Game - Prathiba')
          msg.channel.send(nomon);
        }
        else{
          db.subtract(usermoney, 100);
          if(fairrec == null){db.set(fairrecord, 0)}
          db.add(fairrecord, 1);
          const baught = new Discord.MessageEmbed()
          .setColor('RANDOM')
          .setDescription(`**${user.username}** bought a Fair Record and now can attend practical sessions...`)
          .setFooter('Mini Game - Prathiba')
          msg.channel.send(baught);          
        }
      }
    }
  }
}