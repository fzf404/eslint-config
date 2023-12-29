let number = 0

const count = {}

Object.defineProperty(count, 'number', {
  get() {
    console.log(`getting number!`)
    return number
  },
  set(value) {
    console.log(`setting number!`)
    number = value
  },
})

count.number++

console.log(count.number)
