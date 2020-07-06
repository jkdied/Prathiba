const Discord = require('discord.js');
const db = require('quick.db');
const ms = require('ms')

module.exports = {
  name: 'reset',
  description: 'reset money',
  async execute(msg, args){

    let user = msg.author;
    let usermoney = await db.fetch(`money_${msg.author.id}`);
    let userbank = await db.fetch(`bank_${msg.author.id}`);
    let userbanklimit = await db.fetch(`banklimit_${msg.author.id}`);

    let money = `money_${user.id}`
    let bank = `bank_${user.id}`
    let banklimit = `banklimit_${user.id}`


    const resetinfo = new Discord.MessageEmbed()
    .setDescription('Are you sure you want to reset your account ?\nType **RESET CONFIRM** if you are sure. \nIf you want to cancel type **CANCEL**')
    msg.channel.send(resetinfo);
    const filter = m => m.author.id === msg.author.id;
    const wassupe = await msg.channel.awaitMessages(filter, { max: 1});
    const feel = wassupe.first();
    
    if(feel.content.includes('RESET CONFIRM')){
      db.delete(money);
      db.delete(bank);
      db.delete(banklimit);
      msg.channel.send('There is no way back now. Your account has been reset.');                  
    }
    else if(feel.content.includes('CANCEL')){
      msg.channel.send('Good. Your account wasn\'t reset.')
    }
    else{
      msg.channel.send('Not even an option. Dont mess around.');
      return;
    }
  


  }
}