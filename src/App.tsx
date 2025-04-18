import React, { useState } from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import productphoto from "./components/media/product-photo-1.png";
import productphoto2 from "./components/media/headphones2.png";
import productphoto3 from "./components/media/headphones3.png";
import productphoto4 from "./components/media/headphones4.png";
import productphoto5 from "./components/media/headphones5.png";
import productphoto6 from "./components/media/headphones6.png";
import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Catalog from './pages/Catalog';
import Cart from './pages/Cart';

interface Product {
  id: number;
  img: string;
  title: string;
  price: number;
  discountPrice?: number;
  rate: number;
  currencySign: string;
}


function App() {

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

export default App;
