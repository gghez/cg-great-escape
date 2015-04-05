/*******************************************************
 *
 *                  AI Entry point
 *
 *******************************************************/

Board.init();

/**
 * Game turn loop
 */
while (true) {
    Board.initTurn();

    var action = Board.aiAction(AStar);
    print(action);
}
