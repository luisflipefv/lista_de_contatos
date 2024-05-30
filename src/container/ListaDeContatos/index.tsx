import { Contato } from "../../components/Contatos"
import Cabecalho from "../../components/Cabecalho"
import { RootReducer } from "../../store"
import { useSelector } from "react-redux"

const ListaDeContatos = () => {
  const { itens } = useSelector((state:RootReducer) => state.contatos)
  const { termoBusca } = useSelector((state:RootReducer) => state.filtro)

  const filtraContatos = () => {
    return itens.filter(
      (item) => item.nome.toLowerCase().search(termoBusca.toLowerCase()) >= 0
    )
  }
  return (
  <main>
    <Cabecalho/>
    <ul>
      {filtraContatos().map((c) => (
        <li key={c.id}>
          <Contato
          id={c.id}
          nome={c.nome}
          telefone={c.telefone}
          email={c.email}
          />
        </li>
      ))}
    </ul>
  </main>
)
}

export default ListaDeContatos
