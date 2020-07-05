function copyDefault<T>(value: T): T {
  let user: T;
  return value;
}
console.log(copyDefault({ test: 'Quill' }));

function copy<T extends { name: string }, U extends keyof T>(value: T, key: U): T {
  value[key];
  return value;
}
console.log(copy({ name: 'test' , age: 38 }, 'name'));

class LightDatabase<T extends string | number | boolean> {
  private data: T[] = [];
  add(item: T) {
    this.data.push(item);
  }
  remove(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }
  get() {
    return this.data
  }
}
const stringLightDatabase = new LightDatabase<string>();
stringLightDatabase.add('Apple');
stringLightDatabase.add('Banana');
stringLightDatabase.add('Grape');
stringLightDatabase.remove('Grape');
console.log(stringLightDatabase)
interface TmpDatabase<T> {
  id: number;
  data: T[];
}
const tmpDatabase: TmpDatabase<number> = {
  id: 3,
  data: [32]
}

interface Todo {
  title: string;
  text: string;
}
type Todoable = Partial<Todo> //Utility型の一つ。型のためのもの。すべてオプショナルになる（?あり）
type ReadTodo = Readonly<Todo> //Utility型の一つ。型のためのもの。引数の型をすべて readonly 型にする

const fetchData: Promise<string> = new Promise(resolve => {
  setTimeout(() => {
    resolve('hello')
  }, 3000);
})
fetchData.then(data => {
  data.toUpperCase();
})
const vegetables: Array<string> = ['Tomato', 'Broccoli', 'Asparagus']

interface ResponseData<T extends { message: string } = any> {
  data: T;
  status: number;
}
let GenericsTmp2: ResponseData;

interface Vegetables {
  readonly tomato: string;
  pumpkin?: string;
}
let GenericsTmp3: keyof Vegetables;
type MappedTypes = {
  readonly [P in keyof Vegetables]-?: string
}

type ConditionalTypes = string extends 'tomato' ? number : boolean; // 三項演算子。 tomato 型が string 型に代入できるんであれば number。できないなら boolean。（左から右に代入できるか の三項演算子）
type ConditionalTypesInfer = { tomato: string } extends { tomato: infer R } ? R : boolean; // infer R(Rは何でも良い)
type DistributiveConditionalTypes<T> = T extends 'tomato' ? number : boolean; // 左側がユニオン型の場合
let GenericsTmp4: DistributiveConditionalTypes<'tomato' | 'pumpkin'>
