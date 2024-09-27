import { FormEvent, useState } from 'react'
import styled from 'styled-components'

const FormVagasStyle = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: var(--cor-secundaria);
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;

  .btnPesquisar {
    background-color: var(--cor-principal);
    border: 1px solid var(--cor-principal);
    height: 40px;
    padding: 0 16px;
    font-size: 18px;
    color: var(--cor-secundaria);
    margin-left: 8px;
    cursor: pointer;
  }

  .campo {
    padding: 0 16px;
    outline-color: var(--cor-principal);
  }
`

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <FormVagasStyle onSubmit={aoEnviarForm}>
      <input
        className="campo"
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <button className="btnPesquisar" type="submit">
        Pesquisar
      </button>
    </FormVagasStyle>
  )
}
export default FormVagas
