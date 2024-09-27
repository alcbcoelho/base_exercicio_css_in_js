import styled from 'styled-components'

const CabecalhoStyle = styled.header`
  background-color: var(--cor-secundaria);
  color: var(--cor-principal);
  text-align: center;
  padding: 24px 0;
`

const Cabecalho = () => (
  <CabecalhoStyle>
    <h1>EBAC Jobs</h1>
  </CabecalhoStyle>
)

export default Cabecalho
