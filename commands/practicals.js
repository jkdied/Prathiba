const Discord = require('discord.js');
const db = require('quick.db');
const ms = require('ms')

module.exports = {
  name: 'practicals',
  description: 'practicals for money',
  async execute(msg, args){

    let user = msg.author;
    let usermoney = await db.fetch(`money_${msg.author.id}`);
    if(usermoney == null) usermoney = 0;
    let record = await db.fetch(`${user.id}_fair_record`)

    var che = Math.floor(Math.random() * Math.floor(23)) + 7;
    var phy = Math.floor(Math.random() * Math.floor(8)) + 7;
    var bio = Math.floor(Math.random() * Math.floor(18)) + 7;
    var messup = Math.floor(Math.random() * Math.floor(100)) + 1;
    var bookover = Math.floor(Math.random() * Math.floor(100)) + 1;

    var phyteachers = ['Tuney Miss', 'Vidya Miss', 'Satheesh Sir'];
    var ptea = phyteachers[Math.floor(Math.random() * phyteachers.length)];
    var bioteachers = ['Lata H Miss', 'Usha Miss', 'Anita Miss'];
    var btea = bioteachers[Math.floor(Math.random() * bioteachers.length)];

    let timeout = 300000;
    let practtime = await db.fetch(`practtime_${msg.author.id}`);

    if (practtime !== null && timeout - (Date.now() - practtime) > 0) {
      let time = ms(timeout - (Date.now() - practtime));
        const practcool = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .addField('You just had a session!', `You literally just had a session!\nWait for **${time}** !`)
        .setFooter('Mini Game - Prathiba')
        msg.channel.send(practcool);

    } else {

      if(record == 0 || record == null){
        const norec = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .addField('Fool', `You cant enter the lab without a Fair Record Booklet. Buy that and come.`)
        .setFooter('Mini Game - Prathiba')
        msg.channel.send(norec);
      }
      else{
        const whicone = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .addField(`Subject`, `Which subject do you want to attend the practical session of ,\n\`che\`, \`phy\` or \`bio\` ?`)
        .setFooter('Mini Game - Prathiba')
        msg.channel.send(whicone);
        filter = m => m.author.id === msg.author.id;
        var subj1 = await msg.channel.awaitMessages(filter, { max: 1});
        var subj = subj1.first();
        if(subj.content.toLowerCase().includes('che')){
          var points = che;
          var goodmsg = `${user.username} attended a Chemistry practical session and was given **${points}** marks by Hany Miss...`;
          var messupmsg = `${user.username} attended a Chemistry session and almost blew up Hany Miss ! Absoutely no marks were given`
        }
        else if(subj.content.toLowerCase().includes('phy')){
          var points = phy;
          var goodmsg = `${user.username} attended a Physics practical session and was given **${points}** marks by ${ptea}...`;
          var messupmsg = `${user.username} attended a Physics session and messed up. ${ptea} is blind now ! Absoutely no marks were given`
        }
        else if(subj.content.toLowerCase().includes('bio')){
          var points = bio;
          var goodmsg = `${user.username} attended a Biology practical session and was given **${points}** marks by ${btea}...`;
          var messupmsg = `${user.username} attended a Biology and messed up. ${btea} was eaten by a creature ! Absoutely no marks were given`
        }
        else{
          console.log(subj)
          msg.channel.send(`Stop it ! Get some help`);
          return;
          }

        if(messup < 40){
            if(bookover < 9){
            db.set(`practtime_${msg.author.id}`, Date.now());
            db.subtract(record, 1)
            const broke = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setDescription('Your Fair Record Pages are over. You will need to bring a new one.')
            .setFooter('Mini Game - Prathiba')
            msg.channel.send(broke);
          }
          else{
            db.set(`practtime_${msg.author.id}`, Date.now());
            const mess = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setDescription(messupmsg)
            .setFooter('Mini Game - Prathiba')
            msg.channel.send(mess);
          }
        }
        else{
          db.set(`practtime_${msg.author.id}`, Date.now());
          db.add(`money_${user.id}`, points)
          const good = new Discord.MessageEmbed()
          .setColor('RANDOM')
          .setDescription(goodmsg)
          .setFooter('Mini Game - Prathiba')
          msg.channel.send(good);
        }
      }
    }
  }
}