import React from 'react';
import './FullInfo.css';

function FullInfo() {
    const getGridItems = document.querySelectorAll('.grid-item');

    getGridItems.forEach(item => {
        item.addEventListener('click', showPokemonDetails )  
    })    
    return <section id="big-pokemon-section" />
}

function showPokemonDetails(){
    //убрать бордер пока не выбран покемон в начале
    //прокручивать табло с прокруткой вниз всех покемонов
    const pokemonId = this.getAttribute("data-id");
    const infoArea = document.getElementById('big-pokemon-section');

    const currentPokemonDetails = allPokemonsList.find(pokemon => pokemon.id === +pokemonId);
   
    infoArea.innerHTML = `<img src='${currentPokemonDetails.sprites.front_shiny}'  id="pokemon-big-img" alt="${currentPokemonDetails.name}">
                          <h2>${currentPokemonDetails.name}</h2>
                          <div id='pokemonFullInfo'>
                            <span class='spanInfo'>Type</span>
                            <span class='spanInfo'>${renderPokemonsTypes(currentPokemonDetails.types)}</span>
                            ${renderPokemonStats(currentPokemonDetails.stats)}
                          </div>`
}

export default FullInfo;