
import './App.css';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import ToDoApp from './pages/ToDoApp/ToDoApp';


//Importar los recursos de React Router Dom
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


function App() {

  // Crear las rutas de mi pagina
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login></Login>
    },
    {
      path: "/login",
      element: <Login></Login>
    },
    {
      path: "/signup",
      element: <SignUp></SignUp>
    },
    {
      path: "/tareas",
      element: <ToDoApp></ToDoApp>
    },

  ])

  return (
    <div className="App">
      {/* Utilizar el Router Provider */}
      <RouterProvider router={router}></RouterProvider >






      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

    </div>
  );
}

export default App;
