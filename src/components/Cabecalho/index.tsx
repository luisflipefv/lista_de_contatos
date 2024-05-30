import { useDispatch, useSelector } from "react-redux"
import { CardMain, BotaoNovoContato, BotaoPesquisar, Buscar, DivBusca } from "./styles"
import { alteraTermo } from "../../store/reducers/filtro"
import { RootReducer } from "../../store"
import { useState } from "react"


const Cabecalho = () =>
  {
  const dispatch = useDispatch()
  const { termoBusca } = useSelector((state:RootReducer) => state.filtro)
  const { itens } = useSelector((state:RootReducer) => state.contatos)
  const [busca, setBusca] = useState(false)
  function mostraeEsconde (){
    setBusca(!busca)
  }

  return (
    <CardMain>
    <h1>Você possui {itens.length} contatos cadastrados</h1>
    <DivBusca>
      <BotaoPesquisar onClick={mostraeEsconde}>Pesquisar</BotaoPesquisar>
      <BotaoNovoContato to="/novo-contato">Novo Contato</BotaoNovoContato>
      {busca &&
        <Buscar type="text"
      placeholder="Buscar contato"
      value={termoBusca} name="Buscar"
      onChange={(evento) => dispatch(alteraTermo(evento.target.value))} />
      }
    </DivBusca>
  </CardMain>

)}

export default Cabecalho
