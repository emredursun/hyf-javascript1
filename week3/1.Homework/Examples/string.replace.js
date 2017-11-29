// In the following example, the regular expression is defined in replace() and includes the ignore case flag.

var str = 'Twas the night before Xmas...';
var newstr = str.replace(/Xmas/i, 'Christmas');
console.log(newstr);  // Twas the night before Christmas...

let myString = "Today, weather is rainy!";
let newMyString = myString.replace(/rainy/i, "windy and cold");
console.log(newMyString);

// The following script switches the words in the string. For the replacement text, the script uses the $1 and $2 replacement patterns.

var re = /(\w+)\s(\w+)/;
var str = 'John Smith';
var newstr = str.replace(re, '$2, $1');
console.log(newstr);  // This logs 'Smith, John'.

// The comma's make that the sentence is quite hard to read. Find a way to remove the comma's from the sting and replace them with a spaces

var myStr = "hello,this,is,a,difficult,to,read,sentence";
myNewStr = myStr.replace(/,/g, ' ');
console.log(myNewStr);
