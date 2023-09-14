/* 
  Depth First Value: using Stack Data Structure
*/

import { TreeNode } from "./manual-tree";

// Iteration 
function depthFirstTraversalIteration<T> (root: TreeNode<T>): T[] {

  const result: T[] = [];
  const stack: TreeNode<T>[] = [ root ];

  if (root === null) return result;
  
  while(stack.length > 0) {
    const current = stack.pop();
    result.push(current?.value!);

    if (current?.right)
      stack.push(current?.right);
    if (current?.left)
      stack.push(current?.left);
  }

  return result;
}

// Recursion
function depthFirstTraversalRecursion<T> (root: TreeNode<T>): T[] {
  if (root === null) return [];
  let leftValues: T[] = [];
  let rightValues: T[] = [];
  if (root.left)
    leftValues = depthFirstTraversalRecursion(root.left);
  if (root.right)
    rightValues = depthFirstTraversalRecursion(root.right);
  return [root.value, ...leftValues, ...rightValues];
}

// Initial Nodes
const a = new TreeNode('a');
const b = new TreeNode('b');
const c = new TreeNode('c');
const d = new TreeNode('d');
const e = new TreeNode('e');
const f = new TreeNode('f');

// Connect Nodes
a.left = b;
a.right = c;

b.left = d;
b.right = e;

c.right = f;


const resultIteration: string[] = depthFirstTraversalIteration(a);
const resultRecursion: string[] = depthFirstTraversalRecursion(a);
console.log('resultIteration: ', resultIteration);
console.log('resultRecursion: ', resultRecursion);