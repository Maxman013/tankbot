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
            this.cells[i] = new Array(width);
        }
    }
}

module.exports = Board;