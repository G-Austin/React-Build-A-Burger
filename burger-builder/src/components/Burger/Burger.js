import React from "react";

import classes from "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = props => {
  let transformedIngredients = Object.keys(props.ingredients)
    //transform and object of key value pairs into an array of burger ingredients where the value of the object is important for how many ingredients I need and the key is important for the type of ingredient.
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      }); //[,]
    })
    //this flattens the array
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p> Please start adding ingredients</p>;
  }
  // console.log('transformedIngredients', transformedIngredients);
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
