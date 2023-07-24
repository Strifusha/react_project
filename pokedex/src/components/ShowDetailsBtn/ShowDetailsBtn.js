import React, { Component} from "react";
import './ShowDetailsBtn.css';
import '../PokemonList/PokemonList.css'

class ShowDetailsBtn extends Component {
 
    render(){
        return(
             <button id="details" onClick={() =>{
                    {this.props.pokemons.filter((pokemon) => {
                        if( this.props.pokemonsId == pokemon.id){
                            return console.log(pokemon), pokemon
                            
                        }   
                    }
               )}
            }}>
            {this.props.text}
            </button>
        )  
    }
}

export default ShowDetailsBtn;