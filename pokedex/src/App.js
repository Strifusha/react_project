import React, { Component } from 'react';
import FullInfo from './components/FullInfo/FullInfo';
import ShowMoreBtn from './components/ShowMoreBtn/ShowMoreBtn';
import PokemonList from './components/PokemonList/PokemonList';
import SearchPanel from './components/SearchPanel/SearchPanel';
import Title from'./components/Title/Title';
import Header from'./components/Header/Header';
import { getPokemons } from './utils/getPokemons'

class App extends Component {

  constructor(props){
    super(props);
    this.state = { 
        searchText: '',
        items: [],
        pokemonDetails: null
    };

    this.getSearchText = this.getSearchText.bind(this);  
  }

  componentDidMount(){
    const fetchData = getPokemons.bind(this);
    fetchData(); 
  } 

  getSearchText = (text) => {
    console.log(text)
    this.setState({
      searchText: text
    })
  }

  filteredPokemons = () => {
    return this.state.items.filter((pokemon) => {
      if (pokemon.name.match(this.state.searchText)){
          return pokemon  
      } 
    })
  }

  handleMoreInfo = (id) => {
    const currentPokemonDetails = this.state.items.find(pokemon => pokemon.id === +id);
    this.setState({
      pokemonDetails: currentPokemonDetails
    })
  }

  render() {
    return (
      <div>
         <Title/>
         <Header text={this.state.searchText}/>
        <SearchPanel text='Search by name' value={this.state.searchText} handleClick={this.getSearchText} />
        <div id="twoSections"> 
          <PokemonList pokemons={this.filteredPokemons()} handleMoreInfo={this.handleMoreInfo}/>  
          { this.state.pokemonDetails && <FullInfo pokemonDetails={this.state.pokemonDetails}/> }
        </div>
         
        <ShowMoreBtn text='Show More' bgColor='green' showMoreInfo={this.showMorePokemons}/>
      </div>
    );
  }
}

export default App;
