const firstABV = document.getElementById('firstABV');
const secondABV = document.getElementById('secondABV');
const thirdABV = document.getElementById('thirdABV');
const fourthABV = document.getElementById('fourthABV');
const showAll = document.getElementById('showAll');
const beerWrapper = document.getElementById('beerWrapper');

let globalBeerList = [];

fetchBeers();

firstABV.addEventListener('click', function () {
    let htmlBlock = '';
    if(secondABV.checked || thirdABV.checked || fourthABV.checked) {
        secondABV.checked = false;
        thirdABV.checked = false;
        fourthABV.checked = false;
    }
    if(this) {
        for(let beer of globalBeerList) {
            if(beer.abv <= 3.5){
                htmlBlock += `
                <div class="beerInfo">
                    <img src="${beer.image_url}" alt="${beer.name}" />
                    <h2> ${beer.name} </h2>
                    <p> ${beer.abv}%</p>
                </div>
            `;
            }
        }
    } else {
        for (let beer of globalBeerList) {
            htmlBlock += `
            <div class="beerInfo">
                <img src="${beer.image_url}" alt="${beer.name}" />
                <h2> ${beer.name} </h2>
                <p> ${beer.abv}% </p>
            </div>
            `;
        }
    }
    beerWrapper.innerHTML = htmlBlock;
})

secondABV.addEventListener('click', function () {
    let htmlBlock = '';
    if(firstABV.checked || thirdABV.checked || fourthABV.checked) {
        firstABV.checked = false;
        thirdABV.checked = false;
        fourthABV.checked = false;
    }
    if(this) {
        for(let beer of globalBeerList) {
            if(beer.abv >= 3.6 && beer.abv <= 5.2){
                htmlBlock += `
                <div class="beerInfo">
                    <img src="${beer.image_url}" alt="${beer.name}" />
                    <h2> ${beer.name} </h2>
                    <p> ${beer.abv}%</p>
                </div>
            `;
            }
        }
    } else {
        for (let beer of globalBeerList) {
            htmlBlock += `
            <div class="beerInfo">
                <img src="${beer.image_url}" alt="${beer.name}" />
                <h2> ${beer.name} </h2>
                <p> ${beer.abv}% </p>
            </div>
            `;
        }
    }
    beerWrapper.innerHTML = htmlBlock;
})

thirdABV.addEventListener('click', function () {
    let htmlBlock = '';
    if(firstABV.checked || secondABV.checked || fourthABV.checked) {
        firstABV.checked = false;
        secondABV.checked = false;
        fourthABV.checked = false;
    }
    if(this) {
        for(let beer of globalBeerList) {
            if(beer.abv >= 5.3 && beer.abv <= 12){
                htmlBlock += `
                <div class="beerInfo">
                    <img src="${beer.image_url}" alt="${beer.name}" />
                    <h2> ${beer.name} </h2>
                    <p> ${beer.abv}%</p>
                </div>
            `;
            }
        }
    } else {
        for (let beer of globalBeerList) {
            htmlBlock += `
            <div class="beerInfo">
                <img src="${beer.image_url}" alt="${beer.name}" />
                <h2> ${beer.name} </h2>
                <p> ${beer.abv}% </p>
            </div>
            `;
        }
    }
    beerWrapper.innerHTML = htmlBlock;
})

fourthABV.addEventListener('click', function () {
    let htmlBlock = '';
    if(firstABV.checked || secondABV.checked || thirdABV.checked) {
        firstABV.checked = false;
        secondABV.checked = false;
        thirdABV.checked = false;
    }
    if(this) {
        for(let beer of globalBeerList) {
            if(beer.abv >= 12){
                htmlBlock += `
                <div class="beerInfo">
                    <img src="${beer.image_url}" alt="${beer.name}" />
                    <h2> ${beer.name} </h2>
                    <p> ${beer.abv}%</p>
                </div>
            `;
            }
        }
    } else {
        for (let beer of globalBeerList) {
            htmlBlock += `
            <div class="beerInfo">
                <img src="${beer.image_url}" alt="${beer.name}" />
                <h2> ${beer.name} </h2>
                <p> ${beer.abv}% </p>
            </div>
            `;
        }
    }
    beerWrapper.innerHTML = htmlBlock;
})

showAll.addEventListener('click', function () {
    let htmlBlock = '';
    for (let beer of globalBeerList) {
        htmlBlock += `
        <div class="beerInfo">
            <img src="${beer.image_url}" alt="${beer.name}" />
            <h2> ${beer.name} </h2>
            <p> ${beer.abv}% </p>
        </div>
        `;
    }
    beerWrapper.innerHTML = htmlBlock;
})

function fetchBeers(){
  fetch('https://api.punkapi.com/v2/beers?page=1&per_page=78')
    .then(function(response) {
      return response.json()
    })
    .then(function(beers) {
      globalBeerList = beers;

      let htmlBlock = '';
      for (const beer of beers) {
        htmlBlock += `
        <div class="beerInfo">
            <img src="${beer.image_url}" alt="${beer.name}" />
            <h2> ${beer.name} </h2>
            <p> ${beer.abv}% </p>
        </div>
        `;
      }
      beerWrapper.innerHTML = htmlBlock;
    })
    .catch(function(error) {
      console.log(error);
    });
}