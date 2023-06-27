import FullInfo from './components/FullInfo/FullInfo';
import ShowMoreBtn from './components/ShowMoreBtn/ShowMoreBtn';
import PokemonList from './components/PokemonList/PokemonList';
import SearchPanel from './components/SearchPanel/SearchPanel';
//import Title from'./components/Title/Title';



function App() {
  
  return (
    <div>
      {/* <Title/> */}
      <SearchPanel text='Search by name'/>

      <div id="twoSections"> 
        <PokemonList/>  
        {/* <FullInfo/> */}
      </div>
       
      {/* <ShowMoreBtn text='Show More' bgColor='green'/> */}
    </div>
  );
}

export default App;
