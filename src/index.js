const body = document.querySelector('body');
let searchDiv = document.createElement('div');
let searchBox = document.createElement('input');
let searchButton = document.createElement('button');
searchButton.textContent = "Search";
searchDiv.appendChild(searchBox);
searchDiv.appendChild(searchButton);
body.appendChild(searchDiv);

searchButton.addEventListener('click', function(){
    searchContent = searchBox.value.trim();
    getCats(searchContent);
});

let img = document.createElement('img');
img.setAttribute('src', '#');

async function getCats(searchContent){
    try {
        const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=GH3b8W0axp1F1Iy69HGH9GuU0Za4fB3a&s=${searchContent}`, {mode: 'cors'});
        const catData = await response.json();
        if (catData.data && catData.data.images && catData.data.images.original.url) {
            img.src = catData.data.images.original.url;
            console.log(catData.data.images.original.url);
            body.appendChild(img);
        } else {
            // Handle case where no GIFs are found
            img.src = 'https://via.placeholder.com/150?text=No+GIF+Found';
            console.log('No GIF found for the search keyword.');
        }
    } catch (error) {
        // Handle network errors or other fetch-related errors
        img.src = 'https://via.placeholder.com/150?text=Error';
        console.error('An error occurred:', error);
    }
    
}