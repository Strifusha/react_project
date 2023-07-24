import React from "react";
import './Button.css';

const Button = ({ text, handleClick, bgColor= 'gray' }) => {
 
        return(
             <button id="btn" className={bgColor} onClick={handleClick}>
                {text}
            </button>
        )  
}

export default Button;