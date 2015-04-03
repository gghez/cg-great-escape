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

    nodes.filter(function(n) {
        return !n.closed;
    }).forEach(function(n) {
        var cost = n.pathCost(player);
        if (!minCost || cost < minCost) {
            minCost = cost;
            node = n;
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
        //printErr('Best node found');
        //dumpNodes(node);

        var eligibles = [];
        if (canMoveLeft(node) && !node.pathContains(node.x - 1, node.y)) {
            eligibles.push(new Node(node.x - 1, node.y, node, ACTION_LEFT));
        }
        if (canMoveRight(node) && !node.pathContains(node.x + 1, node.y)) {
            eligibles.push(new Node(node.x + 1, node.y, node, ACTION_RIGHT));
        }
        if (canMoveUp(node) && !node.pathContains(node.x, node.y - 1)) {
            eligibles.push(new Node(node.x, node.y - 1, node, ACTION_UP));
        }
        if (canMoveDown(node) && !node.pathContains(node.x, node.y + 1)) {
            eligibles.push(new Node(node.x, node.y + 1, node, ACTION_DOWN));
        }

        node.closed = true;

        if (eligibles.length) {
            nodes = nodes.concat(eligibles);
        }
    }

    return node;
}
