/*
 * Player class
 */

class Player {
    health;
    range;
    action;
    location;
    name;
    id;

    constructor(health, range, action, location, name, id) {
        this.health = health;
        this.range = range;
        this.action = action;
        this.location = location;
        this.name = name;
        this.id = id;
    }
}

module.exports = Player;