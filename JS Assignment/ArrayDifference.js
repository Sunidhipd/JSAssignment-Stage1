/*Write a JavaScript function to find the difference of two arrays*/


var a = [1,6,9,89];
var b = [8,9,6,0];
var b1 = new Set(b);
var difference = [...new Set([...a].filter(x => !b1.has(x)))];
var b2 = new Set(a);
var difference2 = [...new Set([...b].filter(x => !b2.has(x)))];
var c=difference.concat(difference2);
console.log(c);