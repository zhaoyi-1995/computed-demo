var arr = [5, 3, 7, 6, 2, 9, 1];

function quickSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  const midVal = arr.splice(mid, 1);
  const left = [];
  const right = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= midVal) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(midVal, quickSort(right));
}

console.log(quickSort(arr)); // 输出: [2, 3, 5, 6, 7, 9]

// 时间复杂度 O(nlogn)
// 空间复杂度 O(logn)
