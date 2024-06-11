//Start Date - 10-June-2024 & Time - 06:41 AM
// Question 12: Greetings: Use the array from Exercise 11. Instead of just printing each person’s name, print a message to them. The message should be the same for each person, but personalized with their name.
// Explain & TIP: This builds on the previous exercise. Now, you’re not just listing names, you’re using them in a sentence to make a personalized message for each friend.
let names = ["Hassan", "Sheraz", "Junaid"];
//One way to doing that via accessing index of array
console.log(`Hi! ${names[0]} you are my best friend.`);
console.log(`Hi! ${names[1]} you are my best friend.`);
console.log(`Hi! ${names[2]} you are my best friend.`);
//Other way to do that using for loop
for (let i = 0; i < names.length; i++) {
    console.log(`Hi ${names[i]} you are my best friend.`);
}
//Other way to do that using for loop
for (let name of names) {
    console.log(`Hi ${name} you are my best friend.`);
}
export {};
