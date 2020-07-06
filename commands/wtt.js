const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
  name: 'WHOTHATTCHR',
  description: 'Guees the teacher by their shadow',
  async execute(message, args){
    let user = message.author;
    let usermoney = `money_${message.author.id}`;
    let usermention = `${user}`
    
    var pointrange = ['1', '2', '3', '4', '5'];
    var points = pointrange[Math.floor(Math.random() * pointrange.length)];
    const rickpercentage = Math.floor(Math.random() * Math.floor(2));
    const teachers = ['ashokan', 'aiswarya s', 'ambily', 'anita v', 'anitha b', 'annie', 'biji', 'bindhu', 'binu', 'bismy', 'chitra cr', 'chitra m', 'deepa p', 'deepa r', 'dhanasree', 'girija', 'hany', 'jaysree', 'jyothi', 'lata h', 'lata n', 'lata s', 'lipu', 'litty', 'manju', 'manju m', 'meera', 'mini', 'neetu', 'nirmala', 'nithya', 'prasanna', 'prathiba', 'praveen', 'preetha', 'pushya', 'radhakrishnan', 'rakhy', 'resmi', 'rijil', 'santhi', 'satheesh', 'sheeba', 'sheena', 'shobhana', 'smitha', 'sreekala', 'sudha', 'suma', 'sunitha', 'sunu', 'teena', 'tuney', 'usha', 'vidya', 'vidya vj', 'yasmine'];
    var teacherch = teachers[Math.floor(Math.random() * teachers.length)];
    
    if(teacherch == 'ashokan'){
      var teacherpic = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FAhokan.jpg?v=1592242389745');
      message.channel.send('Who\'s That Teacher ?', teacherpic);
      const filter = m => m.author.id == message.author.id;
      const replanswer = await message.channel.awaitMessages(filter, { max: 1});
      const ans = replanswer.first();
      
      if(ans.content.toLowerCase().includes(teacherch)){
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FAhokanREVEAL.jpg?v=1592243831924');
        message.channel.send( 'Great! You seem to know your teachers ! \n As you said, it was ' + teacherch.toUpperCase(), gotthatright);
        db.add(usermoney, points); 
        message.channel.send(usermention + ' has recieved ' + points + ' Marks for answering Correctly !')
      }
      else{
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FAhokanREVEAL.jpg?v=1592243831924');
        message.channel.send( 'Nope, you ignorant cretin. \nIt was ' + teacherch.toUpperCase(), gotthatright );
      }
      }
    
        if(teacherch == 'aiswarya s'){
      var teacherpic = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FAiswaryaS.jpg?v=1592242691872');
      message.channel.send('Who\'s That Teacher ?', teacherpic);
      const filter = m => m.author.id == message.author.id;
      const replanswer = await message.channel.awaitMessages(filter, { max: 1});
      const ans = replanswer.first();
      
      if(ans.content.toLowerCase().includes(teacherch)){
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FAiswaryaSREVEAL.jpg?v=1592243833179');
        message.channel.send( 'Great! You seem to know your teachers ! \n As you said, it was ' + teacherch.toUpperCase(), gotthatright);
        db.add(usermoney, points); message.channel.send(usermention + ' has recieved ' + points + ' Marks for answering Correctly !')
      }
      else{
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FAiswaryaSREVEAL.jpg?v=1592243833179');
        message.channel.send( 'Nope, you ignorant cretin. \nIt was ' + teacherch.toUpperCase(), gotthatright );
      }
      }
    
        if(teacherch == 'ambily'){
      var teacherpic = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FAmbily.jpg?v=1592242716350');
      message.channel.send('Who\'s That Teacher ?', teacherpic);
      const filter = m => m.author.id == message.author.id;
      const replanswer = await message.channel.awaitMessages(filter, { max: 1});
      const ans = replanswer.first();
      
      if(ans.content.toLowerCase().includes(teacherch)){
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FAmbilyREVEAL.jpg?v=1592243838469');
        message.channel.send( 'Great! You seem to know your teachers ! \n As you said, it was ' + teacherch.toUpperCase(), gotthatright);
        db.add(usermoney, points); message.channel.send(usermention + ' has recieved ' + points + ' Marks for answering Correctly !')
      }
      else{
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FAmbilyREVEAL.jpg?v=1592243838469');
        message.channel.send( 'Nope, you ignorant cretin. \nIt was ' + teacherch.toUpperCase(), gotthatright );
      }
      }
    
        if(teacherch == 'anita v'){
      var teacherpic = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FAnitaV.jpg?v=1592242690976');
      message.channel.send('Who\'s That Teacher ?', teacherpic);
      const filter = m => m.author.id == message.author.id;
      const replanswer = await message.channel.awaitMessages(filter, { max: 1});
      const ans = replanswer.first();
      
      if(ans.content.toLowerCase().includes(teacherch)){
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FAnitaVREVEAL.jpg?v=1592243843294');
        message.channel.send( 'Great! You seem to know your teachers ! \n As you said, it was ' + teacherch.toUpperCase(), gotthatright);
        db.add(usermoney, points); message.channel.send(usermention + ' has recieved ' + points + ' Marks for answering Correctly !')
      }
      else{
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FAnitaVREVEAL.jpg?v=1592243843294');
        message.channel.send( 'Nope, you ignorant cretin. \nIt was ' + teacherch.toUpperCase(), gotthatright );
      }
      }
    
        if(teacherch == 'anitha b'){
      var teacherpic = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FAnithaB.jpg?v=1592242707919');
      message.channel.send('Who\'s That Teacher ?', teacherpic);
      const filter = m => m.author.id == message.author.id;
      const replanswer = await message.channel.awaitMessages(filter, { max: 1});
      const ans = replanswer.first();
      
      if(ans.content.toLowerCase().includes(teacherch)){
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FAnithaBREVEAL.jpg?v=1592243845626');
        message.channel.send( 'Great! You seem to know your teachers ! \n As you said, it was ' + teacherch.toUpperCase(), gotthatright);
        db.add(usermoney, points); message.channel.send(usermention + ' has recieved ' + points + ' Marks for answering Correctly !')
      }
      else{
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FAnithaBREVEAL.jpg?v=1592243845626');
        message.channel.send( 'Nope, you ignorant cretin. \nIt was ' + teacherch.toUpperCase(), gotthatright );
      }
      }
    
        if(teacherch == 'annie'){
      var teacherpic = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FAnnie.jpg?v=1592242704797');
      message.channel.send('Who\'s That Teacher ?', teacherpic);
      const filter = m => m.author.id == message.author.id;
      const replanswer = await message.channel.awaitMessages(filter, { max: 1});
      const ans = replanswer.first();
      
      if(ans.content.toLowerCase().includes(teacherch)){
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FAnnieREVEAL.jpg?v=1592243845625');
        message.channel.send( 'Great! You seem to know your teachers ! \n As you said, it was ' + teacherch.toUpperCase(), gotthatright);
        db.add(usermoney, points); message.channel.send(usermention + ' has recieved ' + points + ' Marks for answering Correctly !')
      }
      else{
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FAnnieREVEAL.jpg?v=1592243845625');
        message.channel.send( 'Nope, you ignorant cretin. \nIt was ' + teacherch.toUpperCase(), gotthatright );
      }
      }
    
        if(teacherch == 'biji'){
      var teacherpic = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FBiji.jpg?v=1592242685740');
      message.channel.send('Who\'s That Teacher ?', teacherpic);
      const filter = m => m.author.id == message.author.id;
      const replanswer = await message.channel.awaitMessages(filter, { max: 1});
      const ans = replanswer.first();
      
      if(ans.content.toLowerCase().includes(teacherch)){
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FBijiREVEAL.jpg?v=1592243845853');
        message.channel.send( 'Great! You seem to know your teachers ! \n As you said, it was ' + teacherch.toUpperCase(), gotthatright);
        db.add(usermoney, points); message.channel.send(usermention + ' has recieved ' + points + ' Marks for answering Correctly !')
      }
      else{
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FBijiREVEAL.jpg?v=1592243845853');
        message.channel.send( 'Nope, you ignorant cretin. \nIt was ' + teacherch.toUpperCase(), gotthatright );
      }
      }
    
        if(teacherch == 'bindhu'){
      var teacherpic = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FBindhu.jpg?v=1592242422518');
      message.channel.send('Who\'s That Teacher ?', teacherpic);
      const filter = m => m.author.id == message.author.id;
      const replanswer = await message.channel.awaitMessages(filter, { max: 1});
      const ans = replanswer.first();
      
      if(ans.content.toLowerCase().includes(teacherch)){
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FBindhuREVEAL.jpg?v=1592243931813');
        message.channel.send( 'Great! You seem to know your teachers ! \n As you said, it was ' + teacherch.toUpperCase(), gotthatright);
        db.add(usermoney, points); message.channel.send(usermention + ' has recieved ' + points + ' Marks for answering Correctly !')
      }
      else{
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FBindhuREVEAL.jpg?v=1592243931813');
        message.channel.send( 'Nope, you ignorant cretin. \nIt was ' + teacherch.toUpperCase(), gotthatright );
      }
      }
    
        if(teacherch == 'binu'){
      var teacherpic = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FBinu.jpg?v=1592242717154');
      message.channel.send('Who\'s That Teacher ?', teacherpic);
      const filter = m => m.author.id == message.author.id;
      const replanswer = await message.channel.awaitMessages(filter, { max: 1});
      const ans = replanswer.first();
      
      if(ans.content.toLowerCase().includes(teacherch)){
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FBinuREVEAL.jpg?v=1592243832904');
        message.channel.send( 'Great! You seem to know your teachers ! \n As you said, it was ' + teacherch.toUpperCase(), gotthatright);
        db.add(usermoney, points); message.channel.send(usermention + ' has recieved ' + points + ' Marks for answering Correctly !')
      }
      else{
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FBinuREVEAL.jpg?v=1592243832904');
        message.channel.send( 'Nope, you ignorant cretin. \nIt was ' + teacherch.toUpperCase(), gotthatright );
      }
      }
    
        if(teacherch == 'bismy'){
      var teacherpic = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FBismy.jpg?v=1592242716035');
      message.channel.send('Who\'s That Teacher ?', teacherpic);
      const filter = m => m.author.id == message.author.id;
      const replanswer = await message.channel.awaitMessages(filter, { max: 1});
      const ans = replanswer.first();
      
      if(ans.content.toLowerCase().includes(teacherch)){
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FBismyREVEAL.jpg?v=1592243933607');
        message.channel.send( 'Great! You seem to know your teachers ! \n As you said, it was ' + teacherch.toUpperCase(), gotthatright);
        db.add(usermoney, points); message.channel.send(usermention + ' has recieved ' + points + ' Marks for answering Correctly !')
      }
      else{
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FBismyREVEAL.jpg?v=1592243933607');
        message.channel.send( 'Nope, you ignorant cretin. \nIt was ' + teacherch.toUpperCase(), gotthatright );
      }
      }
    
        if(teacherch == 'chitra cr'){
      var teacherpic = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FChitraCR.jpg?v=1592243349513');
      message.channel.send('Who\'s That Teacher ?', teacherpic);
      const filter = m => m.author.id == message.author.id;
      const replanswer = await message.channel.awaitMessages(filter, { max: 1});
      const ans = replanswer.first();
      
      if(ans.content.toLowerCase().includes(teacherch)){
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FChitraCRREVEALED.jpg?v=1592243830538');
        message.channel.send( 'Great! You seem to know your teachers ! \n As you said, it was ' + teacherch.toUpperCase(), gotthatright);
        db.add(usermoney, points); message.channel.send(usermention + ' has recieved ' + points + ' Marks for answering Correctly !')
      }
      else{
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FChitraCRREVEALED.jpg?v=1592243830538');
        message.channel.send( 'Nope, you ignorant cretin. \nIt was ' + teacherch.toUpperCase(), gotthatright );
      }
      }
    
        if(teacherch == 'chitra m'){
      var teacherpic = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FChitraM.jpg?v=1592243341806');
      message.channel.send('Who\'s That Teacher ?', teacherpic);
      const filter = m => m.author.id == message.author.id;
      const replanswer = await message.channel.awaitMessages(filter, { max: 1});
      const ans = replanswer.first();
      
      if(ans.content.toLowerCase().includes(teacherch)){
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FChitraMREVEALED.jpg?v=1592243938871');
        message.channel.send( 'Great! You seem to know your teachers ! \n As you said, it was ' + teacherch.toUpperCase(), gotthatright);
        db.add(usermoney, points); message.channel.send(usermention + ' has recieved ' + points + ' Marks for answering Correctly !')
      }
      else{
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FChitraMREVEALED.jpg?v=1592243938871');
        message.channel.send( 'Nope, you ignorant cretin. \nIt was ' + teacherch.toUpperCase(), gotthatright );
      }
      }
    
        if(teacherch == 'deepa r'){
      var teacherpic = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FDeepaR.jpg?v=1592242795263');
      message.channel.send('Who\'s That Teacher ?', teacherpic);
      const filter = m => m.author.id == message.author.id;
      const replanswer = await message.channel.awaitMessages(filter, { max: 1});
      const ans = replanswer.first();
      
      if(ans.content.toLowerCase().includes(teacherch)){
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FDeepaRREVEAL.jpg?v=1592243946602');
        message.channel.send( 'Great! You seem to know your teachers ! \n As you said, it was ' + teacherch.toUpperCase(), gotthatright);
        db.add(usermoney, points); message.channel.send(usermention + ' has recieved ' + points + ' Marks for answering Correctly !')
      }
      else{
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FDeepaRREVEAL.jpg?v=1592243946602');
        message.channel.send( 'Nope, you ignorant cretin. \nIt was ' + teacherch.toUpperCase(), gotthatright );
      }
      }
    
        if(teacherch == 'deepa p'){
      var teacherpic = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FDeepaP.jpg?v=1592243326138');
      message.channel.send('Who\'s That Teacher ?', teacherpic);
      const filter = m => m.author.id == message.author.id;
      const replanswer = await message.channel.awaitMessages(filter, { max: 1});
      const ans = replanswer.first();
      
      if(ans.content.toLowerCase().includes(teacherch)){
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FDeepaPREVEAL.jpg?v=1592243947022');
        message.channel.send( 'Great! You seem to know your teachers ! \n As you said, it was ' + teacherch.toUpperCase(), gotthatright);
        db.add(usermoney, points); message.channel.send(usermention + ' has recieved ' + points + ' Marks for answering Correctly !')
      }
      else{
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FDeepaPREVEAL.jpg?v=1592243947022');
        message.channel.send( 'Nope, you ignorant cretin. \nIt was ' + teacherch.toUpperCase(), gotthatright );
      }
      }
    
        if(teacherch == 'dhanasree'){
      var teacherpic = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FDhanasree.jpg?v=1592242800300');
      message.channel.send('Who\'s That Teacher ?', teacherpic);
      const filter = m => m.author.id == message.author.id;
      const replanswer = await message.channel.awaitMessages(filter, { max: 1});
      const ans = replanswer.first();
      
      if(ans.content.toLowerCase().includes(teacherch)){
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FDhanasreeREVEALED.jpg?v=1592243946903');
        message.channel.send( 'Great! You seem to know your teachers ! \n As you said, it was ' + teacherch.toUpperCase(), gotthatright);
        db.add(usermoney, points); message.channel.send(usermention + ' has recieved ' + points + ' Marks for answering Correctly !')
      }
      else{
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FDhanasreeREVEALED.jpg?v=1592243946903');
        message.channel.send( 'Nope, you ignorant cretin. \nIt was ' + teacherch.toUpperCase(), gotthatright );
      }
      }
    
        if(teacherch == 'girija'){
      var teacherpic = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FGirija.jpg?v=1592242818939');
      message.channel.send('Who\'s That Teacher ?', teacherpic);
      const filter = m => m.author.id == message.author.id;
      const replanswer = await message.channel.awaitMessages(filter, { max: 1});
      const ans = replanswer.first();
      
      if(ans.content.toLowerCase().includes(teacherch)){
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FGirijaREVEALED.jpg?v=1592244019269');
        message.channel.send( 'Great! You seem to know your teachers ! \n As you said, it was ' + teacherch.toUpperCase(), gotthatright);
        db.add(usermoney, points); message.channel.send(usermention + ' has recieved ' + points + ' Marks for answering Correctly !')
      }
      else{
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FGirijaREVEALED.jpg?v=1592244019269');
        message.channel.send( 'Nope, you ignorant cretin. \nIt was ' + teacherch.toUpperCase(), gotthatright );
      }
      }
    
        if(teacherch == 'hany'){
      var teacherpic = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FHany.jpg?v=1592242827766');
      message.channel.send('Who\'s That Teacher ?', teacherpic);
      const filter = m => m.author.id == message.author.id;
      const replanswer = await message.channel.awaitMessages(filter, { max: 1});
      const ans = replanswer.first();
      
      if(ans.content.toLowerCase().includes(teacherch)){
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FHanyREVEALED.jpg?v=1592244026664');
        message.channel.send( 'Great! You seem to know your teachers ! \n As you said, it was ' + teacherch.toUpperCase(), gotthatright);
        db.add(usermoney, points); message.channel.send(usermention + ' has recieved ' + points + ' Marks for answering Correctly !')
      }
      else{
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FHanyREVEALED.jpg?v=1592244026664');
        message.channel.send( 'Nope, you ignorant cretin. \nIt was ' + teacherch.toUpperCase(), gotthatright );
      }
      }
    
        if(teacherch == 'jaysree'){
      var teacherpic = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FJaysree.jpg?v=1592242710108');
      message.channel.send('Who\'s That Teacher ?', teacherpic);
      const filter = m => m.author.id == message.author.id;
      const replanswer = await message.channel.awaitMessages(filter, { max: 1});
      const ans = replanswer.first();
      
      if(ans.content.toLowerCase().includes(teacherch)){
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FJaysreeREVEALED.jpg?v=1592244025168');
        message.channel.send( 'Great! You seem to know your teachers ! \n As you said, it was ' + teacherch.toUpperCase(), gotthatright);
        db.add(usermoney, points); message.channel.send(usermention + ' has recieved ' + points + ' Marks for answering Correctly !')
      }
      else{
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FJaysreeREVEALED.jpg?v=1592244025168');
        message.channel.send( 'Nope, you ignorant cretin. \nIt was ' + teacherch.toUpperCase(), gotthatright );
      }
      }
    
        if(teacherch == 'jyothi'){
      var teacherpic = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FJyothi.jpg?v=1592242813207');
      message.channel.send('Who\'s That Teacher ?', teacherpic);
      const filter = m => m.author.id == message.author.id;
      const replanswer = await message.channel.awaitMessages(filter, { max: 1});
      const ans = replanswer.first();
      
      if(ans.content.toLowerCase().includes(teacherch)){
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FJyothiREVEALED.jpg?v=1592243935355');
        message.channel.send( 'Great! You seem to know your teachers ! \n As you said, it was ' + teacherch.toUpperCase(), gotthatright);
        db.add(usermoney, points); message.channel.send(usermention + ' has recieved ' + points + ' Marks for answering Correctly !')
      }
      else{
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FJyothiREVEALED.jpg?v=1592243935355');
        message.channel.send( 'Nope, you ignorant cretin. \nIt was ' + teacherch.toUpperCase(), gotthatright );
      }
      }
    
        if(teacherch == 'lata h'){
      var teacherpic = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FLataH.jpg?v=1592242835930');
      message.channel.send('Who\'s That Teacher ?', teacherpic);
      const filter = m => m.author.id == message.author.id;
      const replanswer = await message.channel.awaitMessages(filter, { max: 1});
      const ans = replanswer.first();
      
      if(ans.content.toLowerCase().includes(teacherch)){
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FLataHREVEAL.jpg?v=1592244029744');
        message.channel.send( 'Great! You seem to know your teachers ! \n As you said, it was ' + teacherch.toUpperCase(), gotthatright);
        db.add(usermoney, points); message.channel.send(usermention + ' has recieved ' + points + ' Marks for answering Correctly !')
      }
      else{
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FLataHREVEAL.jpg?v=1592244029744');
        message.channel.send( 'Nope, you ignorant cretin. \nIt was ' + teacherch.toUpperCase(), gotthatright );
      }
      }
    
        if(teacherch == 'lata n'){
      var teacherpic = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FLataN.jpg?v=1592242410174');
      message.channel.send('Who\'s That Teacher ?', teacherpic);
      const filter = m => m.author.id == message.author.id;
      const replanswer = await message.channel.awaitMessages(filter, { max: 1});
      const ans = replanswer.first();
      
      if(ans.content.toLowerCase().includes(teacherch)){
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FLataNREVEAL.jpg?v=1592244037762');
        message.channel.send( 'Great! You seem to know your teachers ! \n As you said, it was ' + teacherch.toUpperCase(), gotthatright);
        db.add(usermoney, points); message.channel.send(usermention + ' has recieved ' + points + ' Marks for answering Correctly !')
      }
      else{
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FLataNREVEAL.jpg?v=1592244037762');
        message.channel.send( 'Nope, you ignorant cretin. \nIt was ' + teacherch.toUpperCase(), gotthatright );
      }
      }
    
        if(teacherch == 'lata s'){
      var teacherpic = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FLataS.jpg?v=1592242840973');
      message.channel.send('Who\'s That Teacher ?', teacherpic);
      const filter = m => m.author.id == message.author.id;
      const replanswer = await message.channel.awaitMessages(filter, { max: 1});
      const ans = replanswer.first();
      
      if(ans.content.toLowerCase().includes(teacherch)){
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FLataSREVEAL.jpg?v=1592244033263');
        message.channel.send( 'Great! You seem to know your teachers ! \n As you said, it was ' + teacherch.toUpperCase(), gotthatright);
        db.add(usermoney, points); message.channel.send(usermention + ' has recieved ' + points + ' Marks for answering Correctly !')
      }
      else{
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FLataSREVEAL.jpg?v=1592244033263');
        message.channel.send( 'Nope, you ignorant cretin. \nIt was ' + teacherch.toUpperCase(), gotthatright );
      }
      }
    
        if(teacherch == 'lipu'){
      var teacherpic = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FLipu.jpg?v=1592242806432');
      message.channel.send('Who\'s That Teacher ?', teacherpic);
      const filter = m => m.author.id == message.author.id;
      const replanswer = await message.channel.awaitMessages(filter, { max: 1});
      const ans = replanswer.first();
      
      if(ans.content.toLowerCase().includes(teacherch)){
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FLipuREVEAL.jpg?v=1592244043859');
        message.channel.send( 'Great! You seem to know your teachers ! \n As you said, it was ' + teacherch.toUpperCase(), gotthatright);
        db.add(usermoney, points); message.channel.send(usermention + ' has recieved ' + points + ' Marks for answering Correctly !')
      }
      else{
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FLipuREVEAL.jpg?v=1592244043859');
        message.channel.send( 'Nope, you ignorant cretin. \nIt was ' + teacherch.toUpperCase(), gotthatright );
      }
      }
    
        if(teacherch == 'litty'){
      var teacherpic = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FLitty.jpg?v=1592243333434');
      message.channel.send('Who\'s That Teacher ?', teacherpic);
      const filter = m => m.author.id == message.author.id;
      const replanswer = await message.channel.awaitMessages(filter, { max: 1});
      const ans = replanswer.first();
      
      if(ans.content.toLowerCase().includes(teacherch)){
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FLittyREVEAL.jpg?v=1592244043388');
        message.channel.send( 'Great! You seem to know your teachers ! \n As you said, it was ' + teacherch.toUpperCase(), gotthatright);
        db.add(usermoney, points); message.channel.send(usermention + ' has recieved ' + points + ' Marks for answering Correctly !')
      }
      else{
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FLittyREVEAL.jpg?v=1592244043388');
        message.channel.send( 'Nope, you ignorant cretin. \nIt was ' + teacherch.toUpperCase(), gotthatright );
      }
      }
    
        if(teacherch == 'manju'){
      var teacherpic = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FManju.jpg?v=1592242835528');
      message.channel.send('Who\'s That Teacher ?', teacherpic);
      const filter = m => m.author.id == message.author.id;
      const replanswer = await message.channel.awaitMessages(filter, { max: 1});
      const ans = replanswer.first();
      
      if(ans.content.toLowerCase().includes(teacherch)){
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FManjuREVEAL.jpg?v=1592244050137');
        message.channel.send( 'Great! You seem to know your teachers ! \n As you said, it was ' + teacherch.toUpperCase(), gotthatright);
        db.add(usermoney, points); message.channel.send(usermention + ' has recieved ' + points + ' Marks for answering Correctly !')
      }
      else{
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FManjuREVEAL.jpg?v=1592244050137');
        message.channel.send( 'Nope, you ignorant cretin. \nIt was ' + teacherch.toUpperCase(), gotthatright );
      }
      }
    
        if(teacherch == 'manju m'){
      var teacherpic = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FManjuM.jpg?v=1592243315957');
      message.channel.send('Who\'s That Teacher ?', teacherpic);
      const filter = m => m.author.id == message.author.id;
      const replanswer = await message.channel.awaitMessages(filter, { max: 1});
      const ans = replanswer.first();
      
      if(ans.content.toLowerCase().includes(teacherch)){
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FManjuMREVEAL.jpg?v=1592244043200');
        message.channel.send( 'Great! You seem to know your teachers ! \n As you said, it was ' + teacherch.toUpperCase(), gotthatright);
        db.add(usermoney, points); message.channel.send(usermention + ' has recieved ' + points + ' Marks for answering Correctly !')
      }
      else{
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FManjuMREVEAL.jpg?v=1592244043200');
        message.channel.send( 'Nope, you ignorant cretin. \nIt was ' + teacherch.toUpperCase(), gotthatright );
      }
      }
    
        if(teacherch == 'meera'){
      var teacherpic = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FMeera.jpg?v=1592243355443');
      message.channel.send('Who\'s That Teacher ?', teacherpic);
      const filter = m => m.author.id == message.author.id;
      const replanswer = await message.channel.awaitMessages(filter, { max: 1});
      const ans = replanswer.first();
      
      if(ans.content.toLowerCase().includes(teacherch)){
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FMeeraREVEAL.jpg?v=1592244263842');
        message.channel.send( 'Great! You seem to know your teachers ! \n As you said, it was ' + teacherch.toUpperCase(), gotthatright);
        db.add(usermoney, points); message.channel.send(usermention + ' has recieved ' + points + ' Marks for answering Correctly !')
      }
      else{
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FMeeraREVEAL.jpg?v=1592244263842');
        message.channel.send( 'Nope, you ignorant cretin. \nIt was ' + teacherch.toUpperCase(), gotthatright );
      }
      }
    
        if(teacherch == 'mini'){
      var teacherpic = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FMini.jpg?v=1592242932159');
      message.channel.send('Who\'s That Teacher ?', teacherpic);
      const filter = m => m.author.id == message.author.id;
      const replanswer = await message.channel.awaitMessages(filter, { max: 1});
      const ans = replanswer.first();
      
      if(ans.content.toLowerCase().includes(teacherch)){
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FMiniREVEAL.jpg?v=1592244018809');
        message.channel.send( 'Great! You seem to know your teachers ! \n As you said, it was ' + teacherch.toUpperCase(), gotthatright);
        db.add(usermoney, points); message.channel.send(usermention + ' has recieved ' + points + ' Marks for answering Correctly !')
      }
      else{
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FMiniREVEAL.jpg?v=1592244018809');
        message.channel.send( 'Nope, you ignorant cretin. \nIt was ' + teacherch.toUpperCase(), gotthatright );
      }
      }
    
        if(teacherch == 'neetu'){
      var teacherpic = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FNeetu.jpg?v=1592242946466');
      message.channel.send('Who\'s That Teacher ?', teacherpic);
      const filter = m => m.author.id == message.author.id;
      const replanswer = await message.channel.awaitMessages(filter, { max: 1});
      const ans = replanswer.first();
      
      if(ans.content.toLowerCase().includes(teacherch)){
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FNeetuREVEAL.jpg?v=1592244262653');
        message.channel.send( 'Great! You seem to know your teachers ! \n As you said, it was ' + teacherch.toUpperCase(), gotthatright);
        db.add(usermoney, points); message.channel.send(usermention + ' has recieved ' + points + ' Marks for answering Correctly !')
      }
      else{
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FNeetuREVEAL.jpg?v=1592244262653');
        message.channel.send( 'Nope, you ignorant cretin. \nIt was ' + teacherch.toUpperCase(), gotthatright );
      }
      }
    
        if(teacherch == 'nirmala'){
      var teacherpic = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FNirmala.jpg?v=1592242941456');
      message.channel.send('Who\'s That Teacher ?', teacherpic);
      const filter = m => m.author.id == message.author.id;
      const replanswer = await message.channel.awaitMessages(filter, { max: 1});
      const ans = replanswer.first();
      
      if(ans.content.toLowerCase().includes(teacherch)){
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FNirmalaREVEAL.jpg?v=1592244265198');
        message.channel.send( 'Great! You seem to know your teachers ! \n As you said, it was ' + teacherch.toUpperCase(), gotthatright);
        db.add(usermoney, points); message.channel.send(usermention + ' has recieved ' + points + ' Marks for answering Correctly !')
      }
      else{
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FNirmalaREVEAL.jpg?v=1592244265198');
        message.channel.send( 'Nope, you ignorant cretin. \nIt was ' + teacherch.toUpperCase(), gotthatright );
      }
      }
    
        if(teacherch == 'nithya'){
      var teacherpic = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FNithya.jpg?v=1592242936057');
      message.channel.send('Who\'s That Teacher ?', teacherpic);
      const filter = m => m.author.id == message.author.id;
      const replanswer = await message.channel.awaitMessages(filter, { max: 1});
      const ans = replanswer.first();
      
      if(ans.content.toLowerCase().includes(teacherch)){
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FNithyaREVEAL.jpg?v=1592244263762');
        message.channel.send( 'Great! You seem to know your teachers ! \n As you said, it was ' + teacherch.toUpperCase(), gotthatright);
        db.add(usermoney, points); message.channel.send(usermention + ' has recieved ' + points + ' Marks for answering Correctly !')
      }
      else{
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FNithyaREVEAL.jpg?v=1592244263762');
        message.channel.send( 'Nope, you ignorant cretin. \nIt was ' + teacherch.toUpperCase(), gotthatright );
      }
      }
    
        if(teacherch == 'prasanna'){
      var teacherpic = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FPrasanna.jpg?v=1592242399887');
      message.channel.send('Who\'s That Teacher ?', teacherpic);
      const filter = m => m.author.id == message.author.id;
      const replanswer = await message.channel.awaitMessages(filter, { max: 1});
      const ans = replanswer.first();
      
      if(ans.content.toLowerCase().includes(teacherch)){
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FPrasannaREVEAL.jpg?v=1592244279794');
        message.channel.send( 'Great! You seem to know your teachers ! \n As you said, it was ' + teacherch.toUpperCase(), gotthatright);
        db.add(usermoney, points); message.channel.send(usermention + ' has recieved ' + points + ' Marks for answering Correctly !')
      }
      else{
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FPrasannaREVEAL.jpg?v=1592244279794');
        message.channel.send( 'Nope, you ignorant cretin. \nIt was ' + teacherch.toUpperCase(), gotthatright );
      }
      }
    
      if(teacherch == 'prathiba'){
        if(rickpercentage == '1'){
          var rickroll = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FRickRolled.jpg?v=1592456216929');
          message.channel.send('Who\'s That Teacher ?', rickroll);
          const filteren = m => m.author.id == msg.author.id;
          const replanswer = await msg.channel.awaitMessages(filteren, { max: 1});
          const ans = replanswer.first();
          var rickrollvid = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2F20200620015542.mp4?v=1592598633159');
          if('1' == '0'){return; }
          else{
            var rickrollvid = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2Fvideoplayback%20(1).mp4?v=1592455882343'); 
            message.channel.send('You were rick rolled !', rickrollvid);
            db.add(`${money}`, 50);
            }
          }
        else{
        var teacherpic = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FPrathiba.jpg?v=1592242950242');
        message.channel.send('Who\'s That Teacher ?', teacherpic);
        const filter = m => m.author.id == message.author.id;
        const replanswer = await message.channel.awaitMessages(filter, { max: 1});
        const ans = replanswer.first();

      if(ans.content.toLowerCase().includes(teacherch)){
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FPrathibaREVEAL.jpg?v=1592244284783');
        message.channel.send( 'Great! You seem to know your teachers ! \n As you said, it was ME', gotthatright);
        db.add(usermoney, points); message.channel.send(usermention + ' has recieved ' + points + ' Marks for answering Correctly !')
      }
      else{
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FPrathibaREVEAL.jpg?v=1592244284783');
        message.channel.send( 'Nope, you ignorant cretin. \nIt was ' + teacherch.toUpperCase(), gotthatright );
      }}}
    
        if(teacherch == 'praveen'){
      var teacherpic = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FPraveen.jpg?v=1592242950242');
      message.channel.send('Who\'s That Teacher ?', teacherpic);
      const filter = m => m.author.id == message.author.id;
      const replanswer = await message.channel.awaitMessages(filter, { max: 1});
      const ans = replanswer.first();
      
      if(ans.content.toLowerCase().includes(teacherch)){
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FPraveenREVEAL.jpg?v=1592244285079');
        message.channel.send( 'Great! You seem to know your teachers ! \n As you said, it was ' + teacherch.toUpperCase(), gotthatright);
        db.add(usermoney, points); message.channel.send(usermention + ' has recieved ' + points + ' Marks for answering Correctly !')
      }
      else{
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FPraveenREVEAL.jpg?v=1592244285079');
        message.channel.send( 'Nope, you ignorant cretin. \nIt was ' + teacherch.toUpperCase(), gotthatright );
      }
      }
    
        if(teacherch == 'preetha'){
      var teacherpic = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FPreetha.jpg?v=1592242957601');
      message.channel.send('Who\'s That Teacher ?', teacherpic);
      const filter = m => m.author.id == message.author.id;
      const replanswer = await message.channel.awaitMessages(filter, { max: 1});
      const ans = replanswer.first();
      
      if(ans.content.toLowerCase().includes(teacherch)){
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FPreethaREVEAL.jpg?v=1592244264073');
        message.channel.send( 'Great! You seem to know your teachers ! \n As you said, it was ' + teacherch.toUpperCase(), gotthatright);
        db.add(usermoney, points); message.channel.send(usermention + ' has recieved ' + points + ' Marks for answering Correctly !')
      }
      else{
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FPreethaREVEAL.jpg?v=1592244264073');
        message.channel.send( 'Nope, you ignorant cretin. \nIt was ' + teacherch.toUpperCase(), gotthatright );
      }
      }
    
        if(teacherch == 'pushya'){
      var teacherpic = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FPushya.jpg?v=1592242959924');
      message.channel.send('Who\'s That Teacher ?', teacherpic);
      const filter = m => m.author.id == message.author.id;
      const replanswer = await message.channel.awaitMessages(filter, { max: 1});
      const ans = replanswer.first();
      
      if(ans.content.toLowerCase().includes(teacherch)){
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FPushyaREVEAL.jpg?v=1592244430677');
        message.channel.send( 'Great! You seem to know your teachers ! \n As you said, it was ' + teacherch.toUpperCase(), gotthatright);
        db.add(usermoney, points); message.channel.send(usermention + ' has recieved ' + points + ' Marks for answering Correctly !')
      }
      else{
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FPushyaREVEAL.jpg?v=1592244430677');
        message.channel.send( 'Nope, you ignorant cretin. \nIt was ' + teacherch.toUpperCase(), gotthatright );
      }
      }
    
        if(teacherch == 'radhakrishnan'){
      var teacherpic = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FRadhakrishnan.jpg?v=1592243584765');
      message.channel.send('Who\'s That Teacher ?', teacherpic);
      const filter = m => m.author.id == message.author.id;
      const replanswer = await message.channel.awaitMessages(filter, { max: 1});
      const ans = replanswer.first();
      
      if(ans.content.toLowerCase().includes(teacherch)){
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FRadhakrishnanREVEAL.jpg?v=1592244576361');
        message.channel.send( 'Great! You seem to know your teachers ! \n As you said, it was ' + teacherch.toUpperCase(), gotthatright);
        db.add(usermoney, points); message.channel.send(usermention + ' has recieved ' + points + ' Marks for answering Correctly !')
      }
      else{
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FRadhakrishnanREVEAL.jpg?v=1592244576361');
        message.channel.send( 'Nope, you ignorant cretin. \nIt was ' + teacherch.toUpperCase(), gotthatright );
      }
      }
    
        if(teacherch == 'rakhy'){
      var teacherpic = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FRakhy.jpg?v=1592242524923');
      message.channel.send('Who\'s That Teacher ?', teacherpic);
      const filter = m => m.author.id == message.author.id;
      const replanswer = await message.channel.awaitMessages(filter, { max: 1});
      const ans = replanswer.first();
      
      if(ans.content.toLowerCase().includes(teacherch)){
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FRakhyREVEAL.jpg?v=1592243932167');
        message.channel.send( 'Great! You seem to know your teachers ! \n As you said, it was ' + teacherch.toUpperCase(), gotthatright);
        db.add(usermoney, points); message.channel.send(usermention + ' has recieved ' + points + ' Marks for answering Correctly !')
      }
      else{
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FRakhyREVEAL.jpg?v=1592243932167');
        message.channel.send( 'Nope, you ignorant cretin. \nIt was ' + teacherch.toUpperCase(), gotthatright );
      }
      }
    
        if(teacherch == 'resmi'){
      var teacherpic = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FResmi.jpg?v=1592242576705');
      message.channel.send('Who\'s That Teacher ?', teacherpic);
      const filter = m => m.author.id == message.author.id;
      const replanswer = await message.channel.awaitMessages(filter, { max: 1});
      const ans = replanswer.first();
      
      if(ans.content.toLowerCase().includes(teacherch)){
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FResmiREVEAL.jpg?v=1592244586700');
        message.channel.send( 'Great! You seem to know your teachers ! \n As you said, it was ' + teacherch.toUpperCase(), gotthatright);
        db.add(usermoney, points); message.channel.send(usermention + ' has recieved ' + points + ' Marks for answering Correctly !')
      }
      else{
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FResmiREVEAL.jpg?v=1592244586700');
        message.channel.send( 'Nope, you ignorant cretin. \nIt was ' + teacherch.toUpperCase(), gotthatright );
      }
      }
    
        if(teacherch == 'rijil'){
      var teacherpic = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FRijil.jpg?v=1592242578176');
      message.channel.send('Who\'s That Teacher ?', teacherpic);
      const filter = m => m.author.id == message.author.id;
      const replanswer = await message.channel.awaitMessages(filter, { max: 1});
      const ans = replanswer.first();
      
      if(ans.content.toLowerCase().includes(teacherch)){
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FRijilREVEAL.jpg?v=1592244588507');
        message.channel.send( 'Great! You seem to know your teachers ! \n As you said, it was ' + teacherch.toUpperCase(), gotthatright);
        db.add(usermoney, points); message.channel.send(usermention + ' has recieved ' + points + ' Marks for answering Correctly !')
      }
      else{
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FRijilREVEAL.jpg?v=1592244588507');
        message.channel.send( 'Nope, you ignorant cretin. \nIt was ' + teacherch.toUpperCase(), gotthatright );
      }
      }
    
        if(teacherch == 'santhi'){
      var teacherpic = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FSanthi.jpg?v=1592242581966');
      message.channel.send('Who\'s That Teacher ?', teacherpic);
      const filter = m => m.author.id == message.author.id;
      const replanswer = await message.channel.awaitMessages(filter, { max: 1});
      const ans = replanswer.first();
      
      if(ans.content.toLowerCase().includes(teacherch)){
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FSanthiREVEAL.jpg?v=1592244588748');
        message.channel.send( 'Great! You seem to know your teachers ! \n As you said, it was ' + teacherch.toUpperCase(), gotthatright);
        db.add(usermoney, points); message.channel.send(usermention + ' has recieved ' + points + ' Marks for answering Correctly !')
      }
      else{
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FSanthiREVEAL.jpg?v=1592244588748');
        message.channel.send( 'Nope, you ignorant cretin. \nIt was ' + teacherch.toUpperCase(), gotthatright );
      }
      }
    
        if(teacherch == 'satheesh'){
      var teacherpic = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FSatheesh.jpg?v=1592243596714');
      message.channel.send('Who\'s That Teacher ?', teacherpic);
      const filter = m => m.author.id == message.author.id;
      const replanswer = await message.channel.awaitMessages(filter, { max: 1});
      const ans = replanswer.first();
      
      if(ans.content.toLowerCase().includes(teacherch)){
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FSatheeshREVEAL.jpg?v=1592244024535');
        message.channel.send( 'Great! You seem to know your teachers ! \n As you said, it was ' + teacherch.toUpperCase(), gotthatright);
        db.add(usermoney, points); message.channel.send(usermention + ' has recieved ' + points + ' Marks for answering Correctly !')
      }
      else{
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FSatheeshREVEAL.jpg?v=1592244024535');
        message.channel.send( 'Nope, you ignorant cretin. \nIt was ' + teacherch.toUpperCase(), gotthatright );
      }
      }
    
        if(teacherch == 'sheeba'){
      var teacherpic = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FSheeba.jpg?v=1592243646640');
      message.channel.send('Who\'s That Teacher ?', teacherpic);
      const filter = m => m.author.id == message.author.id;
      const replanswer = await message.channel.awaitMessages(filter, { max: 1});
      const ans = replanswer.first();
      
      if(ans.content.toLowerCase().includes(teacherch)){
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FSheebaREVEAL.jpg?v=1592244595311');
        message.channel.send( 'Great! You seem to know your teachers ! \n As you said, it was ' + teacherch.toUpperCase(), gotthatright);
        db.add(usermoney, points); message.channel.send(usermention + ' has recieved ' + points + ' Marks for answering Correctly !')
      }
      else{
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FSheebaREVEAL.jpg?v=1592244595311');
        message.channel.send( 'Nope, you ignorant cretin. \nIt was ' + teacherch.toUpperCase(), gotthatright );
      }
      }
    
        if(teacherch == 'sheena'){
      var teacherpic = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FSheena.jpg?v=1592243646132');
      message.channel.send('Who\'s That Teacher ?', teacherpic);
      const filter = m => m.author.id == message.author.id;
      const replanswer = await message.channel.awaitMessages(filter, { max: 1});
      const ans = replanswer.first();
      
      if(ans.content.toLowerCase().includes(teacherch)){
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FSheenaREVEAL.jpg?v=1592244596053');
        message.channel.send( 'Great! You seem to know your teachers ! \n As you said, it was ' + teacherch.toUpperCase(), gotthatright);
        db.add(usermoney, points); message.channel.send(usermention + ' has recieved ' + points + ' Marks for answering Correctly !')
      }
      else{
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FSheenaREVEAL.jpg?v=1592244596053');
        message.channel.send( 'Nope, you ignorant cretin. \nIt was ' + teacherch.toUpperCase(), gotthatright );
      }
      }
    
        if(teacherch == 'shobhana'){
      var teacherpic = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FShobhana.jpg?v=1592243569677');
      message.channel.send('Who\'s That Teacher ?', teacherpic);
      const filter = m => m.author.id == message.author.id;
      const replanswer = await message.channel.awaitMessages(filter, { max: 1});
      const ans = replanswer.first();
      
      if(ans.content.toLowerCase().includes(teacherch)){
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FShobhanaREVEAL.jpg?v=1592244281528');
        message.channel.send( 'Great! You seem to know your teachers ! \n As you said, it was ' + teacherch.toUpperCase(), gotthatright);
        db.add(usermoney, points); message.channel.send(usermention + ' has recieved ' + points + ' Marks for answering Correctly !')
      }
      else{
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FShobhanaREVEAL.jpg?v=1592244281528');
        message.channel.send( 'Nope, you ignorant cretin. \nIt was ' + teacherch.toUpperCase(), gotthatright );
      }
      }
    
        if(teacherch == 'smitha'){
      var teacherpic = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FSmitha.jpg?v=1592243442279');
      message.channel.send('Who\'s That Teacher ?', teacherpic);
      const filter = m => m.author.id == message.author.id;
      const replanswer = await message.channel.awaitMessages(filter, { max: 1});
      const ans = replanswer.first();
      
      if(ans.content.toLowerCase().includes(teacherch)){
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FSmithaREVEAL.jpg?v=1592244669655');
        message.channel.send( 'Great! You seem to know your teachers ! \n As you said, it was ' + teacherch.toUpperCase(), gotthatright);
        db.add(usermoney, points); message.channel.send(usermention + ' has recieved ' + points + ' Marks for answering Correctly !')
      }
      else{
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FSmithaREVEAL.jpg?v=1592244669655');
        message.channel.send( 'Nope, you ignorant cretin. \nIt was ' + teacherch.toUpperCase(), gotthatright );
      }
      }
    
        if(teacherch == 'sreekala'){
      var teacherpic = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FSreekala.jpg?v=1592242940444');
      message.channel.send('Who\'s That Teacher ?', teacherpic);
      const filter = m => m.author.id == message.author.id;
      const replanswer = await message.channel.awaitMessages(filter, { max: 1});
      const ans = replanswer.first();
      
      if(ans.content.toLowerCase().includes(teacherch)){
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FSreekalaREVEAL.jpg?v=1592244277854');
        message.channel.send( 'Great! You seem to know your teachers ! \n As you said, it was ' + teacherch.toUpperCase(), gotthatright);
        db.add(usermoney, points); message.channel.send(usermention + ' has recieved ' + points + ' Marks for answering Correctly !')
      }
      else{
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FSreekalaREVEAL.jpg?v=1592244277854');
        message.channel.send( 'Nope, you ignorant cretin. \nIt was ' + teacherch.toUpperCase(), gotthatright );
      }
      }
    
        if(teacherch == 'sudha'){
      var teacherpic = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FSudha.jpg?v=1592243436861');
      message.channel.send('Who\'s That Teacher ?', teacherpic);
      const filter = m => m.author.id == message.author.id;
      const replanswer = await message.channel.awaitMessages(filter, { max: 1});
      const ans = replanswer.first();
      
      if(ans.content.toLowerCase().includes(teacherch)){
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FSudhaREVEAL.jpg?v=1592244667163');
        message.channel.send( 'Great! You seem to know your teachers ! \n As you said, it was ' + teacherch.toUpperCase(), gotthatright);
        db.add(usermoney, points); message.channel.send(usermention + ' has recieved ' + points + ' Marks for answering Correctly !')
      }
      else{
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FSudhaREVEAL.jpg?v=1592244667163');
        message.channel.send( 'Nope, you ignorant cretin. \nIt was ' + teacherch.toUpperCase(), gotthatright );
      }
      }
    
        if(teacherch == 'suma'){
      var teacherpic = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FSuma.jpg?v=1592242948107');
      message.channel.send('Who\'s That Teacher ?', teacherpic);
      const filter = m => m.author.id == message.author.id;
      const replanswer = await message.channel.awaitMessages(filter, { max: 1});
      const ans = replanswer.first();
      
      if(ans.content.toLowerCase().includes(teacherch)){
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FSumaREVEAL.jpg?v=1592244439512');
        message.channel.send( 'Great! You seem to know your teachers ! \n As you said, it was ' + teacherch.toUpperCase(), gotthatright);
        db.add(usermoney, points); message.channel.send(usermention + ' has recieved ' + points + ' Marks for answering Correctly !')
      }
      else{
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FSumaREVEAL.jpg?v=1592244439512');
        message.channel.send( 'Nope, you ignorant cretin. \nIt was ' + teacherch.toUpperCase(), gotthatright );
      }
      }
    
        if(teacherch == 'sunitha'){
      var teacherpic = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FSunitha.jpg?v=1592243489097');
      message.channel.send('Who\'s That Teacher ?', teacherpic);
      const filter = m => m.author.id == message.author.id;
      const replanswer = await message.channel.awaitMessages(filter, { max: 1});
      const ans = replanswer.first();
      
      if(ans.content.toLowerCase().includes(teacherch)){
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FSunithaREVEAL.jpg?v=1592244561647');
        message.channel.send( 'Great! You seem to know your teachers ! \n As you said, it was ' + teacherch.toUpperCase(), gotthatright);
        db.add(usermoney, points); message.channel.send(usermention + ' has recieved ' + points + ' Marks for answering Correctly !')
      }
      else{
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FSunithaREVEAL.jpg?v=1592244561647');
        message.channel.send( 'Nope, you ignorant cretin. \nIt was ' + teacherch.toUpperCase(), gotthatright );
      }
      }
    
        if(teacherch == 'sunu'){
      var teacherpic = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FSunu.jpg?v=1592243467983');
      message.channel.send('Who\'s That Teacher ?', teacherpic);
      const filter = m => m.author.id == message.author.id;
      const replanswer = await message.channel.awaitMessages(filter, { max: 1});
      const ans = replanswer.first();
      
      if(ans.content.toLowerCase().includes(teacherch)){
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FSunuREVEAL.jpg?v=1592244576252');
        message.channel.send( 'Great! You seem to know your teachers ! \n As you said, it was ' + teacherch.toUpperCase(), gotthatright);
        db.add(usermoney, points); message.channel.send(usermention + ' has recieved ' + points + ' Marks for answering Correctly !')
      }
      else{
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FSunuREVEAL.jpg?v=1592244576252');
        message.channel.send( 'Nope, you ignorant cretin. \nIt was ' + teacherch.toUpperCase(), gotthatright );
      }
      }
    
        if(teacherch == 'teena'){
      var teacherpic = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FTeena.jpg?v=1592243467273');
      message.channel.send('Who\'s That Teacher ?', teacherpic);
      const filter = m => m.author.id == message.author.id;
      const replanswer = await message.channel.awaitMessages(filter, { max: 1});
      const ans = replanswer.first();
      
      if(ans.content.toLowerCase().includes(teacherch)){
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FTeenaREVEAL.jpg?v=1592244561270');
        message.channel.send( 'Great! You seem to know your teachers ! \n As you said, it was ' + teacherch.toUpperCase(), gotthatright);
        db.add(usermoney, points); message.channel.send(usermention + ' has recieved ' + points + ' Marks for answering Correctly !')
      }
      else{
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FTeenaREVEAL.jpg?v=1592244561270');
        message.channel.send( 'Nope, you ignorant cretin. \nIt was ' + teacherch.toUpperCase(), gotthatright );
      }
      }
    
        if(teacherch == 'tuney'){
      var teacherpic = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FTuney.jpg?v=1592243467443');
      message.channel.send('Who\'s That Teacher ?', teacherpic);
      const filter = m => m.author.id == message.author.id;
      const replanswer = await message.channel.awaitMessages(filter, { max: 1});
      const ans = replanswer.first();
      
      if(ans.content.toLowerCase().includes(teacherch)){
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FTuneyREVEAL.jpg?v=1592244409708');
        message.channel.send( 'Great! You seem to know your teachers ! \n As you said, it was ' + teacherch.toUpperCase(), gotthatright);
        db.add(usermoney, points); message.channel.send(usermention + ' has recieved ' + points + ' Marks for answering Correctly !')
      }
      else{
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FTuneyREVEAL.jpg?v=1592244409708');
        message.channel.send( 'Nope, you ignorant cretin. \nIt was ' + teacherch.toUpperCase(), gotthatright );
      }
      }
    
        if(teacherch == 'usha'){
      var teacherpic = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FUshaK.jpg?v=1592242576297');
      message.channel.send('Who\'s That Teacher ?', teacherpic);
      const filter = m => m.author.id == message.author.id;
      const replanswer = await message.channel.awaitMessages(filter, { max: 1});
      const ans = replanswer.first();
      
      if(ans.content.toLowerCase().includes(teacherch)){
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FUshaKREVEAL.jpg?v=1592244432292');
        message.channel.send( 'Great! You seem to know your teachers ! \n As you said, it was ' + teacherch.toUpperCase(), gotthatright);
        db.add(usermoney, points); message.channel.send(usermention + ' has recieved ' + points + ' Marks for answering Correctly !')
      }
      else{
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FUshaKREVEAL.jpg?v=1592244432292');
        message.channel.send( 'Nope, you ignorant cretin. \nIt was ' + teacherch.toUpperCase(), gotthatright );
      }
      }
    
        if(teacherch == 'vidya'){
      var teacherpic = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FVidya.jpg?v=1592243475562');
      message.channel.send('Who\'s That Teacher ?', teacherpic);
      const filter = m => m.author.id == message.author.id;
      const replanswer = await message.channel.awaitMessages(filter, { max: 1});
      const ans = replanswer.first();
      
      if(ans.content.toLowerCase().includes(teacherch)){
        if(ans.content.toLowerCase().includes('vidya vj')){
          var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FVidyaREVEAL.jpg?v=1592244441260');
          message.channel.send( 'Nope, you ignorant cretin. \nIt wasn\'t VIDYA VJ. It was just '  + teacherch.toUpperCase(), gotthatright );
        }
        else{
         var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FVidyaREVEAL.jpg?v=1592244441260');
         message.channel.send( 'Great! You seem to know your teachers ! \n As you said, it was ' + teacherch.toUpperCase(), gotthatright); 
         db.add(usermoney, points); message.channel.send(usermention + ' has recieved ' + points + ' Marks for answering Correctly !')
        }
      }
      else{
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FVidyaREVEAL.jpg?v=1592244441260');
        message.channel.send( 'Nope, you ignorant cretin. \nIt was ' + teacherch.toUpperCase(), gotthatright );
      }
      }
    
        if(teacherch == 'vidya vj'){
      var teacherpic = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FVidyaVJ.jpg?v=1592243576373');
      message.channel.send('Who\'s That Teacher ?', teacherpic);
      const filter = m => m.author.id == message.author.id;
      const replanswer = await message.channel.awaitMessages(filter, { max: 1});
      const ans = replanswer.first();
      
      if(ans.content.toLowerCase().includes(teacherch)){
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FVidyaVJREVEAL.jpg?v=1592244018474');
        message.channel.send( 'Great! You seem to know your teachers ! \n As you said, it was ' + teacherch.toUpperCase(), gotthatright);
        db.add(usermoney, points); message.channel.send(usermention + ' has recieved ' + points + ' Marks for answering Correctly !')
      }
      else{
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FVidyaVJREVEAL.jpg?v=1592244018474');
        message.channel.send( 'Nope, you ignorant cretin. \nIt was ' + teacherch.toUpperCase(), gotthatright );
      }
      }
    
        if(teacherch == 'yasmine'){
      var teacherpic = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FYasmine.jpg?v=1592243303353');
      message.channel.send('Who\'s That Teacher ?', teacherpic);
      const filter = m => m.author.id == message.author.id;
      const replanswer = await message.channel.awaitMessages(filter, { max: 1});
      const ans = replanswer.first();
      
      if(ans.content.toLowerCase().includes(teacherch)){
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FYasmineREVEAL.jpg?v=1592243832601');
        message.channel.send( 'Great! You seem to know your teachers ! \n As you said, it was ' + teacherch.toUpperCase(), gotthatright);
        db.add(usermoney, points); message.channel.send(usermention + ' has recieved ' + points + ' Marks for answering Correctly !')
      }
      else{
        var gotthatright = new Discord.MessageAttachment('https://cdn.glitch.com/49ed0f12-e4e1-4eb5-a192-752b8465c641%2FYasmineREVEAL.jpg?v=1592243832601');
        message.channel.send( 'Nope, you ignorant cretin. \nIt was ' + teacherch.toUpperCase(), gotthatright );
      }
      }
    
    
    
  
  }}