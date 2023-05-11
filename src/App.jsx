import GlobalStyles from "./components/Global";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./themes";

import Navbar from "./components/Navbar";

function App() {

  return (
    <ThemeProvider theme={lightTheme}>
      <>
      <GlobalStyles />
        <h1>Stacks</h1>
        <Navbar />
      </>
    </ThemeProvider>
  )
}

export default App
