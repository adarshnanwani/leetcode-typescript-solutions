// 209. Minimum Size Subarray Sum
// Difficulty: Medium
// Link: https://leetcode.com/problems/minimum-size-subarray-sum/description/
// Date: 24 Oct 2025

function minSubArrayLen(target: number, nums: number[]): number {
  let l = 0;
  let length = Infinity;
  let currentSum = 0;

  for (let r = 0; r <= nums.length; r++) {
    currentSum += nums[r];

    while (currentSum >= target && l <= r) {
      length = Math.min(length, r - l + 1);
      currentSum -= nums[l];
      l++;
    }
  }

  return Object.is(length, Infinity) ? 0 : length;
}
