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
    canMoveRight: canMoveRight
};
/* end-test-code */