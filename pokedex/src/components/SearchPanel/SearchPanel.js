import React, { Component } from "react";
import PropTypes from 'prop-types';
import { StyledInput } from './SearchPanel.style';

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.handleTextChange = this.handleTextChange.bind(this);
    }

    handleTextChange(event) {
        const inputText = event.target.value;
        this.props.handleClick(inputText)
    }
      
    render() {
        return (<label>
            <StyledInput 
                type="text" 
                className="reach-panel" 
                placeholder={this.props.text}
                value={this.props.value}
                onChange={this.handleTextChange}
            />
            </label>)
    }
}

SearchPanel.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string
}

export default SearchPanel;

