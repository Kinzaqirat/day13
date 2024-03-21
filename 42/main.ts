let magicians: string[] =["Alice", "Emaily","Eric"];
function show_magicians(magicians:string[]) {
    magicians.forEach(magicians => {
        console.log(magicians);
    })
}
show_magicians(magicians);//original

function  make_great(magicians:string[]){
    for (let i = 0 ; i  < magicians.length; i++){
        magicians[i] = magicians[i] + " "+ "the Great";
    }
}// modified
make_great(magicians);
show_magicians(magicians);