"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var manual_tree_1 = require("./manual-tree");
// Breadth First Search
function treeIncludeBFS(root, target) {
    if (!root)
        return false;
    var queue = [root];
    while (queue.length > 0) {
        var current = queue.shift();
        if ((current === null || current === void 0 ? void 0 : current.value) === target)
            return true;
        if (current === null || current === void 0 ? void 0 : current.left)
            queue.push(current.left);
        if (current === null || current === void 0 ? void 0 : current.right)
            queue.push(current.right);
    }
    return false;
}
function treeIncludeDFS(root, target) {
    // Base case
    if (!root)
        return false;
    if (root.value === target)
        return true;
    var leftResult = false;
    var rightResult = false;
    if (root.left)
        leftResult = treeIncludeBFS(root.left, target);
    if (root.right)
        rightResult = treeIncludeBFS(root.right, target);
    return leftResult || rightResult;
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
var resultBFS = treeIncludeBFS(a, 'e');
console.log('resultBFS:', resultBFS);
var resultDFS = treeIncludeDFS(a, 'f');
console.log('resultDFS:', resultDFS);
