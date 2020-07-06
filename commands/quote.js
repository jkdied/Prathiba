const Discord = require('discord.js');
const canvas = require('canvas');

module.exports = {
  name: 'quotegeneration',
  description: 'Generates Random Quotes',
  async execute(msg, args){
    
    var begin = ['You', 'We', 'Everyone', 'God', 'Life', 'Love', 'Hate', 'Feelings', 'Moral', 'People', 'Humans', 'Understanding', 'Acceptance'];
    var begin2 = begin[Math.floor(Math.random() * begin.length)];
    var cont = ['are', 'is', 'can', 'will', 'never', 'possibly', 'could', 'would', 'always', 'should', 'shall', 'will always', 'may not', 'definitely will', 'definitely wont']
    var cont2 = cont[Math.floor(Math.random() * cont.length)];
    var verb = ['run', 'fight', 'hide', 'show', 'express', 'makes', 'make', 'continue', 'end', 'stop', 'lighten', 'darken', 'crave', 'beg', 'speak', 'accept', 'deny']
    var verb2 = verb[Math.floor(Math.random() * verb.length)];
    var conj = ['from', 'of', 'by', 'the', 'a', 'for', 'not from', 'not of', 'not by', 'not for']
    var conj2 = conj[Math.floor(Math.random() * conj.length)];
    var end = ['life', 'meaning', 'greatness', 'success', 'faliure', 'victory', 'humanity', 'craziness', 'happiness', 'sadness', 'depression', 'joy', 'superiority', 'pride', 'ego', 'anger']
    var end2 = end[Math.floor(Math.random() * end.length)];

    var quote = '"' + begin2 + ' ' + cont2 + ' ' + verb2 + ' '
    var quoteline2 = conj2 + ' ' + end2 + '"'
    var thewholequote = begin2 + cont2 + verb2 + conj2 + end2
    if(args[2] == null){
        msg.channel.send(quote + quoteline2);
    }
    else if(args[2].toLowerCase() === 'say'){
        msg.channel.send(quote + quoteline2, {tts: true});
    }
    else{
        msg.channel.send(quote + quoteline2);
    }
    return;
    
  }
}