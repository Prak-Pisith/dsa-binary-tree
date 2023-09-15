/* 
  Find minimum value in Tree
*/

import { TreeNode } from "./manual-tree";

// Stack Iterator
function minValueStack<T> (root: TreeNode<T> | null): number {

  let min: number = Infinity;

  const stack = [ root ];
  while (stack.length > 0) {
    const current = stack.pop();
    const currentValue = Number(current?.value);
    if (min > currentValue) min = currentValue;

    if (current?.left) stack.push(current.left);
    if (current?.right) stack.push(current.right);
  }

  return min;
}

// Queue Iterator
function minValueQueue<T> (root: TreeNode<T> | null): number {

  let min: number = Infinity;

  const queue = [ root ];
  while (queue.length > 0) {
    const current = queue.shift();
    const currentValue = Number(current?.value);
    if (min > currentValue) min = currentValue;

    if (current?.left) queue.push(current.left);
    if (current?.right) queue.push(current.right);
  }

  return min;
}

// Recursion
function minValueRecursion<T> (root: TreeNode<T> | null): number {

  // Base case
  if (!root) return Infinity;
  
  let leftMin: number = Infinity;
  let rightMin: number = Infinity;

  if (root?.left) leftMin = minValueRecursion(root.left);
  if (root?.right) rightMin = minValueRecursion(root.right);

  return Math.min(Number(root.value), leftMin, rightMin);
}

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


const resultStack: number = minValueStack(a);
console.log('Min Tree Stack Iteration: ' + resultStack);

const resultQueue: number = minValueQueue(a);
console.log('Min Tree Queue Iteration: ' + resultQueue);

const resultRecursion: number = minValueRecursion(a);
console.log('Min Tree Recursion: ' + resultRecursion);