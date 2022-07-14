import React, {useState, useEffect} from 'react'

import Categories from '../component/Categories'
import Sort from '../component/Sort'
import Pizzablock from '../component/PizzaBlock';
import Skeleton from '../component/PizzaBlock/SkeletonPizza'
import Pagination from '../component/Pagination';

const Home = ({ serchValue }) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeIndexCategories, setActiveIndexCategories] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [actualSelect, setActualSelect] = useState({
    name: 'пополярність(DESC)',
    sortProperty: 'raiting',
  });

  useEffect(() => {
    const order = actualSelect.sortProperty.includes('-') ? 'asc' : 'desc';
    const sortBy = actualSelect.sortProperty.replace('-', '');
    const categori = activeIndexCategories > 0 ? `category=${activeIndexCategories}` : '';
    const search = serchValue ? `&search=${serchValue}` : '';
    fetch(
      `https://62b4a836530b26da4cc3313b.mockapi.io/items?page=${currentPage}&limit=4&${categori}&sortBy=${sortBy}&order=${order}${search}`,
    )
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
        setIsLoading(false);
        window.scrollTo(0, 0);
      });
  }, [activeIndexCategories, actualSelect, serchValue, currentPage]);

  const pizzas = items.map((obj, i) => <Pizzablock {...obj} key={i} />);
  const skeletons = [...new Array(6)].map((v, i) => <Skeleton key={i} />);

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
      <div className="content__items">{isLoading ? skeletons : pizzas}</div>
      <Pagination
        onChangePage={(number) => {
          setCurrentPage(number);
        }}
      />
    </div>
  );
};

export default Home;
