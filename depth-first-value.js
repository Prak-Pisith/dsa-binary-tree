"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var manual_tree_1 = require("./manual-tree");
var depthFirstValue = function (root) {
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
};
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
var result = depthFirstValue(a);
console.log('result: ', result);
