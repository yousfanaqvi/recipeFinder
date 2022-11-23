import React from 'react'
import Meal from './Meal';
import "animate.css"
import { useLocation } from "react-router-dom";

function MealPlan() {
    const { state } = useLocation();
    const nutrients=state.items.nutrients;

  return (
    <div>
    <div>
    <div className='recipe-card-container-mealplan'>
    <h1>Meal Plan</h1>
      <div className='macros-mealplan'>
        <h2>Macros</h2>
        <ul>
          <li>Calories: {nutrients.calories.toFixed(0)}</li>
          <li>Carbohydrates: {nutrients.carbohydrates.toFixed(0)}</li>
          <li>Fat: {nutrients.fat.toFixed(0)}</li>
          <li>Protein: {nutrients.protein.toFixed(0)}</li>
        </ul>
      </div>
    <h2>Click recipe title for instructions</h2>
        <div  className="cards-mealplan animate__animated animate__backInDown" >
          {state.items.meals.map(recipe => {
            return <Meal key={recipe.id} recipe={recipe} />
           })}
        </div>
      </div>
    </div>
    
    
    
    
    </div>
  )
}

export default MealPlan