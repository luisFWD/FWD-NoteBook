
import './App.css';

import { useState, useEffect } from 'react';

import Menu from './components/Menu/Menu';

import { createBrowserRouter, BrowserRouter, RouterProvider } from 'react-router-dom';

import Login from './pages/Login/Login';
import Practica from './pages/Practica/Practica';
import MenuComidas from './pages/MenuComidas/MenuComidas';
import NotFound from './pages/NotFound/NotFound';

function App() {


  const router = createBrowserRouter([

    {
      path: "/",
      element: <Login></Login>

    },
    {
      path: "/practica",
      element: <Practica></Practica>
    },
    {
      path: "/menu",
      element: <MenuComidas></MenuComidas>
    },
    {
      path: '*',
      element: <NotFound />
    }

  ])



  const [session, setSession] = useState(false);
  const [textoSesion, setTextoSesion] = useState("Iniciar");

  function iniciarSesion() {
    setSession(!session);

    if (!session === true) {
      setTextoSesion("Cerrar")
    }
    else {
      setTextoSesion("Iniciar")
    }
  }




  return (
    <div className="App">
      <header className="App-header">

        <Menu onClick={iniciarSesion} texto={textoSesion}></Menu>

        <RouterProvider router={router}></RouterProvider >


      </header>
    </div>
  );
}

export default App;
