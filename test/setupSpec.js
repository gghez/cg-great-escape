describe('Board setup tests', function () {

    var readline, inputBufferIndex,inputBuffer;

    function addInputBuffer(buffer){
        readline.onCall(inputBufferIndex++).returns(buffer);
    }

    beforeEach(function () {
        if (readline){
            readline.restore();
        }

        readline = sinon.stub(global, 'readline');
        inputBufferIndex=0;

        addInputBuffer('9 9 2 0');

        Board.init();
    });

    it('Initialize board correctly.', function () {
        assert.equal(Board.WIDTH, 9);
        assert.equal(Board.HEIGHT, 9);
        assert.equal(Board.players.length, 2);
        assert.equal(Board.me.id, 0);
    });

    it('Find solution for board #1', function () {

        addInputBuffer('0 3 10');
        addInputBuffer('0');

        Board.initTurn();

        assert.strictEqual(Board.me.x, 0);
        assert.equal(Board.me.y, 3);
        assert.equal(Board.me.wallsLeft, 10);
        assert.strictEqual(Board.walls.length, 0);
    });

});