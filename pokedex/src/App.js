import handlerMoreDetails from './components/handlerMoreDetails/handlerMoreDetails';
import createCounter from 'pokedex/src/components/createCounter/createCounter';
import getPokemons from './components/getPokemons/getPokemons';
import findPokemon from './components/findPokemon/findPokemon';
import title from'./components/title/title.css';

function App() {
  return (
    <div>
      <h1 class="pokedex-title">Pokedex</h1>
      <handlerMoreDetails/>
      <createCounter/>
      <getPokemons/> 
      <findPokemon/>
    </div>
  );
}

export default App;
