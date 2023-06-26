import FullInfo from './components/FullInfo/FullInfo';
import ShowMoreBtn from './components/ShowMoreBtn/ShowMoreBtn';
import PokemonList from './components/PokemonList/PokemonList';
import SearchPanel from './components/SearchPanel/SearchPanel';
import Title from'./components/Title/Title';

getPokemons();

var allPokemons = [];

function getPokemons(offset = 0){
    let url = `https://pokeapi.co/api/v2/pokemon/?limit=12&offset=${offset}`;

    fetch(url) 
        .then(responseStatus)
        .then(json)
        .then(function(data){
            getInfoByUrl(data.results);
        })
        .catch(function(err){
            console.log('error -->', err)
        })
}

async function getInfoByUrl(shortPokemonList) {
  
  let pokemonUrs = shortPokemonList.map(item => item.url)
    
  const pokemonData = await Promise.all(

    pokemonUrs.map(async (url) => {
        const response = await fetch(url);
        const pokemonDetails = await response.json();
        return pokemonDetails;  
    })
  );

  
  pokemonData.forEach((element) =>{
    allPokemons.push(element.name);
  })
  App()
     
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



function App() {
  console.log(allPokemons);
  return (
    <div>
      <Title/>
      <SearchPanel text='Search by name' filter = {allPokemons}/>

      <div id="twoSections"> 
        <PokemonList pokemons = {allPokemons}/>  
        <FullInfo/>
      </div>
       
      <ShowMoreBtn text='Show More' bgColor ='green'/>
    </div>
  );
}

export default App;
