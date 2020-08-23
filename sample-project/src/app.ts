import { Item } from './item';
var elem = document.getElementById('output');
var aBook = new Item('はじめてのTypeScript', 2980);
aBook.say(elem);

// 【↓演習問題】



// 【↓基礎を復習】
// ## プリミティブ型
// const a: number = 3;
// const b: string = a;
// const a: null = null;
// const b: string = a;


// ## リテラル型
// const a: 'foo' = 'foo';
// const b: 'bar' = 'foo';
// const a: 'foo' = 'foo';
// const b: string = a;
// let a = 'foo';
// const b: string = a;
// const c: 'foo' = a;

// ## オブジェクト型
// interface MyObj {
// 	foo: string;
// 	bar: number;
// }

// const a: MyObj = {
// 	foo: 'test',
// 	bar: 3,
// }

// // ## 配列型
// // ## 関数型
// // ## void型
// // ## any型
// // ## クラスの型
// // ## ジェネリクス
// // ## タプル型
// const foo: [string, number] = ['foo', 5];
// const str: string = foo[0];
// function makePair(x: string, y: number): [string, number] {
//   return [x, y];
// }
// const unit: [] = [];

// // ## union型（hoge | fuga）
// let value: string | number = 'foo';
// value = 100;
// value = 'bar';
// // エラー: Type 'true' is not assignable to type 'string | number'.
// value = true;

// // ## never型

// // ## intersection型（hoge & fuga）
// interface Hoge {
//   foo: string;
//   bar: number;
// }
// interface Piyo {
//   foo: string;
//   baz: boolean;
// }

// const obj: Hoge & Piyo = {
//   foo: 'foooooooo',
//   bar: 3,
//   baz: true,
// };


// // // ?: 省略可能なプロパティ
// // // readonly → 再代入できなくなる（const のプロパティ版）
// // interface MyObj {
// //   readonly foo: string;
// // }
// // interface MyObj2 {
// //   foo: string;
// // }
// // const obj: MyObj = { foo: 'Hey!', };
// // const obj2: MyObj2 = obj;
// // obj2.foo = 'Hi';
// // console.log(obj.foo); // 'Hi'

// // // インデックスシグネチャ
// // // 関数シグネチャ
// // // new シグネチャ
// // // asによるダウンキャスト
// // // readonlyな配列とタプル
// // //// arr.push はできない
// // // as const
// // var foo2 = '123' as const; // → string 型 ではなく、 `123` 型 となる. readonly も付与される
// // weak type
// // unknown あらゆることが制限されている型

// // ↓ここから難易度高い
// // typeof型 → その変数の型を得ることができる
// // let foo = 'str';
// // type FooType = typeof foo;
// // const str: FooType = 'abcdef';

// // keyof型
// interface MyObj {
// 	foo: string;
// 	bar: number;
// }
// let key: keyof MyObj;
// key = 'foo';
// key = 'bar';
// key = 'baz';

// // Lookup Types T[K]
// interface MyObj {
// 	foo: string;
// 	bar: number;
// }
// const str: MyObj['foo'] = '123'
// // Mapped Types
// // Conditional Types
