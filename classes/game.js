/*
 * Game class
 */

class Game {
    players;
    board;

    constructor(players, board) {
        this.players = players;
        this.board = board;
    }

    addPlayers() {
        for (var i = 0; i < this.players.length; i++) {
            this.board.addPlayer(this.players[i]);
        }
    }
}

module.exports = Game;