// 78. Subsets
// Difficulty: Medium
// Link: https://leetcode.com/problems/subsets/description/
// Date: 10 Oct 2025

function subsets(nums: number[]): number[][] {
  const res: number[][] = [];
  const subset: number[] = [];

  function dfs(i: number) {
    if (i >= nums.length) {
      res.push(subset.slice());
      return;
    }

    subset.push(nums[i]);
    dfs(i + 1);

    subset.pop();
    dfs(i + 1);
  }

  dfs(0);

  return res;
}
