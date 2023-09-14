import { TreeNode } from "./manual-tree";

// Iteration 
const depthFirstValue = (root: TreeNode<string>): string[] => {

  const result: string[] = [];
  const stack: TreeNode<string>[] = [ root ];

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


const result: string[] = depthFirstValue(a);
console.log('result: ', result);