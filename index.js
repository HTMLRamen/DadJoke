const btnEL = document.getElementById("btn")
const jokeE1 = document.getElementById("joke")
const apiKey = "OeAwiVVcbTRnSZH6aZZ8+w==wq7Zk5KKE4t8h7KK";

const options = {
method: "GET",
headers: {
    "X-Api-Key": apiKey,
},
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke(){

    try {
        jokeE1.innerText = "(>T-T)>";
    btnEL.disabled = true;
    btnEL.innerText = "Refreshing...";
    const response = await fetch(apiURL, options)
    const data = await response.json()

    btnEL.disabled = false;
    btnEL.innerText = "Generate Joke";



    jokeE1.innerText = data[0].joke;
    } catch (error) {
        jokeE1.innerText = "Check Connection";
        btnEL.disabled = false;
        btnEL.innerText = "Generate Joke";    
        console.log(error)
        
    }

    
}

btnEL.addEventListener("click", getJoke)

