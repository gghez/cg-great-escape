var utils = require('../src/utils'),
    algo = require('../src/astar/algo'),
    node = {Node: require('../src/astar/node')},
    board = {Board: require('../src/board')};

[utils, algo, node, board].forEach(function (lib) {
    Object.keys(lib).forEach(function (k) {
        global[k] = lib[k];
    });
});

global.print = console.log;
global.readline = function () {
};

global.assert = require('chai').assert;
global.sinon = require('sinon');
