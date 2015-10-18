// 994. Rotting Oranges
// Difficulty: Medium
// Link: https://leetcode.com/problems/rotting-oranges/description/
// Date: 18 Oct 2025

function orangesRotting(grid: number[][]): number {
  const ROWS: number = grid.length;
  const COLS: number = grid[0].length;
  let freshFruitsCount: number = 0;
  let rottenFruitsQueue: [number, number][] = [];
  const visited = new Set<string>();
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (grid[r][c] === 1) {
        freshFruitsCount += 1;
      }
      if (grid[r][c] === 2) {
        rottenFruitsQueue.push([r, c]);
      }
    }
  }

  if (freshFruitsCount === 0) {
    return 0;
  }
  if (rottenFruitsQueue.length === 0) {
    return -1;
  }

  let minutedElapsed = 0;
  while (rottenFruitsQueue.length > 0) {
    if (freshFruitsCount === 0) {
      return minutedElapsed;
    }
    const rottenFruitsQueueSize = rottenFruitsQueue.length;

    for (let i = 0; i < rottenFruitsQueueSize; i++) {
      const [r, c] = rottenFruitsQueue.shift()!;

      for (let [dr, dc] of directions) {
        const nr = dr + r;
        const nc = dc + c;

        if (
          Math.min(r, c, nr, nc) < 0 ||
          Math.max(r, nr) >= ROWS ||
          Math.max(c, nc) >= COLS ||
          grid[nr][nc] === 0 ||
          grid[nr][nc] === 2 ||
          visited.has(`${nr},${nc}`)
        ) {
          continue;
        }

        grid[nr][nc] = 2;
        rottenFruitsQueue.push([nr, nc]);
        freshFruitsCount -= 1;
        visited.add(`${nr},${nc}`);
      }
    }
    minutedElapsed += 1;
  }

  return -1;
}
