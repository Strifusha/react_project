import FullInfo from './components/FullInfo/FullInfo';
import ShowMoreBtn from './components/ShowMoreBtn/ShowMoreBtn';
import PokemonList from './components/PokemonList/PokemonList';
import SearchPanel from './components/SearchPanel/SearchPanel';
import Title from'./components/Title/Title';

function App() {
  return (
    <div>
      <FullInfo/>
      <ShowMoreBtn/>
      <PokemonList/> 
      <SearchPanel/>
      <Title/>
    </div>
  );
}

export default App;
