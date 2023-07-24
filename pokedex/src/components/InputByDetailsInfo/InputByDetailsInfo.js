import React from "react";
import { Input } from "./InputByDetailsInfo.style";

const InputByDetailsInfo = ({ searchId, handleClick }) => {

    const handleNumberChange = (event) => {
        const inputNumber = event.target.value;
        handleClick(inputNumber)
    }

    return (<label>
        <Input 
            type="text" 
            className="reach-panel" 
            placeholder='Search by id'
            value={searchId}
            onChange={handleNumberChange}
        />
        </label>)

}

export default InputByDetailsInfo;