/*
  Implement the built-in Pick<T, K> generic without using it.
  实现一个不使用内置 Pick<T, K> 的泛型。
  
  Constructs a type by picking the set of properties K from T
  构造一个类型，通过从 T 中挑选所有属性，然后选择 K。

  For example:
*/

type MyPick<T, K extends keyof T> = {
  [P in keyof T as P extends K ? P : never]: T[P]
}

interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPick = MyPick<Todo, 'title' | 'completed'>
const todoPick: TodoPick = {
  title: 'Clean room',
  completed: false,
}
