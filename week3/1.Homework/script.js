/*################################## String and Array challenges #####################################*/
// 1.Strings!
// 2.Let's consider the following string: let myString = "hello,this,is,a,difficult,to,read,sentence"
// 3.Add the string to your file and console.log it.
// 4.Console.log the length of myString.
// 5.The comma's make that the sentence is quite hard to read. Find a way to remove the comma's from the sting and replace them with a spaces
// 6.Console.log myString to see if you succeeded.

// 1.Answer
var collection = function () {
    let firstString = "Html:5";
    let secondString = "11";
    let thirdString = "Javascript";
    let fourthString = "This is a simple phrase.";
}
collection();

// 2 & 3.Answers
let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);

collection();

// 4.Answer
console.log(myString.length);

collection();

// 5 & 6.Answer

myString = myString.replace(/,/g, ' ');
console.log(myString);

collection();

/*################## Arrays! ##########################*/
//        Consider the following array:

let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];

// 1.Add a statement that adds Mauro's favorite animal (turtle) to the existing array
// 2.Log your new array!

favoriteAnimals.push("turtle");
console.log(favoriteAnimals);

collection();

// 3.Now add Jim's favorite animal to the array, its a 'meerkat', but make sure it will be placed after 'blowfish' and before 'capricorn'.
// 4.Write a console.log statement that explains in words you think the new value of the array is.
// 5.Log your new new array!

favoriteAnimals.splice(1, 0, "meerkat");
console.log("New array should be like: [ 'blowfish', 'meerkat', 'capricorn', 'giraffe', 'turtle' ]");
console.log(favoriteAnimals);

collection();

// 6.Log the length of the array, add a message: "The array has a length of: "(here you should show the length of the array)

console.log("The array has a length of: " + favoriteAnimals.length);

collection();

// 7.Jason does not like giraffes, delete this animal from the array
// 8.Again log your new array.

favoriteAnimals.splice(3, 1);
console.log(favoriteAnimals);

collection();

// 9.Now if unlike Jim, you don't like meerkats and you want to delete it from the array, but you don't know the position or the index of the item in the array, how can you find it?
// 10.Log the index of meerkat to the console.Add a message so it says: "The item you are looking for is at index: "(here you should show the index of the item)

let indexOfMeerkat = favoriteAnimals.indexOf("meerkat");
console.log("The item you are looking for is at index: " + indexOfMeerkat);


collection();

