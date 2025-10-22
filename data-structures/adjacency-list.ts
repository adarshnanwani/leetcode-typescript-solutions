class Graph {
  public graph: Map<number, number[]>;

  constructor() {
    this.graph = new Map<number, number[]>();
  }

  addEdge(src: number, dst: number) {
    if (!this.graph.has(src)) {
      this.graph.set(src, []);
    }
    if (!this.graph.has(dst)) {
      this.graph.set(dst, []);
    }
    if (src !== dst) {
      this.graph.set(src, [...this.graph.get(src)!, dst]);
    }
  }

  removeEdge(src: number, dst: number) {
    if (!this.graph.has(src) || !this.graph.has(dst)) {
      return false;
    }
    this.graph.set(
      src,
      this.graph.get(src)!.filter((e) => e !== dst)
    );
    return true;
  }

  hasPathByDFS(src: number, dst: number, visited: Set<number>) {
    if (src === dst) {
      return true;
    }

    visited.add(src);
    for (let edge of this.graph.get(src) ?? []) {
      if (!visited.has(edge) && this.hasPathByDFS(edge, dst, visited)) {
        return true;
      }
    }
    return false;
  }

  hasPathByBFS(src: number, dst: number) {
    if (src === dst) {
      return true;
    }
    const queue = [src];
    const visited = new Set();

    while (queue.length > 0) {
      const curr = queue.shift();
      if (curr === dst) {
        return true;
      }
      visited.add(curr);
      const neighbors = this.graph.get(curr!);
      for (let n of neighbors ?? []) {
        if (!visited.has(n)) {
          visited.add(n);
          queue.push(n);
        }
      }
    }
    return false;
  }

  hasPath(src: number, dst: number): boolean {
    const visited = new Set<number>();
    // return this.hasPathByBFS(src, dst);
    return this.hasPathByDFS(src, dst, visited);
  }
}
