import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import { renderPokemonAbilities } from "../utils/renderPokemonAbilities";
import FullInfo from "../components/FullInfo/FullInfo";
import './ShowShortInfo.css'

import { renderPokemonsTypes } from "../utils/renderPokemonTypes";

function ShowShortInfo(props){
    const pokemonInfo = props.pokemonDetails
    const id = pokemonInfo.id;
    // console.log(pokemonId);
    return <div id="shortPokemonInfo">
        <h2 id='pokemonName'>{pokemonInfo.name}</h2>

        <img src={pokemonInfo.sprites.other.dream_world.front_default}
                        className="pokemons-img" 
                        alt={pokemonInfo.name} />

        <span className="spanType">Type</span>
        {renderPokemonsTypes(pokemonInfo.types)}

        <span className="spanType">Ability</span>
        {renderPokemonAbilities(pokemonInfo.abilities)}

        <ul>
            <li>
               <Link to={`/pokemon/${id}`} className='pokemon-Link details'>Details</Link>
            </li>
        </ul>

    </div>
}
export default ShowShortInfo;