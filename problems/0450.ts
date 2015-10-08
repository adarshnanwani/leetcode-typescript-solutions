// 450. Delete Node in a BST
// Difficulty: Medium
// Link: https://leetcode.com/problems/delete-node-in-a-bst/description/
// Date: 08 Oct 2025

// Definition for a binary tree node.
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

function findMinNode(root: TreeNode | null) {
  let current = root;
  while (current && current.left) {
    current = current.left;
  }
  return current;
}

function deleteNode(
  root: TreeNode | null,
  key?: number | null
): TreeNode | null {
  // if root is empty return null
  if (!root || !key) {
    return null;
  }

  // if key is less than root val, delete from left sub tree
  if (key < root.val) {
    root.left = deleteNode(root.left, key);
  }

  // else if key is greater than root val, delete from right sub tree
  else if (key > root.val) {
    root.right = deleteNode(root.right, key);
  }
  // else (root val is equal to key)
  else {
    // if no right subtree exists then return left subtree
    if (!root.right) {
      return root.left;
    }
    // if no left subtree exists then return right subtree
    if (!root.left) {
      return root.right;
    }
    // if both exist then,
    // find min node in right subtree
    const minNode = findMinNode(root.right);
    // set val of root equal to min node value
    if (minNode) root.val = minNode.val;
    // delete min node from righ sub tree
    root.right = deleteNode(root.right, minNode?.val);
  }

  return root;
}
