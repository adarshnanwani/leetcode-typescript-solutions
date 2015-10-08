// 230. Kth Smallest Element in a BST
// Difficulty: Medium
// Link: https://leetcode.com/problems/kth-smallest-element-in-a-bst/description/
// Date: 08 Oct 2025

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

function kthSmallest(root: TreeNode | null, k: number): number | undefined {
  const res: number[] = [];

  function inOrder(rootNode: TreeNode | null) {
    if (!rootNode) {
      return;
    }
    inOrder(rootNode.left);
    res.push(rootNode.val);
    inOrder(rootNode.right);
  }

  inOrder(root);

  if (k > res.length) {
    return;
  }

  return res[k - 1];
}
