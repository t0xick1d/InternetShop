import React from 'react'

import Header from './component/Header';
import Categories from './component/Categories'
import Sort from './component/Sort'

import './scss/app.scss';
import Pizzablock from './component/PizzaBlock';

import pizzas from './pizza.json'

function App() {
  return (
    <div className="wrapper">
      <div className="header">
        <Header/>
      </div>
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories/>
            <Sort/>
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {pizzas.map((obj, i) => <Pizzablock {...obj} key ={i}/> )}
          </div>
        </div>
      </div>
  </div>
  );
}

export default App;