import React from 'react';
import PropTypes from 'prop-types';
import './ShowMoreBtn.css';

// let counter = createCounter();

// const handleLoadBtn = document.getElementById('loadBtn');

// function createCounter(){
//     let param = 0;
//     function increment (){
//         return param += 12;
//     }
//     return increment;
// } 
// handleLoadBtn.addEventListener('click', () => getPokemons(counter()));

function ShowMoreBtn ({text, bgColor}) {
    return (<button id = "loadBtn" 
                className={bgColor}>
                {text}
            </button>)
}

ShowMoreBtn.propTypes = {
    text: PropTypes.string.isRequired,
    bgColor: PropTypes.string
};

export default ShowMoreBtn;