const firstABV = document.getElementById('firstABV');
const secondABV = document.getElementById('secondABV');
const thirdABV = document.getElementById('thirdABV');
const fourthABV = document.getElementById('fourthABV');
const showAll = document.getElementById('showAll');
const beerWrapper = document.getElementById('beerWrapper');



let globalBeerList = [];

fetchBeers();

function fetchBeers() {
    fetch('https://api.punkapi.com/v2/beers?page=1&per_page=80')
        .then(function (response) {
            return response.json()
        })
        .then(function (beers) {
            globalBeerList = beers;
            
            let htmlBlock = '';
            for (const beer of beers) {
                if(beer.image_url != "https://images.punkapi.com/v2/keg.png"){
                    htmlBlock += `
                    <div class="beerInfo">
                        <img src="${beer.image_url}" alt="${beer.name}" />
                        <h2> ${beer.name} ${beer.abv}% </h2>
                        <p class="tagline"> "${beer.tagline}" </p>
                        <button id="readMoreButton">Read more</button>
                        <div id="readMore">
                            <p> ${beer.description} </p>
                        </div>
                    </div>
                    `;
                    setTimeout(function(){
                        readMoreButton = document.getElementById('readMoreButton');
                        readMoreButton.addEventListener('click', function(){
                            readMore = document.getElementById('readMore').style.display = "block";
                            readMoreButton.remove();
                        })
                     });
                }
            }
            beerWrapper.innerHTML = htmlBlock;
        })
        .catch(function (error) {
            console.log(error);
        });
}

firstABV.addEventListener('click', function () {
    let htmlBlock = '';
    for (let beer of globalBeerList) {
        if (beer.abv <= 4.5 && beer.image_url != "https://images.punkapi.com/v2/keg.png") {
            htmlBlock += `
            <div class="beerInfo">
                <img src="${beer.image_url}" alt="${beer.name}" />
                <h2> ${beer.name} ${beer.abv}% </h2>
                <p class="tagline"> "${beer.tagline}" </p>
            </div>
            `;
        }
    }
    beerWrapper.innerHTML = htmlBlock;
})

secondABV.addEventListener('click', function () {
    let htmlBlock = '';
    for (let beer of globalBeerList) {
        if (beer.abv >= 4.5 && beer.abv <= 7 && beer.image_url != "https://images.punkapi.com/v2/keg.png") {
            htmlBlock += `
            <div class="beerInfo">
                <img src="${beer.image_url}" alt="${beer.name}" />
                <h2> ${beer.name} ${beer.abv}% </h2>
                <p class="tagline"> "${beer.tagline}" </p>
            </div>
            `;
        }
    }
    beerWrapper.innerHTML = htmlBlock;
})

thirdABV.addEventListener('click', function () {
    let htmlBlock = '';
    for (let beer of globalBeerList) {
        if (beer.abv >= 7 && beer.abv <= 12 && beer.image_url != "https://images.punkapi.com/v2/keg.png") {
            htmlBlock += `
            <div class="beerInfo">
                <img src="${beer.image_url}" alt="${beer.name}" />
                <h2> ${beer.name} ${beer.abv}% </h2>
                <p class="tagline"> "${beer.tagline}" </p>
            </div>
            `;
        }
    }
    beerWrapper.innerHTML = htmlBlock;
})

fourthABV.addEventListener('click', function () {
    let htmlBlock = '';
    for (let beer of globalBeerList) {
        if (beer.abv >= 12) {
            htmlBlock += `
            <div class="beerInfo">
                <img src="${beer.image_url}" alt="${beer.name}" />
                <h2> ${beer.name} ${beer.abv}% </h2>
                <p class="tagline"> "${beer.tagline}" </p>
            </div>
            `;
        }
    }
    beerWrapper.innerHTML = htmlBlock;
})

showAll.addEventListener('click', function () {
    let htmlBlock = '';
    for (let beer of globalBeerList) {
        if(beer.image_url != "https://images.punkapi.com/v2/keg.png") {
            htmlBlock += `
            <div class="beerInfo">
                <img src="${beer.image_url}" alt="${beer.name}" />
                <h2> ${beer.name} ${beer.abv}% </h2>
                <p class="tagline"> "${beer.tagline}" </p>
            </div>
            `;
        }
    }
    beerWrapper.innerHTML = htmlBlock;
})