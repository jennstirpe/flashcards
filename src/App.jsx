import { useState } from "react";

import GlobalStyles from "./components/Global";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./themes";

import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  const [currentTheme, setCurrentTheme] = useState(lightTheme);

  function toggleTheme() {
    if (currentTheme === lightTheme) {
      setCurrentTheme(darkTheme)
    } else {
      setCurrentTheme(lightTheme)
    }
  }

  return (
    <ThemeProvider theme={currentTheme}>
      <>
      <GlobalStyles />

      <button className="themeToggle" onClick={toggleTheme}> theme </button>
        <Home />
        <Navbar />
      </>
    </ThemeProvider>
  )
}

export default App
