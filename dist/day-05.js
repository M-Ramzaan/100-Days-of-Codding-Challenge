//Date: 18-June-2024 Time: 07:02 PM
/*
Question 14: Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

Explain & TIP: Just like with transportation, you can use an array to manage a list of guests. Loop through the list to send each one a personal invitation.
*/
const guests = ["Hassan", "Sheraz", "Waqar"];
//Via for of loop
for (let guest of guests) {
    console.log(`Hi Ramzan here ${guest} join me on dinner on 19-June-2024 at "MoveenPick Hotel" at sharp 09:00PM o clock.`);
}
//Via Foreach method
guests.forEach((guest) => {
    console.log(`Hi Ramzan here ${guest} join me on dinner on 19-June-2024 at "MoveenPick Hotel" at sharp 09:00PM o clock.`);
});
/*Question 15: Changing Guest List: One of your guests can't make it to the dinner, so you need to send out a new set of invitations with a replacement guest.

Explain & TIP: Arrays are flexible. You can replace an item if someone can't make it, then loop through the list again for new invitations.
*/
const guests2 = ["Hassan", "Sheraz", "Waqar"];
let notAbleToAttend = "Hassan";
console.log(`${notAbleToAttend} is busy so he cant join us on dinner.`);
//Replace Hassan with Junaid (New Guest)
let newGuest = "Juniad";
guests2[guests2.indexOf(notAbleToAttend)] = newGuest;
//Via for of loop
for (let guest of guests2) {
    console.log(`Hi Ramzan here ${guest} join me on dinner on 19-June-2024 at "MoveenPick Hotel" at sharp 09:00PM o clock.`);
}
//Via Foreach method
guests2.forEach((guest) => {
    console.log(`Hi Ramzan here ${guest} join me on dinner on 19-June-2024 at "MoveenPick Hotel" at sharp 09:00PM o clock.`);
});
export {};
