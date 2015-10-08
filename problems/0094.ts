// 94. Binary Tree Inorder Traversal
// Difficulty: Easy
// Link: https://leetcode.com/problems/binary-tree-inorder-traversal/description/
// Date: 08 Oct 2025

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function inorderTraversal(root: TreeNode | null): number[] {
  const res: number[] = [];

  function inorder(rootNode: TreeNode | null) {
    if (!rootNode) {
      return;
    }
    inorder(rootNode.left);
    res.push(rootNode.val);
    inorder(rootNode.right);
  }

  inorder(root);
  return res;
}
