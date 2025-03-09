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
  //Laver et loop der sætter de 4 ting ind på hjemmesiden
  //document.getElementById("Musikarkiv").innerHTML = albumObjects[0].albumName
  const tbody=document.getElementById("musikarkiv").getElementsByTagName("tbody")[0];
  for (let i=0 ; i < albumObjects.length; i++) {
    const tr=document.getElementById("tr");

    const tdalbumName=document.createElement("td");
    tdalbumName.textcontent=albumObjects[i].albumName;

    tr.appendChild(tdalbumName);
    tbody.appendChild(tr);
  }
});

//generelt fortæller async at koden ikke behøver vente til done
async function fetchContent(url) {
    let request = await fetch(url);
    let json = await request.json();
    return json;
  }



  


