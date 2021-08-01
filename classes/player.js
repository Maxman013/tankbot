/*
 * Player class
 */

class Player {
    health;
    range;
    action;
    x;
    y;
    name;
    id;

    constructor(health, range, action, x, y, name, id) {
        this.health = health;
        this.range = range;
        this.action = action;
        this.x = x;
        this.y = y;
        this.name = name;
        this.id = id;
    }
}

module.exports = Player;