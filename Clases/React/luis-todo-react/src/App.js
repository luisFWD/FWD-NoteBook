
import './App.css';
import ToDoApp from './pages/ToDoApp/ToDoApp';
import NotFound from './pages/NotFound/NotFound';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {


  const router = createBrowserRouter([

    {
      path: "/",
      element: <ToDoApp></ToDoApp>

    },
    {
      path: "/user",
      element: <ToDoApp></ToDoApp>,
      children: [
        {
          path: "/user/luis",
          element: <ToDoApp></ToDoApp>

        }
      ]

    },


    {
      path: '*',
      element: <NotFound />
    }

  ])

  return (
    <div className="App">

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
