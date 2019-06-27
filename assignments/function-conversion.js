// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

// let myFunction = function () {
// console.log("Function was invoked!");
// };
const myFunction = () => {
    console.log("Function was invoked!");
}
myFunction();


// let anotherFunction = function (param) {
//   return param;
// };
const anotherFunction = (param) => {
    return param;
}
const result = anotherFunction("Example");
console.log(result);

// let add = function (param1, param2) {
//   return param1 + param2;
// };
// add(1,2);
const add = (param1, param2) => {
    return param1 + param2;
}
console.log(add(1,2));

// let subtract = function (param1, param2) {
//   return param1 - param2;
// };
// subtract(1,2);
const subtract = (param1, param2) => {
    return param1-param2;
}
console.log(subtract(1,2));

// Stretch

// exampleArray = [1,2,3,4];
// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });
// console.log(triple);
//
// my failed attempt:
// exampleArray = [1,2,3,4];
// const triple = (num) => {
//     return exampleArray.map(num*3);
// }
// console.log(triple);