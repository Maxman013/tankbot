/*
 * TankBot
 * Maxman013 2021
 */

// discord bot setup
const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require("fs");
const TOKEN = fs.readFileSync("token.txt", "utf8");
// IDs from game server

// class imports
const Game = require("./classes/game");
const Board = require("./classes/board");
const Player = require("./classes/player");

// game variables
var game;

bot.on("ready", () => {
    bot.user.setActivity("Tank Turn Tactics");
    console.log("Ready");
})

bot.on("message", message => {
    if (message.author == bot.user) return;

    if (message.content == "!newgame") {
        var players = [];

        message.guild.members.cache.forEach(member => {
            players.push(new Player(3, 2, 0, 0, member.displayName, member.id));
        })

        game = new Game(players, new Board(20, 20));
    }

    if (message.content == "!board") {
        message.channel.send(game.board.cells);
    }

    if (message.content == "!players") {
        for (var i = 0; i < game.players.length; i++) {
            message.channel.send(game.players[i].name);
        }
    }
});

bot.login(TOKEN);