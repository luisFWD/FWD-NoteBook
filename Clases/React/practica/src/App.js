
import './App.css';



import Menu from './components/Menu/Menu';

import { createBrowserRouter, BrowserRouter, RouterProvider } from 'react-router-dom';

import Login from './pages/Login/Login';
import Practica from './pages/Practica/Practica';
import MenuComidas from './pages/MenuComidas/MenuComidas';
import NotFound from './pages/NotFound/NotFound';
import { useState } from 'react';
function App() {

  const [lista, setLista] = useState([]);

  function agregar() {
    lista.push({
      id: "id" + new Date().getTime(),
      parrafo: "",
      check: false
    })
    setLista(lista)
    console.log("lista", lista)
  }





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




  return (
    <div className="App">
      <header className="App-header">

        <button onClick={agregar}>

        </button>


        <RouterProvider router={router}></RouterProvider >


      </header>
    </div>
  );
}

export default App;
