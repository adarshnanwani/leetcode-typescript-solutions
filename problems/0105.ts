// 105. Construct Binary Tree from Preorder and Inorder Traversal
// Difficulty: Medium
// Link: https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/
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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  if (!preorder || preorder.length === 0 || !inorder || inorder.length === 0) {
    return null;
  }
  const root = new TreeNode(preorder[0]);
  const index = inorder.indexOf(preorder[0]);

  root.left = buildTree(preorder.slice(1, index + 1), inorder.slice(0, index));
  root.right = buildTree(preorder.slice(index + 1), inorder.slice(index + 1));

  return root;
}
