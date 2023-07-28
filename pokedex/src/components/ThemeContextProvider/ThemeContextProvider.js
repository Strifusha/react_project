// ThemeContext.js

import React, { createContext } from 'react';

const ThemeContext = createContext();

class ThemeContextProvider extends React.Component {
  state = {
    isDarkMode: false,
  };

  toggleTheme = () => {
    this.setState((prevState) => ({ isDarkMode: !prevState.isDarkMode }));
  };

  render() {
    const { isDarkMode } = this.state;
    const { children } = this.props;

    return (
      <ThemeContext.Provider
        value={{
          isDarkMode,
          toggleTheme: this.toggleTheme,
        }}
      >
        {children}
      </ThemeContext.Provider>
    );
  }
}

export { ThemeContext, ThemeContextProvider };
