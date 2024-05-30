import React from 'react';
import EstiloGlobal, { Container } from './styles';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';
import Home from './pages/Home';
import Novo from './pages/Novo';

const rotas = createBrowserRouter([
  {
    path:'/',
    element: <Home />
  },
  {
    path: '/novo-contato',
    element: <Novo />
  }
])

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal>
      </EstiloGlobal>
        <Container>
          <RouterProvider router={rotas} />
        </Container>
    </Provider>
  );
}

export default App;
