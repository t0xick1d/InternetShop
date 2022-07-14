import React, {useState, useEffect} from 'react'

import Categories from '../component/Categories'
import Sort from '../component/Sort'
import Pizzablock from '../component/PizzaBlock';
import Skeleton from '../component/PizzaBlock/SkeletonPizza'

const Home = () => {
  
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeIndexCategories, setActiveIndexCategories] = useState(0);
  const [actualSelect, setActualSelect] = useState({
    name: 'пополярність(DESC)',
    sortProperty: 'raiting',
  });

  useEffect(() => {
    const order = actualSelect.sortProperty.includes('-') ? 'asc' : 'desc';
    const sortBy = actualSelect.sortProperty.replace('-', '');
    const categori = activeIndexCategories > 0 ? `category=${activeIndexCategories}` : '';
    fetch(
      `https://62b4a836530b26da4cc3313b.mockapi.io/items?${categori}&sortBy=${sortBy}&order=${order}`,
    )
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
        setIsLoading(false);
        window.scrollTo(0, 0);
      });
  }, [activeIndexCategories, actualSelect]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeIndex={activeIndexCategories}
          setActiveIndex={(i) => setActiveIndexCategories(i)}
        />
        <Sort
          actualSelect={actualSelect}
          setActualSelect={(i) => {
            setActualSelect(i);
          }}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((v, i) => <Skeleton key={i} />)
          : items.map((obj, i) => <Pizzablock {...obj} key={i} />)}
      </div>
    </div>
  );
}

export default Home;
