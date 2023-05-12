import { useState } from "react";

import GlobalStyles from "./components/Global";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./themes";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Stats from "./components/Stats";
import Create from "./components/Create";

function App() {
  const [currentTheme, setCurrentTheme] = useState(lightTheme);

  function toggleTheme() {
    if (currentTheme === lightTheme) {
      setCurrentTheme(darkTheme)
    } else {
      setCurrentTheme(lightTheme)
    }
  }

  const [ view, changeView ] = useState("home");

  function switchView(newView) {
      changeView(newView)
      setCreateActive(false)
  }

  const [ createActive, setCreateActive ] = useState(false);

  function openCreate() {
    setCreateActive(true)
  }

  function closeCreate() {
    setCreateActive(false)
  }

  return (
    <ThemeProvider theme={currentTheme}>
      <>
      <GlobalStyles />

      <button className="themeToggle" onClick={toggleTheme}> theme </button>

        <Navbar switchView={switchView} openCreate={openCreate} createActive={createActive} />

        {
          view === "home" ? <Home /> :
          view === "stats" ? <Stats /> : null
        }

        {
          createActive === true ? <Create closeCreate={closeCreate} /> : null
        }


      </>
    </ThemeProvider>
  )
}

export default App
