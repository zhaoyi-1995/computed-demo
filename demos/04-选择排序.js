let arr = [5, 3, 2, 4, 1];
/**
 *
 * @param {*} arr 数组
 * @returns 排序完成得数组
 * 外层控制要处理哪个位置得数据
 *    假设当前位置为最小值
 * 内层循环 在剩余得 数据中 找到最小值得下标
 *
 * 和外层当前位置 得数据做对调.
 */
function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (i !== minIndex) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
}

console.log(selectionSort(arr)); // 输出: [1, 2, 3, 4, 5]

// 时间复杂度  O(n2)
// 空间复杂度 O(1)
