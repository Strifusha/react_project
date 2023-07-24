import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Input } from "./IdInput.style";

class IdInput extends Component {
    constructor(props){
        super(props);
        this.handleNumberChange = this.handleNumberChange.bind(this);
  
    }

    handleNumberChange(event) {
        const inputNumber = event.target.value;
        this.props.handleClick(inputNumber)
    }
      
    render() {
        return (<label>
            <Input 
                type="text" 
                className="reach-panel" 
                placeholder={this.props.text}
                value={this.props.value}
                onChange={this.handleNumberChange}
            />
            </label>)
    }
}

export default IdInput;