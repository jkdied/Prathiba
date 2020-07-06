const Discord = require('discord.js');

module.exports = {
  name: 'wttinfo',
  description: 'Explains wtt game',
  async execute(msg, args){
  
  const wttinfo = new Discord.MessageEmbed()
  .setColor('#0099ff')
  .setTitle('Who\'s that Teacher ?')
  .setAuthor('Prathiba', 'https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FDPamazing.jpg')
  .addField('Game Information', 'This is a small (maybe fun) minigame. \nThe game can be started with the command \n`maam wtt` or `maam whos that teacher` \nIn the game you\'re supposed to guess the teacher, who\'s hint photo is given')
  .addField('Rules for answering', 'You will have to send the name of the teacher as the answer. \nFor a few teachers initial is needed. \nIn these cases, write the initials seperated with a space. \nFor Example :- Vidya VJ, Chitra CR \nAll initials need to be mentioned. The initials should not be seperated with a space. \ni.e \nChitra CR :white_check_mark: \nChitra C R ❌')
  .setFooter('Prathiba Bot - Mini Game Infos', 'https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2Ficonofgame.png')
  msg.channel.send(wttinfo);
                      
    
  }
}