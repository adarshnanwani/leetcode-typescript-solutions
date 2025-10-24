// 219. Contains Duplicate II
// Difficulty: Easy
// Link: https://leetcode.com/problems/contains-duplicate-ii/description/
// Date: 24 Oct 2025

function containsNearbyDuplicate(nums: number[], k: number): boolean {
  let i = 0;
  let j = 0;
  const currentWindow = new Set<number>();

  while (j < nums.length) {
    if (j - i > k) {
      currentWindow.delete(nums[i]);
      i++;
    }

    if (currentWindow.has(nums[j])) {
      return true;
    }

    currentWindow.add(nums[j]);
    j++;
  }

  return false;
}
