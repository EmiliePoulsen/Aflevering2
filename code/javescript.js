  //objects (14 albums i alt)
  //4 informationer: albumName, artistName, rating og productionYear

  //fortæller hvordan et album ser ud: constructor 
function Album (albumName, artistName, rating, productionYear) {
    this.albumName = albumName;
    this.artistName = artistName;
    this.rating = rating;
    this.productionYear = productionYear;
}

//når man bruger async function skal man være sikker på
//data'en kommer ind først - der bruges metoden .then
fetchContent("albums.json").then((albums) => {

  //bruger loop til at sætte ind i array
let albumObjects = []

//addere først med +1 efter hele loopet er kørt igennem
//for at undgå hardcoding bruges i og album.length - altså istedet for
//at skrive 0 < 14
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

for(i = 0; i<albumObjects.length; i++){
    let parentElement = document.getElementById("content");
    let elementToAdd =
      "<h3>"+albumObjects[i].albumName +"</h3>"+
      "<button onclick='button(" + i+")'>se mere</button>" +

      "<div id='" + i + "'style='display: none;'>"+
      "<p>made by " +
      albumObjects[i].artistName +
      "</p>"+
      " has a " +
      albumObjects[i].rating +
      " rating, and is produced in " +
      albumObjects[i].productionYear +
      "</div>" 
      ;
    parentElement.innerHTML = parentElement.innerHTML + elementToAdd;
  
}



});

//generelt fortæller async at koden ikke behøver vente til done
async function fetchContent(url) {
    let request = await fetch(url);
    let json = await request.json();
    return json;
  }

  function button (id) {
    var x =document.getElementById(id);
    if (x.style.display ==="none") {
        x.style.display = "block";
    } else {
        x.style.display ="none";
    }
}