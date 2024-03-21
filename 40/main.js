function make_album(artist, tittle, tracks) {
    var album = { artist: artist, tittle: tittle };
    if (tracks) {
        album["tracks"] = tracks;
    }
    return album;
}
console.log(make_album("Artist One", "The first Album"));
console.log(make_album("Artist two", "The second Album"));
console.log(make_album("Artist three", "The third Album", 12));
