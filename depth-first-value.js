"use strict";
/*
  Depth First Value: using Stack Data Structure
*/
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var manual_tree_1 = require("./manual-tree");
// Iteration 
function depthFirstTraversalIteration(root) {
    var result = [];
    var stack = [root];
    if (root === null)
        return result;
    while (stack.length > 0) {
        var current = stack.pop();
        result.push(current === null || current === void 0 ? void 0 : current.value);
        if (current === null || current === void 0 ? void 0 : current.right)
            stack.push(current === null || current === void 0 ? void 0 : current.right);
        if (current === null || current === void 0 ? void 0 : current.left)
            stack.push(current === null || current === void 0 ? void 0 : current.left);
    }
    return result;
}
// Recursion
function depthFirstTraversalRecursion(root) {
    if (root === null)
        return [];
    var leftValues = [];
    var rightValues = [];
    if (root.left)
        leftValues = depthFirstTraversalRecursion(root.left);
    if (root.right)
        rightValues = depthFirstTraversalRecursion(root.right);
    return __spreadArray(__spreadArray([root.value], leftValues, true), rightValues, true);
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
var resultIteration = depthFirstTraversalIteration(a);
var resultRecursion = depthFirstTraversalRecursion(a);
console.log('resultIteration: ', resultIteration);
console.log('resultRecursion: ', resultRecursion);
