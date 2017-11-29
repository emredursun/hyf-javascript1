// The splice() method changes the contents of an array by removing existing elements and/or adding new elements.

var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];

myFish.splice(2, 0, 'drum'); // insert 'drum' at 2-index position
// myFish is ["angel", "clown", "drum", "mandarin", "sturgeon"]

myFish.splice(2, 1); // remove 1 item at 2-index position (that is, "drum")
// myFish is ["angel", "clown", "mandarin", "sturgeon"]

// Syntax

// array.splice(start)
// array.splice(start, deleteCount)
// array.splice(start, deleteCount, item1, item2, ...)

// You don't know the position or the index of the item in the array, how can you find it?

let favoriteAnimals = ['blowfish', 'meerkat', 'capricorn', 'giraffe', 'turtle'];
let indexOfMeerkat = favoriteAnimals.indexOf("meerkat");
console.log("The item you are looking for is at index: " + indexOfMeerkat);

favoriteAnimals.splice(3, 1);
console.log("New array should be like: ['blowfish', 'meerkat', 'capricorn', 'turtle']"); // 'giraffe' will be delete!
console.log(favoriteAnimals);

favoriteAnimals.splice(3, 1, 'leon', 'elephant');
console.log("New array should be like: ['blowfish', 'meerkat', 'capricorn', 'leon', 'elephant']"); // 'turtle' will be delete and 'leon', 'elephant' will be add.
console.log(favoriteAnimals);

let indexOfLeon = favoriteAnimals.indexOf("leon");
console.log("The item you are looking for is at index: " + indexOfLeon);

