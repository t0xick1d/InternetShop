import React, { createContext, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './component/Header';

import './scss/app.scss';

import Home from './pages/Home';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';

//import pizzas from './pizza.json'

export const SearchContext = createContext();

function App() {
  const [serchValue, setSearchValue] = useState('');

  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ serchValue, setSearchValue }}>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home serchValue={serchValue} />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
