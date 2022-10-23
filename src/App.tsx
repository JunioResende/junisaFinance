import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/themes/global'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>Hello World</h1>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
