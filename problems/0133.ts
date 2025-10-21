// 133. Clone Graph
// Difficulty: Medium
// Link: https://leetcode.com/problems/clone-graph/description/
// Date: 21 Oct 2025

// Definition for _Node.
class _Node {
  public val: number;
  public neighbors: _Node[];

  constructor(val?: number, neighbors?: _Node[]) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
  }
}

function dfsClone(
  node: _Node | null,
  visited: Map<_Node, _Node>
): _Node | null {
  if (!node) {
    return null;
  }
  if (visited.has(node)) {
    return visited.get(node)!;
  }
  const copy = new _Node(node.val, []);

  visited.set(node, copy);
  for (let nei of node.neighbors) {
    copy.neighbors.push(dfsClone(nei, visited)!);
  }

  return copy;
}

function bfsClone(node: _Node | null): _Node | null {
  if (!node) {
    return null;
  }
  const clone = new Map();
  clone.set(node, new _Node(node.val));
  const queue = [node];

  while (queue.length > 0) {
    const current = queue.shift();

    if (current) {
      for (let nei of current.neighbors) {
        if (!clone.has(nei)) {
          clone.set(nei, new _Node(nei.val));
          queue.push(nei);
        }
        clone.get(current).neighbors.push(clone.get(nei));
      }
    }
  }

  return clone.get(node);
}

function cloneGraph(node: _Node | null): _Node | null {
  const visited = new Map<_Node, _Node>();
  return dfsClone(node, visited); // with DFS
  // return bfsClone(node); // with BFS
}
