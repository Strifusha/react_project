import React, { Component } from "react";
import PropTypes from 'prop-types';
import './SearchPanel.css';
import PokemonList from '../PokemonList/PokemonList.js';

// let allPokemonsList = [];
// const searchInput = document.querySelector('.reach-panel');

// function findPokemon(){
//     let inputValue = searchInput.value.toLowerCase().trim();
  
//     let filteredPokemons = allPokemonsList.filter((pokemon) => {
//         if (pokemon.name.match(inputValue)){
//             return pokemon  
//         } 
//     })
//     renderPokemons(filteredPokemons);
// }

// searchInput.addEventListener('input', findPokemon);

function SearchPanel({text}){
        return (<label>
            <input type="text" className="reach-panel" placeholder={text} />
            </label>)
    }



SearchPanel.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string
}




export default SearchPanel;