const Discord = require('discord.js');

module.exports = {
  name: 'help',
  description: 'Help Command',
  async execute(msg, args){
  
  if(!args[2]){
    const wttinfo = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Prathiba Bot Help')
    .setAuthor('Prathiba', 'https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FDPamazing.jpg')
    .addField('Interaction commands', 'I will not be defining each command. Find it out yourselves. \n`maam hi` \n`maam hari om` \n`maam howdy` \n`maam @mention is bullying` \n`maam help` \n`maam quote` \n`maam quote say`')
    .addField('Games', 'For mmore information on mini games, you can include `maam help games`')
    .setFooter('Prathiba Bot - Command Help', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR3uBYJUMojzcrZ0rqGtVL23hLL28LDEdEiubOTORKYDlwJxCym&usqp=CAU')
    msg.channel.send(wttinfo);
  }
  
  if(args[2].toLowerCase == 'games'){
    const gameinfo = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setThumbnail('http://chinmayavaduthala.edu.in/userfiles/faculty/a862d441df1940e4a961687ae7aa69ff.jpg')
    .setTitle('Mini Games with Mini')
    .setAuthor('Prathiba', 'https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FDPamazing.jpg')
    .addField(`Earning Marks', 'There is more than just 1 way to earn!\n`)
    .addField('Games', 'For mmore information on mini games, you can include `maam help games`')
    .setFooter('Prathiba Bot - Command Help', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR3uBYJUMojzcrZ0rqGtVL23hLL28LDEdEiubOTORKYDlwJxCym&usqp=CAU')
    msg.channel.send(gameinfo);
  }

  }
}