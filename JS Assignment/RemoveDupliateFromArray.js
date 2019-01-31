/*Write a JavaScript program to remove duplicate items from an array*/

const names = ['John', 'Paul', 'George', 'Ringo', 'John'];

let unique = [...new Set(names)];
console.log(unique);