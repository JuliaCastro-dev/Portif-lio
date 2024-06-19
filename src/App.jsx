import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./themes/DefaultTheme"
import { GlobalStyle } from "./styles/Global"
import { Router } from "./Router"
import { BrowserRouter } from "react-router-dom"



function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <Router />
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
