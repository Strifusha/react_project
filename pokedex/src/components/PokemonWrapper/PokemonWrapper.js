import React, { Component } from "react";

import FullInfo from '../FullInfo/FullInfo';
import PokemonList from '../PokemonList/PokemonList';
import SearchPanel from '../SearchPanel/SearchPanel';
import InputByDetailsInfo from '../InputByDetailsInfo/InputByDetailsInfo';
import Button from '../Button/Button'; 

import { getPokemons } from '../../utils/getPokemons';

class PokemonWrapper  extends Component {

    constructor(props){
        super(props);
        this.state = { 
            searchText: '',
            searchId: '',
            items: [],
            pokemonDetails: null,
            pokemonDetailsById: null,
            offset: 0,
        };
    
        this.getSearchText = this.getSearchText.bind(this);  
        this.getSearchId = this.getSearchId.bind(this); 
      }
    
      componentDidMount(){
        const fetchData = getPokemons.bind(this);
        fetchData(0); 
        this.setState({offset: 12})
      } 
    
      getSearchText = (text) => {
        this.setState({
          searchText: text
        })
      }
    
      getSearchId = (number) => {
        this.setState({
          searchId: number
        })
      }
    
      filteredPokemons = () => this.state.items.filter((pokemon) => pokemon.name.match(this.state.searchText) && pokemon)
    
      handleMoreInfo = (id) => {
        const currentPokemonDetails = this.state.items.find(pokemon => pokemon.id === +id);
        this.setState({
          pokemonDetails: currentPokemonDetails
        })
        //currentPokemonDetails - полная инфа про покемона (справа)
      }
    
      goToPokemonDetails = () => {
      const pokemonDetailsById = this.state.items.find(pokemon => pokemon.id === +this.state.searchId);
        this.setState({
          pokemonDetailsById: pokemonDetailsById
        })
      }
    
      handleLoadMore = () => {
        const fetchData = getPokemons.bind(this);
        fetchData(this.state.offset); 
    
       this.setState({
        offset: this.state.offset + 12
       })
      }

    render() {
        let { searchText, searchId, pokemonDetails, pokemonDetailsById } = this.state;

        return <>
          <SearchPanel text='Search by name' value={searchText} handleClick={this.getSearchText} />
          <InputByDetailsInfo searchId={searchId} handleClick={this.getSearchId} />
          <Button text='Details' pokemonsId={searchId} handleClick={this.goToPokemonDetails} />
          <div id="twoSections"> 
            <PokemonList pokemons={this.filteredPokemons()} handleMoreInfo={this.handleMoreInfo}/>  
            { pokemonDetails && <FullInfo pokemonDetails={pokemonDetails}/> }
          </div>
          <Button text='Show More' bgColor='green' handleClick={this.handleLoadMore}/>
        
        </>
    }
}   

export default PokemonWrapper;