// 102. Binary Tree Level Order Traversal
// Difficulty: Medium
// Link: https://leetcode.com/problems/binary-tree-level-order-traversal/description/
// Date: 09 Oct 2025

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function levelOrder(root: TreeNode | null): number[][] {
  const res: number[][] = [];
  if (!root) {
    return res;
  }
  let currentLevel = [root];
  let nextLevel;
  let visited;

  while (currentLevel.length > 0) {
    visited = [];
    nextLevel = [];

    for (let node of currentLevel) {
      visited.push(node.val);

      if (node.left) {
        nextLevel.push(node.left);
      }

      if (node.right) {
        nextLevel.push(node.right);
      }
    }

    res.push(visited);
    currentLevel = nextLevel;
  }

  return res;
}
