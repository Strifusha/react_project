import React from "react";
import Tools from '../Tools/Tools'
import './Title.css';

function Title ({theme}) {
    return <>
    <h1 className="pokedex-title">Pokedex</h1>
    <Tools theme={theme} />
    </>
}

export default Title