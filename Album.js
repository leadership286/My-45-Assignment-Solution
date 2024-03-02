"use strict";
function make_album(artist, title) {
    const dictionaries = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toUpperCase() + title.slice(1)
    };
    return dictionaries;
}
let album = make_album("Ali", "Light");
console.log(album);
album = make_album("Bilal", "Red Wave");
console.log(album);
album = make_album("Hamza", "Seenbreeze");
console.log(album);
