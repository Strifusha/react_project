import React, { Component } from 'react';
import FullInfo from './components/FullInfo/FullInfo';
import PokemonList from './components/PokemonList/PokemonList';
import SearchPanel from './components/SearchPanel/SearchPanel';
import Title from'./components/Title/Title';
import InputByDetailsInfo from './components/InputByDetailsInfo/InputByDetailsInfo';
import Button from './components/Button/Button'; 
import { Layout} from './components/layout/Layout'
import { getPokemons } from './utils/getPokemons';
import {Routes, Route } from 'react-router-dom';

class App extends Component {

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
    // console.log('pokemonDetailsById', pokemonDetailsById);
    // console.log('searchId', searchId)

    return (
      <div>
        <Title/>
        <SearchPanel text='Search by name' value={searchText} handleClick={this.getSearchText} />
        <InputByDetailsInfo searchId={searchId} handleClick={this.getSearchId} />
        <Button text='Details' pokemonsId={searchId} handleClick={this.goToPokemonDetails} />


        <Routes>
          <Route path='/' element={<Layout/>}>

              <Route path="/about" element={ pokemonDetailsById && <FullInfo pokemonDetails={pokemonDetailsById}/>}/>
            
          </Route>
        </Routes>
 
        <div id="twoSections"> 
          <PokemonList pokemons={this.filteredPokemons()} handleMoreInfo={this.handleMoreInfo}/>  
          { pokemonDetails && <FullInfo pokemonDetails={pokemonDetails}/> }
        </div>
        <Button text='Show More' bgColor='green' handleClick={this.handleLoadMore}/>
      </div>
    );
  }
}

export default App;
