/* 
  Sum of Tree
*/

import { TreeNode } from "./manual-tree";

// Recursion
function treeSumRecursion<T> (root: TreeNode<T> | null): number {
  
  // Base Case
  if (root === null) return 0;

  // // Left Trees
  // let leftSum: number = 0;
  // if (root.left) leftSum += treeSumRecursion(root.left);
  
  // // Right Trees
  // let rightSum: number = 0;
  // if (root.right) rightSum += treeSumRecursion(root.right);

  // return Number(root.value) + leftSum + rightSum;

  return Number(root.value) + 
  Number(treeSumRecursion(root?.left!)) +
  Number(treeSumRecursion(root?.right!));
}

// Iterator
function treeSumInterator<T> (root: TreeNode<T> | null): number {
  
  // Base Case
  if (!root) return 0;

  let totalSum: number = 0;

  const queue = [root];
  while (queue.length > 0) {
    const current = queue.shift();
    totalSum += Number(current?.value);

    if (current?.left) queue.push(current.left);
    if (current?.right) queue.push(current.right);
  }

  return totalSum;
}


const a = new TreeNode(3);
const b = new TreeNode(11);
const c = new TreeNode(4);
const d = new TreeNode(4);
const e = new TreeNode(2);
const f = new TreeNode(1);

// Connect Nodes
a.left = b;
a.right = c;

b.left = d;
b.right = e;

c.right = f;

const resultRecursion: number = treeSumRecursion(a);
console.log('TreeSum Recursion = ', resultRecursion);

const resultIteration: number = treeSumInterator(a);
console.log('TreeSum Iteration = ', resultIteration);