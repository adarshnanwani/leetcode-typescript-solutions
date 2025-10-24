// 1343. Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold
// Difficulty: Medium
// Link: https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/description/
// Date: 24 Oct 2025

function numOfSubarrays(arr: number[], k: number, threshold: number): number {
  let j = 0;
  let thresholdSum = threshold * k;
  let currentSum = 0;
  let currentWindow: number[] = [];
  let res = 0;

  while (j <= arr.length) {
    if (currentWindow.length > k) {
      const firstItem = currentWindow.shift();
      currentSum -= firstItem!;
    }

    if (currentWindow.length === k && currentSum >= thresholdSum) {
      res++;
    }

    currentWindow.push(arr[j]);
    currentSum += arr[j];
    j++;
  }
  return res;
}
