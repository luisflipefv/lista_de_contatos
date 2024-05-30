import { FormEvent, useState } from "react"
import { Form, Entrada, Topo, BotaoCancelar, Titulo } from "./styles"
import { useDispatch } from "react-redux"
import { BotaoSalvar } from '../../components/Contatos/styles'
import { cadastrar } from '../../store/reducers/contatos'
import { useNavigate } from 'react-router-dom'

export const Formulario = () => {
  const dispatch = useDispatch()
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')
  const navigate = useNavigate()

  const inserirContato = (evento: FormEvent) => {
    evento.preventDefault()
    dispatch(cadastrar({
      nome,
      telefone,
      email
    }))
    navigate('/')
  }

  return (
  <main>
  <Topo>
    <Titulo>Cadastrar Novo Contato</Titulo>
    <BotaoCancelar to={"/"}>Cancelar</BotaoCancelar>
  </Topo>
  <Form onSubmit={inserirContato}>
    <Entrada
    required
    value={nome}
    onChange={(evento) => setNome(evento.target.value)}
    type="text"
    placeholder="Nome Completo"/>
    <Entrada
    required
    value={telefone}
    onChange={(evento) => setTelefone(evento.target.value)}
    type="number"
    placeholder="Telefone"/>
    <Entrada
    required
    value={email}
    onChange={(evento) => setEmail(evento.target.value)}
    type="email"
    placeholder="Email"/>
    <BotaoSalvar>Enviar</BotaoSalvar>
  </Form>
  </main>
)
}

