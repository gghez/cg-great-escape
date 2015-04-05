describe('Path finder tests', function () {

    addInputBuffer('9 9 3 0'); // board width, height, player count, my player id

    Board.init();

    describe('When no wall', function () {

        addInputBuffer('0 3 7'); // x, y, walls left
        addInputBuffer('8 7 9');
        addInputBuffer('4 0 10');
        addInputBuffer('0');

        Board.initTurn();

        describe('Expected path', function () {
            it('Player 0', function () {
                var target = AStar.findTarget(Board.players[0]);

                assert.equal(target.x, 8);
                assert.equal(target.y, 3);

                var next = target.nearest();
                assert.equal(next.x, 1);
                assert.equal(next.y, 3);
                assert.equal(next.action, Board.ACTION_RIGHT);
            });

            it('Player 1', function () {
                var target = AStar.findTarget(Board.players[1]);

                assert.equal(target.x, 0);
                assert.equal(target.y, 7);

                var next = target.nearest();
                assert.equal(next.x, 7);
                assert.equal(next.y, 7);
                assert.equal(next.action, Board.ACTION_LEFT);
            });

            it('Player 2', function () {
                var target = AStar.findTarget(Board.players[2]);

                assert.equal(target.x, 4);
                assert.equal(target.y, 8);

                var next = target.nearest();
                assert.equal(next.x, 4);
                assert.equal(next.y, 1);
                assert.equal(next.action, Board.ACTION_DOWN);
            });
        });

        describe('Expected performance', function () {
            var best = sinon.spy(AStar, 'best');

            beforeEach(function () {
                best.reset();
            });

            it('Player 0', function () {
                AStar.findTarget(Board.players[0]);

                assert.isBelow(best.callCount, 235);

            });

            it('Player 1', function () {
                AStar.findTarget(Board.players[1]);

                assert.isBelow(best.callCount, 178);

            });

            it('Player 2', function () {
                AStar.findTarget(Board.players[2]);

                assert.isBelow(best.callCount, 234);

            });
        });
    });


});