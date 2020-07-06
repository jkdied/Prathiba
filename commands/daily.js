const Discord = require('discord.js');
const db = require('quick.db');
const ms = require('ms')

module.exports = {
  name: 'daily',
  description: 'daily hw',
  async execute(msg, args){

    let user = msg.author;
    let usermoney = `money_${msg.author.id}`;
    let timeout = 86400000;
    let amount = Math.floor(Math.random() * 10) + 1;

    let daily = await db.fetch(`daily_${msg.author.id}`);

    if (daily !== null && timeout - (Date.now() - daily) > 0) {
      let time = ms(timeout - (Date.now() - daily));

      msg.channel.send(
        new Discord.MessageEmbed()
          .setAuthor(`STUPID PEOPLE`)
          .setColor('GREEN')
          .setThumbnail(msg.author.displayAvatarURL())
          .addField(`${user.username}`, `You are so unimaginably vacuous ! \nDon\'t you realise that I already gave you this mark today ? Don\'t be so ludicrous and wait for another ${time} ! `)
      );
    } else {
      msg.channel.send(
        new Discord.MessageEmbed()
          .setAuthor(`Daily`, msg.author.displayAvatarURL())
          .setColor("GREEN")
          .setDescription(`**Daily Reward**`)
          .addField(`**${user.username}\'s Daily Assignment Score**`, amount + '/10')
      );

      db.set(`daily_${msg.author.id}`, Date.now());
      db.add(`money_${msg.author.id}`, amount);
    }



  }
}