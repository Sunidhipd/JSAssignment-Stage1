/*Convert the following JSON string to an object and access the value of the jason property.

var jsonStr = '{"mike":"Book","jason":"sweater","chels":"iPad"}';*/


var jsonStr = '{"mike":"Book","jason":"sweater","chels":"iPad"}';
var jsonobject=JSON.parse(jsonStr);
console.log(jsonobject.mike);
console.log(jsonobject.jason);
console.log(jsonobject.chels);
