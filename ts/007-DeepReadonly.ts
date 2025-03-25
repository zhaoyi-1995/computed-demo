type DeepReadonly <T extends object> = {
  + readonly [K in keyof T]: (T[K] extends object ? DeepReadonly<T[K]> : T[K])
}

type X = {

  x: {
    a: 1
    b: 'hi'
  }
  y: 'hey'
}

type Expected = {

  readonly x: {
    readonly a: 1
    readonly b: 'hi'
  }
  readonly y: 'hey'
}
type Todo = DeepReadonly<X> // should be same as `Expected`

const a: Todo = {
  x: {
    a: 1,
    b: 'hi'
  },
  y: 'hey'
} 
// a.y = ''
// a.x.a = 2
// a.x = {}