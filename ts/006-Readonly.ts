/*
Implement the built-in Readonly<T> generic without using it.

Constructs a type with all properties of T set to readonly, meaning the properties of the constructed type cannot be reassigned.

For example:
*/
type MyReadonly<T extends object> = {
  readonly [K in keyof T]: T[K]
}

interface Todo {
  title: string
  description: string
}

const todo: MyReadonly<Todo> = {
  title: "Hey",
  description: "foobar"
}

// todo.title = "Hello" // Error: cannot reassign a readonly property
// todo.description = "barFoo" // Error: cannot reassign a readonly property

/*
Implement a generic MyReadonly2<T, K> which takes two type argument T and K.

K specify the set of properties of T that should set to Readonly. When K is not provided, it should make all properties readonly just like the normal Readonly<T>.

*/

// type MyReadonly2<T extends object, S extends keyof T> = {
//   [K in keyof T as K extends S ? never: K] : T[K]
// } & {
//   readonly [K in keyof T as K extends S ? K: never] : T[K]
// }

// type MyReadonly2<T extends object, S extends keyof T> = Omit<T, S> & Readonly<T>

// type MyReadonly2<T extends object, S extends keyof T> = Omit<T, S> & Readonly<T>

type MyReadonly2<T extends object, S extends keyof T> = {
  readonly [K in S]: T[K]
} & {
  [K in keyof T as K extends S ? never : K] : T[K]
}



interface Todo1 {
  title: string
  description: string
  completed: boolean
}

const todo1: MyReadonly2<Todo1, 'title' | 'description'> = {
  title: "Hey",
  description: "foobar",
  completed: false,
}

todo1.title = "Hello" // Error: cannot reassign a readonly property
todo1.description = "barFoo" // Error: cannot reassign a readonly property
todo1.completed = true // OK