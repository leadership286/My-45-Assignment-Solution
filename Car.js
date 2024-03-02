"use strict";
function create_car(manufacture, model, optional) {
    return Object.assign({ manufacture,
        model }, optional);
}
const mycar = create_car("Toyota", "corolla", { color: "Silver", Year: "2024" });
console.log(mycar);
