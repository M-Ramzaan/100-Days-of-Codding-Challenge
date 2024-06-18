//Date: 17-June-2024 Time: 08:13 PM

// Question 13: Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

// Explain & TIP: Arrays help you group related items, like types of transportation. This way, you can talk about each one using a loop

let favoriteTransport: string[] = [
  "Honda Motorcycle",
  "Honda Civic",
  "Corolla Fortuner",
  "KIA Carnival",
];

//Use for each method to do this

favoriteTransport.forEach((car) => {
  console.log(`I love to drive ${car}.`);
});

/*
Array Declaration: favoriteTransport is an array of strings containing the names of various vehicles.
forEach Method: favoriteTransport.forEach is the method called on the favoriteTransport array.
Callback Function: The function (favoriteTransport) => { console.log(I love to drive ${favoriteTransport}.); } is the callback function provided to forEach. This function is executed once for each element in the favoriteTransport array.
The parameter favoriteTransport within the callback function refers to the current element being processed.
The console.log statement prints a message for each element in the array, indicating the user's love for driving that particular vehicle.
*/

//Example 01

let groceryList = ["Apples", "Bananas", "Carrots", "Dairy"];

groceryList.forEach((item) => {
  console.log(`Need to buy: ${item}`);
});

//Example 02

let numbers = [1, 2, 3, 4, 5];
let sum = 0;

numbers.forEach((number) => {
  sum += number;
});

console.log(`The sum is: ${sum}`);

//Example 03

let names: string[] = ["alice", "bob", "charlie"];
let upperCasedNames: string[] = [];

names.forEach((name) => {
  upperCasedNames.push(name.toUpperCase());
});

console.log(upperCasedNames);

/*
Key Points to Remember
Non-mutating: The forEach method does not change the original array. It only executes the provided function for each element.
No Return Value: Unlike some other array methods, forEach does not return a new array or any value; it simply performs an operation for each element.
Easy to Use: It simplifies the process of iterating over an array, making the code more readable and concise compared to traditional for loops.
By understanding and using the forEach method, beginners can handle arrays more effectively and perform various operations on each element with ease.
*/
