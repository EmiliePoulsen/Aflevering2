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
//data'en kommer ind først - man bruger metoden .then
fetchContent("albums.json").then((albums) => {

  //bruger loop til at sætte ind i array
let albumObjects = []

//addere først med +1 efter hele loopet er kørt igennem
  for (let i=0 ; i < albums.length; i++) {
    const album = new Album (
        albums[i].albumName,
        albums[i].artistName,
        albums[i].rating,
        albums[i].productionYear
    );

    //sætter det ind i arrayet
    albumObjects.push(album);
  };
});

//generelt fortæller async at koden ikke behøver vente til done
async function fetchContent(url) {
    let request = await fetch(url);
    let json = await request.json();
    return json;
  }