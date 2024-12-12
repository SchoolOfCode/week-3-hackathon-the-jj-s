const memeTitle = document.getElementById("meme-title");
const memeImage = document.getElementById("meme-image");
const generateMemeBtn = document.getElementById("meme-button")

//we need an async await function for fetching the API
async function fetchMemeApi() {
    try {
        const subreddit = 'ProgrammerHumor'
        const url = `https://meme-api.com/gimme/${subreddit}`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        
        // refractor this into seperate function
            memeTitle.innerText = data.title;
            memeImage.src = data.url;
            memeImage.alt = data.title;

    }

    catch (error) {
        console.error(`ERROR: ${error.message}`);
    }
}

window.addEventListener("DOMContentLoaded", fetchMemeApi)
generateMemeBtn.addEventListener("click", fetchMemeApi);


//fetchMemeApi();
//make a function for displaying the meme

//function for random generator button.
//add an eventListener for the image. 
//add an eventListener for the button.

//Things to fix
    // nsfw memes still appearing randomly
    // 