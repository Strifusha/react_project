import React, {Component} from 'react';
import { renderPokemonsTypes } from '../../utils/renderPokemonTypes';
import './FullInfo.css';
import { useParams } from "react-router-dom"


const renderPokemonsInfo = (pokemon) => {

    let pokemonStats = pokemon.stats.map(stat =>{
        return <>
            <span key ={stat.base_stat} className = 'spanInfo'> {stat.base_stat}</span>  <span key ={stat.stat.name} className = 'spanInfo'> {stat.stat.name}</span> 
        </>
    })
    return pokemonStats
  
}


const FullInfo = (props) => {
    
        const currentPokemonDetails = props.pokemonDetails;
        const { id } = useParams();
        console.log(id)
        return <>   
            <div id='pokemonFullInfo'>
            <h1>Pokemon {id}</h1>
                {/* <h2 className='pokemonName'>{currentPokemonDetails.name}</h2>
                <img src={currentPokemonDetails.sprites.front_shiny}  
                    id="pokemon-big-img" 
                    alt={currentPokemonDetails.name} />
                <span className='spanInfo'>Type</span>
                <span className='spanInfo'>{renderPokemonsTypes(currentPokemonDetails.types)}</span>
                {renderPokemonsInfo(currentPokemonDetails)} */}
            </div>
    </>
    }


export default FullInfo;
