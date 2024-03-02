"use strict";
//Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number
// of people you are inviting to dinner.
let Guest_List = ['Kamran Tessori', 'Zia Ullah Khan', 'Daniyal Nagori', 'Ameen Alam'];
// //  for(let i=0; i<Guest_List.length; i++){
//      console.log('Dear Mr. '+ Guest_List[i] + ',\n\nIt is our pleasure to invite you in Success Party.\n\nThank You!\n\n')
//    //  }
let absent_Guest = 'Kamran Tessori';
let new_Guest = 'Imran Khan';
Guest_List[0] = new_Guest;
// //  for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Mr. '+ Guest_List[i] + ',\n\nIt is our pleasure to invite you in Success Party.\n\nThank You!\n\n')
//  }
//  console.log(`Mr.${absent_Guest} is not coming in the Party.`);
//  console.log ('Good News! We find Big Table for dinner so we are inviting 3 more guest.')
Guest_List.unshift('Anwar ul Haq Kakkar');
Guest_List.splice(3, 0, 'Arif Alvi ');
Guest_List.push('Saeed Ghani');
//  for(let i=0; i<Guest_List.length; i++){
//    console.log('Dear Mr. '+ Guest_List[i] + ',\n\nIt is our pleasure to invite you in Success Party.\n\nThank You!\n\n')
//  }
//  console.log(' \nSorry we can not arrange big table,only Two people will be invited,');
//  while(Guest_List.length >2){
let remove_Guest = Guest_List.pop();
//  }
//  console.log(`Sorry Mr. ${'remove_Guest'},You are not invited for Dinner.`);
//  for(let i=0; i<Guest_List.length; i++){
//       console.log('Dear Mr. '+ Guest_List[i] + ',\n\nYou are still invited.\n\nThank you!\n\n')
//     // }
Guest_List.splice(0, 2);
console.log(Guest_List);
// Exersice:19
//Print a massege indicating the number of people you are inviting.
console.log(`Total Number of Guests are : ${Guest_List.length}`);
