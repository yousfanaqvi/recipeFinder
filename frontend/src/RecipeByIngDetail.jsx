import React from 'react'
import "./recipeByIng.css"
import { useLocation } from "react-router-dom";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import IngCard from './IngCard';

function IngRecipeDetail() {
  const { state } = useLocation();

  return (
    <Box sx={{ flexGrow: 1 }} >
      <Grid container  >
      <Grid xs={12} md={12} lg={12}>
        <div className='background-imgDetail'></div>
          <div className='byIngDetail-container'>
            <h1>Search Recipes by Ingredients</h1>
            <p>This tool lets you find recipes that either maximize the usage of ingredients you have at hand (pre shopping) or minimize the ingredients that you don't currently have (post shopping).</p>
            <h4 >Click title for instructions</h4>  
              {state.map((recipe,index) => (
              <div key={index} className='ing-content-container'>
                <IngCard key={recipe.id} recipe={recipe} /> 
                <div className='ing-content '> 
                <div className='missed-container'> 
                  <h1>Required Ingredients</h1>
                  {recipe.missedIngredientCount!==0 ?
                    recipe.missedIngredients.map((items,i) => (
                    <h2 key={i}>{items.name}</h2>
                  )):null}
                </div>
                <div className='used-container'>
                  <h1>Used ingredients</h1>
                  {recipe.usedIngredientCount!==0 ?
                    recipe.usedIngredients.map((items,i) => (
                    <h2 key={i}>{items.name}</h2>
                    )):null}
                </div>
              </div>
          </div>
              ))}
        </div>
      </Grid>
      </Grid>
    </Box>
  )
}

export default IngRecipeDetail