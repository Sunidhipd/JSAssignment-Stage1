/*Flatten the following object:var myObj = [5, [22], [[14]], [[4]],[5,6]]
Note: the output should be in the form:[ 5, 22, 14, 4, 5, 6 ]
*/

var flatten = function(a){
        var r=[];
     for(var i=0; i<a.length; i++){
          if(a[i].constructor == Array){
              r=r.concat(flatten(a[i]));
          }else{
              r.push(a[i]);
          }
      }
      return r;
  }
  
  console.log(flatten([1, [2], [3, [[4]]],[5,6]]));
  