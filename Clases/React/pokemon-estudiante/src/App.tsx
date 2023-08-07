import React from "react";

import "./App.css";
import PaginaPrincipal from "./pages/PaginaPrincipal/PaginaPrincipal";
import Pagina404 from "./pages/Pagina404/Pagina404";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PaginaPrincipal></PaginaPrincipal>,
    },

    //La pagina de 404 es siempre la ultima.
    {
      path: "/*",
      element: <Pagina404></Pagina404>,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
