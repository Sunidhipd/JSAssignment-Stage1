/* Consider the following object:
var myObj =
[{'name':'Saurabh', 'age': 30, 'occupation': "Team Leader"},
{'name':'Anupriya', 'age': 32, 'occupation': "Team Leader"},
{'name':'Kalyani', 'age': 25, 'occupation': "Programmer"},
{'name':'Damodaran', 'age': 27, 'occupation': "Programmer"},
{'name':'Krishnakath', 'age': 22, 'occupation': "Programmer"},
{'name':'Venketraman', 'age': 28, 'occupation': "Programmer"}];

Exercise 1: Display all objects with occupation as 'Programmer' */

 var myObj =
[{'name':'Saurabh', 'age': 30, 'occupation': "Team Leader"},
{'name':'Anupriya', 'age': 32, 'occupation': "Team Leader"},
{'name':'Kalyani', 'age': 25, 'occupation': "Programmer"},
{'name':'Damodaran', 'age': 27, 'occupation': "Programmer"},
{'name':'Krishnakath', 'age': 22, 'occupation': "Programmer"},
{'name':'Venketraman', 'age': 28, 'occupation': "Programmer"}];

 var res=myObj.filter(obj =>{
     return obj.occupation==="Programmer"
})
console.log(res);

/*Exercise 2: Sort the object basis the age key in the descending order */

var ageSort = myObj.slice(0);
ageSort.sort(function(a, b){return b.age-a.age});
console.log(ageSort);


/* Exercise 3: Recreate the above array of objects into the following object of objects :{ 'Team Leader' : [{'name':_____________, 'age':__________},{}],
'<anotheroccupation>': [{'name':______________, 'age':________},{}]} */

var Programmer=myObj.filter(obj =>{
    return obj.occupation==="Programmer"
})
for(var i=0;i<Programmer.length;i++){
  delete(Programmer[i].occupation);
}
var TL=myObj.filter(obj =>{
    return obj.occupation==="Team Leader"
})
for(var i=0;i<TL.length;i++){
    delete(TL[i].occupation);
  }
var res=[];
res["Team Leader"]=TL;
res["Programmer"]=Programmer;
console.log(res);

/*Exercise 4: Use the map function to create a new array containing only names present in myObj.

Expected output:

[ 'Saurabh'
 'Anupriya',
 'Kalyani',
 'Damodaran',
 'Krishnakath',
 'Venketraman' ] */

 var name=myObj.map(a=>a.name)
 console.log(name);