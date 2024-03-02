"use strict";
// Sandwiches: Write a function that accepts a array of items a person wants
// on a sandwich. The function should have one parameter that collects as many
// items as the function call provides, and it should print a summary of the sandwich
// that is being ordered. Call the function three times, using a different number
// of arguments each time.
function sandwiches(...items) {
    console.log("Sandwiches Order:  ");
    for (let i = 0; i < items.length; i++) {
        console.log(` - ${items[i]}`);
    }
}
console.log('Dear Customer! Enjoy Your Sandwich');
sandwiches('Capsicum', 'Tomato', 'Cheese');
sandwiches('Beef', 'Chicken');
sandwiches('Garlic Chicken', 'Mayo with Sauce');
