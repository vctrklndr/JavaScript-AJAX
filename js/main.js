function getBeer() {
    fetch(`https://api.punkapi.com/v2/beers?page=2&per_page=80`)
    .then(function(response){
        return response.json();
    })
    .then(function(beerData){
        displayBeer(beerData);
    })
    .catch(function(error){
        console.log(error);
    })
}

getBeer();

function displayBeer(beerData){
    const beerInfoElement = document.getElementById('beerInfo');

    let beerInfo = `
        <img src="${beerData[25].image_url}" alt="${beerData[25].name} " />
        <h2> ${beerData[25].name} </h2>
        <p class="tagline"> ${beerData[25].tagline} </p>
        <p class="description"> ${beerData[25].description} </p>
    `;
    beerInfoElement.innerHTML = beerInfo;
}


// function displayBeer(beerData){
//     const beerInfoElement = document.getElementById('beerInfo');

//     let beerInfo = '';
//     for (i = 0; i < beerData.length; i++) {
//         console.log(beerData[i].name);
//         beerInfo += `
//         <div class="beerWrapper">
//             <img src="${beerData[i].image_url}" alt="${beerData[i].name} " />
//             <p> ${beerData[i].name} </p>
//         </div>
//     `}
//     beerInfoElement.innerHTML = beerInfo;
// }