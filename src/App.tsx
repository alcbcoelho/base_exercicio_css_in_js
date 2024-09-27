import { createGlobalStyle } from 'styled-components'
import Cabecalho from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

const GlobalStyle = createGlobalStyle`
:root {
  --cor-principal: #a7727d;
  --cor-secundaria: #f9f5e7;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Lato, sans-serif;
  list-style: none;
}

body {
  padding-bottom: 120px;
}

.container {
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
}

@media (max-width: 1024px) {
  .container {
    max-width: 80%;
  }
}
`

function App() {
  return (
    <>
      <GlobalStyle />
      <Cabecalho />
      <Hero />
      <div className="container">
        <ListaVagas />
      </div>
    </>
  )
}

export default App
