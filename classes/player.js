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

    addAction(amount) {
        this.action += amount;
    }

    addHealth(amount) {
        this.health += amount;
    }

    addRange(amount) {
        this.range += amount;
    }
}

module.exports = Player;