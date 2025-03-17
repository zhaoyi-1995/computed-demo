/**
  Implement the built-in Omit<T, K> generic without using it.
  实现一个不使用内置 omit<T, K> 的泛型。
  Constructs a type by picking all properties from T and then removing K
  构造一个类型，通过从 T 中挑选所有属性，然后移除 K。

  For example

  interface Todo {
    title: string
    description: string
    completed: boolean
  }
    
  type TodoPreview = MyOmit<Todo, 'description' | 'title'>
  const todo: TodoPreview = {
    completed: false,
  }
*/

/**
 * 实现思路：
 * 1. 定义类型，接收两个泛型参数
 *    1.1 第一个参数 T 基础类型，要进行筛选的类型
 *    1.2 第二个参数 K 排除的字段，需要对其进行限制，必须再 T的字段范围内
 * 2. 进行赋值
 *    2.1 字段名， 循环第一个参数的key，并且满足不属于K
 *    2.2 从T中获取对应的属性类型  
 */

type MyOmit<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P]
}

// 测试用例
interface Todo {
  title: string
  description: string
  completed: boolean
}

// 使用 MyOmit 创建新类型
type TodoPreview = MyOmit<Todo, 'description' | 'title'>

// 验证类型
const todo: TodoPreview = {
  completed: false,
}

