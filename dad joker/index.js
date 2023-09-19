const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apiKey = "zaHJ2ihWN74coYDE5b9Hq3Z48s3lzqZA69YgMGxj";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke(){

    try {
    jokeEl.innerText = "Updating....";
    btnEl.ariaDisabled = true;
    btnEl.innerText = "LOADING...."
    const response = await fetch(apiURL, options)
    const data = await response.json()

    btnEl.ariaDisabled = false;
    btnEl.innerText = "TELL ME A JOKE";

    jokeEl.innerText = data[0].joke;
        
    } catch (error) {
     jokeEl.innerText = "An Error happen, Try Again Later";
     btnEl.ariaDisabled = false;
     btnEl.innerText = "TELL ME A JOKE";

        console.log(error)
    }
    
}




btnEl.addEventListener("click", getJoke)