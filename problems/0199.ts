// 199. Binary Tree Right Side View
// Difficulty: Medium
// Link: https://leetcode.com/problems/binary-tree-right-side-view/description/
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

function rightSideView(root: TreeNode | null): number[] {
  const res: number[] = [];
  if (!root) {
    return res;
  }
  res.push(root.val);

  let currentLevel = [root];
  let nextLevel = [];

  while (currentLevel.length > 0) {
    nextLevel = [];
    let lastNode;

    for (let node of currentLevel) {
      if (node.left) {
        lastNode = node.left;
        nextLevel.push(node.left);
      }

      if (node.right) {
        lastNode = node.right;
        nextLevel.push(node.right);
      }
    }

    if (lastNode) {
      res.push(lastNode.val);
    }

    currentLevel = nextLevel;
  }

  return res;
}
