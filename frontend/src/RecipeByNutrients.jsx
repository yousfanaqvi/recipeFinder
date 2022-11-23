import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import 'animate.css';
import axios from 'axios';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import "./nutrients.css"
import process from "process"; 

function RecipeByNutrients() {
  
  let navigate=useNavigate(); 

//input by user
  const [Nutrientsdata,setNutrientsData]=useState({
      calories:'',
      carbs:'',
      fat:'',
      protein:'',
     
  });

  function handleChange(event) {
    const { name, value } = event.target;
   
    setNutrientsData(prevValue => {
      switch(name) {
        case 'calories':
          return {...prevValue,calories:value};
          case 'carbs':
          return {...prevValue,carbs:value};
          case 'fat':
          return {...prevValue,fat:value};
          case 'protein':
          return {...prevValue,protein:value};
        default:
          return 'error';
      }
     
    });  
  }

 
  
  // response by api
  const[data,setData]=useState(null);
  
  const byNutrients = e => {
    e.preventDefault();
    const options = {
        method: 'GET',
        url:'https://api.spoonacular.com/recipes/complexSearch?apiKey='+process.env.REACT_APP_API_KEY+'&number=4',
        params: {
            maxCalories:Nutrientsdata.calories,
            maxCarbs:Nutrientsdata.carbs,
            maxProtein:Nutrientsdata.protein,
            maxFat:Nutrientsdata.fat,
          }
    }
    axios.request(options).then(function (response) {
        setData(response.data.results);
    }).catch(function (error) {
        console.error(error);
    });
  }

  return (
    <Box sx={{ flexGrow: 1 }} >
    <Grid container  >
    <Grid xs={12} md={12} lg={12}>
      <div className='nutrients-container'  >
      <div className='background-img'></div>
        <div className='form-container animate__animated animate__zoomIn '>
          <h1 id="nutrients-title">Search Recipes by Nutrients</h1>
          <p id="nutrients-description">Enter the maximum amount of nutrients the recipe can have.</p>
        <form onSubmit={byNutrients} >
          <div className='nutrientForm'>
            <label className='form-label'>Calories: 
              <input className='nut-input' type="number" min='5'  name="calories" value={Nutrientsdata.calories} onChange={handleChange} placeholder="eg:350 " required/>
              kcal
              </label> 
            <label className='form-label'>Carbohydrates:
              <input   className='nut-input' type="number"  min='1' name="carbs" value={Nutrientsdata.carbs}  onChange={handleChange} placeholder="eg:50" required/>g</label>
            <label className='form-label'>Fat:
              <input  className='nut-input' type="number" name="fat" min='1' value={Nutrientsdata.fat} onChange={handleChange} placeholder="eg:20" required />g</label>
            <label className='form-label'>Protein:
              <input   className='nut-input' type="number" min='1' name="protein" value={Nutrientsdata.protein} onChange={handleChange} placeholder="eg:50" required />g</label>
          </div>
            <button type='submit' name='submit' className='search-button'>SEARCH</button>
          </form>
        {data!==null ?navigate("/nutrientsRecipeDetail",{ state:data }):null}
      </div>
      </div>
      </Grid>
    </Grid>
  </Box>
  )
}

export default RecipeByNutrients