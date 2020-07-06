const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
  name: 'inv',
  description: 'inventory',
  async execute(msg, args, bot){

    let user = msg.mentions.users.first() || msg.author
    var books_emoji = `:book:`
    var fair_emoji = `:notebook_with_decorative_cover:`

    let money = db
      .all()
      .filter(data => data.ID.startsWith(`${user.id}`) && data.data > 0)
      .sort((a, b) => b.data - a.data);
    if (!money.length) {
      let noEmbed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle(`${user.username}\'s Stuff`)
        .setDescription("Nothing here... \n(cricket noises)")
        .setFooter('Mini Game - Prathiba');
       msg.channel.send(noEmbed);
      var fairrec = await db.fetch(`${user.id}_fair_record`)
      console.log(fairrec)
      console.log(money)
      return
    }

    
    var itm = "";
    for (var i in money) {
      if (money[i].data === null) money[i].data = 0;
      var itemthing = money[i].ID.split("_");
      if(itemthing[2] == null){
        var itemthingy = itemthing[1]
      }
      else{
        var itemthingy = `${itemthing[1]} ${itemthing[2]}`;
      }
      var icon = `${itemthing[1]}_emoji`;
      var emicon = eval(icon);
      itm += `${emicon} **${itemthingy}** ─ ${money[i].data}\n`;

    }
   
    const embed = new Discord.MessageEmbed()
      .setColor("BLUE")
      .setDescription(`${user.username}\'s Stuff`)
      .addFields(
        { name: `Items`, value: `${itm}`, inline: true},
        )
      .setFooter('Mini Game - Prathiba')
    msg.channel.send(embed)
  }
}