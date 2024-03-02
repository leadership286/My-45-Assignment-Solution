//Changing Guest List: You just heard that one of your guests can’t make the
// dinner, so you need to send out a new set of invitations. You’ll have to think of
// someone else to invite.

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
 console.log(`Mr.${absent_Guest}is not coming in the Party.`)