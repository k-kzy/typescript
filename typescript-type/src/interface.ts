// type addFunc = (num1: number, num2: number) => number.
interface addFunc {
  (num1: number, num2: number): number;
}

let addFunc: addFunc
addFunc = (n1: number, n2: number) => {
  return n1 + n2
}

interface Nameable {
  name?: string,
  nickName?: string
}
const nameable: Nameable = {
  name: 'Quill'
}

interface Human extends Nameable {
  age: number
  greeting?(message?: string): void
}
class Developer implements Human {
  name?: string
  nickName?: string
  constructor(public age: number, public experience: number, public initName?: string) {
    if (initName) {
      this.name = initName
    }
  }
  greeting(message?: string) {
    console.log(message)
  }
}
const tmpDeveoper = {
  name: 'Quill',
  age: 38,
  greeting(message: string) {
    console.log(message)
  }
}
const user: Human = new Developer(38, 3)
