/*
 * Board class
 */

class Board {
    cells;
    height;
    width;

    constructor(height, width) {
        this.height = height;
        this.width = width;
        this.cells = new Array(height);
        for (var i = 0; i < height; i++) {
            this.cells[i] = [];
            for (var j = 0; j < width; j++) {
                this.cells[i].push("");
            }
        }
    }

    addPlayer(player) {
        if (this.cells[player.y][player.x] == "") {
            this.cells[player.y][player.x] = player;
        } else {
            console.error(`Cell (${player.x}, ${player.y}) already filled by ${this.cells[player.y][player.x].name}`);
        }
    }
}

module.exports = Board;