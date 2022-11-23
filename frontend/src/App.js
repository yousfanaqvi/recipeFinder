import React from "react";
import Home from './Home';
import MealPlan from "./MealPlan";
import RecipeByNutrients from "./RecipeByNutrients";
import RecipeByIng from "./RecipeByIng";
import IngRecipeDetail from "./RecipeByIngDetail";
import NutrientsRecipeDetail from "./NutrientsRecipeDetail"
import Nav from "./nav"
import Recipe from "./Recipe";
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"


const App = () => {
  return (
    <Router basename='/'>
    <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/recipe" element={<Recipe/>}/>
        <Route path="/mealPlan" element={<MealPlan/>}/>
        <Route path="/recipeByNutrients" element={<RecipeByNutrients/>}/>
        <Route path="/nutrientsRecipeDetail" element={<NutrientsRecipeDetail/>}/>
        <Route path="/RecipeByIng" element={<RecipeByIng/>}/>
        <Route path="/ingredientsRecipeDetail" element={<IngRecipeDetail/>}/>

      </Routes>
    </Router>
    
  )
}

export default App


