/* Unit testing frameworks */
global.assert = require('chai').assert;
global.sinon = require('sinon');


/* AI engine stuff */
global.print = console.log;
global.readline = function () {
};

global.Board = require('../src/board');
global.AStar = require('../src/astar/astar');

var readline = sinon.stub(global, 'readline'),
    inputBufferIndex = 0;

global.addInputBuffer = function (buffer) {
    readline.onCall(inputBufferIndex++).returns(buffer);
};
