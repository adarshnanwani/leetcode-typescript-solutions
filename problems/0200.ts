// 200. Number of Islands
// Difficulty: Medium
// Link: https://leetcode.com/problems/number-of-islands/description/
// Date: 17 Oct 2025

function numIslands(grid: string[][]): number {
  if (grid.length === 0) {
    return 0;
  }
  const ROWS: number = grid.length;
  const COLS: number = grid[0].length;
  let islandCount: number = 0;

  function dfs(r: number, c: number): void {
    if (r < 0 || c < 0 || r >= ROWS || c >= COLS || grid[r][c] === "0") {
      return;
    }
    grid[r][c] = "0";

    dfs(r + 1, c);
    dfs(r - 1, c);
    dfs(r, c + 1);
    dfs(r, c - 1);
  }

  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (grid[r][c] === "1") {
        islandCount += 1;
        dfs(r, c);
      }
    }
  }

  return islandCount;
}
