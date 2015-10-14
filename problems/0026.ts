// 26. Remove Duplicates from Sorted Array
// Difficulty: Easy
// Link: https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/
// Date: 14 Oct 2025

function removeDuplicates(nums: number[]): number {
  const set = new Set();

  let i = 0;

  while (i < nums.length) {
    if (!set.has(nums[i])) {
      set.add(nums[i]);
      i++;
    } else {
      nums.splice(i, 1);
    }
  }

  return nums.length;
}
