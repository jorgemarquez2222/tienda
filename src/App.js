import React from 'react';

import './App.css';
import { NavbarEx } from './components/Navbar';
import { Products } from './components/Products';
import { ViewCart } from './components/ViewCart';
import { MyEstadoGlobalContext } from './context/MyEstadoGlobalContext';
import {BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {
  const [products, setProducts] = React.useState([]);
  return (
    <div className="App">
        <BrowserRouter>
      <MyEstadoGlobalContext.Provider value={{ products, setProducts }}>
        <NavbarEx />

        <Routes>
          <Route exact path="/" element={<Products />} />
          <Route exact path="/cart" element={<ViewCart />} />

        </Routes>

      </MyEstadoGlobalContext.Provider>
        </BrowserRouter>

    </div>
  );
}

export default App;
