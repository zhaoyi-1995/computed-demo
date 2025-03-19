/*
  Implement a generic GetReadonlyKeys<T> that returns a union of the readonly keys of an Object.

  For example
  interface Todo {
      readonly title: string
      readonly description: string
      completed: boolean

  }
  type Keys = GetReadonlyKeys<Todo> // expected to be "title" | "description"
*/
type IsEqual<A, B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : false

/**
 * 解题思路：
 * 1. 循环拿出来每一个 接口的 key  即  K in T
 * 2. 将 每一个key 进行 readonly 对比
 *    2.1 获取每一个 原始的 key 类型 如 {xxx: type}
 *    2.2 获取每一个 原始的 key 类型， 并将其 readonly 处理 如 Readonly<{xxx: type}>
 *    2.3 对比 原始类型 和 readonly 之后的 类型  看是否 一致
 * 3. 接口 key 断言 为 对比的结果
 *    3.1 如果 断言结果 继承 true  则 保留该key
 *    3.2 如果 断言结果 继承 false  则 不保留该key
 * 4. 对获取到的接口  keyof 得到所有 key 的联合类型  
 * 
 * 
*/
type GetReadonlyKeys<T> = keyof {
  [K in keyof T as IsEqual<Pick<T, K>, Readonly<Pick<T, K>>> extends true ? K : never]: T[K]
} 


interface Todo {
  readonly title: string
  readonly description: string
  completed: boolean

}
type Keys = GetReadonlyKeys<Todo>