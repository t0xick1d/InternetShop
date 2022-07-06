import React from 'react'

import s from './style.module.scss'

const NotFound = () => {
  return (
    <div className={s.roots}>
      <h1>
        <span>😕</span>
        <br/>
        Нічого не знайдено :(
      </h1>
      <p className={s.description}>На жаль данна сторінка відсутня в нашому інтернет-магазині</p>
 
    </div>
  ) 
}

export default NotFound;
