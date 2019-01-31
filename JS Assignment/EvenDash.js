/*Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8 */

const number='046897'.replace(/([24680])(?=[24680])/g, '$1-');
console.log(number);

