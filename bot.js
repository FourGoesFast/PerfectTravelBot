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
const data128 = require('./data128.json');
const data256 = require('./data256.json');
const data512 = require('./data512.json');
const data1024 = require('./data1024.json');
const data2048 = require('./data2048.json');
// Create a client with our options
const client = new tmi.client(opts);

var dict = {};
//Divine Coords
dict["!divineabout"] ="This bot supports retreiving ideal divine travel coordinates! All tables sourced from Matthew Bolan. !divinehelp to list command format";
dict["!divinehelp"] = "fossil: !fossil<coord>, normal animals: !animal, special animals: !animal<pack size>, tundra animals: !tundra special tundra animals: !tundra<pack size> turtles: !turtle<pack size> ravine: !ravine aircave: !aircave water cave: !watercave plains tree: !ptree<coord> tundra tree: !ttree<coord> big portal: !bigportal big portal orientation: !bigportal<orientation> nether cave: !nethercave";
dict["!divinehelp2"] = "fossil highroll: !hfossil<coord>, savanna tree: !stree<coord>";
dict["!fossil0"] = "s1: 251 50 s2: -169 192 s3: -82 -242";
dict["!fossil1"] = "s1: 213 142 s2: -230 113 s3: 17 -255";
dict["!fossil2"] = "s1: 142 213 s2: -255 17 s3: 113 -230";
dict["!fossil3"] = "s1: 50 251 s2: -242 -82 s3: 192 -169";
dict["!fossil4"] = "s1: -50 251 s2: -192 -169 s3: 242 -82";
dict["!fossil5"] = "s1: -142 213 s2: -113 -230 s3: 255 17";
dict["!fossil6"] = "s1: -213 142 s2: -17 -255 s3: 230 113";
dict["!fossil7"] = "s1: -251 50 s2: 82 -242 s3: 169 192";
dict["!fossil8"] = "s1: -251 -50 s2: 169 -192 s3: 82 242";
dict["!fossil9"] = "s1: -213 -142 s2: 230 -113 s3: -17 255";
dict["!fossil10"] = "s1: -142 -213 s2: 255 -17 s3: -113 230";
dict["!fossil11"] = "s1: -50 -251 s2: 242 82 s3: -192 169";
dict["!fossil12"] = "s1: 50 -251 s2: 192 169 s3: -242 82";
dict["!fossil13"] = "s1: 142 -213 s2: 113 230 s3: -255 -17";
dict["!fossil14"] = "s1: 213 -142 s2: 17 255 s3: -230 -113";
dict["!fossil15"] = "s1: 251 -50 s2: -82 242 s3: -169 -192";
dict["!animal"] = "s1: 243 79 s2: -190 171 s3: -53 250";
dict["!animal0"] = "s1: 205 67";
dict["!animal1"] = "s1: 282 91";
dict["!turtle0"] = "s1: 186 61";
dict["!turtle1"] = "s1: 224 73";
dict["!turtle2"] = "s1: 262 85";
dict["!turtle3"] = "s1: 301 98";
dict["!tundra"] = "s1: 250 56 s2: -173 188 s3: -77 -244"
dict["!tundra0"] = "s1: 211 47";
dict["!tundra1"] = "s1: 289 65";
dict["!ravine"] = "s1: 255 16 s2: -142 213 s3: -114 -229";
dict["!aircave"] = "s1: 231 11 s2: -212 144 s3: -19 -255";
dict["!watercave"] = "s1: 250 53 s2: -171 190 s3: -79 -243";
dict["!bigportal"] = "s1: 253 40 s2: -161 199 s3: -92 -239";
dict["!bigportal0"] = "s1: 194 31";
dict["!bigportal1"] = "s1: 233 37";
dict["!bigportal2"] = "s1: 273 43";
dict["!bigportal3"] = "s1: 312 49";
dict["!nethercave"] = "s1: 207 150 s2: -234 104 s3: 27 -255";
dict["!ttree0"] = "s1: 138 -298";
dict["!ttree1"] = "s1: 75 -162";
dict["!ttree2"] = "s1: 79 -171";
dict["!ttree3"] = "s1: 83 -180";
dict["!ttree4"] = "s1: 87 -189";
dict["!ttree5"] = "s1: 92 -198";
dict["!ttree6"] = "s1: 96 -207";
dict["!ttree7"] = "s1: 100 -216";
dict["!ttree8"] = "s1: 104 -225";
dict["!ttree9"] = "s1: 108 -235";
dict["!ttree10"] = "s1: 113 -244";
dict["!ttree11"] = "s1: 117 -253";
dict["!ttree12"] = "s1: 121 -262";
dict["!ttree13"] = "s1: 125 -271";
dict["!ttree14"] = "s1: 129 -280";
dict["!ttree15"] = "s1: 134 -289";
dict["!ptree0"] = "s1: 82 -290";
dict["!ptree1"] = "s1: 85 -299";
dict["!ptree2"] = "s1: 88 -309";
dict["!ptree3"] = "s1: 90 -319";
dict["!ptree4"] = "s1: 49 -174";
dict["!ptree5"] = "s1: 52 -184";
dict["!ptree6"] = "s1: 55 -194";
dict["!ptree7"] = "s1: 58 -203";
dict["!ptree8"] = "s1: 60 -213";
dict["!ptree9"] = "s1: 63 -222";
dict["!ptree10"] = "s1: 66 -232";
dict["!ptree11"] = "s1: 69 -242";
dict["!ptree12"] = "s1: 71 -251";
dict["!ptree13"] = "s1: 73 -261";
dict["!ptree14"] = "s1: 77 -271";
dict["!ptree15"] = "s1: 79 -280";
dict["!stree0"] = "s1: 127 -273";
dict["!stree1"] = "s1: 131 -282";
dict["!stree2"] = "s1: 135 -292";
dict["!stree3"] = "s1: 139 -301";
dict["!stree4"] = "s1: 76 -164";
dict["!stree5"] = "s1: 80 -174";
dict["!stree6"] = "s1: 85 -183";
dict["!stree7"] = "s1: 89 -192";
dict["!stree8"] = "s1: 93 -201";
dict["!stree9"] = "s1: 97 -210";
dict["!stree10"] = "s1: 101 -219";
dict["!stree11"] = "s1: 106 -228";
dict["!stree12"] = "s1: 110 -237";
dict["!stree13"] = "s1: 114 -246";
dict["!stree14"] = "s1: 118 -255";
dict["!stree15"] = "s1: 122 -264";
dict["!*fossil0"] = "s1: 186 37 s2: -125 143 s3: -61 -180";
dict["!*fossil1"] = "s1: 158 106 s2: -170 84 s3: 12 -190";
dict["!*fossil2"] = "s1: 106 158 s2: -190 12 s3: 84 -170";
dict["!*fossil3"] = "s1: 37 186 s2: -180 -61 s3: 143 -125";
dict["!*fossil4"] = "s1: -37 186 s2: -143 -125 s3: 180 -61";
dict["!*fossil5"] = "s1: -106 158 s2: -84 -170 s3: 190 12";
dict["!*fossil6"] = "s1: -158 106 s2: -12 -190 s3: 170 84";
dict["!*fossil7"] = "s1: -186 37 s2: 61 -180 s3: 125 143";
dict["!*fossil8"] = "s1: -186 -37 s2: 125 -143 s3: 61 180";
dict["!*fossil9"] = "s1: -158 -106 s2: 170 -84 s3: -12 190";
dict["!*fossil10"] = "s1: -106 -158 s2: 190 -12 s3: -84 170";
dict["!*fossil11"] = "s1: -37 -186 s2: 180 61 s3: -143 125";
dict["!*fossil12"] = "s1: 37 -186 s2: 180 61 s3: -143 125";
dict["!*fossil13"] = "s1: 106 -158 s2: 84 170 s3: -190 -12";
dict["!*fossil14"] = "s1: 158 -106 s2: 12 190 s3: -170 -84";
dict["!*fossil15"] = "s1: 186 -37 s2: -61 180 s3: -125 -143";
//Other Commands
dict["!perfecttiers"] = "You can use the different 'tiers' of data by changing your angle prefix, @=128, #=256, $=512, %=1024, ^=2048";
dict["!perfecthelp"] = "Use !X for highroll chunk offset for an angle, !*X for all options for an angle. There's also !perfectabout, !perfecstrat, !perfectdemo, and !perfectsymbols";
dict["!perfectabout"] = "Bot made by Sharpieman20 and FourTwentyBlazeIt, hosted and cleaned up by unascribed";
dict["!perfectstrat"] = "This bot is made to do perfect travel. The goal is to travel to the stronghold in a single throw Learn how to do that here! https://docs.google.com/document/d/1JTMOIiS-Hl6_giEB0IQ5ki7UV-gvUXnNmoxhYoSgEAA/edit?usp=sharing";
dict["!perfectdemo"] = "You can see a demonstration of the strategy by Four here: https://www.youtube.com/watch?v=37GfKTtDvBM";
dict["!perfectsymbols"] = "If you're having issues with the bot being timed out for excessive symbols, mod the bot, trust me, it won't do anything malicious ;)";
dict["!addme"] = (tgt, ctx, msg, cmd) => {
	if (tgt === '#' + config.username.toLowerCase()) {
		if (config.channels.indexOf(ctx.username) === -1) {
			client.join('#' + ctx.username).then(() => {
				client.say(tgt, ctx.username + ": I've joined your chat and am waiting for commands there.");
				config.channels.push(ctx.username);
				saveConfig();
			}).catch((e) => {
				console.error(e);
				client.say(tgt, ctx.username + ": Sorry, I couldn't join your chat for some reason.");
			});
		} else {
			if (client.getChannels().indexOf('#' + ctx.username) === -1) {
				client.say(tgt, ctx.username + ": I should already be in your chat, but I'm not! Trying to join again...");
				client.join('#' + ctx.username).then(() => {
					client.say(tgt, ctx.username + ": I've joined your chat.");
				}).catch((e) => {
					console.error(e);
					client.say(tgt, ctx.username + ": Sorry, I couldn't join your chat for some reason.");
				});
			} else {
				client.say(tgt, ctx.username + ": I'm already in your chat!");
			}
		}
	} else {
		console.log("Ignoring addme command in wrong channel: " + tgt);
	}
};
dict["!removeme"] = (tgt, ctx, msg, cmd) => {
	if (tgt === '#' + config.username.toLowerCase()) {
		if (config.channels.indexOf(ctx.username) === -1) {
			if (client.getChannels().indexOf('#' + ctx.username) === -1) {
				client.say(tgt, ctx.username + ": I'm not in your chat!");
			} else {
				client.say(tgt, ctx.username + ": I shouldn't be in your chat, but I am! Leaving.");
				client.part('#' + ctx.username);
			}
		} else {
			client.part('#' + ctx.username);
			client.say(tgt, ctx.username + ": I've left your chat.");
			config.channels = config.channels.filter(it => it !== ctx.username);
			saveConfig();
		}
	} else {
		console.log("Ignoring removeme command in wrong channel: " + tgt);
	}
};

