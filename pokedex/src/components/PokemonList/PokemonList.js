import React, { Component } from "react";
import { renderPokemonsTypes } from '../../utils/renderPokemonTypes';
import './PokemonList.css';

class PokemonList extends Component {

    render(){
        return(
            <section id="pokemons-container"> 
                {this.props.pokemons && this.props.pokemons.map(pokemon => {
                    return (<div className='grid-item' data-id={pokemon.id} onClick={() => {
                        this.props.handleMoreInfo(pokemon.id)
                        //console.log(pokemon.id)
                        }}>
                        <img src={pokemon.sprites.front_default} className='pokemon-img' alt="Pokemon's pic" />
                        <h3 className='pokemon-name'>{pokemon.name}</h3>
                        <div>{renderPokemonsTypes(pokemon.types)}</div>
                    </div>)
                })}
                
            </section>
        )
    }
}

 export default PokemonList;