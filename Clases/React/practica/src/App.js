
import './App.css';



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




  return (
    <div className="App">
      <header className="App-header">



        <RouterProvider router={router}></RouterProvider >


      </header>
    </div>
  );
}

export default App;
