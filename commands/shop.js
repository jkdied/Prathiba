const Discord = require('discord.js');

module.exports = {
  name: 'shop',
  description: 'the shop',
  async execute(msg, args){
  
  const wttinfo = new Discord.MessageEmbed()
  .setColor('#0099ff')
  .setTitle('Canteen')
  .setAuthor('Prathiba', 'https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FDPamazing.jpg')
  .addField(`Items`, `:book: **Book** - 30 marks\n*Prathiba\'s Collectibles, Life Stories, \nExperiences, Tricks and tips etc. \nImproves brain capacity*\n\n:carrot: **Carrot** - 250 marks \n**(currently out of stock)**\n*Improves your eye \nand hence the accuracy while cheating...*\n\n:bookmark_tabs: **PGIBC** - 5000 marks \n**(out of stock)**\n*Prathiba\'s Guide to \nInfinite Brain Capacity! \nNo more limits! \nStore as much as \nmarks as you want !*\n\n:notebook_with_decorative_cover: **Fair Record** - 100 marks\n*Must Buy! Without the \nFair Record you cannot \nattend any practical sessions.*`)
  msg.channel.send(wttinfo);
                      
    
  }
}