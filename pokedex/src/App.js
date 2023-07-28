import React, { Component } from 'react';

import Title from'./components/Title/Title';
import PokemonWrapper from'./components/PokemonWrapper/PokemonWrapper';

class App extends Component {

  render() {
    return (
      <>
          <Title/>
          <PokemonWrapper />
      </>
    );
  }
}

export default App;
