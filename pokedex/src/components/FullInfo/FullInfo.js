import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"
import { renderPokemonAbilities } from '../../utils/renderPokemonAbilities';
import { renderPokemonsTypes } from '../../utils/renderPokemonTypes';
import {renderPokemonsStats} from '../../utils/renderPokemonsStats'
import getInfoById from '../../utils/getInfoById';
import './FullInfo.css';

const FullInfo = () => {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState()

    useEffect(() => {
        async function fetchData() {
            const pokemonDetails = await getInfoById(id);
            setPokemon(pokemonDetails)
        }
        fetchData();   
    }, [id])
    
    return <>   
            <div id='pokemonFullInfo'>
                <h2 className='pokemonName'>{pokemon?.name}</h2>
                
                <div className='imgDiv'>
                    <img src={pokemon?.sprites.other.dream_world.front_default}
                        className="pokemon-big-img" 
                        alt={pokemon?.name} />

                    <img src={pokemon?.sprites.other["official-artwork"]["front_default"]}
                        className="pokemon-big-img" 
                        alt={pokemon?.name} />
                </div>
               
                <div id='pokemonStats'>
                    <span className='spanInfo'>Type</span>
                    <span className='spanInfo'>{renderPokemonsTypes(pokemon?.types)}</span>
                    {renderPokemonsStats(pokemon)} 
                    
                    <span className='spanInfo'>Ability</span>
                    <span className='spanInfo'>{renderPokemonAbilities(pokemon?.abilities)} </span>  
                </div>
            </div>
        </>   
}

export default FullInfo;
