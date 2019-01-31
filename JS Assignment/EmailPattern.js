/*Write a pattern that matches e-mail addresses?
a.Uppercase (A-Z) and lowercase (a-z) English letters.
b.Digits (0-9).
c.Characters ! # $ % & ' * + - / = ? ^ _ ` { | } ~
d.Character . ( period, dot or fullstop) provided that it   is not the first or last character and it will not come   one after the other.
*/

function valid_email(str)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
if(mailformat.test(str))
{  
console.log("Valid email address!");  
}  
else  
{  
console.log("You have entered an invalid email address!");  
}
}

valid_email('me-in$fo@example.com');
