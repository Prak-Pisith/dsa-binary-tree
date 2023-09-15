/* 
  Find the maximum sum from Root to Leaf.
  Which path have the maximum sum value.
*/

import { TreeNode } from "./manual-tree";


function maxPathSum<T> (root: TreeNode<T>): number {

  // Base Case
  if (!root) return -Infinity;
  if (!root.left && !root.right) return Number(root.value);

  const maxChildPathSum: number = Math.max(maxPathSum(root?.left!), maxPathSum(root?.right!));

  return Number(root.value) + maxChildPathSum;
}


// Initial Nodes
const a = new TreeNode(5);
const b = new TreeNode(11);
const c = new TreeNode(3);
const d = new TreeNode(4);
const e = new TreeNode(15);
const f = new TreeNode(12);

// Connect Nodes
a.left = b;
a.right = c;

b.left = d;
b.right = e;

c.right = f;


const result = maxPathSum(a);
console.log('result:', result);