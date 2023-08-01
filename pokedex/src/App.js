import React, { Component } from 'react';
import { Route, Routes, Link } from "react-router-dom"

import Title from'./components/Title/Title';
import PokemonWrapper from'./components/PokemonWrapper/PokemonWrapper';
import FullInfo from './components/FullInfo/FullInfo';

class App extends Component {

  render() {
    return (
      <>
      <Title/>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<PokemonWrapper />} />
        <Route path="/pokemon/:id" element={<FullInfo />}/>
      </Routes>
      </>
    );
  }
}

export default App;
