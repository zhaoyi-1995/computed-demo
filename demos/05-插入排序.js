let array = [12, 11, 13, 5, 6];

/**
 *
 * @param {*} arr 需要排序得数组
 * @returns 排序完成得数组
 * 插入排序: 从第二个元素 开始排序, 默认第一个是排序好的, 每次获取元素 向前插入
 *
 * 每次开始排序, 获取当前需要排序得元素保存在临时变量中
 * 开始对比得元素下标 是 当前需要排序得元素得下标 - 1
 * 如果满足  前方有元素 且 对比得元素大于 需要插入得元素
 *      对比得元素向后移动一位
 *  直到不满足, 不满足了说明 需要将元素插入到对比元素之后
 *
 */

function insertionSort(arr) {
  if (arr.length <= 1) return arr;
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
}

console.log("Sorted array is:", insertionSort(array));

// 时间复杂度 最好：O(n)
// 最坏：O(n²)
// 平均：O(n²)
// 空间复杂度 O(1)
