// 39. Combination Sum
// Difficulty: Medium
// Link: https://leetcode.com/problems/combination-sum/description/
// Date: 11 Oct 2025

// Note - Time Limit Exceeds. Need to revisit this.

function combinationSum(candidates: number[], target: number): number[][] {
  const res: number[][] = [];
  const subset: number[] = [];

  function dfs(i: number) {
    let currentSum = subset.reduce((num, sum) => num + sum, 0);

    if (i >= candidates.length) {
      if (currentSum === target) {
        res.push(subset.slice());
      }
      return;
    }

    subset.push(candidates[i]);
    currentSum += candidates[i];

    if (currentSum < target) {
      dfs(i);
    } else {
      dfs(i + 1);
    }

    subset.pop();
    dfs(i + 1);
  }

  dfs(0);

  return res;
}
