"use strict";
function make_shirt(size = 'large', text = 'I Love Typescript') {
    console.log(`You have  ordered a ${size} shirt that says ${text}`);
}
//Different masseges
make_shirt('Small', '"I need a big shirt to wear."');
make_shirt('Extra Large', '"I  need a  small shirt to wear.!"');
