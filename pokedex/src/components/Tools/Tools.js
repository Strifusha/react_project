import React from "react"
import { ThemeContext } from '../ThemeContextProvider/ThemeContextProvider';

class ThemeToggle extends React.Component {
    render() {
      const { isDarkMode, toggleTheme } = this.props;
  
      return (
        <button onClick={toggleTheme}>
          {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
      );
    }
}


const Tools = ({ theme }) => {
    return <>
        <ThemeContext.Consumer>
        {({ isDarkMode, toggleTheme }) => (
            <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
          )}
            </ThemeContext.Consumer>
    </>
}

export default Tools