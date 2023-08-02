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

const showInfo = (pokemon) => {
    console.log(pokemon.name);
    return  <h2 className='pokemonName'>{pokemon.name}</h2> 
}

const getPokemonInfo = (id) => {
    let url = `https://pokeapi.co/api/v2/pokemon/${id}/`
    fetch(url)
    .then(responseStatus)
    .then(json)
    .then(async (pokemon) => {
        const infoPokemon = pokemon
       
        return infoPokemon;
    })
    .catch(function(err){
        console.log('error -->', err);
    })

    function responseStatus(response){
            if(response.status !== 200){
                return Promise.reject(new Error(response.statusText))
            }
            return Promise.resolve(response);
        }

    function json(response){
            return response.json();
        }
}

const FullInfo = (props) => {
    const currentPokemonDetails = props.pokemonDetails;
    const { id } = useParams();

    getPokemonInfo(id);
   
    
        return <>   
            <div id='pokemonFullInfo'>
            <h1>Pokemon {id}</h1>
            <div>
            {showInfo(id)}
            </div>
            {/* <h2 className='pokemonName'>{showInfo()}</h2> */}
                {/* <img src={currentPokemonDetails.sprites.front_shiny}  
                    id="pokemon-big-img" 
                    alt={currentPokemonDetails.name} />
                <span className='spanInfo'>Type</span>
                // <span className='spanInfo'>{renderPokemonsTypes(currentPokemonDetails.types)}</span>
                {renderPokemonsInfo(currentPokemonDetails)} */}
            </div>
    </>
    
}

export default FullInfo;
