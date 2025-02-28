const data = {
  A: ["B", "C"],
  B: ["D", "E"],
  C: ["G", "H"],
  D: ["C"],
  E: ["B"],
  G: ["A"],
};

function deepMap(data, start) {
  const map = new Set();

  function dfs(node) {
    if (map.has(node)) return;
    map.add(node);
    console.log(node);
    if (data[node]) {
      for (const nexNode of data[node]) {
        dfs(nexNode);
      }
    }
  }
  dfs(start);
}

deepMap(data, "A");
console.log("-----------------------------");
function bfsPriorityQueue(data, start) {
  const queue = [start];
  const visited = new Set();
  while (queue.length > 0) {
    const curNode = queue.shift();
    if (visited.has(curNode)) continue;
    visited.add(curNode);
    console.log(curNode);
    if (data[curNode]) {
      for (const item of data[curNode]) {
        queue.push(item);
      }
    }
  }
}
bfsPriorityQueue(data, "G");

// 时间复杂度： O(V + E)
// 空间复杂度： O(n)
