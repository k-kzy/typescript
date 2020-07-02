let hasValue = true
let count = 111
let float = 3.14;
let negative = -0.12;
let single = 'Hello';
let double = "Hello";
let back = `hello`;
let hello: string;
hello = 'hello'

const person = {
  name: {
    first: 'Jack',
    last: 'Smith'
  },
  age: 21
}

const fruits: string[] = ['Apple', 'Banana', 'Grape']
const book: [string, number, boolean] = ['business', 1500, false]

enum CoffeeSize {
  SHORT,
  TALL,
  GRANDE,
  VENTI,
}

const coffee = {
  hot: true,
  size: CoffeeSize.TALL
}
coffee.size = CoffeeSize.SHORT
console.log(CoffeeSize.SHORT)

let anything: any = true
anything = 'hello'
anything = ['hello', 33, true]
anything = {}
anything.fjiafjaj = 'oayrogaerg'
let banana = 'banana'
banana = anything

let unionType: number | string = 10
let unionTypes: (number | string)[] = [21, 'hello']

type clothSize = 'small' | 'medium' | 'large'
const apple = 'apple'
let clothSize: clothSize = 'large' // enum & literal
const cloth: {
  color: string;
  size: clothSize
} = {
  color: 'white',
  size: 'medium'
}

function add(num1: number, num2: number): number {
  return num1 + num2
}
function sayHello(): void {
  // console.log('hello!')
}

// console.log(sayHello())
let tmp: undefined = undefined

const anotherAdd: (n1: number, n2: number) => number = add;
const doubleNumber: (num: number) => number = num => num * 2 // {return} を省略できる

function doubleAndHandle(num: number, cb: (num: number) => void): void {
  const doubleNum = cb(num * 2)
  console.log(doubleNum)
}
doubleAndHandle(21, doubleNum => {
  return doubleNum
})

let unknownInput: unknown;
let anyInput: any;
let text: string;
unknownInput = 'hello'
unknownInput = 21
unknownInput = true
text = anyInput
if (typeof unknownInput === 'string') {
  text = unknownInput
}

// 一般的に error 用の共通関数を用意する
function error(message: string) {
  throw new Error(message)
}
console.log(error('This is an error'))