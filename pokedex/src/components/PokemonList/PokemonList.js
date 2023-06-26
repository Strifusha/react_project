import React from "react";
import './PokemonList.css';

async function getInfoByUrl(shortPokemonList) {
  
  let pokemonUrs = shortPokemonList.map(item => item.url)
    
  const pokemonData = await Promise.all(

    pokemonUrs.map(async (url) => {
        const response = await fetch(url);
        const pokemonDetails = await response.json();
        return pokemonDetails;  
    })
  );

  return pokemonData
}

function responseStatus(response){
    if(response.status !== 200){
        return Promise.reject(new Error(response.statusText))
    }
    return Promise.resolve(response);
}

function json(response){
    return response.json();
}

class PokemonList extends React.Component {
      constructor(props){
          super(props);
          this.state = { 
              items: this.props.pokemons
          };
     }

      componentDidMount(){
        let url = `https://pokeapi.co/api/v2/pokemon/?limit=12&offset=0`;
        
        fetch(url) 
        .then(responseStatus)
        .then(json)
        .then(async (data) => {
             const dataPokemons = await getInfoByUrl(data.results);
             this.setState({ items: dataPokemons });
        })
        .catch(function(err){
            console.log('error -->', err)
        })
      }

      renderPokemonsTypes(types) {        
            return types.map(type => {
                return <span className={`pokemonAbility ability_${type.type.name}`}>{type.type.name}</span>
            });
      } 

    render(){
        return(
            <section id="pokemons-container"> 
                <ul>
                    {this.state.items && this.state.items.map(pokemon => {
                        return (<div className='grid-item' data-id={pokemon.id}>
                        <img src={pokemon.sprites.front_default} className='pokemon-img' alt="Pokemon's pic" />
                        <h3 className='pokemon-name'>{pokemon.name}</h3>
                        <div>{this.renderPokemonsTypes(pokemon.types)}</div>
                    </div>)
                    })}
                </ul>
            </section>
        )
    }
}

 export default PokemonList;