// 75. Sort Colors
// Difficulty: Medium
// Link: https://leetcode.com/problems/sort-colors/description/
// Date: 04 Oct 2025

/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
  const lookup = [0, 0, 0];

  for (let num of nums) {
    lookup[num]++;
  }

  let index = 0;
  for (let i = 0; i < lookup.length; i++) {
    for (let j = 0; j < lookup[i]; j++) {
      nums[index] = i;
      index++;
    }
  }
}
