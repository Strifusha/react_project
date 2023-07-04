import React, { Component } from "react";
import PropTypes from 'prop-types';
import { StyledInput } from './SearchPanel.style';

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


class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.handleTextChange = this.handleTextChange.bind(this);
      }

      handleTextChange(event) {
        const inputText = event.target.value;
        this.props.handleClick(inputText);
      }
      
    render() {
        return (<label>
            <StyledInput 
                type="text" 
                className="reach-panel" 
                placeholder={this.props.text}
                value={this.props.value}
                onChange={this.handleTextChange}
            />
            </label>)
    }
}

SearchPanel.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string
}

export default SearchPanel;