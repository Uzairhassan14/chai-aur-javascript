// # Primitive

// call by value
// 7 types :  string, Number, Boolean , null, undefined , Symbol , BigInt,

const score = 100;
const scorevalue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);

// const bigNumber = 99889928828828n;

// Reference (Non premitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagari", "doga"];

let myobj = {
  name: "uzair",
  age: 20,
};

const  myfunction = function (){
    console.log("Hello world")
}


console.log(typeof myfunction)