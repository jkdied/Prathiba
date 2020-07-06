const Discord = require('discord.js');

const bot = new Discord.Client();

const token = '';

const PREFIX = 'maam';

const db = require('quick.db');

const fs = require('fs');

const keepAlive = require('./server.js');

bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for(const file of commandFiles){
  const command = require(`./commands/${file}`);
  bot.commands.set(command.name, command);
}

bot.on('ready', () =>{
    console.log('Prathiba is online');
    var act = ['with Children', 'with Student\'s Lives', 'with Marks of Children', 'with English', 'with Parents\' emotions']
    var activity = act[Math.floor(Math.random() * act.length)];
    bot.user.setActivity(activity);
})

bot.on('message', async msg=>{
    const mention = msg.mentions.users.first();
    let args = msg.content.substring(PREFIX.length).split(" ");
    if(msg.content.toLowerCase().startsWith("maam")){
        if(args[1] == null){
            var what0 = ['What ?', 'Do not simply mention me.', 'What, you vessel ?', 'Great. What ?', 'You are not doing anything here.']
            var what = what0[Math.floor(Math.random() * what0.length)];
            msg.reply(what)
            return;
        }
        if(msg.author.bot){
            return;
        }
        if(args[2] == 'is'){
          if(args[3] == 'bullying'){
            var bully = ['How Dare you ?, ', 'What sort of grace do you have if you are going around bullying, ', 'Leave it. You won\'t change will you ? ', 'You are going to detention young man. Embrace punishment, ' ]
            var bullying = bully[Math.floor(Math.random() * bully.length)];
            msg.channel.send(bullying + `${mention.username}`)
        }}
        else{
        switch(args[1].toLowerCase()){
            case 'hari':
                if(args[2].toLowerCase() === 'om'){
                    var harichoice0 = ['Hari Om, Dear Student.', 'Hmm.', 'Hari Om.', 'There is no use in greeting, if you are \n such a boggle-head...', 'What do you want ?']
                    var harichoice = harichoice0[Math.floor(Math.random() * harichoice0.length)];
                    msg.reply(harichoice);
                    
                }
                else{
                    return;
                }
                return;
                break;

            case 'hi': 
                var hichoice0 = ['Hmm.', 'You\'re supposed to be saying Hari Om.', 'What kind of a culture-less creature are you ? \n Stop being a ludicrous hollow-head and say Hari Om!', 'And what do you want ?', 'Hari Om. You seem better behaving than usual.']
                var hichoice = hichoice0[Math.floor(Math.random() * hichoice0.length)];
                msg.reply(hichoice)
                return;
                break;
            case 'quote':
                bot.commands.get('quotegeneration').execute(msg,args);
                break;
            case 'wtt':
                if(args[2] == null){
                  bot.commands.get('WHOTHATTCHR').execute(msg, args);
                  return;
                }
                else if(args[2].toLowerCase() == 'info'){
                  bot.commands.get('wttinfo').execute(msg, args);
                      
                    }
                else{
                  bot.commands.get('WHOTHATTCHR').execute(msg, args);
                }
                break;
            case 'whos':
                if(args[2].toLowerCase() == 'that'){
                  if(args[3].toLowerCase() == 'teacher'){
                    if(args[4].toLowerCase() == 'info'){
                      bot.commands.get('wttinfo').execute(msg, args);
                    }
                    else{
                      bot.commands.get('WHOTHATTCHR').execute(msg, args);
                    }
                  }
                }
                break;
            
            case 'howdy':
                msg.channel.send('Fine. What about You ?');
                const filter = m => m.author.id === msg.author.id;
                const wassupe = await msg.channel.awaitMessages(filter, { max: 1});
                const feel = wassupe.first();
                const iam = 'i am';
                let iam2 = feel.content.substring(iam.length).split(" ");
                const im = 'im';
                let im2 = feel.content.substring(im.length).split(" ");
                
                if(feel.content.toLowerCase().includes(im)){
                  msg.channel.send('You\'re ' + im2[1] + '? \nWell, You know what they say...... Doctors eat apples too..');                  
                }
                else if(feel.content.toLowerCase().includes(iam)){
                  msg.channel.send('You\'re ' + iam2[1] + '? \nWell, You know what they say...... Doctors eat apples too..')
                }
                else{
                  msg.channel.send('Keep Quiet. I do not care');
                }
                break;
            
            case 'help':
                bot.commands.get('help').execute(msg,args);
            
            return;
            
            case 'marks':
                bot.commands.get('marks').execute(msg,args);
                break;
            
            case 'pity':
                bot.commands.get('beg').execute(msg,args);
                break;
            case 'beg':
                bot.commands.get('beg').execute(msg,args);
                break;
            case 'daily':
                bot.commands.get('daily').execute(msg,args);
                break;
            case 'rob':
                bot.commands.get('rob').execute(msg,args);
                break;
            case 'steal':
                bot.commands.get('rob').execute(msg,args);
                break;
            case 'dep':
                bot.commands.get('dep').execute(msg,args);
                break;
            case 'memorize':
                bot.commands.get('dep').execute(msg,args);
                break;
            case 'mem':
                bot.commands.get('dep').execute(msg,args);
                break;
            case 'extract':
                bot.commands.get('with').execute(msg,args);
                break;
            case 'ext':
                bot.commands.get('with').execute(msg,args);
                break;
            case 'with':
                bot.commands.get('with').execute(msg,args);
                break;
            case 'serveradd':
                const authid = new Discord.MessageEmbed()
                .setAuthor('Prathiba')
                .setDescription('https://discord.com/oauth2/authorize?client_id=726848349692624947&scope=bot&permissions=1')
                .setFooter('Link to add Prathiba')
                msg.channel.send(authid)
            case 'reset':
                bot.commands.get('reset').execute(msg,args);
                break;
            case 'give':
                bot.commands.get('give').execute(msg,args);
                break;
            case 'share':
                bot.commands.get('give').execute(msg,args);
                break;
            case 'bribe':
                bot.commands.get('bribe').execute(msg,args);
                break; 
            case 'bri':
                bot.commands.get('bribe').execute(msg,args);
                break;                               
            case 'toppers':
                bot.commands.get('top').execute(msg,args,bot);
                break;                               
            case 'nerds':
                bot.commands.get('top').execute(msg,args,bot);
                break;                               
            case 'top':
                bot.commands.get('top').execute(msg,args,bot);
                break;     
            case 'topper':
                bot.commands.get('top').execute(msg,args,bot);
                break;    
            case 'iq':
                bot.commands.get('iq').execute(msg,args,bot);
                break;  
            case 'genius':
                bot.commands.get('iq').execute(msg,args,bot);
                break;  
            case 'gen':
                bot.commands.get('iq').execute(msg,args,bot);
                break;           
            case 'test':
                bot.commands.get('test').execute(msg,args,bot);
                break; 
            case 'canteen':
                bot.commands.get('shop').execute(msg,args,bot);
                break; 
            case 'ct':
                bot.commands.get('shop').execute(msg,args,bot);
                break; 
            case 'shop':
                bot.commands.get('shop').execute(msg,args,bot);
                break;                                            
            case 'buy':
                bot.commands.get('buy').execute(msg,args,bot);
                break;
            case 'inv':
                bot.commands.get('inv').execute(msg,args,bot);
                break;                
            case 'stuff':
                bot.commands.get('inv').execute(msg,args,bot);
                break;  
            case 'inventory':
                bot.commands.get('inv').execute(msg,args,bot);
                break;  
            case 'read':
                if(args[2].toLowerCase() == 'book'){
                bot.commands.get('readbook').execute(msg,args,bot);
                }
                break;
            case 'practical':
                bot.commands.get('practicals').execute(msg,args,bot);
                break;
            case 'practicals':
                bot.commands.get('practicals').execute(msg,args,bot);
                break;  
            case 'prac':
                bot.commands.get('practicals').execute(msg,args,bot);
                break;     
                } 
              }                                        
        }
});
keepAlive();
bot.login(token);