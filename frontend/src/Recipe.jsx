import React from 'react'
import RecipeCards from "./RecipeCards";
import "animate.css"
import { useLocation } from "react-router-dom";
import "./nutrients.css"
function Recipe() {
    const { state } = useLocation();
  console.log(state)
  return (
    <div>
    <div className='recipe-container-background'></div>
    <div>
    <div className='recipe-container'>
    <h1>Search result for {state.query} </h1> 
    <h4 >Click recipe title for instructions</h4>   
        <div  className="cards-Recipe" >
          {state.items.results.map(recipe => {
            return <RecipeCards key={recipe.id} recipe={recipe} />
           })}
        </div>
      </div>
    </div>
    
    
    
    
    </div>
  )
}

export default Recipe