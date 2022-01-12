// use 'let' for variables, use 'const' for constants
// const shouldn't get a new value, throws an error if change is attempted

let wallet = 0;
const bills = 10;

// Arrow Functions
// no more issues with 'this'
const myFnc = (arg) => {
    console.log("Function Body Goes Here");
    console.log(arg);
}

// Single Line, Single Arg can ommit (), omit return
// const multiply = number => number * 2;

// Imports and Exports (Modules)
// Note that default will be the ONLY export when used

// export default multiply

// named export
// export const multiply = number => number * 2;

// Import on a DIFFERENT file
// import {multiply} from 'playground.js'

// Classes
class Human {
    // constructor(){
        // this.gender = 'female';
    // }

    gender = 'female';

    printGender = () => {
        console.log(this.gender);
    }
}

// Inheritence
class Person extends Human{
    // simillar to init in ruby
    // constructor(){
    //     super();
    //     this.name = 'Max';
    //     this.gender = "male";
    // }

    name = 'Max';
    gender = "male";

    printName = () => {
        console.log(this.name)
    }
}

const myPerson = new Person();
myPerson.printName();
myPerson.printGender();

// Modern syntax for classes, properties and methods
// No more constructor, use arrow functions for methods
// See above lines

// Spread and Rest Operators
// spread: takes all from old array/obj and insert into a new one
const oldArray = [1,1,1]
const newArray = [...oldArray, 2, 2]
console.log(newArray)

// ...args indicates 1 or more args
function sortArgs(...args){
    return args.sort();
}

// Destructuring
// pull out single property and put into a new variable
[first, , , ,fifth] = newArray
console.log(first, fifth);

// Reference and Primitive type
// primitive types: string, numbers, booleans
// reference types: objects, arrays

// primitives create copies (think different id, pointer and memories)
// references will refer to the same thing (same memory address)

// to create a new copy of a reference type, use spread, copying only the properties

// Refreshing Array Functions
// examples: sort, map, filter, reduce
const dblArray = newArray.map((num) => {
    return num * 2;
});

console.log(dblArray);
