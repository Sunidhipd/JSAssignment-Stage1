/* Write a JavaScript program to display the current day and time in the following format mm/dd/yyyy */

var today=new Date();
var month=today.getMonth()+1;
var date=today.getDate();
var year=today.getFullYear();
var day=today.getDay();
var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
console.log(month+"/"+date+"/"+year);
console.log(daylist[day]);
