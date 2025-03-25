/*
实现类似Vue的类型支持的简化版本。

  通过提供一个函数`SimpleVue`（类似于`Vue.extend`或`defineComponent`），它应该正确地推断出 computed 和 methods 内部的`this`类型。

  在此挑战中，我们假设`SimpleVue`接受只带有`data`，`computed`和`methods`字段的Object作为其唯一的参数，

  - `data`是一个简单的函数，它返回一个提供上下文`this`的对象，但是你无法在`data`中获取其他的计算属性或方法。

  - `computed`是将`this`作为上下文的函数的对象，进行一些计算并返回结果。在上下文中应暴露计算出的值而不是函数。

  - `methods`是函数的对象，其上下文也为`this`。函数中可以访问`data`，`computed`以及其他`methods`中的暴露的字段。 `computed`与`methods`的不同之处在于`methods`在上下文中按原样暴露为函数。

  `SimpleVue`的返回值类型可以是任意的。
  const instance = SimpleVue({
    data() {
      return {
        firstname: 'Type',
        lastname: 'Challenges',
        amount: 10,
      }
    },
    computed: {
      fullname() {
        return this.firstname + ' ' + this.lastname
      }
    },
    methods: {
      hi() {
        alert(this.fullname.toLowerCase())
      }
    }
  })
*/


type DataFn<T> = () => T  // data 是一个函数类型
type ComputedFn<T> = (this: any) => T // 计算属性函数类型
type MethodFn = (this: any, ...args: any[]) => any  // 函数类型 

// 定义选项接口
interface Options<
  D extends Record<string, any>,
  C extends Record<string, ComputedFn<any>>,
  M extends Record<string, MethodFn>
> {
  data: DataFn<D>,
  computed?: C,
  methods?: M 
}

// 转换 computed 类型
type ComputedValues<C extends Record<string, ComputedFn<any>>> = {
  [K in keyof C]: ReturnType<C[K]>
}


function SimpleVue<
  D extends Record<string, any>,
  C extends Record<string, ComputedFn<any>>,
  M extends Record<string, MethodFn>
> (
  options: Options<D, C, M> & ThisType<D & ComputedValues<C> & M>
): any {
  return {} as any
}

const instance = SimpleVue({
  data: () => {
    return {
      firstName: 'hahah',
      secondName: '你好',
      amount: 10
    }
  },
  computed: {
    fullname() {
      return this.firstName + this.secondName
    }
  },
  methods: {
    getName: () => {
      alert(this.fullname())
    }
  }
})

console.log(instance)



