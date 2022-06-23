import React, {useState} from 'react'

const Categories = () =>{

  const [activeIndex, setActiveIndex] = useState(0)
  const categories = ['Все','Мясные','Вегетарианская','Гриль','Острые','Закрытые','Напої']
  // const onClickCategories = (index) =>{
  //   setActiveIndex(index)
  // }
  
  return(
      <div className="categories">
        <ul>
          {categories.map((value, index) => {
            return(
              <li onClick={() => setActiveIndex(index)} key={index} className={activeIndex === index?"active": ""}>{value}</li>      
            )
          })}
        </ul>
      </div>
  )
}

export default Categories;