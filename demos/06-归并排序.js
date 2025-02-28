let array = [4, 2, 5, 1, 6, 3];

/**
 *
 * @param {*} leftArr 需要合并得一个数组
 * @param {*} rightArr 需要合并得另一个数组
 * @returns 合并排序后得数组
 *
 * 合并得时候,就是由唯一一个元素得两个数组合并开始得
 * 谁的元素小 先拿出来放入结果数组依次拿取即可
 */

function merge(leftArr, rightArr) {
  const result = [];
  let lIndex = 0;
  let rIndex = 0;
  while (lIndex < leftArr.length && rIndex < rightArr.length) {
    if (leftArr[lIndex] <= rightArr[rIndex]) {
      result.push(leftArr[lIndex]);
      lIndex++;
    } else {
      result.push(rightArr[rIndex]);
      rIndex++;
    }
  }

  return result.concat(leftArr.slice(lIndex), rightArr.slice(rIndex));
}

/**
 *
 * @param {*} arr 需要排序得数组
 * @returns 排序好的数组
 * 归并排序: 先将数组不断拆分为最小得单元素数组, 然后合并即可
 *
 */
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

console.log("Sorted array is:", mergeSort(array));
/**
 * 时间复杂度:
 * 分解阶段：
 * 每次将数组分成两半，递归深度为 log₂(n)。
 * 合并阶段：
 *    每一层合并需要比较和移动所有元素，总共 n 个元素。
 *    总共有 log₂(n) 层，每层时间复杂度为 O(n)
 */
// 空间复杂度为 O(n)
