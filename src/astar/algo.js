/*******************************************************
 *
 *                    A* algorithm
 *
 *******************************************************/


/**
 * Finds cheapest node from listed
 *
 * @param nodes
 * @param player
 * @returns {*}
 */
function best(nodes, player) {
    var minCost, node;

    nodes.filter(function (n) {
        return !n.closed;
    }).forEach(function (n) {
        var cost = n.pathCost(player);
        if (!minCost || cost < minCost) {
            minCost = cost;
            node = n;
        }
    });

    return node;
}

/**
 * Finds node at location among nodes.
 *
 * @param x
 * @param y
 * @param nodes
 * @returns {*}
 */
function nodeAt(x, y, nodes) {
    var node = null;

    nodes.some(function (n) {
        if (n.x == x && n.y == y) {
            node = n;
            return true;
        }
    });

    return node;
}

/**
 * Finds best path (path-end node) for a player
 *
 * @param player
 * @returns {*}
 */
function findTarget(player) {
    var node, nodes = [new Node(player.x, player.y)];

    while (!(node = best(nodes, player)).isTargetForPlayer(player)) {

        if (canMoveLeft(node) && !node.pathContains(node.x - 1, node.y)) {
            /*var newLeftNode=new Node(node.x - 1, node.y, node, ACTION_LEFT);
             var leftNode = nodeAt(node.x-1,node.y,nodes);
             if (!leftNode || leftNode.pathCost(player) > newLeftNode.pathCost(player)){
             nodes.push(newLeftNode);
             }*/
            nodes.push(new Node(node.x + 1, node.y, node, ACTION_LEFT));
        }
        if (canMoveRight(node) && !node.pathContains(node.x + 1, node.y)) {
            nodes.push(new Node(node.x + 1, node.y, node, ACTION_RIGHT));
        }
        if (canMoveUp(node) && !node.pathContains(node.x, node.y - 1)) {
            nodes.push(new Node(node.x, node.y - 1, node, ACTION_UP));
        }
        if (canMoveDown(node) && !node.pathContains(node.x, node.y + 1)) {
            nodes.push(new Node(node.x, node.y + 1, node, ACTION_DOWN));
        }

        node.closed = true;
    }

    return node;
}

if (typeof module == 'object' && module.exports) {
    module.exports = {
        best: best,
        nodeAt: nodeAt,
        findTarget: findTarget
    };
}