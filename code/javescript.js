  //objects (14 albums i alt)
  //4 informationer: albumName, artistName, rating og productionYear

  //fortæller hvordan et album ser ud: constructor 
function Album (albumName, artistName, rating, productionYear) {
    this.albumName = albumName;
    this.artistName = artistName;
    this.rating = rating;
    this.productionYear = productionYear;
}

//for at være sikker på data'en kommer ind først 
// bruges metoden .then
fetchContent("albums.json").then((albums) => {

  //oprettet et nyt tomt array hvor der bruges for-loop til at 
  // sætte informationerne ind
let albumObjects = []

//addere først med +1 efter hele loopet er kørt igennem
//for at undgå hardcoding bruges [i] og album.length 
// - altså istedet for at skrive 0 < 14
  for (let i=0 ; i < albums.length; i++) {
    const album = new Album (
        albums[i].albumName,
        albums[i].artistName,
        albums[i].rating,
        albums[i].productionYear
    );

    //sætter det ind i det tomme array "albumObjects"
    albumObjects.push(album);
  };

  //laver et loop som skriver html for en
  // der tilføjes også en toggle knap og et div pr element
for(i = 0; i<albumObjects.length; i++){
    let parentElement = document.getElementById("content");
    let elementToAdd =
    "<h3>"+[i]+ ". " + albumObjects[i].albumName +"</h3>"+
      "<button onclick='button(" + i+")'>More about the album</button>" +
      "<div id='" + i + "'style='display: none;'>"+

      "<p>Made by " + albumObjects[i].artistName + "</p>"+
      "<p>Has a rating of " + albumObjects[i].rating + "</p>"+
      "Produced in " + albumObjects[i].productionYear +
      
      "</div>" 
      ;
    parentElement.innerHTML = parentElement.innerHTML + elementToAdd;
  
  } 
});

//indsætningen af json
async function fetchContent(url) {
    let request = await fetch(url);
    let json = await request.json();
    return json;
  }

  //knap
  function button (id) {
    var x =document.getElementById(id);
    if (x.style.display ==="none") {
        x.style.display = "block";
    } else {
        x.style.display ="none";
    }
}