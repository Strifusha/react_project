import React from "react";
import { renderPokemonAbilities } from "../utils/renderPokemonAbilities";
import './ShowShortInfo.css'

import { renderPokemonsTypes } from "../utils/renderPokemonTypes";

function ShowShortInfo(props){
    const pokemonInfo = props.pokemonDetails
    // console.log(pokemonInfo);
    return <div id="shortPokemonInfo">
        <h2 id='pokemonName'>{pokemonInfo.name}</h2>

        <img src={pokemonInfo.sprites.other.dream_world.front_default}
                        className="pokemons-img" 
                        alt={pokemonInfo.name} />

        <span className="spanType">Type</span>
        {renderPokemonsTypes(pokemonInfo.types)}

        <span className="spanType">Ability</span>
        {renderPokemonAbilities(pokemonInfo.abilities)}

    </div>
}
export default ShowShortInfo;