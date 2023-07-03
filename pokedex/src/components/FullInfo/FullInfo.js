import React, {Component} from 'react';
import { renderPokemonsTypes } from '../../utils/renderPokemonTypes';
import './FullInfo.css';


class FullInfo extends Component {

    render() {
        const currentPokemonDetails = this.props.pokemonDetails;
        return <>
        <img src={currentPokemonDetails.sprites.front_shiny}  id="pokemon-big-img" alt={currentPokemonDetails.name} />
            <h2>{currentPokemonDetails.name}</h2>
            <div id='pokemonFullInfo'>
                <span class='spanInfo'>Type</span>
            <span class='spanInfo'>{renderPokemonsTypes(currentPokemonDetails.types)}</span>
                {/* {renderPokemonStats(currentPokemonDetails.stats)} */}
            </div>
    </>
    }
}

export default FullInfo;
