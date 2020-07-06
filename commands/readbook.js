const Discord = require('discord.js');
const db = require('quick.db');
const ms = require('ms')

module.exports = {
  name: 'readbook',
  description: 'read the book',
  async execute(msg, args){

    var user = msg.author;

    let userbanklimit = await db.fetch(`banklimit_${msg.author.id}`);
    let bookamount = await db.fetch(`${user.id}_books`)
    if(bookamount == null) bookamount = 0;
    if(userbanklimit == 0) userbanklimit = 100;
    if(userbanklimit == null) userbanklimit = 100;
    var oppurtunity = Math.floor(Math.random() * Math.floor(100)) + 1;

    if (oppurtunity > 90){
      var points1 = [1, 1.1, 1.2, 1.3, 1.5]
    }
    else if (oppurtunity == 1){
      var points1 = [2, 2.5, 3]
    }
    else{
      var points1 = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8];
    }
    var points = points1[Math.floor(Math.random() * points1.length)];
    var totaladdss = points * userbanklimit;
    var totaladd = Math.floor(totaladdss);

    let timeout = 120000;

    let readtime = await db.fetch(`readtime_${msg.author.id}`);

    if (readtime !== null && timeout - (Date.now() - readtime) > 0) {
      let time = ms(timeout - (Date.now() - readtime));
        const readcool = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .addField('What ?', `You litterally just read a book!\nWait for atleast **${time}** to get back interest !`)
        .setFooter('Mini Game - Prathiba')
        msg.channel.send(readcool);

    } else {

      if(bookamount == null || bookamount == 0){
        const nobooks = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .addField(`Go buy a book!`)
        .setFooter('Mini Game - Prathiba')
        msg.channel.send(nobooks);
      }
      else{

      db.set(`readtime_${msg.author.id}`, Date.now());
      db.add(`banklimit_${user.id}`, totaladd);
      db.subtract(`${user.id}_books`, 1);

      var booknamesall = ['A Life Of Meaning', 'A School With A Difference', 'Why I Chose Mini', 'The Principality', 'Why Chinmaya ?', 'Bhavans, Nothing But A Past', 'Somehow I Administer', 'The New Rules', 'KS345, A Friend', 'Ronin, Past Relations', 'Gautam, Technical Support', 'Binu, Man With Strength', 'Ashwin. But Why ?', 'Greatness In Common']
      var bookname = booknamesall[Math.floor(Math.random() * booknamesall.length)];

      var yeyy = new Discord.MessageEmbed()
      .setDescription(`You start reading **\" Prathiba V - ${bookname} \"**...\nYou gain **${totaladd}** marks of Brain Capacity!`)
      .setColor('RANDOM')
      .setFooter(`Mini Game - Prathiba`)
      msg.channel.send(yeyy)
      }
    }
    }
  }