import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { Avatar, CardContato, DadoContato, DivBotoes, BotaoEditar, BotaoExcluir, BotaoSalvar, BotaoSair } from "./styles"
import ContatoClass from '../../Models/Contato'
import { deletar, editar } from "../../store/reducers/contatos"

type Props = ContatoClass

export const Contato =({
  id,
  nome: nomeOriginal,
  telefone: telefoneOginal,
  email: emailOriginal
}: Props) =>
  {
    const [estaEditando, setEstaEditando] = useState(false)
    const dispatch = useDispatch()

    const [nome, setNome] = useState('')
    const [telefone, setTelefone] = useState('')
    const [email, setEmail] = useState ('')

    useEffect(() => {
      if(nomeOriginal.length > 0){
        setNome(nomeOriginal)
      }
      if(telefoneOginal.length > 0){
        setTelefone(telefoneOginal)
      }
      if(emailOriginal.length > 0){
        setEmail(emailOriginal)
      }
    }, [nomeOriginal, telefoneOginal, emailOriginal])

    function cancelarEdicao() {
      setEstaEditando(false)
      setNome(nomeOriginal)
      setTelefone(telefoneOginal)
      setEmail(emailOriginal)
    }
    function salvarEdicao () {
      dispatch(editar({
        id,
        nome,
        telefone,
        email
      })
    )
    setEstaEditando(false)
    }


  return (
  <>
  <CardContato>
    <Avatar src="https://static.vecteezy.com/system/resources/previews/009/734/564/large_2x/default-avatar-profile-icon-of-social-media-user-vector.jpg"
    alt="Imagem Avatar"
    />
    <DadoContato>
      <input required disabled={!estaEditando} value={nome} onChange={(evento) => setNome(evento.target.value)} type="text" placeholder="Nome"/>
      <input required disabled={!estaEditando} value={telefone} onChange={(evento) => setTelefone(evento.target.value)} type="text" placeholder="Telefone"/>
      <input required disabled={!estaEditando} value={email} onChange={(evento) => setEmail(evento.target.value)} type="text" placeholder="Email"/>
    </DadoContato>
    <DivBotoes>
      {estaEditando ?
      (<>
      <BotaoSalvar onClick={salvarEdicao} >Salvar</BotaoSalvar>
      <BotaoSair onClick={cancelarEdicao}>Sair</BotaoSair>
      </>) :
      (<>
      <BotaoEditar onClick={() => setEstaEditando(true)}>Editar</BotaoEditar>
      <BotaoExcluir onClick={() => dispatch(deletar(id))}>Excluir</BotaoExcluir>
      </>)}
    </DivBotoes>
  </CardContato>
  </>
)}

