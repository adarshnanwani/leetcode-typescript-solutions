// 1091. Shortest Path in Binary Matrix
// Difficulty: Medium
// Link: https://leetcode.com/problems/shortest-path-in-binary-matrix/description/
// Date: 17 Oct 2025

function shortestPathBinaryMatrix(grid: number[][]): number {
  const ROWS: number = grid.length;
  const COLS: number = grid[0].length;
  if (grid[0][0] || grid[ROWS - 1][COLS - 1]) {
    return -1;
  }
  const queue: [number, number][] = [];
  const visited = new Set<string>();
  queue.push([0, 0]);
  visited.add("0,0");
  const directions = [
    [0, 1],
    [0, -1],
    [-1, 0],
    [1, 0],
    [1, 1],
    [-1, -1],
    [1, -1],
    [-1, 1],
  ];

  let pathLength = 1;

  while (queue.length > 0) {
    const queueSize = queue.length;
    for (let i = 0; i < queueSize; i++) {
      const [r, c] = queue.shift()!;
      if (r === ROWS - 1 && c === COLS - 1) {
        return pathLength;
      }

      for (let [dr, dc] of directions) {
        const nr = dr + r;
        const nc = dc + c;

        if (
          Math.min(r, c, nr, nc) < 0 ||
          Math.max(r, nr) >= ROWS ||
          Math.max(c, nc) >= COLS ||
          grid[nr][nc] === 1 ||
          visited.has(`${nr},${nc}`)
        ) {
          continue;
        }
        queue.push([nr, nc]);
        visited.add(`${nr},${nc}`);
      }
    }
    pathLength += 1;
  }

  return -1;
}
