import { TreeNode } from "./manual-tree";

// Breadth First Search
function treeIncludeBFS<T> (root: TreeNode<T>, target: T): boolean {

  if (!root) return false;

  const queue: TreeNode<T>[] = [root];

  while (queue.length > 0) {
    const current = queue.shift();
    if (current?.value === target) return true;

    if (current?.left) queue.push(current.left);
    if (current?.right) queue.push(current.right);
  }

  return false;
}

// Depth First Search - Recursive
function treeIncludeDFS<T> (root: TreeNode<T>, target: T): boolean {

  // Base case
  if (!root) return false;
  if (root.value === target) return true;

  let leftResult: boolean = false;
  let rightResult: boolean = false;

  if (root.left) leftResult = treeIncludeBFS(root.left, target);
  if (root.right) rightResult = treeIncludeBFS(root.right, target);

  return leftResult || rightResult;
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

const resultBFS: boolean = treeIncludeBFS(a, 'e');
console.log('resultBFS:', resultBFS);

const resultDFS: boolean = treeIncludeDFS(a, 'f');
console.log('resultDFS:', resultDFS);