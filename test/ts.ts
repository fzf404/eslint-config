const count = { number: 0 }

const proxy = new Proxy(count, {
  get: function (target: { number: number }, property: string, receiver: any) {
    console.log(`getting ${property}!`)
    return Reflect.get(target, property, receiver)
  },
  set: function (
    target: { number: number },
    property: string,
    value: number,
    receiver: any
  ) {
    console.log(`setting ${property}!`)
    return Reflect.set(target, property, value, receiver)
  },
})

proxy.number++

console.log(proxy.number)
