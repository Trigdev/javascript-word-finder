/** 
 * STRINGS 
 * A string is a collection of 0 or more characters enclosed with quotation marks 
 * Strings can be enclosed within double or single quotes!
*/

let str1 = "String enclosed within double quotes";
let str2 = 'String enclosed within single quotes'; 

const string1 = 'John Doe'; 
const string2 = 'Elon Musk'; 

console.log(str1, str2); 
console.log(string1, string2); 

// Use the length property to find the length of a string 
console.log(str1.length); 
console.log(string2.length); 

// Escape Character, (\) -> used to escape quotes, backslash and other special characters 
let str3 = " \"Akaakohol\" Tartor Kingdom"; // escapes the " chracter
console.log(str3); 

let str4 = "App\\Models\\User"; // escapes the \ character 
console.log(str4); 

let str5 = '\'Pever\' Luper Collins';
console.log(str5);  // escapes the ' character 

// String Objects 
let new_string = new String("JavaScript Programming");
console.log(typeof(new_string)); 

// Equivalence of Strings 
let first_string = new String("JavaScript"); 
let second_string = new String("JS");  
console.log(first_string == second_string); 

/**
 * STRING METHODS & PROPERTIES 
 */

const the_string = "There's a price for everything you want in life!"; 
const sub_string = "everything"; 

// String Length -> length property returns the length of a string 
const len = the_string.length; 
console.log(len); 
 
// String Position -> indexOf() returns the 1st occurrence of a string in a string 
const pos = the_string.indexOf(sub_string); 
console.log(pos); 

// Last String Position -> lastIndexOf() returns the last occurrence of a string in another string 
const las_pos = the_string.lastIndexOf("you"); 
console.log(las_pos); 

// Search for a String -> search() returns the 1st substring match in a regular expression search
const search = the_string.search("life"); 
console.log(search); 

// Slice -> slice() extracts part of a string and returns the extracted part 
const slice = the_string.slice(43, 47); 
console.log(slice); 
console.log( the_string.slice(-48, -41) );
console.log( the_string.slice(-40)); 
console.log( the_string.slice(10)); 

// Substring -> substring(), substr() 
let fullname = "Mark Zuckerberg"; 
let firstname = fullname.substring(0, 4); 
console.log(firstname);

let lastname = fullname.substr(5); 
console.log(lastname); 

// Replacing Strings -> replace() 
let daughter = fullname.replace("Mark", "Maxima"); 
console.log(daughter); 

// toUpperCase(), toLowerCase() -> change text case 
let alpha = "Proverbs"; 
console.log( alpha.toLowerCase() ); 
console.log( alpha.toUpperCase() ); 

// concat() -> String Concatenation 
let books = alpha.concat(" ", "Psalms", " ", "Ecclesiastes"); 
console.log(books); 

// trim() -> truncates the spaces around strings 
let greeting = "          Hello World         "; 
console.log( greeting.trim() ); 

// padding -> padStart() & padEnd() 
console.log( greeting.padStart(4, 0) ); 
console.log( greeting.padEnd(4, 0) );

// character at a specific index -> charAt() 
console.log( alpha.charAt(0) ); 

// Converting Strings to Arrays 
var text = "january, february, march, april, may, june, july"; 
var arr = text.split(","); 
var arr2 = text.split("|"); 
console.log(arr); 
console.log(arr2); 