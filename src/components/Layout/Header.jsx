import React from 'react';
import HeaderCartBtn from './HeaderCartBtn';

import styles from './Header.module.css'

import mealsImage from '../../assets/meals.jpeg';



const Header = (props) => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>reactMeals</h1>
        <HeaderCartBtn onClick={props.onShowCart} />
      </header>
      <div className={styles['main-image']}>
        <img src={mealsImage} alt="mealsImage" />
      </div>
    </React.Fragment>
  );
};

export default Header;