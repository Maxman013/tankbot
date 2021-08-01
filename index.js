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
let game;

bot.on("ready", () => {
    bot.user.setActivity("Tank Turn Tactics");
    console.log("Ready");
})

bot.on("message", message => {
    if (message.author == bot.user) return;

    if (message.content == "!newgame") {
        var players = [];

        const width = 20;
        const height = 20;

        message.guild.members.cache.forEach(member => {
            var randomX = Math.floor(Math.random() * width);
            var randomY = Math.floor(Math.random() * height);
            players.push(new Player(3, 2, 0, randomX, randomY, member.displayName, member.id));
        })

        game = new Game(players, new Board(height, width));
        game.addPlayers();
        message.channel.send("Created game");
    }

    if (message.content == "!board") {
        var output = "```";
        for (var i = 0; i < game.board.height; i++) {
            for (var j = 0; j < game.board.height; j++) {
                if (game.board.cells[i][j] != "") {
                    output += game.board.cells[i][j].name.substring(0, 1) + " ";
                } else {
                    output += ". ";
                }
            }
            output += "\n";
        }

        message.channel.send(output + "```");
    }

    if (message.content == "!players") {
        for (var i = 0; i < game.players.length; i++) {
            message.channel.send(game.players[i].name);
        }
    }
});

bot.login(TOKEN);