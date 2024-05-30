import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Topo = styled.div`
  height: 172px;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 0 auto;
`
export const Titulo = styled.h1`
  display: flex;
  font-size: 28px;
  font-weight: bold;

`

export const Form = styled.form`
  display: flex;
  width: 90%;
  margin: 40px auto;
  padding: 60px 0;
  justify-content:center;
  gap: 80px;
  border: solid 1px #ccc;
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
export const Entrada = styled.input`
  display: flex;
  padding: 12px;
  font-size: 16px;
  border: solid 1px #000;
  border-radius: 8px;
  -webkit-appearance: none;
  -moz-appearance: textfield;
`

export const BotaoEnviar = styled.button`
  margin: 0 auto;
  display: block;
`
export const BotaoCancelar = styled(Link)`
  display: flex;
  width: 100px;
  justify-content: center;
  text-decoration: none;
  background-color: #cf1733;
  padding: 16px;
  font-size: 16px;
  color: #fff;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  border-style:none;
`
