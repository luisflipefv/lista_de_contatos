import { Link } from "react-router-dom";
import styled from "styled-components";

export const CardMain = styled.div`
  display: flex;
  width: 90%;
  margin: 0 auto;
  justify-content: space-between;
  padding: 60px 0;
  border-bottom: 1px solid #ccc;
`

export const BotaoPesquisar = styled.button`
  background-color: #0035f1;
  padding: 16px;
  font-size: 16px;
  color: #fff;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  border-style: none;
`
export const BotaoNovoContato = styled(Link)`
  text-decoration: none;
  background-color: #2AC72A;
  padding: 16px;
  font-size: 16px;
  color: #fff;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  margin-left: 8px;
  border-style:none;
`
export const Buscar = styled.input`
  width: 240px;
  padding: 16px;
  font-size: 18px;
  display: block;
  margin-top: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  color: #888;
`
export const DivBusca = styled.div`
  text-align: center;
`
