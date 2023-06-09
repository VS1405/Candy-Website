import React, {Fragment} from 'react'


import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Candy</h1>
        <HeaderCartButton onClick = {props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src='https://clickbabynames.com/wp-content/uploads/Sweet-Candy-style-baby-names.jpg' alt='Delicious Candy'/>
      </div>
    </Fragment>
  )
}

export default Header
