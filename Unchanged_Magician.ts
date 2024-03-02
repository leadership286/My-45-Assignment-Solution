//magicians
function show_magicians(magicians: string[]): void {

    for(const magician of magicians){
        console.log(magician.charAt(0).toUpperCase() +magician.slice(1));
    }
}
//Great magicians
function make_great(magicians: string[]): void {
    for (let i=0; i< magicians.length;   i++){
        magicians[i] = magicians[i] + '  The Great'
    }
}
 const magicians2: string[] = ['Henry','John','Thomas','William'];
 make_great(magicians2);
 show_magicians(magicians2);
 //Unchanged Magicians
 function make_great2(magicians: string[]): string[]{
    const great_magicians: string[] = [] ;
        for (let i = 0; i < magicians.length; i++){
       great_magicians.push(magicians[i] + '  The Great');
        }
        return great_magicians;
    }
    const magicians3: string[] = ['Henry','John','Thomas','William'];
    const great_magicians2: string[] = make_great2(magicians3);
    show_magicians(magicians3);
    show_magicians(great_magicians2);
 