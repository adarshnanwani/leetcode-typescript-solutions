class Matrix {
  shortestPath(grid: number[][]): number {
    const ROWS = grid.length;
    const COLS = grid[0].length;
    const directions = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ];
    const visited = new Set<string>();
    const queue = [[0, 0]];
    visited.add("0,0");

    let length = 0;
    while (queue.length > 0) {
      const queueLength = queue.length;
      for (let i = 0; i < queueLength; i++) {
        const coords = queue.shift();
        const r = coords![0];
        const c = coords![1];
        if (r === ROWS - 1 && c === COLS - 1) {
          return length;
        }

        for (let [dr, dc] of directions) {
          const nr = dr + r;
          const nc = dc + c;

          if (
            nr < 0 ||
            nr === ROWS ||
            nc < 0 ||
            nc === COLS ||
            grid[nr][nc] === 1 ||
            visited.has(`${nr},${nc}`)
          ) {
            continue;
          }
          queue.push([nr, nc]);
          visited.add(`${nr},${nc}`);
        }
      }
      length += 1;
    }
    return -1;
  }
}
