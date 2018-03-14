# `Async & API` :satellite:

__Victor Kilander__ | [GitHub Pages](https://vctrklndr.github.io/JavaScript-AJAX) / [GitHub Repository](https://github.com/vctrklndr/JavaScript-AJAX)

## `About`
A small beer application where you can read descriptions about different beers from __Brewdog__ brewery and sort them by ABV (alcohol by volume) and search for food pairings.

## `Technologies used`
- SASS

## `About the API` :beer:
I've used the [Punk API](https://punkapi.com) which holds the whole Brewdog beer catalogue. 

## `Working process` :wrench:
I started out by choosing the API and decided what I wanted to do with it. Then I made a basic HTML structure and fetched and looped out the whole API into the DOM.

After managing to get the API visible in the DOM I started to do different selections of what I wanted to show. First I started off by just displaying the title of the beer and the ABV. Then I added some buttons and added eventListeners to start sorting what I fetched (beers by ABV).

Wasn't really satisfied with just sorting the beers by ABV, so I added an input field where you can search on food pairings.

### `To dos` :clipboard:
- If the search value does exists multiple times in the food pairing array, it should only loop out one time
- Add an error message if the search value doesn't match any food pairing
- Manage to sort the ABV ascending / descending
- Instead of printing out the description of the beer I would like to have a 'read more' button