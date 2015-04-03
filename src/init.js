/*******************************************************
 *
 *              Player board initialization
 *
 *******************************************************/


var inputs = readline().split(' ');
var BOARD_WIDTH = parseInt(inputs[0]); // width of the board
var BOARD_HEIGHT = parseInt(inputs[1]); // height of the board
var playerCount = parseInt(inputs[2]); // number of players (2 or 3)
var myId = parseInt(inputs[3]); // id of my player (0 = 1st player, 1 = 2nd player, ...)

var walls = [],
    players = [],
    me,
    DIR_LEFT = 'left',
    DIR_RIGHT = 'right',
    DIR_BOTTOM = 'bottom',
    ACTION_LEFT = 'LEFT',
    ACTION_RIGHT = 'RIGHT',
    ACTION_UP = 'UP',
    ACTION_DOWN = 'DOWN';

for (var i = 0; i < playerCount; i++) {
    players[i] = {
        id: i,
        direction: idDirection(i)
    };
    if (i == myId) {
        me = players[i];
    }
}