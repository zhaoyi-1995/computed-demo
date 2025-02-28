let arr = [5, 3, 8, 4, 6];

/**
 *
 * @param {*} arr 需要排序得数组
 * @returns 排序完成得数组
 *
 * 外层控制总循环数
 * 内层控制每次循环  比较得次数
 * 第一次 确定出最后一位
 * 第二次 确定出倒数第二位 以此类推
 * ....
 * 每次比较都是 相邻两位得比较
 */
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

console.log(bubbleSort(arr)); // 输出：[3, 4, 5, 6, 8]

// 时间复杂度: O(n2)
// 空间复杂度: O(n)
