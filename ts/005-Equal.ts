// type Equal<A, B> = A extends B ? (B extends A ? true : false) : false
// type Equal<A, B> = [A, B] extends [B, A] ? true : false
type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : false


type User1 = {
  name ?: string
  age: number
  address: string
}

type User2 = {
  name?: string
} & {
  age: number
  address: string
}

// type Y1 = Equal<string, string> // true
// type Y2 = Equal<string, number> // false
// type Y3 = Equal<{name: string}, {name: string}> // true
// type Y4 = Equal<{name: string}, {age: number}> // false
// type Y5 = Equal<{name: string}, {name?: string}> // false
// type Y6 = Equal<User1, User2> // true

/*
  当Equal 单纯的进行比较时
  type Equal<A, B> = A extends B ? (B extends A ? true : false) : false
  type Y7 = Equal<true, boolean>  最终的结果是 boolean
  
  boolean 相当于  true | false
  在ts当中，遇到联合类型的时候，会将其打散， 称之为分布式类型条件（Distributive Conditional Type），也就是分别进行判断
  true  和 true 进行比较
  true 和 false 进行比较
  最终 为 boolean
  但是我们期望的结果时 false
  为了姐姐这一问题，我们需要将 类型 使用 [] 括起来
  type Equal<A, B> = [A] extends [B] ? ([B] extends [A] ? true : false) : false
  这种太麻烦 简化后：
  type Equal<A, B> = [A, B] extends [B, A] ? true : false
*/ 
// type Y7 = Equal<true, boolean> // false

// type Y8 = Equal<1 | 2, 1> // false


/*
  type Equal<A, B> = [A, B] extends [B, A] ? true : false 
  这种方式较为宽松，我们需要更为严格的校验方式才能规避问题
  type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : false
*/ 


type Y9 = Equal<any, string> // false
type Y10 = Equal<{name: string}, {readonly name: string}> // false