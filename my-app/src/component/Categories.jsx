import React from 'react';

const Categories = ({ activeIndex, setActiveIndex }) => {
  const categories = ['Всі', "М'ясні", 'Вегетаріанська', 'Гриль', 'Острі', 'Закриті'];

  return (
    <div className="categories">
      <ul>
        {categories.map((value, index) => {
          return (
            <li
              onClick={() => setActiveIndex(index)}
              key={index}
              className={activeIndex === index ? 'active' : ''}>
              {value}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
