// 使用JavaScript实现顺序搜索
// 测试数据

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function sequentialSearch(arr, item) {
  let res = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      res = i;
      break;
    }
  }
  return res;
}
console.log(sequentialSearch(arr, 5)); // 输出: 4
console.log(sequentialSearch(arr, 10)); // 输出: -1
