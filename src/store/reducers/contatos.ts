import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ContatoClass from '../../Models/Contato'

type ContatosState = {
  itens: ContatoClass[]
}

const initialState: ContatosState = {
  itens: [
    {
      id:1,
      nome:'Luis',
      telefone:'123456789',
      email:'email@email.com'
    },
    {
      id:2,
      nome:'Felipe',
      telefone:'99999999',
      email:'email@email.com'
    }
  ]
}
const contatosSlice = createSlice ({
  name: 'contatos',
  initialState,
  reducers: {
    deletar: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    },
    editar: (state, action: PayloadAction<ContatoClass>) => {
      const indexDoContato = state.itens.findIndex(
        c => c.id === action.payload.id
      )
      if (indexDoContato >= 0){
        state.itens[indexDoContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<ContatoClass, 'id'>>) => {
      const contatoExistente = state.itens.find((contato) =>
        contato.nome.toLowerCase() === action.payload.nome.toLowerCase())
      if (contatoExistente){
        alert('Esse contato ja se encontra cadastrado')
      }else{
        const ultimoContato = state.itens[state.itens.length - 1]
        const contatoNovo = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }
        state.itens.push(contatoNovo)
      }
    }
  }
})


export const { deletar, editar, cadastrar } = contatosSlice.actions
export default contatosSlice.reducer
