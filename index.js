// //data attribute/keyword on an html element

// const getPokemon = async() => {
//     const response = await fetch(`https://pokeapi.co/api/v2/pokemon`);
//     const data = await response.json();
//     const allPokemon = data.results;
//     render(allPokemon)
// }


// const render = (pokemonArr) => {
//     const pokeList = pokemonArr.map((singlePokemon) => {
//     const splitString = singlePokemon.url.split(`/`);
//     //here we are splitting the array like string of the URL by the symbol /
//     //this is allowing us to parce through the url and access the pokemons number index becaue it is between //
//     //then we are able to console log the splitURL and use an array bracket to indicate the numbers index
//     const pokemonId = splitString[6];
//     console.log(splitString[6])
//     return `<li><a href="" data-number="${pokemonId}">${singlePokemon.name}</a></li>`;
// });
// const ul = document.querySelector(`ul`);
// ul.innerHTML = pokeList.join(``);
// }

// const addLinkEventListeners = () => {
//     const links = document.querySelector(`a`);
//     for( let i = 0; i< links.length; i++) {
//     const link = links[i];
//     link.addEventListener(`click`, () => {
//         console.log(`hello`)
//     })
// }

// }
// const init = async() => {
//     const gottenPokemon = await getPokemon();
//     render(gottenPokemon);
//     addLinkEventListeners();
// }
// init();

const getPokemon = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon`);
    const data = await response.json();
    const allPokemon = data.results;
    return allPokemon;
  };
  
  const render = (pokemonArr) => {
    const pokeList = pokemonArr.map((singlePokemon) => {
      const splitString = singlePokemon.url.split(`/`);
      const pokemonId = splitString[6];
      return `<li><a href="" data-number="${pokemonId}">${singlePokemon.name}</a></li>`;
    });
    const ul = document.querySelector(`ul`);
    ul.innerHTML = pokeList.join(``);
  };
  
  const addLinkEventListeners = () => {
    const links = document.querySelectorAll(`a`);
    for (let i = 0; i < links.length; i++) {
      const link = links[i];
      link.addEventListener(`click`, (event) => {
        event.preventDefault();
        console.log(`hello`);
      });
    }
  };
  
  const init = async () => {
    const gottenPokemon = await getPokemon();
    render(gottenPokemon);
    addLinkEventListeners();
  };
  
  init();
  