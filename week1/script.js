// 1.Write a console.log statement saying "Hello World!" for each language that you know.
const turkish="Merhaba, Dunya";
let english = "Hello, World";
const dutch = "Hallo, Wereld"
var romanian = "Salut, Lume";
console.log(turkish);
console.log(english);
console.log(dutch);
console.log(romanian);

// 2.Consider the following code:console.log('I'm awesome');
console.log("I'am awesome");

// 3.Declare a variable x and initialize it with an integer.
var x = 29;
console.log('the value of my x will be : 29')

// 4.Declare a variable y and assign a string to it.
var y = "Nederland";
console.log('the value my y string will be : Nederland');

// 5.How do you round the number 7.25, to the nearest integer?
var z = 7.25;
console.log(z);
var a = 7;
console.log(a);
var result = Math.max(a,z);
console.log(result);

// 6.Arrays 
var emptyArray = [];
console.log(emptyArray);
console.log('the value of an empty array :[]');
var myFavoriteAnimals=['dog','cat'];
console.log(myFavoriteAnimals);
myFavoriteAnimals[2] = 'baby pig'; //first way to add a new element to an existing array is array[array length]='new element';
console.log(myFavoriteAnimals);
/*var array=['element1','element2'];
array.push('new element'); Second way to  add a new element 
console.log(array);*/

// 7.More strings 
let myString = "this,is,a,test";
console.log(myString);
console.log(myString.length);


// 8.Write a program that checks the types of two variables and prints out SAME TYPE if they are the same type.
// 8.1 First declare at least four variables and assign them different data types.
// 8.2 For each variable write a console.log statement that logs the value
var a = "Mathematics";                                                   
console.log('The value of my variable a is: ' + a);                         
var b = "Audi";                                             
console.log('The value of my variable b is: ' + b);                        
var c = ['html','css'];                            
console.log('The value of my variable c is: ' + c);                                            
var d = 29;                                             
console.log('The value of my variable d is: ' + d);  

console.log('The type of my variable a is string ' );
console.log('The type of my variable b is string' );
console.log('The type of my variable c is array' );
console.log('The type of my variable d is numeric ' );

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);

if (typeof(a)==typeof(b)){
    console.log("SAME TYPE");
}
else {
    console.log("NOT THE SAME TYPE");
}

// 9.If x equals 7, and the only other statement is x = x % 3, what would be the new value of x?
// 1-Example
var x = 7;  
x = x % 3;
console.log(x);

// 2-Example
var y = 20;    
var z = y % 4;
console.log(z);

// 3-Example
var a = 15;     
var b  = a % 20;
console.log(b);

// 10.1 Can you store multiple types in an array? Numbers and strings? 
var array = ["London","Hello",27,true];
console.log(array);
console.log("Yes, we can store multiple types in an array");
if (6/0===10/0) {
    console.log("true");
}
else {
    console.log("false");
}
console.log("I have done in the above assignments except some small points");