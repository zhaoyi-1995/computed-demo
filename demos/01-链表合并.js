class ListNode {
  constructor(val, next = null) {
    this.val = val
    this.next = next
  }
}

// 创建链表
function createLinkedList (arr) {
  if(!arr || arr.length === 0) {
    return null
  }
  const head = new ListNode(arr[0])
  let currentNode = head

  for(let i = 1; i < arr.length; i++) {
    const newNode = new ListNode(arr[i])
    currentNode.next = newNode
    currentNode = newNode
  }

  return head
}

// 创建链表实例
const l1 = createLinkedList([1])
const l2 = createLinkedList([0])
// const l3 = createLinkedList([2, 6])
// 获取链表数组
const lists = [l1, l2]
/**
 * ------------------------------以上为数据源-------------------
 */

// 定义最小堆
class MinHeap {
  constructor () {
    this.heap = []
  }

  size() {
    return this.heap.length
  }

  // 左节点下标
  lIndex (index) {
    return index * 2 + 1
  }
  // 右节点下标
  rIndex (index) {
    return  index * 2 + 2
  }
  // 父节点下标
  // fIndex(index) {
  //   return Math.floor((index - 1) / 2)
  // }
  fIndex(index) {
    return (index - 1) >> 1
  }
  // 是否为空
  isEmpty() {
    return this.heap.length === 0
  }

  // 交换堆中得两个元素
  swap(i, j) {
    const temp = this.heap[i]
    this.heap[i] = this.heap[j]
    this.heap[j] = temp
  }

  // 上浮操作--- 追加元素
  shiftUp(index) {
    if(index === 0) {
      return
    }
    const parentIndex = this.fIndex(index)
    if(this.heap[parentIndex] && this.heap[index].val < this.heap[parentIndex].val) {
      this.swap(index, parentIndex)
      this.shiftUp(parentIndex)
    }

  }
  // 下沉操作
  shiftDown(index) {
    const leftIndex = this.lIndex(index)
    const rightIndex = this.rIndex(index)
    if(this.heap[leftIndex] && this.heap[index].val > this.heap[leftIndex].val) {
      this.swap(leftIndex, index)
      this.shiftDown(leftIndex)
    }
    if(this.heap[rightIndex] && this.heap[index].val > this.heap[rightIndex].val) {
      this.swap(rightIndex, index)
      this.shiftDown(rightIndex)
    }
  }

  insert(val) {
    this.heap.push(val)
    this.shiftUp(this.size() - 1)
  }

  pop() {
    if(this.size() === 1) return this.heap.shift()
    const top = this.heap[0]
    this.heap[0] = this.heap.pop()
    this.shiftDown(0)
    return top
  }
  
  peek() {
    return this.heap[0]
  }

}

// 合并链条
const mergeKLists = function (lists) {
  // 1. 创建 头节点
  const res = new ListNode(0)
  // 2. 创建移动指针
  let p = res
  // 3. 创建最小堆
  const heap = new MinHeap()
  // 4. 最小堆推入元素
  lists.forEach((item) => {
    if(item) heap.insert(item)
    console.log(JSON.stringify(heap.heap))
  })
  // 5. 获取最小堆得堆顶元素
  while(heap.size()) {
    const topNode = heap.pop()
    p.next = topNode
    p = topNode
    if(topNode.next) heap.insert(topNode.next)
  } 
  return res.next
}

// 合并链表为一个链表
const list = mergeKLists(lists)
console.log(list, 'res-------')