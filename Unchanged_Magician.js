"use strict";
//magicians
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}
//Great magicians
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + '  The Great';
    }
}
const magicians2 = ['Henry', 'John', 'Thomas', 'William'];
make_great(magicians2);
show_magicians(magicians2);
//Unchanged Magicians
function make_great2(magicians) {
    const great_magicians = [];
    for (let i = 0; i < magicians.length; i++) {
        great_magicians.push(magicians[i] + '  The Great');
    }
    return great_magicians;
}
const magicians3 = ['Henry', 'John', 'Thomas', 'William'];
const great_magicians2 = make_great2(magicians3);
show_magicians(magicians3);
show_magicians(great_magicians2);
