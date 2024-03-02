"use strict";
//Write an if-else chain that determines a person’s stage of life. Set a value for the variable age
let age = 30;
// The person is less than 2 years old, print a message that the person is a baby.
if (age < 2) {
    console.log("Person ia baby.");
}
//The person is at least 2 years old but less than 4, print a message that the person is a toddler.
else if (age < 4) {
    console.log("Person is toddler.");
}
//The person is at least 4 years old but less than 13, print a message that the person is a kid.
else if (age < 13) {
    console.log("Person is kid.");
}
//The person is at least 13 years old but less than 20, print a message that the person is a teenager.
else if (age < 20) {
    console.log("Person is teenager.");
}
//The person is at least 20 years old but less than 65, print a message that the person is an adult.
else if (age < 65) {
    console.log("Person is an adult.");
}
//The person age is 65 or older, print a message that the person is an elder.
else{
    console.log("Person is an elder.");
}
