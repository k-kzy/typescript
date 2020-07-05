// import axios, { shuffle } from 'axios'
// axios.get('https://fooapi.com')
// import _ from 'lodash';
console.log(_.shuffle([1, 2, 3, 4]));
namespace myApp {
  const hello = 'hello in namespace';
  export const name = 'Quill';
  export interface Nameable {
    name: string
  }
}
let nameable: myApp.Nameable;

// let name: string;
// // function name() {}
// // enum name {}
// // class name {}
// interface name {}
// namespace name {}