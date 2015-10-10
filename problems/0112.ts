// 112. Path Sum
// Difficulty: Easy
// Link: https://leetcode.com/problems/path-sum/description/
// Date: 10 Oct 2025

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

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  function dfs(root: TreeNode | null, sum?: number) {
    if (!root) {
      return false;
    }
    const currentSum = (sum ?? 0) + root.val;

    if (root.left === null && root.right === null && currentSum === targetSum) {
      return true;
    }

    if (dfs(root.left, currentSum)) {
      return true;
    }

    if (dfs(root.right, currentSum)) {
      return true;
    }

    return false;
  }

  return dfs(root);
}
