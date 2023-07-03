import React, { Component } from 'react';
import FullInfo from './components/FullInfo/FullInfo';
import ShowMoreBtn from './components/ShowMoreBtn/ShowMoreBtn';
import PokemonList from './components/PokemonList/PokemonList';
import SearchPanel from './components/SearchPanel/SearchPanel';
//import Title from'./components/Title/Title';


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

function getPokemons(){
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

function responseStatus(response){
    if(response.status !== 200){
        return Promise.reject(new Error(response.statusText))
    }
    return Promise.resolve(response);
}

function json(response){
    return response.json();
}



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
        {/* <Title/> */}
        <SearchPanel text='Search by name' value={this.state.searchText} handleClick={this.getSearchText} />
  
        <div id="twoSections"> 
          <PokemonList pokemons={this.filteredPokemons()} handleMoreInfo={this.handleMoreInfo}/>  
          { this.state.pokemonDetails && <FullInfo pokemonDetails={this.state.pokemonDetails}/> }
        </div>
         
        <ShowMoreBtn text='Show More' bgColor='green'/>
      </div>
    );
  }
}

export default App;
