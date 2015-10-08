// 701. Insert into a Binary Search Tree
// Difficulty: Medium
// Link: https://leetcode.com/problems/insert-into-a-binary-search-tree/description/
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

function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
  if (!root) {
    return new TreeNode(val);
  }

  if (val < root.val) {
    root.left = insertIntoBST(root.left, val);
  }
  if (val > root.val) {
    root.right = insertIntoBST(root.right, val);
  }

  return root;
}
