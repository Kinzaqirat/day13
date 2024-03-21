var magicians = ["Alice", "Emaily", "Eric"];
function show_magicians(magicians) {
    magicians.forEach(function (magicians) {
        console.log(magicians);
    });
}
show_magicians(magicians); //original
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " " + "the Great";
    }
}
make_great(magicians); // modified
show_magicians(magicians);
