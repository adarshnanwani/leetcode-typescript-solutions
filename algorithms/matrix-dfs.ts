class Matrix {
  dfs(
    grid: number[][],
    r: number,
    c: number,
    rows: number,
    cols: number,
    visited: Set<string>
  ) {
    if (
      r === rows ||
      c === cols ||
      Math.min(r, c) < 0 ||
      visited.has(`${r}${c}`) ||
      grid[r][c] === 1
    ) {
      return 0;
    }

    if (r === rows - 1 && c === cols - 1) {
      return 1;
    }
    let count = 0;
    visited.add(`${r}${c}`);

    count += this.dfs(grid, r - 1, c, rows, cols, visited);
    count += this.dfs(grid, r + 1, c, rows, cols, visited);
    count += this.dfs(grid, r, c - 1, rows, cols, visited);
    count += this.dfs(grid, r, c + 1, rows, cols, visited);

    visited.delete(`${r}${c}`);
    return count;
  }
  countPaths(grid: number[][]): number {
    const rows = grid.length;
    const cols = grid[0].length;
    const visited = new Set<string>();

    return this.dfs(grid, 0, 0, rows, cols, visited);
  }
}
