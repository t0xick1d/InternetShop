import React, {useState, useEffect}from 'react'

import Header from './component/Header';
import Categories from './component/Categories'
import Sort from './component/Sort'

import './scss/app.scss';
import Pizzablock from './component/PizzaBlock';
import Skeleton from './component/PizzaBlock/SkeletonPizza'

//import pizzas from './pizza.json' 

function App() {

  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    
    fetch('https://62b4a836530b26da4cc3313b.mockapi.io/items')
      .then(res =>{
        return res.json()
      }).then(json=>{
        setTimeout(() => {
          setItems(json)
          setIsLoading(false)
        }, 3000);
        
      })
  }, [])
  

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
            {isLoading ? [...new Array(6)].map((v,i)=><Skeleton key={i}/>) : items.map((obj, i) => <Pizzablock {...obj} key ={i}/> )}
          </div>
        </div>
      </div>
  </div>
  );
}

export default App;