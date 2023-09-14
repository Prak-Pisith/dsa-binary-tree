/* 
  Breadth First Value: using Queue Data Structure
*/

import { TreeNode } from "./manual-tree";

function breadthFirstTraversalIteration<T> (root: TreeNode<T> | null): T[] {

  const result: T[] = [];

  if (!root) return result;

  const queue: TreeNode<T>[] = [ root ];

  while (queue.length > 0) {
    const current = queue.shift();
    result.push(current?.value!);

    if (current?.left)
      queue.push(current.left);
    if (current?.right)
      queue.push(current.right);
  }

  return result;

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


const resultIteration = breadthFirstTraversalIteration(a);
console.log('resultIteration:', resultIteration);