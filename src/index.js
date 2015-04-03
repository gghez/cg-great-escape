/*******************************************************
 *
 *                  AI Entry point
 *
 *******************************************************/


/**
 * Initializes turn variables
 */
function initTurn() {
    var i, inputs;

    for (i = 0; i < playerCount; i++) {
        inputs = readline().split(' ');
        players[i].x = parseInt(inputs[0]); // x-coordinate of the player
        players[i].y = parseInt(inputs[1]); // y-coordinate of the player
        players[i].wallsLeft = parseInt(inputs[2]); // number of walls available for the player
    }

    walls.length = 0;
    var wallCount = parseInt(readline()); // number of walls on the board
    for (i = 0; i < wallCount; i++) {
        inputs = readline().split(' ');

        walls.push({
            x: parseInt(inputs[0]),
            y: parseInt(inputs[1]),
            orientation: inputs[2] // 'H' or 'V'
        });
    }
}


/**
 * Game turn loop
 */
while (true) {
    initTurn();

    var target = findTarget(me);
    var next = target.nearest();

    //var other = otherPlayers()[0];
    //var otherTarget = findTarget(other);
    //var otherNext = otherTarget.nearest();

    print(next.action);
}
