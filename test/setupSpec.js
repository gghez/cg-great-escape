describe('Board setup tests', function () {

    beforeEach(function () {
        addInputBuffer('9 9 2 0'); // board width, height, player count, my player id

        Board.init();
    });

    it('Initialize board correctly.', function () {
        assert.equal(Board.WIDTH, 9);
        assert.equal(Board.HEIGHT, 9);
        assert.equal(Board.players.length, 2);
        assert.equal(Board.me.id, 0);
    });

    it('Initialize turn correctly.', function () {

        addInputBuffer('0 3 7'); // x, y, walls left
        addInputBuffer('8 7 9');
        addInputBuffer('2');
        addInputBuffer('1 0 V');
        addInputBuffer('2 2 H');

        Board.initTurn();

        assert.equal(Board.me.x, 0);
        assert.equal(Board.me.y, 3);
        assert.equal(Board.me.wallsLeft, 7);

        assert.equal(Board.players[1].x, 8);
        assert.equal(Board.players[1].y, 7);
        assert.equal(Board.players[1].wallsLeft, 9);

        assert.equal(Board.walls.length, 2);
        assert.equal(Board.walls[0].x, 1);
        assert.equal(Board.walls[0].y, 0);
        assert.equal(Board.walls[0].orientation, 'V');
        assert.equal(Board.walls[1].x, 2);
        assert.equal(Board.walls[1].y, 2);
        assert.equal(Board.walls[1].orientation, 'H');
    });

});