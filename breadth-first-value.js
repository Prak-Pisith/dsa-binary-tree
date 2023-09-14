"use strict";
/*
  Breadth First Value: using Queue Data Structure
*/
Object.defineProperty(exports, "__esModule", { value: true });
var manual_tree_1 = require("./manual-tree");
function breadthFirstTraversalIteration(root) {
    var result = [];
    if (!root)
        return result;
    var queue = [root];
    while (queue.length > 0) {
        var current = queue.shift();
        result.push(current === null || current === void 0 ? void 0 : current.value);
        if (current === null || current === void 0 ? void 0 : current.left)
            queue.push(current.left);
        if (current === null || current === void 0 ? void 0 : current.right)
            queue.push(current.right);
    }
    return result;
}
function breadthFirstTraversalRecursion(root) {
    if (!root)
        return [];
}
// Initial Nodes
var a = new manual_tree_1.TreeNode('a');
var b = new manual_tree_1.TreeNode('b');
var c = new manual_tree_1.TreeNode('c');
var d = new manual_tree_1.TreeNode('d');
var e = new manual_tree_1.TreeNode('e');
var f = new manual_tree_1.TreeNode('f');
// Connect Nodes
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
var resultIteration = breadthFirstTraversalIteration(a);
console.log('resultIteration:', resultIteration);
