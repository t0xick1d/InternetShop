import React, { useState, useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { SearchContext } from '../App';

import { setCategoryId } from '../redux/slices/filteSliece';

import Categories from '../component/Categories';
import Sort from '../component/Sort';
import Pizzablock from '../component/PizzaBlock';
import Skeleton from '../component/PizzaBlock/SkeletonPizza';
import Pagination from '../component/Pagination';

const Home = () => {
  const dispatch = useDispatch();
  const { categoryId, sort } = useSelector((state) => state.filter);

  const { serchValue } = useContext(SearchContext);

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  useEffect(() => {
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
    const sortBy = sort.sortProperty.replace('-', '');
    const categori = categoryId > 0 ? `category=${categoryId}` : '';
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
  }, [categoryId, serchValue, currentPage, sort.sortProperty]);

  const pizzas = items.map((obj, i) => <Pizzablock {...obj} key={i} />);
  const skeletons = [...new Array(6)].map((v, i) => <Skeleton key={i} />);

  return (
    <div className="container">
      <div className="content__top">
        <Categories activeIndex={categoryId} setActiveIndex={(i) => onChangeCategory(i)} />
        <Sort />
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
