import handlerMoreDetails from './components/handlerMoreDetails/handlerMoreDetails';
import createCounter from 'pokedex/src/components/createCounter/createCounter';
import getPokemons from './components/getPokemons/getPokemons';
import findPokemon from './components/findPokemon/findPokemon';

function App() {
  return (
    <div>
      <handlerMoreDetails/>
      <createCounter/>
      <getPokemons/> 
      <findPokemon/>
    </div>
  );
}

export default App;
