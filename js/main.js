const firstABV = document.getElementById('firstABV');
const secondABV = document.getElementById('secondABV');
const thirdABV = document.getElementById('thirdABV');
const fourthABV = document.getElementById('fourthABV');
const showAll = document.getElementById('showAll');
const searchFood = document.getElementById('searchFood');
const beerWrapper = document.getElementById('beerWrapper');

// Array that fills up with fetched beers when fetch is completed
let globalBeerList = [];

// Fetches the beers to beerWrapper
fetchBeers();

function fetchBeers() {
    // Fetches the API
    fetch('https://api.punkapi.com/v2/beers?page=1&per_page=80')
        .then(function (response) {
            return response.json()
        })
        .then(function (beers) {
            // Stores the beers globally
            globalBeerList = beers;

            // Loops through all the beers
            let htmlBlock = '';
            for (const beer of beers) {
                // Loops out all beers that doesn't have the keg.png image
                if (beer.image_url != "https://images.punkapi.com/v2/keg.png") {
                    htmlBlock += `
                    <div class="beerInfo">
                        <img src="${beer.image_url}" alt="${beer.name}" />
                        <h2> ${beer.name} ${beer.abv}% </h2>
                        <p class="tagline"> "${beer.tagline}" </p>
                        <p class="description"> ${beer.description} </p>
                        <h3> Food pairings: </h3>
                        <ul>
                            <li>${beer.food_pairing[0]}</li>
                            <li>${beer.food_pairing[1]}</li>
                            <li>${beer.food_pairing[2]}</li>
                        </ul>
                    </div>
                    `;
                }
            }
            beerWrapper.innerHTML = htmlBlock;
        })
        .catch(function (error) {
            console.log(error);
        });
}

firstABV.addEventListener('click', function () {
    // Loops through all the beers
    let htmlBlock = '';
    for (let beer of globalBeerList) {
        /* Loops out beers that has an ABV less or equals 
         * to 4.5 and doesn't have the keg.png image */
        if (beer.abv <= 4.5 && beer.image_url != "https://images.punkapi.com/v2/keg.png") {
            htmlBlock += `
            <div class="beerInfo">
                <img src="${beer.image_url}" alt="${beer.name}" />
                <h2> ${beer.name} ${beer.abv}% </h2>
                <p class="tagline"> "${beer.tagline}" </p>
                <p class="description"> ${beer.description} </p>
                <h3> Food pairings: </h3>
                <ul>
                    <li>${beer.food_pairing[0]}</li>
                    <li>${beer.food_pairing[1]}</li>
                    <li>${beer.food_pairing[2]}</li>
                </ul>
            </div>
            `;
        }
    }
    beerWrapper.innerHTML = htmlBlock;
})

secondABV.addEventListener('click', function () {
    let htmlBlock = '';
    for (let beer of globalBeerList) {
        /* Loops out beers that has an ABV more or equals 
         * to 4.5, less than 7 and doesn't have the keg.png image */
        if (beer.abv >= 4.5 && beer.abv <= 7 && beer.image_url != "https://images.punkapi.com/v2/keg.png") {
            htmlBlock += `
            <div class="beerInfo">
                <img src="${beer.image_url}" alt="${beer.name}" />
                <h2> ${beer.name} ${beer.abv}% </h2>
                <p class="tagline"> "${beer.tagline}" </p>
                <p class="description"> ${beer.description} </p>
                <h3> Food pairings: </h3>
                <ul>
                    <li>${beer.food_pairing[0]}</li>
                    <li>${beer.food_pairing[1]}</li>
                    <li>${beer.food_pairing[2]}</li>
                </ul>
            </div>
            `;
        }
    }
    beerWrapper.innerHTML = htmlBlock;
})

