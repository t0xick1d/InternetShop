import React from 'react'

import s from './style.module.scss'

const NotFound = () => {
  return (
    <div className={s.root}>
      <h1>
        <span>😕</span>
        <br/>
        Нічого не знайдено :(
      </h1>
      <p>На жаль данна сторінка відсутня в нашому інтернет-магазині</p>
 
    </div>
  ) 
}

export default NotFound;
