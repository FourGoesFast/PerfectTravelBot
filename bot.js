const tmi = require('tmi.js');
const fs = require('fs');

const config = require('./config.json');

// Define configuration options
const opts = {
  identity: {
    username: config.username,
    password: config.password,
  },
  channels: [
    ...config.channels,
    config.username
  ]
};

function saveConfig() {
  fs.writeFile('config.json', JSON.stringify(config, null, '  '), (e) => {
    console.error(e);
  });
}

const data = require('./data.json');

// Create a client with our options
const client = new tmi.client(opts);

var dict = {};

dict["!perfecthelp"] = "Use !X for highroll chunk offset for an angle, !*X for all options for an angle. There's also !perfectabout, !perfecstrat, !perfectdemo, and !perfectsymbols";
dict["!perfectabout"] = "Bot made by Sharpieman20 and FourTwentyBlazeIt, hosted and cleaned up by unascribed";
dict["!perfectstrat"] = "This bot is made to do perfect travel. The goal is to travel to the stronghold in a single throw Learn how to do that here! https://docs.google.com/document/d/1JTMOIiS-Hl6_giEB0IQ5ki7UV-gvUXnNmoxhYoSgEAA/edit?usp=sharing";
dict["!perfectdemo"] = "You can see a demonstration of the strategy by Four here: https://www.youtube.com/watch?v=37GfKTtDvBM";
dict["!perfectsymbols"] = "If you're having issues with the bot being timed out for excessive symbols, mod the bot, trust me, it won't do anything malicious ;)";
dict["!addme"] = (tgt, ctx, msg, cmd) => {
  if (tgt === '#'+config.username.toLowerCase()) {
    if (config.channels.indexOf(ctx.username) === -1) {
      client.join('#'+ctx.username).then(() => {
        client.say(tgt, ctx.username+": I've joined your chat and am waiting for commands there.");
        config.channels.push(ctx.username);
        saveConfig();
      }).catch((e) => {
        console.error(e);
        client.say(tgt, ctx.username+": Sorry, I couldn't join your chat for some reason.");
      });
    } else {
      if (client.getChannels().indexOf('#'+ctx.username) === -1) {
        client.say(tgt, ctx.username+": I should already be in your chat, but I'm not! Trying to join again...");
        client.join('#'+ctx.username).then(() => {
          client.say(tgt, ctx.username+": I've joined your chat.");
        }).catch((e) => {
          console.error(e);
          client.say(tgt, ctx.username+": Sorry, I couldn't join your chat for some reason.");
        });
      } else {
        client.say(tgt, ctx.username+": I'm already in your chat!");
      }
    }
  } else {
    console.log("Ignoring addme command in wrong channel: "+tgt);
  }
};
dict["!removeme"] = (tgt, ctx, msg, cmd) => {
  if (tgt === '#'+config.username.toLowerCase()) {
    if (config.channels.indexOf(ctx.username) === -1) {
      if (client.getChannels().indexOf('#'+ctx.username) === -1) {
        client.say(tgt, ctx.username+": I'm not in your chat!");
      } else {
        client.say(tgt, ctx.username+": I shouldn't be in your chat, but I am! Leaving.");
        client.part('#'+ctx.username);
      }
    } else {
      client.part('#'+ctx.username);
      client.say(tgt, ctx.username+": I've left your chat.");
      config.channels = config.channels.filter(it => it !== ctx.username);
      saveConfig();
    }
  } else {
    console.log("Ignoring removeme command in wrong channel: "+tgt);
  }
};

// Register our event handlers (defined below)
client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);

// Connect to Twitch:
client.connect();

// Called every time a message comes in
function onMessageHandler (target, context, msg, self) {
  if (self) { return; } // Ignore messages from the bot

  // Remove whitespace from chat message
  const cmd = msg.trim();
  if (cmd.length === 0) return;

  var txt;

  if (dict[cmd]) {
    console.log("Responding to "+context.username+" with built-in command: "+cmd);
    let builtin = dict[cmd];
    if (typeof builtin === "function") {
      builtin(target, context, msg, cmd);
      return;
    } else {
      txt = builtin;
    }
  } else if (cmd[0] == '!') {
    console.log("Responding to "+context.username+" with angle lookup: "+cmd);
    let rem = cmd.substring(1);
    if (rem.length === 0) return;
    let any = false;
    // chop off leading * and activate "any" instead of "highroll"
    if (rem[0] === '*') {
      any = true;
      rem = rem.substring(1);
    }
    // make sure it's a valid number before we try parsing it
    if (!/^-?[0-9]+(\.[0-9]+)?$/.exec(rem)) return;
    let ang = Number(rem);
    // convert real angles into notch angles
   ang = ang % 360
	if(ang>180){
  		ang=ang-360;
	}
	if(ang<-180){
  		ang=ang+360;
	}
    let psbl = data[ang.toFixed(2)];
    if(ang>18000||ang<-18000){
    	txt = "Angle out of range, use the f3 method or unspin and re-measure COGGERS";
    }
    else if (psbl && psbl.length > 0) {
      if (any) {
        txt = psbl.join(' | ');
      } else {
        txt = psbl[0];
      }
    } else {
      txt = "None";
    }
  } else {
    return;
  }
  
  console.log(txt);
  client.say(target, txt);


}

// Called every time the bot connects to Twitch chat
function onConnectedHandler (addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}
