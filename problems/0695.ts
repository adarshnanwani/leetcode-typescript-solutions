// 695. Max Area of Island
// Difficulty: Medium
// Link: https://leetcode.com/problems/max-area-of-island/description/
// Date: 17 Oct 2025

function maxAreaOfIsland(grid: number[][]): number {
  const ROW_COUNT = grid.length;
  const COL_COUNT = grid[0].length;
  let maxArea = 0;

  function traverse(r: number, c: number): number {
    if (
      r < 0 ||
      r >= ROW_COUNT ||
      c < 0 ||
      c >= COL_COUNT ||
      grid[r][c] === 0
    ) {
      return 0;
    }
    grid[r][c] = 0;

    let localArea = 1;
    localArea += traverse(r + 1, c);
    localArea += traverse(r - 1, c);
    localArea += traverse(r, c + 1);
    localArea += traverse(r, c - 1);
    return localArea;
  }

  for (let r = 0; r < ROW_COUNT; r++) {
    for (let c = 0; c < COL_COUNT; c++) {
      if (grid[r][c] === 1) {
        const area = traverse(r, c);
        maxArea = Math.max(maxArea, area);
      }
    }
  }

  return maxArea;
}
