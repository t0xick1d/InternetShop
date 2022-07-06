import React from 'react'
import { Routes, Route} from "react-router-dom";

import Header from './component/Header';

import './scss/app.scss';

import Home from './pages/Home'
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';

//import pizzas from './pizza.json' 

function App() {

  return (
    <div className="wrapper">
      <div className="header">
        <Header />
      </div>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;