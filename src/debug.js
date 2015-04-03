/*******************************************************
 *
 *                  Debug tools
 *
 *******************************************************/

function dumpNodes(nodes) {
    printErr(JSON.stringify(nodes, function(k, v) {
        return k == 'parent' ? (v ? v.x + ',' + v.y : v) : v;
    }, 2));
}
