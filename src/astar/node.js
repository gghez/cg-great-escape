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
 * @param cost
 * @param action
 * @constructor
 */
function Node(x, y, parent, cost, action) {
    this.x = x;
    this.y = y;
    this.parent = parent;
    this.cost = cost;
    this.action = action;
}

/**
 * Get the nearest node from this node root.
 *
 * @returns {*}
 */
Node.prototype.nearest = function () {
    var ant = this,
        next;
    while (ant.parent) {
        next = ant;
        ant = ant.parent;
    }

    return next;
};

/**
 * Indicates whether a location is present in node parent path.
 *
 * @param x
 * @param y
 * @returns {boolean}
 */
Node.prototype.pathContains = function (x, y) {
    var ant = this;
    while ((ant = ant.parent) && (ant.x != x || ant.y != y));
    return !!ant;
};

/* test-code */
module.exports = Node;
/* end-test-code */