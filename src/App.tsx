import React from 'react';
import logo from './logo.svg';
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

function App() {
  const headphones = [
    {
      id: 1,
      img: productphoto,
      title: "Apple BYZ S852l",
      price: 2927,
      oldprice: "3527",
      rate: 4.7,
    },
    {
      id: 2,
      img: productphoto2,
      title: "Apple EarPods",
      price: 2327,
      oldprice: '',
      rate: 4.5,
    },
    {
      id: 3,
      img: productphoto3,
      title: "Apple EarPods",
      price: 2327,
      oldprice: '',
      rate: 4.5,
    },
    {
      id: 4,
      img: productphoto,
      title: "Apple EarPods",
      price: 2327,
      oldprice: '',
      rate: 4.7,
    },
    {
      id: 5,
      img: productphoto2,
      title: "Apple EarPods",
      price: 2327,
      oldprice: '',
      rate: 4.5,
    },
    {
      id: 6,
      img: productphoto3,
      title: "Apple EarPods",
      price: 2327,
      oldprice: '',
      rate: 4.5,
    }

  ];
  const headphones2 = [
    {
      id: 7,
      img: productphoto4,
      title: "Apple AirPods",
      price: 9527,
      oldprice: '',
      rate: 4.7,
    },
    {
      id: 8,
      img: productphoto5,
      title: "GERLAX GH-04",
      price: 6527,
      oldprice: '',
      rate: 4.7,
    },
    {
      id: 9,
      img: productphoto6,
      title: "BOROFONE BO4",
      price: 7527,
      oldprice: '',
      rate: 4.7,
    }
  ]
  return (
    <div className="App">
      <Header />
      <ProductList products={headphones}  title={"Наушники"}/>
      <ProductList products={headphones2}  title={"Беспроводные наушники"}/>
      <Footer/>
    </div>
  );
}

export default App;