// Register our event handlers (defined below)
client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);

// Connect to Twitch:
client.connect();

// Called every time a message comes in
function onMessageHandler(target, context, msg, self) {
	if (self) {
		return;
	} // Ignore messages from the bot

	// Remove whitespace from chat message
	const cmd = msg.trim();
	if (cmd.length === 0) return;

	var txt;

	if (dict[cmd]) {
		console.log("Responding to " + context.username + " with built-in command: " + cmd);
		let builtin = dict[cmd];
		if (typeof builtin === "function") {
			builtin(target, context, msg, cmd);
			return;
		} else {
			txt = builtin;
		}
	} else if (cmd[0] == '!') {
		console.log("Responding to " + context.username + " with angle lookup: " + cmd);
		let dataSet = 0;
		let rem = cmd.substring(1);
		if (rem.length === 0) return;
		let any = false;
		// chop off leading * and activate "any" instead of "highroll"
		if (rem[0] === '*') {
			any = true;
			rem = rem.substring(1);
		}
		//check for alternative dataset and indicate which one
		else if (rem[0] === '@') {
			dataSet = 128;
			rem = rem.substring(1);
		}
		else if (rem[0] === '#') {
			dataSet = 256;
			rem = rem.substring(1);
		}
		else if (rem[0] === '$') {
			dataSet = 512;
			rem = rem.substring(1);
		}
		else if (rem[0] === '%') {
			dataSet = 1024;
			rem = rem.substring(1);
		}
		else if (rem[0] === '^') {
			dataSet = 2048;
			rem = rem.substring(1);
		}
		
		// make sure it's a valid number before we try parsing it
		if (!/^-?[0-9]+(\.[0-9]+)?$/.exec(rem)) return;
		let ang = Number(rem);
		// convert real angles into notch angles


		if (ang > 18000 || ang < -18000) {
			txt = "Angle out of range, use the f3 method or unspin and re-measure COGGERS";
		} else {
			ang = ang % 360
			if (ang > 180) {
				ang = ang - 360;
			}
			if (ang < -180) {
				ang = ang + 360;
			}
			let psbl;
			if (dataSet==128){
				psbl = data128[ang.toFixed(2)];
			}
			else if (dataSet==256){
				psbl = data256[ang.toFixed(2)];
			}
			else if (dataSet==512){
				psbl = data512[ang.toFixed(2)];
			}
			else if (dataSet==1024){
				psbl = data1024[ang.toFixed(2)];
			}
			else if (dataSet==2048){
				psbl = data2048[ang.toFixed(2)];
			}
			else{
				psbl = data[ang.toFixed(2)];
			}

			if (psbl && psbl.length > 0) {

				if (any) {
					txt = psbl.join(' | ');
				} else {
					txt = psbl[0];
				}
			} else {
				txt = "None";
			}
		}
	} else {
		return;
	}

	console.log(txt);
	client.say(target, txt);


}

// Called every time the bot connects to Twitch chat
function onConnectedHandler(addr, port) {
	console.log(`* Connected to ${addr}:${port}`);
}
