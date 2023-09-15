"use strict";
/*
  Sum of Tree
*/
Object.defineProperty(exports, "__esModule", { value: true });
var manual_tree_1 = require("./manual-tree");
// Recursion
function treeSumRecursion(root) {
    // Base Case
    if (root === null)
        return 0;
    // // Left Trees
    // let leftSum: number = 0;
    // if (root.left) leftSum += treeSumRecursion(root.left);
    // // Right Trees
    // let rightSum: number = 0;
    // if (root.right) rightSum += treeSumRecursion(root.right);
    // return Number(root.value) + leftSum + rightSum;
    return Number(root.value) +
        Number(treeSumRecursion(root === null || root === void 0 ? void 0 : root.left)) +
        Number(treeSumRecursion(root === null || root === void 0 ? void 0 : root.right));
}
// Iterator
function treeSumInterator(root) {
    // Base Case
    if (!root)
        return 0;
    var totalSum = 0;
    var queue = [root];
    while (queue.length > 0) {
        var current = queue.shift();
        totalSum += Number(current === null || current === void 0 ? void 0 : current.value);
        if (current === null || current === void 0 ? void 0 : current.left)
            queue.push(current.left);
        if (current === null || current === void 0 ? void 0 : current.right)
            queue.push(current.right);
    }
    return totalSum;
}
var a = new manual_tree_1.TreeNode(3);
var b = new manual_tree_1.TreeNode(11);
var c = new manual_tree_1.TreeNode(4);
var d = new manual_tree_1.TreeNode(4);
var e = new manual_tree_1.TreeNode(2);
var f = new manual_tree_1.TreeNode(1);
// Connect Nodes
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
var resultRecursion = treeSumRecursion(a);
console.log('TreeSum Recursion = ', resultRecursion);
var resultIteration = treeSumInterator(a);
console.log('TreeSum Iteration = ', resultIteration);
