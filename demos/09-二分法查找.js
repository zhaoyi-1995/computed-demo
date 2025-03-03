// 使用JavaScript实现二分搜索（二分查找）

// 使用示例：

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const target = 7;

// function binarySearch(array, target) {
//   let l = 0;
//   let r = array.length - 1;
//   let i = -1;
//   function search(l, r) {
//     let mid = Math.floor((r - l) / 2) + l;
//     if (mid < 0) {
//       return;
//     }
//     if (array[mid] > target) {
//       search(l, mid);
//     } else if (array[mid] < target) {
//       search(mid, r);
//     } else {
//       i = mid;
//     }
//   }

//   search(l, r);
//   return i;
// }

function binarySearch(arr, target) {
  let min = 0;
  let max = arr.length - 1;
  while (min <= max) {
    const mid = Math.floor((min + max) / 2);
    const midVal = arr[mid];
    if (midVal === target) {
      return mid;
    } else if (midVal > target) {
      max = mid - 1;
    } else {
      min = mid + 1;
    }
  }
  return -1;
}

console.log(binarySearch(array, target)); // 输出：6
