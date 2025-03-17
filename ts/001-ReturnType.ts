// Implement the built-in ReturnType generic without using it.

/**
  const fn = (v: boolean) => {
    if (v)
      return 1
    else
    return 2
  } 
*/

// For example

// type a = MyReturnType // should be &quot;1 | 2&quot;


/**
 * 题目解读：
 * 1. 实现一个自定义的类型工具 MyReturnType
 * 2. 功能等同于 TypeScript 内置的 ReturnType 泛型，但不能直接使用 ReturnType
 * 3. 它需要推断出一个函数的返回值类型
 */

/**
 * 实现思路：
 * 1. TypeScript 的类型系统支持条件类型和类型推断（infer 关键字）
 * 2. 我们可以定义一个泛型类型，接收一个函数类型 T
 * 3. 使用 infer 推断函数的返回值类型
 * 4. 如果传入的 T 不是函数类型，则返回一个合理的默认类型（比如 never）
 */
type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never

/**
 * Retyrntype 的使用
 * ReturnType 是一个内置的条件类型，用于提取函数类型的返回值类型。我们需要自己实现类似的功能
 */
// 1. 获取函数返回值类型  number
function add(a: number, b: number): number {
  return a + b;
}
type AddReturn = ReturnType<typeof add>;
type MyAddReturn = MyReturnType<typeof add>

// 2. 获取联合类型的返回值 1 | 'hello'
const fn = (v: boolean) => {
  if (v) return 1;
  else return "hello";
};
type FnReturn = ReturnType<typeof fn>;
type MyFnReturn = MyReturnType<typeof fn>;


// 3. 箭头函数 复杂类型 { id: number; name: string }
type User = { id: number; name: string };
const getUser = (): User => ({ id: 1, name: "Alice" });
type UserReturn = ReturnType<typeof getUser>;

// 4. 泛型 函数 返回值 unknown
function identity<T>(value: T): T {
  return value;
}
type IdentityReturn = ReturnType<typeof identity>;
// 5. 非函数返回值
// type NotAFunction = ReturnType<number>;

/**
 * Retyrntype 的实际应用场景
 * 1. 类型推断：当你需要从现有函数中提取返回值类型时，ReturnType 非常有用
 * 2. 工具类型组合：可以和其他类型工具（如 Parameters）结合使用
 */
function greet(name: string, age: number): string {
  return `Hello ${name}, you are ${age}`;
}
type GreetParams = Parameters<typeof greet> //  [name: string, age: number]
type GreetReturn = ReturnType<typeof greet> // string


