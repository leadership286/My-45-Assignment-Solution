// More Guests: You just found a bigger dinner table, so now more space is
// available. Think of three more guests to invite to dinner.

// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
// bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.


let Guest_List :string[] = ['Kamran Tessori','Zia Ullah Khan','Daniyal Nagori','Ameen Alam'];
 for(let i=0; i<Guest_List.length; i++){
     console.log('Dear Mr. '+ Guest_List[i] + ',\n\nIt is our pleasure to invite you in Success Party.\n\nThank You!\n\n')
    }
 
 
 let absent_Guest :string = 'Kamran Tessori';
 let new_Guest :string = 'Imran Khan';
 Guest_List[0] = new_Guest ;
 
 for(let i=0; i<Guest_List.length; i++){

    console.log('Dear Mr. '+ Guest_List[i] + ',\n\nIt is our pleasure to invite you in Success Party.\n\nThank You!\n\n')
 }
 console.log(`Mr.${absent_Guest} is not coming in the Party.`);
 console.log ('Good News! We find Big Table for dinner so we are inviting 3 more guest.')
 Guest_List.unshift('Anwar ul Haq Kakkar');
 Guest_List.splice(3,0, 'Arif Alvi ');
 Guest_List.push('Saeed Ghani');
 for(let i=0; i<Guest_List.length; i++){
   console.log('Dear Mr. '+ Guest_List[i] + ',\n\nIt is our pleasure to invite you in Success Party.\n\nThank You!\n\n')
  }

