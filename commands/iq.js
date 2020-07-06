const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
  name: 'iq',
  description: 'richest',
  async execute(msg, args, bot){

    const teachers = ['ashokan', 'aiswarya s', 'ambily', 'anita v', 'anitha b', 'annie', 'biji', 'bindhu', 'binu', 'bismy', 'chitra cr', 'chitra m', 'deepa p', 'deepa r', 'dhanasree', 'girija', 'hany', 'jaysree', 'jyothi', 'lata h', 'lata n', 'lata s', 'lipu', 'litty', 'manju', 'manju m', 'meera', 'mini', 'neetu', 'nirmala', 'nithya', 'prasanna', 'prathiba', 'praveen', 'preetha', 'pushya', 'radhakrishnan', 'rakhy', 'resmi', 'rijil', 'santhi', 'satheesh', 'sheeba', 'sheena', 'shobhana', 'smitha', 'sreekala', 'sudha', 'suma', 'sunitha', 'sunu', 'teena', 'tuney', 'usha', 'vidya', 'vidya vj', 'yasmine'];
    var teacherch = teachers[Math.floor(Math.random() * teachers.length)];

    let money = db
      .all()
      .filter(data => data.ID.startsWith(`bank_`))
      .sort((a, b) => b.data - a.data);
    if (!money.length) {
      let noEmbed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setDescription("Nothing To See Here Yet!")
        .setFooter('Mini Game - Prathiba');
      return msg.channel.send(noEmbed);
    }

    
    var stud = "";
    var marrku = "";
    money.length = 5;
    for (var i in money) {
      if (money[i].data === null) money[i].data = 0;
      var theuser = bot.users.cache.get(money[i].ID.split("_")[1]);

      stud += `**${money.indexOf(money[i]) + 1}. ${
        bot.users.cache.get(money[i].ID.split("_")[1])
          ? bot.users.cache.get(money[i].ID.split("_")[1]).username
          : `${teacherch}`
          }**\n`
          
      marrku += `${money[i].data} marks\n`;
    }
   
    const embed = new Discord.MessageEmbed()
      .setTitle(`Brilliant kiddos`)
      .setColor("BLUE")
      .setDescription(`My Brilliant Students <3 :blush:`)
      .addFields(
          { name: 'Student', value: `${stud}`, inline: true },
          { name: '--', value: `-\n-\n-\n-\n-`, inline: true},
          { name: 'IQ (they smart)', value: `${marrku}`, inline: true },
        )
      .setFooter('Mini Game - Prathiba')
    msg.channel.send(embed)
  }
}