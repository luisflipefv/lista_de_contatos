import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type FiltroState = {
  termoBusca: string
}

const initialState: FiltroState = {
  termoBusca:''
}

const filtroSlide = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    alteraTermo: (state, action: PayloadAction<string>) => {
      state.termoBusca = action.payload
    }
  }
})

export const {alteraTermo} = filtroSlide.actions
export default filtroSlide.reducer
