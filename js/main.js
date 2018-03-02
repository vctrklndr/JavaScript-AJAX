function getBeers() {
    fetch(`https://api.punkapi.com/v2/beers`)
        .then((response) => response.json())
        .then((beerData) => {
            console.log(beerData);
        })
        .catch((error) => {
            console.log(error);
        })
}

getBeers();