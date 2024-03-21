function make_album(artist:string , tittle:string, tracks:number) {
    let album = {artist , tittle , tracks} ;
   if (tracks){
    album['tracks'] = tracks;
   }
   return album;
   }
   console.log(make_album("Artist One","The first Album" ,4));
   console.log(make_album("Artist two","The second Album" , 3));
   console.log(make_album("Artist three", "The third Album",12));
