import styled from "styled-components"

export const Avatar = styled.img`
  height: 80px;
  margin-right: 32px;
  border-radius: 50%;
`
export const CardContato = styled.div`
  width: 90%;
  margin: 20px auto;
  max-width: 1200px;
  padding: 8px;
  border-radius: 8px;
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
export const DadoContato = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  padding: 8px 0px;
  input{
    margin-right: 32px;
    border: none;
    background-color: transparent;
    padding: 8px;
  }
`
export const DivBotoes = styled.div`
  display: flex;
  gap: 32px;
`
export const Botao = styled.button`
  padding: 16px;
  font-size: 16px;
  color: #fff;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  border-style: none;
  width: 100px;
`
export const BotaoEditar = styled(Botao)`
  background-color:#4883C9
`

export const BotaoExcluir = styled(Botao)`
  background-color:#CF1733
`
export const BotaoSalvar = styled(Botao)`
  background-color: #090;
`
export const BotaoSair = styled(Botao)`
  background-color: #E22421;
`
