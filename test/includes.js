global.BOARD_WIDTH = 9;
global.BOARD_HEIGHT = 9;
global.playerCount = 2;
global.myId = 0;

global.walls = [];
global.players = [];
global.me = null;
global.DIR_LEFT = 'left';
global.DIR_RIGHT = 'right';
global.DIR_BOTTOM = 'bottom';
global.ACTION_LEFT = 'LEFT';
global.ACTION_RIGHT = 'RIGHT';
global.ACTION_UP = 'UP';
global.ACTION_DOWN = 'DOWN';

var utils = require('../src/utils');

Object.keys(utils).forEach(function(k){
    global[k] = utils[k];
});


for (var i = 0; i < playerCount; i++) {
    players[i] = {
        id: i,
        direction: idDirection(i)
    };
    if (i == myId) {
        me = players[i];
    }
}

global.Node = require('../src/astar/node');

var algo = require('../src/astar/algo');

Object.keys(algo).forEach(function(k){
    global[k] = utils[k];
});