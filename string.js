//String declearation:
// let name = "John Doe";
// console.log(name);

//To find the length of a string:
// console.log(name.length)

//Excaping string:
// let text = "We are the so-called \n\"Vikings\" from the north.";
// console.log(text);

//String Methods and Properties
//1. length
// console.log(name.length);

//Extracting String Parts:
//1. Slice: str.slice(startpoint, endpoint)
//End point is not included in the new str:
// let fruits = "Apple, Orange, Mango, Kiwi";
// let sliced = fruits.slice(0)
// console.log(sliced);
// console.log(fruits);

// The substring() Method
// substring() is similar to slice().

// The difference is that substring() cannot accept negative indexes:
// let subSorted = fruits.substring(0);
// console.log(subSorted)

// The substr() Method
// substr() is similar to slice().

// The difference is that the second parameter specifies the length of the extracted part.

// let subStr = fruits.substr(0);
// console.log(subStr)

// Replacing String Content
// The replace() method replaces a specified value with another value in a string:
// By default, the replace() method replaces only the first match:
// By default, the replace() method is case sensitive. Writing MICROSOFT (with upper-case) will not work:
// To replace case insensitive, use a regular expression with an /i flag (insensitive):
// To replace all matches, use a regular expression with a /g flag (global match):
// let text = "Please visit MICROSOFT Microsoft!";
// let newText = text.replace(/Microsoft/gi, "W3Schools");
// console.log(newText);

// Converting to Upper and Lower Case
// A string is converted to upper case with toUpperCase():
//To upper and to lower does not not change the string they are called on. They return a new string:
// let text = "To uppercase";
// let neText = text.toUpperCase();
// console.log(neText , text);

// The concat() Method
// concat() joins two or more strings:
// let stringOne = "I am a";
// let stringTwo = "doctor";
// let thirdStr = stringOne.concat(" ", stringTwo);
// console.log(thirdStr);

