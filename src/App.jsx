import GlobalStyles from "./components/Global";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./themes";

function App() {

  return (
    <ThemeProvider theme={lightTheme}>
      <>
      <GlobalStyles />
        <h1>Stacks</h1>
      </>
    </ThemeProvider>
  )
}

export default App
