import React, { Component } from 'react';
import FullInfo from './components/FullInfo/FullInfo';
import ShowMoreBtn from './components/ShowMoreBtn/ShowMoreBtn';
import PokemonList from './components/PokemonList/PokemonList';
import SearchPanel from './components/SearchPanel/SearchPanel';
//import Title from'./components/Title/Title';



class App extends Component {

  constructor(props){
    super(props);
    this.state = { 
        searchText: ''
    };

    this.getSearchText = this.getSearchText.bind(this);  
  }
  
  getSearchText = (text) => {
    this.setState({
      searchText: text
    })
  }

  render() {
    return (
      <div>
        {/* <Title/> */}
        <SearchPanel text='Search by name' value={this.state.searchText} handleClick={this.getSearchText} />
  
        <div id="twoSections"> 
          <PokemonList value={this.state.searchText}/>  
          {/* <FullInfo/> */}
        </div>
         
        {/* <ShowMoreBtn text='Show More' bgColor='green'/> */}
      </div>
    );
  }
}

export default App;
