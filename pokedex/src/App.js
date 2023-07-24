import React, { Component } from 'react';
import FullInfo from './components/FullInfo/FullInfo';
import ShowMoreBtn from './components/ShowMoreBtn/ShowMoreBtn';
import PokemonList from './components/PokemonList/PokemonList';
import SearchPanel from './components/SearchPanel/SearchPanel';
import Title from'./components/Title/Title';
//import Header from'./components/Header/Header';
import IdInput from './components/IdInput/IdInput';
import ShowDetailsBtn from './components/ShowDetailsBtn/ShowDetailsBtn';
import { getPokemons } from './utils/getPokemons'

class App extends Component {

  constructor(props){
    super(props);
    this.state = { 
        searchText: '',
        searchId: '',
        items: [],
        pokemonDetails: null
    };

    this.getSearchText = this.getSearchText.bind(this);  
    this.getSearchId = this.getSearchId.bind(this); 
  }

  componentDidMount(){
    const fetchData = getPokemons.bind(this);
    fetchData(); 
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

  filteredPokemons = () => {
    return this.state.items.filter((pokemon) => {
      if (pokemon.name.match(this.state.searchText)){
          return pokemon  
        } 
      }
    )
  }

  //  idMatchPokemons = () => {
    
  //    this.state.items.filter((pokemon) => {
  //       if(this.state.searchId == pokemon.id){
  //        return this.state.searchId
  //        //console.log(pokemon, this.state.searchId), pokemon;
  //    }
  //  })
  //  }
  

  handleMoreInfo = (id) => {
    const currentPokemonDetails = this.state.items.find(pokemon => pokemon.id === +id);
    this.setState({
      pokemonDetails: currentPokemonDetails
    })
    console.log('pokemonDetails', this.state.pokemonDetails)
  }

  render() {
    return (
      <div>
        <Title/>
        {/* <Header text={this.state.searchText}/> */}
        <SearchPanel text='Search by name' value={this.state.searchText} handleClick={this.getSearchText} />
        <IdInput  text='Search by id' value={this.state.searchId} handleClick={this.getSearchId}/>
        <ShowDetailsBtn text = 'Details' pokemonsId = {this.state.searchId} 
                        pokemons={this.filteredPokemons()}/>

        <div id="twoSections"> 
          <PokemonList pokemons={this.filteredPokemons()} handleMoreInfo={this.handleMoreInfo}/>  
          { this.state.pokemonDetails && <FullInfo pokemonDetails={this.state.pokemonDetails}/> }
        </div>
  
        <ShowMoreBtn text='Show More' bgColor='green' showMoreInfo={this.handleMoreInfo}/>
      </div>
    );
  }
}

export default App;
