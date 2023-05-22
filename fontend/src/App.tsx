import React from 'react';
import './App.css';
import {
    createBrowserRouter, Link, Outlet,
    RouterProvider,
} from "react-router-dom";
import CreateContact from "./CreateContact";
import ContactList from "./ContactList";

const router = createBrowserRouter([
    {
        path: "/",
        element: <CreateContact />,
    },
    {
        path: "/all",
        element: <ContactList />,
    },
])

function App() {
  return (
      <React.StrictMode>
          <div className="container">
              <div className="section">
                <RouterProvider router={router} />
              </div>
          </div>
      </React.StrictMode>
  );
}

export default App;
