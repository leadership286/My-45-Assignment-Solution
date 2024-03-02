"use strict";
let users = ['Admin', 'Maaz', 'Ayaz', 'Ayan', 'Subhan'];
if (users.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (let user of users) {
        if (user === "Admin") {
            console.log("Hello Admin, Would you like to see a status report");
        }
        else {
            console.log(`Hello ${user},Thank you for logging in again. `);
        }
    }
}
users = [];
if (users.length === 0) {
    console.log('We need to find some users!');
}
