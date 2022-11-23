import React, { useState } from 'react'
import axios from "axios";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { useNavigate } from 'react-router-dom';
import "./recipeByIng.css"
function RecipeByIng() {
  let navigate=useNavigate();

  const[ingredients,setIngredients]=useState("");
  function handleChangeRecipe(e) {
    setIngredients(e.target.value)
}
  const byIngredient = e => {
    e.preventDefault();
    const options = {
        method: 'GET',
        url:'https://api.spoonacular.com/recipes/findByIngredients?apiKey='+process.env.REACT_APP_API_KEY+'&ingredients='+ingredients+'&number=4',
    }
    axios.request(options).then(function (response) {
        navigate("/ingredientsRecipeDetail",{ state: response.data });
        
    }).catch(function (error) {
        console.error(error);
    });
  }
  return (
    <Box sx={{ flexGrow: 1 }} >
        <Grid container  >
        <Grid xs={12} md={12} lg={12}>
        <div className='byIngredient-container'>
        <h1>Search Recipes by Ingredients</h1>
        <p>
          Ever wondered what recipes you can cook with the <span className='highlight-text'>ingredients</span> you have in your fridge or pantry? <br/>
          Find <span className='highlight-text'>recipes</span> that use as many of the given ingredients as possible and may require few additional ingredients.
        </p>
          <form onSubmit={byIngredient} className='ingredient-form'>
            <h3>Ingredients:</h3>
            <h6>(seperate each ingredient with a comma)</h6>
            <TextareaAutosize
              aria-label="empty textarea"
              placeholder="sugar,flour,oil etc"
              style={{ width: 200, height:50 }}
              onChange={handleChangeRecipe}
            />
            <button type='submit' name='submit' className='search-button' id="sb">SEARCH</button>
          </form>
        </div>
      </Grid>
    </Grid>
    </Box>
  )
}

export default RecipeByIng