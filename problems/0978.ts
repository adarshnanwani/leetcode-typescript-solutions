// 978. Longest Turbulent Subarray
// Difficulty: Medium
// Link: https://leetcode.com/problems/longest-turbulent-subarray/description/
// Date: 23 Oct 2025

function maxTurbulenceSize(arr: number[]): number {
  let maxSubarrayCount = 1;
  let currentSubarrayCount = 1;

  let wasPrevMore: null | boolean = arr[0] > arr[1];

  for (let i = 1; i < arr.length; i++) {
    const prev = arr[i - 1];
    const current = arr[i];

    if (prev < current) {
      if (wasPrevMore === true) {
        currentSubarrayCount += 1;
      } else {
        currentSubarrayCount = 2;
      }
      wasPrevMore = false;
    } else if (prev > current) {
      if (wasPrevMore === false) {
        currentSubarrayCount += 1;
      } else {
        currentSubarrayCount = 2;
      }
      wasPrevMore = true;
    } else {
      currentSubarrayCount = 1;
      wasPrevMore = null;
    }
    maxSubarrayCount = Math.max(maxSubarrayCount, currentSubarrayCount);
  }

  return maxSubarrayCount;
}