thirdABV.addEventListener('click', function () {
    let htmlBlock = '';
    for (let beer of globalBeerList) {
        /* Loops out beers that has an ABV more or equals 
         * to 7, less than 12 and doesn't have the keg.png image */
        if (beer.abv >= 7 && beer.abv <= 12 && beer.image_url != "https://images.punkapi.com/v2/keg.png") {
            htmlBlock += `
            <div class="beerInfo">
                <img src="${beer.image_url}" alt="${beer.name}" />
                <h2> ${beer.name} ${beer.abv}% </h2>
                <p class="tagline"> "${beer.tagline}" </p>
                <p class="description"> ${beer.description} </p>
                <h3> Food pairings: </h3>
                <ul>
                    <li>${beer.food_pairing[0]}</li>
                    <li>${beer.food_pairing[1]}</li>
                    <li>${beer.food_pairing[2]}</li>
                </ul>
            </div>
            `;
        }
    }
    beerWrapper.innerHTML = htmlBlock;
})

fourthABV.addEventListener('click', function () {
    let htmlBlock = '';
    for (let beer of globalBeerList) {
        /* Loops out beers that has an ABV more or equals 
         * to 12 and doesn't have the keg.png image */
        if (beer.abv >= 12 && beer.image_url != "https://images.punkapi.com/v2/keg.png") {
            htmlBlock += `
            <div class="beerInfo">
                <img src="${beer.image_url}" alt="${beer.name}" />
                <h2> ${beer.name} ${beer.abv}% </h2>
                <p class="tagline"> "${beer.tagline}" </p>
                <p class="description"> ${beer.description} </p>
                <h3> Food pairings: </h3>
                <ul>
                    <li>${beer.food_pairing[0]}</li>
                    <li>${beer.food_pairing[1]}</li>
                    <li>${beer.food_pairing[2]}</li>
                </ul>
            </div>
            `;
        }
    }
    beerWrapper.innerHTML = htmlBlock;
})

showAll.addEventListener('click', function () {
    let htmlBlock = '';
    for (let beer of globalBeerList) {
        // Loops out all beers that doesn't have the keg.png image
        if (beer.image_url != "https://images.punkapi.com/v2/keg.png") {
            htmlBlock += `
            <div class="beerInfo">
                <img src="${beer.image_url}" alt="${beer.name}" />
                <h2> ${beer.name} ${beer.abv}% </h2>
                <p class="tagline"> "${beer.tagline}" </p>
                <p class="description"> ${beer.description} </p>
                <h3> Food pairings: </h3>
                <ul>
                    <li>${beer.food_pairing[0]}</li>
                    <li>${beer.food_pairing[1]}</li>
                    <li>${beer.food_pairing[2]}</li>
                </ul>
            </div>
            `;
        }
    }
    beerWrapper.innerHTML = htmlBlock;
})

searchFood.addEventListener('change', function(){
    const searchValue = searchFood.value.toLowerCase();
    let htmlBlock = '';
    /* If input field is sent with a blank space or if input
     * string length is less than 4 a error message is sent */
    if(searchValue === " " | searchValue.length < 4){
        htmlBlock += `
        <div class="notAllowed">
            <p> Please search with at least 4 characters </p>
        </div>
        `;
    } else {
        for (let beer of globalBeerList) {
            // Loops through the food pairing array
            for (let food_pairing of beer.food_pairing) {
                /* Checks if the search value exists in the food pairing array
                * and then loops out the matching values */
                if(food_pairing.toLowerCase().includes(searchValue) &&
                beer.image_url != "https://images.punkapi.com/v2/keg.png") {
                    htmlBlock += `
                    <div class="beerInfo">
                        <img src="${beer.image_url}" alt="${beer.name}" />
                        <h2> ${beer.name} ${beer.abv}% </h2>
                        <p class="tagline"> "${beer.tagline}" </p>
                        <p class="description"> ${beer.description} </p>
                        <h3> Food pairings: </h3>
                        <ul>
                            <li>${beer.food_pairing[0]}</li>
                            <li>${beer.food_pairing[1]}</li>
                            <li>${beer.food_pairing[2]}</li>
                        </ul>
                    </div>
                    `;
                }
            }
        }
    }
    document.getElementById('searchFood').value = '';
    beerWrapper.innerHTML = htmlBlock;
})