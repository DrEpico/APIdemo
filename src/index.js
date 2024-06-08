const body = document.querySelector('body');
let searchDiv = document.createElement('div');
let searchBox = document.createElement('input');
let searchButton = document.createElement('button');
searchButton.textContent = "Search";
searchDiv.appendChild(searchBox);
searchDiv.appendChild(searchButton);
body.appendChild(searchDiv);

// searchButton.addEventListener();

let img = document.createElement('img');
img.setAttribute('src', '#');

async function getCats(){
    const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=GH3b8W0axp1F1Iy69HGH9GuU0Za4fB3a&s=cats', {mode: 'cors'});
    const catData = await response.json();
    img.src = catData.data.images.original.url;
    console.log(catData.data.images.original.url);
    body.appendChild(img);
}
getCats();



// free api key, don't bother