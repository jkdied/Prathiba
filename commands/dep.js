const Discord = require('discord.js');
const db = require('quick.db');
const ms = require('ms')

module.exports = {
  name: 'dep',
  description: 'deposit money',
  async execute(msg, args){

    let user = msg.author;
    let usermoneyfetch = await db.fetch(`money_${msg.author.id}`)
    let userbankfetch = await db.fetch(`bank_${user.id}`)
    let userbanklimitfetch = await db.fetch(`banklimit_${user.id}`
    )
    if(userbankfetch == null) userbankfetch = 0;
    if(userbanklimitfetch == null) userbanklimitfetch = 100;
    let usermoney = `money_${msg.author.id}`;
    let userbank = `bank_${msg.author.id}`;
    let userbanklimit = `banklimit_${msg.author.id}`
    var leftspace = userbanklimitfetch - userbankfetch;

    let timeout = 5000;
    let deptime = await db.fetch(`deptime_${msg.author.id}`);

    if (deptime !== null && timeout - (Date.now() - deptime) > 0) {
      let time = ms(timeout - (Date.now() - deptime));
        const depcool = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setDescription(`Wait for **${time}**. It takes time to transfer stuff to your brain, silly !`)
        .setFooter('Mini Game - Prathiba')
        msg.channel.send(depcool);

    } else {

      if(args[2] == null){
        const nullval = new Discord.MessageEmbed()
        .setDescription(`${user.username}, Do you really think you can memorize nothing ?\n Mention how much marks you want to transfer, for god\'s sake!`)
        msg.channel.send(nullval);
      }
      else if(args[2] == 'all'){
        if(userbanklimitfetch == userbankfetch){
          const fullbank = new Discord.MessageEmbed()
          .setDescription(`**${user.username}**, you can't memorize any more. \nYou will have to increase your brain\'s limit.`)
          msg.channel.send(fullbank);
          return;
        }
        else if(leftspace < usermoneyfetch){
          db.set(`deptime_${msg.author.id}`, Date.now());
          db.subtract(usermoney, leftspace)
          db.add(userbank, leftspace)
          const depositwithlimit = new Discord.MessageEmbed()
          .setAuthor(`${user.username}`)
          .setDescription(`Transfered ${leftspace} marks to your brain.`)
          msg.channel.send(depositwithlimit)
        }
        else if(leftspace > usermoneyfetch){
          const depforall = usermoneyfetch;
          db.set(`deptime_${msg.author.id}`, Date.now());
          db.subtract(usermoney, depforall)
          db.add(userbank, depforall)
          const depositedall = new Discord.MessageEmbed()
          .setAuthor(`${user.username}`)
          .setDescription(`Transfered ${depforall} marks to your brain.`)
          msg.channel.send(depositedall)
        }
      }
      else if(!isNaN(args[2])){
        const amount = Math.floor(args[2]);
        if(amount > usermoneyfetch){
          const notenuf = new Discord.MessageEmbed()
          .setAuthor(`${user.username}`)
          .setDescription(`You do not have that much marks in your papers, Idiot.`)
          msg.channel.send(notenuf)
        }
        else if(amount < usermoneyfetch || amount == usermoneyfetch){
          if(amount > leftspace){
          const notenufspace = new Discord.MessageEmbed()
          .setAuthor(`${user.username}`)
          .setDescription(`You do not have enough space in your brain to store that much, imbecile.`)
          msg.channel.send(notenufspace)
          return;
          }
          else if(amount < 0){
            const negval = new Discord.MessageEmbed()
            .setAuthor(`${user.username}`)
            .setDescription(`You cannot memorise negative marks now can you ?`)
            msg.channel.send(negval)
          }
          else if(amount == leftspace || amount < leftspace){
            db.set(`deptime_${msg.author.id}`, Date.now());
            db.subtract(usermoney, amount)
            db.add(userbank, amount)
            const depositamount = new Discord.MessageEmbed()
            .setAuthor(`${user.username}`)
            .setDescription(`Transfered ${amount} marks to your brain.`)
            msg.channel.send(depositamount)
            console.log(leftspace)
          }
        }
      }
      else{
        const nonum = new Discord.MessageEmbed()
        .setAuthor(`${user.username}`)
        .setDescription(`Do you expect to memorize random crap ?\nYou will have to define an amount of how much marks you want to memorize.`)
        msg.channel.send(nonum)
      }
    }
  }
}