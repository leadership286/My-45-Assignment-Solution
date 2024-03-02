"use strict";
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print
// a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// 
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end
// of your program.
let Guest_List = ['Kamran Tessori', 'Zia Ullah Khan', 'Daniyal Nagori', 'Ameen Alam'];
//  for(let i=0; i<Guest_List.length; i++){
//   console.log('Dear Mr. '+ Guest_List[i] + ',\n\nIt is our pleasure to invite you in Success Party.\n\nThank You!\n\n')
//  }
let absent_Guest = 'Kamran Tessori';
let new_Guest = 'Imran Khan';
Guest_List[0] = new_Guest;
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in Success Party.\n\nThank You!\n\n');
}
console.log(`Mr.${absent_Guest} is not coming in the Party.`);
console.log('Good News! We find Big Table for dinner so we are inviting 3 more guest.');
Guest_List.unshift('Anwar ul Haq Kakkar');
Guest_List.splice(3, 0, 'Arif Alvi ');
Guest_List.push('Saeed Ghani');
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in Success Party.\n\nThank You!\n\n');
}
console.log(' \nSorry we can not arrange big table,only Two people will be invited,');
while (Guest_List.length > 2) {
    let remove_Guest = Guest_List.pop();
}
console.log(`Sorry Mr. ${'remove_Guest'},You are not invited for Dinner.`);
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nYou are still invited.\n\nThank you!\n\n');
}
Guest_List.splice(0, 2);
console.log(Guest_List);
