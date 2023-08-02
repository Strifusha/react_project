import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"

import { renderPokemonsTypes } from '../../utils/renderPokemonTypes';
import getInfoById from '../../utils/getInfoById';
import './FullInfo.css';


const renderPokemonsInfo = (pokemon) => {

    let pokemonStats = pokemon.stats.map(stat =>{
        return <>
            <span key ={stat.base_stat} className = 'spanInfo'> {stat.base_stat}</span>  <span key ={stat.stat.name} className = 'spanInfo'> {stat.stat.name}</span> 
        </>
    })
    return pokemonStats
  
}

const FullInfo = (props) => {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState()

    useEffect(() => {
        async function fetchData() {
            const pokeminDetails = await getInfoById(id);
            console.log(pokeminDetails)
            setPokemon(pokeminDetails)
        }
        fetchData();
        
    }, [id])
    
    return <>   
            <div id='pokemonFullInfo'>
            <h1>Pokemon {id}</h1>
            <h2 className='pokemonName'>{pokemon?.name}</h2>
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
