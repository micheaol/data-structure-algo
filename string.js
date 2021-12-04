//BOOKS:
// https://algs4.cs.princeton.edu/50strings/:
//https://www.hackerearth.com/practice/algorithms/string-algorithm/basics-of-string-manipulation/tutorial/

//Vidoe:
// https://www.youtube.com/watch?v=HdFG8L1sajw&list=PL2_aWCzGMAwI3W_JlcBbtYTwiQSsOTa6P&index=2

//String declearation:
// let name = "John Doe";
// console.log(name);

// const { stringLiteral } = require("@babel/types");

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

// String.trim()
// The trim() method removes whitespace from both sides of a string:
// String.trim does not change the string it is called on, it return a new string removing the space.
//  let pracText = "                          I am checking                ";
//  let triText =  pracText.trim();
//  console.log(triText);
//  console.log(pracText);

// JavaScript String Padding
// ECMAScript 2017 added two String methods: padStart and padEnd to support padding at the beginning and at the end of a string:

// let text = '5';
// let paddTxt = text.padStart(5, 0);
// console.log(paddTxt);

// let text = "5";
// let padded = text.padEnd(4,0);
// console.log(padded);

//========================================================================
// Extracting String Characters
// There are 3 methods for extracting string characters:

// charAt(position)
//The charAt() method returns the character at a specified index (position) in a string:
// let text = "There is a cat under the table";
// // let charText = text.charAt(2);
// // console.log(charText);

// // charCodeAt(position)
// // The charCodeAt() method returns the unicode of the character at a specified index in a string:
// // The method returns a UTF-16 code (an integer between 0 and 65535):
// let textCode = text.charCodeAt(2);
// console.log(textCode);
// Property access [ ]

// Converting a String to an Array
// A string can be converted to an array with the split() method:
// let text = "There is a cat, under, the table";
// let convertedStr = text.split(" ");
// console.log(convertedStr)

//==================================================================
//JavaScript String Search=================
// JavaScript methods for searching strings:

// String.indexOf()
// The indexOf() method returns the index of (the position of) the first occurrence of a specified text in a string:
// let str = "Please locate where 'locate' occurs!";
// let indexOfStr = str.indexOf('locate', 10);

// String.lastIndexOf()
// The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:
// let lastStr = str.lastIndexOf('fish', 14)
// console.log(lastStr);
// Both indexOf(), and lastIndexOf() return -1 if the text is not found:
// Both methods accept a second parameter as the starting position for the search:
// console.log(lastStr);
// String.startsWith()
// String.endsWith()

// The search() method searches a string for a specified value and returns the position of the match:
// let serchTxt = str.search('occurs');
// console.log(serchTxt);

// String.match()
// The match() method searches a string for a match against a regular expression, and returns the matches, as an Array object.
// let matcTxt = str.match(/locate/g);
// console.log(matcTxt);

// String.includes()
// The includes() method returns true if a string contains a specified value.

// function superReducedString(s) {
//    //Convert the string to an array:
//    let convertStr = s.split("");
//    //iterate through the array:
//    for(let i = 0; i < convertStr.length; i++){
//        if(convertStr[i] === convertStr[ i + 1]){
//            convertStr.splice(i, 2);
//            i = -1;
//        }
//    }
//    return convertStr.length === 0? "Empty String": convertStr.join('');
// }

// console.log(superReducedString("aabbbc"))

// // for (let index = 0; index < 10; index++) {
// //       console.log(`Index = ${index} || index - 1 = ${index - 1} || index + 1 = ${index + 1}`)
    
// // }

// function camelcase(s) {
//     // Write your code here
//     let counter = 1;
//   for(let i = 0; i < s.length; i++){
//       if(s[i] == s[i].toUpperCase()){
//           counter += 1
//       }
//   }
//   console.log(counter)
// }

// camelcase("lowerDogCake")

let str = "bg95555";
let regex = new RegExp(/[a-z]/ig)
let count = 0;
for(let i =0; i < str.length; i++){
        count += 1

}
console.log(count)