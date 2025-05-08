import React, { useState } from 'react';
import './App.css'; // Předpokládáme, že soubor App.css obsahuje základní styly pro aplikaci

// Komponenta pro změnu tématu
const ThemeSwitcher = ({ onChangeTheme }) => {
  const handleThemeChange = () => {
    onChangeTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <button onClick={handleThemeChange}>
      Switch Theme
    </button>
  );
};

// Rodičovská komponenta App
const App = () => {
  const [theme, setTheme] = useState('light'); // Výchozí téma je světlé

  const handleChangeTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <div className={`app ${theme}`}>
      <h1>Aplikace</h1>
      <ThemeSwitcher onChangeTheme={handleChangeTheme} />
    </div>
  );
};

export default App;
