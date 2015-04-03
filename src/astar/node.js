/*******************************************************
 *
 *                A* algorithm node model
 *
 *******************************************************/

/**
 * Node model for A* algorithm.
 *
 * @param x
 * @param y
 * @param parent
 * @param action
 * @constructor
 */
function Node(x, y, parent, action) {
    this.x = x;
    this.y = y;
    this.parent = parent;
    this.action = action;
}

Node.prototype.cost = function(player) {
    return this._cost !== undefined ? this._cost :
        (this._cost =
            (this.action == ACTION_LEFT && player.direction == DIR_LEFT) ||
            (this.action == ACTION_RIGHT && player.direction == DIR_RIGHT) ||
            (this.action == ACTION_DOWN && player.direction == DIR_BOTTOM) ? 1 :
                ((this.action == ACTION_LEFT && player.direction == DIR_RIGHT) ||
                (this.action == ACTION_RIGHT && player.direction == DIR_LEFT) ||
                (this.action == ACTION_UP && player.direction == DIR_BOTTOM) ? 4 : 2));
};

Node.prototype.pathCost = function(player) {
    return this._pathCost !== undefined ? this._pathCost :
        (this._pathCost = this.cost(player) + (this.parent ? this.parent.pathCost(player) : 0));
};

Node.prototype.nearest = function() {
    var ant = this,
        next;
    while (ant.parent) {
        next = ant;
        ant = ant.parent;
    }

    return next;
};

Node.prototype.pathContains = function(x, y) {
    var ant = this;
    while ((ant = ant.parent) && (ant.x != x || ant.y != y));
    return !!ant;
};

Node.prototype.isTargetForPlayer = function(player) {
    return (player.direction == DIR_LEFT && this.x === 0) ||
        (player.direction == DIR_RIGHT && this.x == BOARD_WIDTH - 1) ||
        (player.direction == DIR_BOTTOM && this.y == BOARD_HEIGHT - 1);
};
