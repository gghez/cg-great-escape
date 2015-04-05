/*******************************************************
 *
 *                    A* algorithm
 *
 *******************************************************/

/* test-code */
var Node = require('./node'),
    utils = require('../utils'),
    canMoveUp = utils.canMoveUp,
    canMoveDown = utils.canMoveDown,
    canMoveLeft = utils.canMoveLeft,
    canMoveRight = utils.canMoveRight,
    isTarget = utils.isTarget,
    actionCost = utils.actionCost;
/* end-test-code */


var AStar = {
    nodes: [],

    /**
     * Finds cheapest node from listed
     *
     * @param nodes
     * @returns {*}
     */
    best: function () {
        var minCost, node = null;

        this.nodes.filter(function (n) {
            return !n.closed;
        }).forEach(function (n) {
            if (!minCost || n.cost < minCost) {
                minCost = n.cost;
                node = n;
            }
        });

        return node;
    },
    /**
     * Finds node at location among nodes.
     *
     * @param x
     * @param y
     * @param nodes
     * @returns {*}
     */
    nodeAt: function (x, y) {
        var node = null;

        this.nodes.some(function (n) {
            if (n.x == x && n.y == y) {
                node = n;
                return true;
            }
        });

        return node;
    },

    /**
     * Finds best path (path-end node) for a player
     *
     * @param player
     * @returns {*}
     */
    findTarget: function (player) {
        var node;

        this.nodes.length = 0;
        this.nodes.push(new Node(player.x, player.y, null, 0));

        while ((node = this.best()) && !isTarget(node.x, node.y, player)) {

            if (canMoveLeft(node) && !node.pathContains(node.x - 1, node.y)) {
                this.nodes.push(new Node(node.x - 1,
                    node.y,
                    node,
                    node.cost + actionCost(Board.ACTION_LEFT, player),
                    Board.ACTION_LEFT));
            }
            if (canMoveRight(node) && !node.pathContains(node.x + 1, node.y)) {
                this.nodes.push(new Node(node.x + 1,
                    node.y,
                    node,
                    node.cost + actionCost(Board.ACTION_RIGHT, player),
                    Board.ACTION_RIGHT));
            }
            if (canMoveUp(node) && !node.pathContains(node.x, node.y - 1)) {
                this.nodes.push(new Node(node.x,
                    node.y - 1,
                    node,
                    node.cost + actionCost(Board.ACTION_UP, player),
                    Board.ACTION_UP));
            }
            if (canMoveDown(node) && !node.pathContains(node.x, node.y + 1)) {
                this.nodes.push(new Node(node.x,
                    node.y + 1,
                    node,
                    node.cost + actionCost(Board.ACTION_DOWN, player),
                    Board.ACTION_DOWN));
            }

            node.closed = true;
        }

        return node;
    },
    action: function (board) {
        var target = this.findTarget(board.me);
        var next = target.nearest();

        return next.action;
    }
};

/* test-code */
module.exports = AStar;
/* end-test-code */