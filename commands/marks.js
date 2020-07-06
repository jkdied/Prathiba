const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
    name: 'marks',
  description: 'marks view',
  async execute(msg, args){
  
  let user = msg.mentions.members.first() || msg.author;

  let money = await db.fetch(`money_${user.id}`)
  let bank = await db.fetch(`bank_${user.id}`)
  let banklimit = await db.fetch(`banklimit_${user.id}`)
  console.log(db.all())
  let usrname = user.username;
  let total = bank + money;
  const mention = msg.mentions.users.first();
  if(money == null) money = 0;
  if(bank == null) bank = 0;
  if(banklimit == null) banklimit = 100;

  if(user == msg.author){
    const markscol = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(usrname)
    .setDescription(`${usrname}\'s Marks Storage:`)  
    .addFields(
      { name: 'Paper:', value: `${money}`, inline: true },
      { name: 'Brain:', value: `${bank}/${banklimit}`, inline: true },
      { name: 'Total:', value: `${total}` },
    )
    .setFooter(`Mini Game - Prathiba`)
    msg.channel.send(markscol)    
  }
  else{
    if(!msg.mentions.members.first()){return;}
    else{
          const markscol = new Discord.MessageEmbed()
          .setColor('RANDOM')
          .setTitle(`${mention.username}`)
          .setDescription(`${mention.username}\'s Marks Storage:`)
        .addFields(
          { name: 'Paper:', value: `${money}`, inline: true },
          { name: 'Brain:', value: `${bank}/${banklimit}`, inline: true },
          { name: 'Total:', value: `${total}` },
        )
        .setFooter(`Mini Game - Prathiba`)
        msg.channel.send(markscol) 
    }
  }
  }                 
}