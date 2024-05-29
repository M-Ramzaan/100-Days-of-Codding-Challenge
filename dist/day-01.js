//100 Days of Codding Challenge
//Start Date - 29-May-2024 & Time - 06:04 AM
export {};
//Question No 01
//Question 1: Install Node.js, TypeScript and VS Code on your computer/Laptop.
// Explain & TIP: Simply install the following things via any browser of your choice.
//Done
// Question 2: Personal Message: Store a person’s name in a variable and print a message to them, like “Hello Asharib, would you like to learn some TypeScript today?”
// Explain & TIP: First, make a variable to save a name. Then, use this name to say hello. Variables keep data you can use later
/*
let firstName: string = "Muhammad Ramzan";
let lastName: string = "Akram";
let fullName: string = `${firstName} ${lastName}`;
let message: string = `Asslam U Alaikum ${fullName}, Keep going and complete the "Codding Challenge" asap.I know you can do it.`;
console.log(message);
*/
//Question 3: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
// Explain & TIP: Save a name in a variable. Show it in all small letters, ALL BIG LETTERS, and First Letter Big for each word. This helps learn how to change text style.
/*
let myBestFriendName: string = "Junaid Aslam";
//Lowercase
console.log(
  "My best friend name in Lowercase is = ",
  myBestFriendName.toLowerCase()
);
//Uppercase
console.log(
  "My best friend name in Uppercase is = ",
  myBestFriendName.toUpperCase()
);
//Title case
let words = myBestFriendName.split(" ");

//The split method in TypeScript (and JavaScript) breaks a string into an array of smaller strings (substrings) based on a specified character or pattern (delimiter). For example, if you use a space (' ') as the delimiter, it will split the string at each space, creating an array of words.

for (let i = 0; i < words.length; i++) {
  let word = words[i];
  //Capitalize the each starting letter of the word.
  words[i].charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

//The charAt method in TypeScript (and JavaScript) is used to retrieve the character at a specified index from a string. It returns a new string containing the single character at the specified index position.

//The slice method in TypeScript (and JavaScript) is used to extract a section of a string and return it as a new string. The method takes two arguments: the start index and an optional end index.

myBestFriendName = words.join(" ");

//The join method combines all elements of an array into a single string. You can specify a separator to insert between each element. If no separator is given, the elements are joined with commas by default.

console.log("My best friend name in Title case is = ", myBestFriendName);
*/
