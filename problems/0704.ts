// 704. Binary Search
// Difficulty: Easy
// Link: https://leetcode.com/problems/binary-search/description/
// Date: 04 Oct 2025

function search(nums: number[], target: number): number {
  let l: number = 0;
  let r: number = nums.length - 1;
  let mid: number;
  while (l <= r) {
    mid = Math.floor((l + r) / 2);

    if (nums[mid] < target) {
      l = mid + 1;
    } else if (nums[mid] > target) {
      r = mid - 1;
    } else {
      return mid;
    }
  }

  return -1;
}
