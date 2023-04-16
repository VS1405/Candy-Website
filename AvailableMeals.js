import React, { Fragment } from 'react'

import MealsItem from './MealsItem/MealsItem';
// import Card from '../UI/Card';
import classes from './AvailableMeals.module.css'

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: ' jelly candies',
        description: 'gumdrop and gummies, stabilizers including starch, pectin or gelatin are used',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'Caramels',
        description: 'Caramels are made by cooking sugar and water together.',
        price: 16.5,
    },
    {
        id: 'm3',
        name: 'Chocolate',
        description: 'Milk Chocolate, Chocolate Covered Cherries',
        price: 12.99,
    },
    {
        id: 'm4',
        name: 'Gummies',
        description: 'Gummies are gelatin based chewy candies that come in a variety of shapes, colors and flavors.',
        price: 18.99,
    },
];

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map(meal =>
        <MealsItem
            key={meal.id}
            // meal = {meal} ==> 2nd option
            id={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />
    )

    return (
        <Fragment>
            <ul className={classes.meals}>
                {mealsList}
            </ul>
        </Fragment>
    )
}

export default AvailableMeals
