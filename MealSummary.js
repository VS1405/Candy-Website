import React, {Fragment} from 'react';

import classes from './MealSummary.module.css'

const MealSummary = () => {
  return (
    <section className={classes.summary}>
    <h2>Delicious Candy, Delivered To You</h2>
    <p>
      Choose your favorite candy from our broad selection of available candies
      and enjoy a delicious candy at home.
    </p>
    <p>
    Candies are available in a wide variety of textures, 
    from soft and chewy to hard and brittle.
    </p>
  </section>
  )
}

export default MealSummary
