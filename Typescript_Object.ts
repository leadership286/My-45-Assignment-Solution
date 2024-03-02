// Write a program that containing typescript objects.\\

// let person_Name :string = 'Ayan Ansari'
//Datatype of person object
interface person {
    Age : number,
    Name : string,
    Gender :string,
    Nationality :string,
    Qualification :string
}
//Person object
let person = {
    Age : 10 ,
    Name : 'Ayan Ansari' ,
    Gender : 'Male' ,
    Nationality : 'Pakistan' ,
    Qualification : 'Primary'
}
//Print person
console.log(person);
//Data type of car object
interface car {
    transport :string
    maker :string
    Color :string
    Automatic :boolean

}
//Car Object
let car = {
    Transport :'Car',
     Maker : 'Toyota',
    Color  : 'Black',
    Automatic : 'true'
}
console.log(car);

