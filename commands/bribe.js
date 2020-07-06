const Discord = require('discord.js');
const db = require('quick.db');
const ms = require('ms')

module.exports = {
  name: 'bribe',
  description: 'bribing for money',
  async execute(msg, args){

    let user = msg.author;
    let usermoney = await db.fetch(`money_${msg.author.id}`);
    let usersmoney = `money_${user.id}`
    if(usermoney == null) usermoney = 0;
    const teachers = ['ashokan', 'aiswarya s', 'ambily', 'anita v', 'anitha b', 'annie', 'biji', 'bindhu', 'binu', 'bismy', 'chitra cr', 'chitra m', 'deepa p', 'deepa r', 'dhanasree', 'girija', 'hany', 'jaysree', 'jyothi', 'lata h', 'lata n', 'lata s', 'lipu', 'litty', 'manju', 'manju m', 'meera', 'mini', 'neetu', 'nirmala', 'nithya', 'prasanna', 'prathiba', 'praveen', 'preetha', 'pushya', 'radhakrishnan', 'rakhy', 'resmi', 'rijil', 'santhi', 'satheesh', 'sheeba', 'sheena', 'shobhana', 'smitha', 'sreekala', 'sudha', 'suma', 'sunitha', 'sunu', 'teena', 'tuney', 'usha', 'vidya', 'vidya vj', 'yasmine'];
    var teacherch = teachers[Math.floor(Math.random() * teachers.length)];

    let timeout = 40000;

    let bribetime = await db.fetch(`bribetime_${msg.author.id}`);

    if (bribetime !== null && timeout - (Date.now() - bribetime) > 0) {
      let time = ms(timeout - (Date.now() - bribetime));
        const begcool = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .addField('Bribery is Not Allowed here !', `You are being pathetic. If you bribe our teachers like this, I will have to send you out oh this school! \nIm gonna be here for the next **${time}**. Don\'t you dare !`)
        .setFooter('Mini Game - Prathiba')
        msg.channel.send(begcool);

    } else {
      if(!args[2]){
        const nomon = new Discord.MessageEmbed()
        .setAuthor(`${user.username}`)
        .setDescription(`Do you really expect to bribe someone with No marks ?`)
        msg.channel.send(nomon);
      }
      else if(isNaN(args[2])){
        if(args[2] == 'all'){
          var betlot = usermoney;
          const maamcatch = Math.floor(Math.random() * 200);
          const chance = Math.floor(Math.random() * 200) + 1;
          const percent = chance/100;
          var profit = chance - 100;
          var loss = 100 - chance;
          var profitdecfix = profit.toFixed(2);
          var lossdecfix = loss.toFixed(2);

          if(maamcatch < 40){
            db.subtract(usersmoney, betlot)
            const cautmon = new Discord.MessageEmbed()
            .setAuthor(`${user.username}`)
            .setDescription(`How dare you ? I SAW THAT! \nI\'m taking these marks from you. Don\'t you expect them back! \nStupid little maggot going around bribing teachers`)
            msg.channel.send(cautmon);
          }
          else{
            db.subtract(usersmoney, betlot);
            var gorl2 = betlot * percent;
            var gorl = Math.floor(gorl2);
            if(chance < 50){
              const zeromon = new Discord.MessageEmbed()
              .setFooter(`Mini Game - Prathiba`)
              .setDescription(`**${user.username}** tried to bribe **${teacherch}** with ${betlot} marks, but got rejected and lost the marks tried to bribe with.`)
              msg.channel.send(zeromon);
            }
            else if(chance > 50 || chance == 50){
              if(chance < 100){
                db.set(`bribetime_${msg.author.id}`, Date.now());
                db.add(usersmoney, gorl);
                const bribedmon = new Discord.MessageEmbed()
                .setFooter(`Mini Game - Prathiba`)
                .setDescription(`**${user.username}** bribed **${teacherch}** with ${betlot}, it was accepted.`)
                .addFields(
                { name: 'Money Spent:', value: `${betlot}`, inline: true },
                { name: 'Percent Lost:', value: `${lossdecfix}%`, inline: true },
                { name: 'Marks Recieved:', value: `${Math.floor(gorl)}` },
                )
                msg.channel.send(bribedmon);
              }
              else if(chance == 100){
                db.set(`bribetime_${msg.author.id}`, Date.now());
                db.add(usersmoney, gorl);                
                const bribedmon = new Discord.MessageEmbed()
                .setFooter(`Mini Game - Prathiba`)
                .setDescription(`**${user.username}** bribed **${teacherch}** with ${betlot}, it was accepted. But a profit wasnt made...`)
                msg.channel.send(bribedmon);                
              }
              else if(chance > 100){
                db.set(`bribetime_${msg.author.id}`, Date.now());
                db.add(usersmoney, gorl);                
                const bribedmon = new Discord.MessageEmbed()
                .setFooter(`Mini Game - Prathiba`)
                .setDescription(`**${user.username}** bribed **${teacherch}** with ${betlot}, it was accepted.`)
                .addFields(
                { name: 'Money Spent:', value: `${betlot}`, inline: true },
                { name: 'Percent Gain:', value: `${profitdecfix}%`, inline: true },
                { name: 'Marks Recieved:', value: `${Math.floor(gorl)}` },
                )
                msg.channel.send(bribedmon);                
              }
            }
          }         
                  
        }
        else{
        const nomon = new Discord.MessageEmbed()
        .setAuthor(`${user.username}`)
        .setDescription(`Do you really expect to bribe someone with that ? You need to give us marks, honey.`)
        msg.channel.send(nomon);
        }
      }
      else if(!isNaN(args[2])){
        var betlot = Math.floor(args[2]);
        const maamcatch = Math.floor(Math.random() * 200);
        const chance = Math.floor(Math.random() * 200) + 1;
        const percent = chance/100;
        var profit = chance - 100;
        var loss = 100 - chance;
        var profitdecfix = profit.toFixed(2);
        var lossdecfix = loss.toFixed(2);        
        
        if(betlot > usermoney){
        const lessmon = new Discord.MessageEmbed()
        .setAuthor(`${user.username}`)
        .setDescription(`You don\'t have that much marks in your papers, Idiot.`)
        msg.channel.send(lessmon);          
        }
        else if(betlot < 0){
        const negmon = new Discord.MessageEmbed()
        .setAuthor(`${user.username}`)
        .setDescription(`You cannot bribe with negative marks, you clown.`)
        msg.channel.send(negmon);               
        }
        else if(betlot < usermoney || betlot == usermoney){
          if(maamcatch < 40){
            db.subtract(usersmoney, betlot)
            const cautmon = new Discord.MessageEmbed()
            .setAuthor(`${user.username}`)
            .setDescription(`How dare you ? I SAW THAT! \nI\'m taking these marks from you. Don\'t you expect them back! \nStupid little maggot going around bribing teachers`)
            msg.channel.send(cautmon);
          }
          else{
            db.subtract(usersmoney, betlot);
            var gorl = betlot * percent;
            if(chance < 50){
              const zeromon = new Discord.MessageEmbed()
              .setFooter(`Mini Game - Prathiba`)
              .setDescription(`**${user.username}** tried to bribe **${teacherch}** with ${betlot}, but got rejected and lost the marks tried to bribe with.`)
              msg.channel.send(zeromon);
            }
            else if(chance > 50 || chance == 50){
              if(chance < 100){
                db.set(`bribetime_${msg.author.id}`, Date.now());
                db.add(usersmoney, gorl);
                const bribedmon = new Discord.MessageEmbed()
                .setFooter(`Mini Game - Prathiba`)
                .setDescription(`**${user.username}** bribed **${teacherch}** with ${betlot}, it was accepted.`)
                .addFields(
                { name: 'Money Spent:', value: `${betlot}`, inline: true },
                { name: 'Percent Lost:', value: `${lossdecfix}%`, inline: true },
                { name: 'Marks Recieved:', value: `${Math.floor(gorl)}` },
                )
                msg.channel.send(bribedmon);
              }
              else if(chance == 100){
                db.set(`bribetime_${msg.author.id}`, Date.now());
                db.add(usersmoney, gorl);                
                const bribedmon = new Discord.MessageEmbed()
                .setFooter(`Mini Game - Prathiba`)
                .setDescription(`**${user.username}** bribed **${teacherch}** with ${betlot}, it was accepted. But a profit wasnt made...`)
                msg.channel.send(bribedmon);                
              }
              else if(chance > 100){
                db.set(`bribetime_${msg.author.id}`, Date.now());
                db.add(usersmoney, gorl);                
                const bribedmon = new Discord.MessageEmbed()
                .setFooter(`Mini Game - Prathiba`)
                .setDescription(`**${user.username}** bribed **${teacherch}** with ${betlot}, it was accepted.`)
                .addFields(
                { name: 'Money Spent:', value: `${betlot}`, inline: true },
                { name: 'Percent Gain:', value: `${profitdecfix}%`, inline: true },
                { name: 'Marks Recieved:', value: `${Math.floor(gorl)}` },
                )
                msg.channel.send(bribedmon);                
              }
            }
          }
        }
      }
    }
  }
}