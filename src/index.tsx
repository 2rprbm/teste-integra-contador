import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router-dom";
import router from 'routes'
import UsuarioContextProvider from 'Contextos/Usuario/UsuarioContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <UsuarioContextProvider>
        <RouterProvider router={router} />
      </UsuarioContextProvider>
  </React.StrictMode>
);
