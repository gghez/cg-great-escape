/*******************************************************
 *
 *              Player board initialization
 *
 *******************************************************/

var Board = {
    walls: [],
    players: [],
    me: null,
    DIR_LEFT: 'left',
    DIR_RIGHT: 'right',
    DIR_BOTTOM: 'bottom',
    ACTION_LEFT: 'LEFT',
    ACTION_RIGHT: 'RIGHT',
    ACTION_UP: 'UP',
    ACTION_DOWN: 'DOWN',
    WIDTH: -1,
    HEIGHT: -1,
    init: function () {
        var inputs = readline().split(' ');

        this.WIDTH = parseInt(inputs[0]); // width of the board
        this.HEIGHT = parseInt(inputs[1]); // height of the board
        var playerCount = parseInt(inputs[2]); // number of players (2 or 3)
        var myId = parseInt(inputs[3]); // id of my player (0 = 1st player, 1 = 2nd player, ...)

        for (var i = 0; i < playerCount; i++) {
            this.players[i] = {
                id: i,
                direction: i === 0 ? this.DIR_RIGHT : (i === 1 ? this.DIR_LEFT : this.DIR_BOTTOM)
            };
            if (i == myId) {
                this.me = this.players[i];
            }
        }
    },
    initTurn: function () {
        var i, inputs;

        for (i = 0; i < this.players.length; i++) {
            inputs = readline().split(' ');
            this.players[i].x = parseInt(inputs[0]); // x-coordinate of the player
            this.players[i].y = parseInt(inputs[1]); // y-coordinate of the player
            this.players[i].wallsLeft = parseInt(inputs[2]); // number of walls available for the player
        }

        this.walls.length = 0;
        var wallCount = parseInt(readline()); // number of walls on the board
        for (i = 0; i < wallCount; i++) {
            inputs = readline().split(' ');

            this.walls.push({
                x: parseInt(inputs[0]),
                y: parseInt(inputs[1]),
                orientation: inputs[2] // 'H' or 'V'
            });
        }
    },
    play: function () {
        this.initTurn();

        var target = findTarget(me);
        var next = target.nearest();

        print(next.action);
    }
};

/* test-code */
module.exports = Board;
/* end-test-code */