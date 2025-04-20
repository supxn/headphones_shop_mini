import React, { useState } from 'react';
import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Catalog} from './pages/Catalog';
import {Cart} from './pages/Cart';

export const App = () => {
  const [cartCounter, setCartCounter] = useState(0);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Catalog
            cartCounter={cartCounter}
            setCartCounter={setCartCounter} />} />
          <Route path="/cart" element={<Cart 
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}/>} />
        </Routes>
      </Router>
    </div>
  );
}

