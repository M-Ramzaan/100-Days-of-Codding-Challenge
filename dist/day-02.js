// Question 1: Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
// "Albert Einstein once said, “A person who never made a mistake never tried anything new.”"
export {};
// Explain & TIP: Simply choose a quote you like and show it with who said it. It's about combining text.
/*
console.log(
  `"Muhammad Ali Jinnah once said,"Think 100 times before taking a decision but once a decision is taken. Stick to it as a man"".`
);
*/
// Question 2: Famous Quote 2: Repeat Exercise 1, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
// Explain & TIP: First, save the author's name in a variable. Next, create your quote message in another variable. Then, show it. This teaches you to organize and use your data with variables.
/*
let myFavPerson: string = "Muhammad Ali Jinnah";
let message: string = `"${myFavPerson} once said,"Think 100 times before taking a decision but once a decision is taken. Stick to it as a man"".`;
console.log(message);
*/
// Question 3: Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Use "\t" (tab) and "\n" (new line) at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after stripping the white spaces.
// Explain & TIP: Save a name with extra spaces or new lines around it. Show it first with the extra space, then remove the spaces and show it clean. This helps you learn how to clean up text.
/*
let personName: string = "Muhammad \tRamzan      \nAkram";
console.log("Person name with white spaces is = ", personName);
personName = personName.trim().replace(/\s+/g, " ");
console.log("Person name without white spaces is = ", personName);
*/
/*you can use the trim and replace methods to clean up the string:

Use trim to remove leading and trailing whitespace:

The trim method removes whitespace from both the beginning and the end of the string.
Use replace with a regular expression to replace multiple spaces within the string:

The replace method can be used with a regular expression to find and replace patterns in a string. For example, you can use a regex to find multiple spaces and replace them with a single space.
Here's the code that accomplishes this:
*/
// let myName: string = "Muhammad \tRamzan      \nAkram";
// console.log("Original name with whitespace:");
// console.log(myName);
// // Step 1: Trim leading and trailing whitespace
// let trimmedName = myName.trim();
// // Step 2: Replace multiple spaces with a single space
// let cleanedName = trimmedName.replace(/\s+/g, " ");
// console.log("Name after stripping extra spaces:");
// console.log(cleanedName);
/*
Explanation:
Step 1: trim() removes leading and trailing whitespace (including spaces, tabs, and newlines).
Step 2: replace(/\s+/g, ' ') uses a regular expression to find one or more whitespace characters (\s+) and replaces them with a single space.
You can run this code to see how it works. It will print the name with the original whitespace and then print the cleaned-up version.
*/
// Question 7: Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Enclose your operations in print statements.
// Explain & TIP: Play with numbers to get 8 using different math operations. It's a fun way to see how you can perform calculations in code.
/*
console.log("Addition", 4 + 4);
console.log("Subtraction", 12 - 4);
console.log("Multiplication", 2 * 4);
console.log("Division", 8 / 1);
*/
// Question 8: You should create four lines that look like this:
// console.log(5 + 3)
// Your output should simply be four lines with the number 8 appearing once on each line.
// Explain & TIP: Just like before, use basic math operations to display the number 8. This reinforces how to display outputs in coding.
/*
console.log(4 + 4);
console.log(12 - 4);
console.log(2 * 4);
console.log(8 / 1);
*/
// Question 9: Favorite Number: Store your favorite number in a variable. Then, create a message revealing your favorite number. Print that message.
// Explain & TIP: Use a variable to remember your favorite number. Then, show a message with it. This is a great way to see how variables can hold different types of data, like numbers.
/*
let myFavNumber: number = 1418;
let message1: string = `My favorite number is ${myFavNumber}`;
console.log(message1);
*/
// Question 10: Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If the programs are straightforward at this point, just add your name and the current date at the top of each program file. Then, write one sentence describing what the program does.
// Explain & TIP: Comments are notes in your code that the computer ignores. They help people understand what your code does. It's like leaving a note for yourself or someone else who might read your code later.
//Below code contain a variable having information about my favorite number and this program also print the message that show my favorite number.
/*
let favNumber: number = 1418;
let message_1: string = `My favorite number is ${myFavNumber}`;
console.log(message_1);
*/
// Question 11: Names: Store the names of a few of your friends in an array called names. Print each person’s name by accessing each element in the list, one at a time.
// Explain & TIP: An array is like a list of items. You can store multiple items, like your friends' names, in one variable and access them one by one.
/*
let myFriends: string[] = ["Hassan", "Sheraz", "Junaid"];

//One way to doing that via accessing index of array
console.log(myFriends[0]);
console.log(myFriends[1]);
console.log(myFriends[2]);

//Other way to do that using for loop
for (let i = 0; i < myFriends.length; i++) {
  console.log(myFriends[i]);
}
*/
