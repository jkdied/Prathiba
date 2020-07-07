const Discord = require('discord.js');
const db = require('quick.db');
const ms = require('ms')

module.exports = {
  name: 'beg',
  description: 'begging for money',
  async execute(msg, args){

    let user = msg.author;
    let usermoney = await db.fetch(`money_${msg.author.id}`);
    if(usermoney == null) usermoney = 0;

    var points = Math.floor(Math.random() * Math.floor(4))

    let timeout = 30000; // 24 hours in milliseconds, change if you'd like.
    // random amount: Math.floor(Math.random() * 1000) + 1;

    let begtime = await db.fetch(`begtime_${msg.author.id}`);

    if (begtime !== null && timeout - (Date.now() - begtime) > 0) {
      let time = ms(timeout - (Date.now() - begtime));
        const begcool = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .addField('Stop Being SO Retarded !', `You are being pathetic, and annoying. Stop going around and begging for marks. Just wait for a goddamn ${time} !`)
        .setFooter('Mini Game - Prathiba')
        msg.channel.send(begcool);

    } else {

      db.set(`begtime_${msg.author.id}`, Date.now());
      db.add(`money_${user.id}`, points);
      
      console.log(`money_${user.id}` + points)
      if(points == '0'){
        msg.channel.send(`${user}` + ', Stop it ! I am not giving you any more marks !')
      }
      else{
        msg.channel.send('Here\'s a few pity marks, ' + `${user}` + '. \nI have given you ' + points + ' marks' )
        console.log(usermoney)
        }

      }


  }
}
