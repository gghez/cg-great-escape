/*******************************************************
 *
 *                   Useful functions
 *
 ********************************************************/

function otherPlayers() {
    return Board.players.filter(function (p) {
        return p.id != Board.me.id;
    });
}

function wallAbove(p) {
    return Board.walls.some(function (w) {
        return w.y == p.y &&
            (w.x == p.x || w.x + 1 == p.x) &&
            w.orientation == 'H';
    });
}

function wallBelow(p) {
    return Board.walls.some(function (w) {
        return w.y == p.y + 1 &&
            (w.x == p.x || w.x + 1 == p.x) &&
            w.orientation == 'H';
    });
}

function wallOnLeft(p) {
    return Board.walls.some(function (w) {
        return w.orientation == 'V' &&
            w.x == p.x &&
            (w.y == p.y || w.y + 1 == p.y);
    });
}

function wallOnRight(p) {
    return Board.walls.some(function (w) {
        return w.x == p.x + 1 &&
            (w.y == p.y || w.y + 1 == p.y) &&
            w.orientation == 'V';
    });
}

function canMoveUp(p) {
    return !wallAbove(p) && p.y > 0;
}

function canMoveDown(p) {
    return !wallBelow(p) && p.y < Board.HEIGHT - 1;
}

function canMoveLeft(p) {
    return !wallOnLeft(p) && p.x > 0;
}

function canMoveRight(p) {
    return !wallOnRight(p) && p.x < Board.WIDTH - 1;
}

function isTarget(x, y, player) {
    return (player.direction == Board.DIR_LEFT && x === 0) ||
        (player.direction == Board.DIR_RIGHT && x == Board.WIDTH - 1) ||
        (player.direction == Board.DIR_BOTTOM && y == Board.HEIGHT - 1);
}

/**
 * Calculates an action cost for a player.
 *
 * @param action
 * @param player
 * @returns {number|*}
 */
function actionCost(action, player) {
    return (action == Board.ACTION_LEFT && player.direction == Board.DIR_LEFT) ||
    (action == Board.ACTION_RIGHT && player.direction == Board.DIR_RIGHT) ||
    (action == Board.ACTION_DOWN && player.direction == Board.DIR_BOTTOM) ? 1 :
        ((action == Board.ACTION_LEFT && player.direction == Board.DIR_RIGHT) ||
        (action == Board.ACTION_RIGHT && player.direction == Board.DIR_LEFT) ||
        (action == Board.ACTION_UP && player.direction == Board.DIR_BOTTOM) ? 4 : 2);
}

/* test-code */
module.exports = {
    otherPlayers: otherPlayers,
    wallAbove: wallAbove,
    wallBelow: wallBelow,
    wallOnLeft: wallOnLeft,
    wallOnRight: wallOnRight,
    canMoveUp: canMoveUp,
    canMoveDown: canMoveDown,
    canMoveLeft: canMoveLeft,
    canMoveRight: canMoveRight,
    isTarget: isTarget,
    actionCost: actionCost
};
/* end-test-code */