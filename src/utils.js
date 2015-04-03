/*******************************************************
 *
 *                   Useful functions
 *
********************************************************/

// DUMMY CODE FOR DEBUG
function dumpNodes(nodes) {
    printErr(JSON.stringify(nodes, function(k, v) {
        return k == 'parent' ? (v ? v.x + ',' + v.y : v) : v;
    }, 2));
}

function idDirection(id) {
    return id === 0 ? DIR_RIGHT : (id === 1 ? DIR_LEFT : DIR_BOTTOM);
}

function otherPlayers(){
    return players.filter(function(p){
        return p.id != me.id;
    });
}

function wallAbove(p) {
    return walls.some(function(w) {
        return w.y == p.y &&
            (w.x == p.x || w.x + 1 == p.x) &&
            w.orientation == 'H';
    });
}

function wallBelow(p) {
    return walls.some(function(w) {
        return w.y == p.y + 1 &&
            (w.x == p.x || w.x + 1 == p.x) &&
            w.orientation == 'H';
    });
}

function wallOnLeft(p) {
    return walls.some(function(w) {
        return w.orientation == 'V' &&
            w.x == p.x &&
            (w.y == p.y || w.y + 1 == p.y);
    });
}

function wallOnRight(p) {
    return walls.some(function(w) {
        return w.x == p.x + 1 &&
            (w.y == p.y || w.y + 1 == p.y) &&
            w.orientation == 'V';
    });
}

function canMoveUp(p) {
    return !wallAbove(p) && p.y > 0;
}

function canMoveDown(p) {
    return !wallBelow(p) && p.y < BOARD_HEIGHT - 1;
}

function canMoveLeft(p) {
    return !wallOnLeft(p) && p.x > 0;
}

function canMoveRight(p) {
    return !wallOnRight(p) && p.x < BOARD_WIDTH - 1;
}
