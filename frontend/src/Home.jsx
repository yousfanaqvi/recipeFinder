import React ,{useState} from 'react'
import 'animate.css';
import {useNavigate} from "react-router-dom"
import axios from "axios";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';
import "./home.css"


function Home() {
    let navigate=useNavigate(); 
    const [calories,setCalories]=useState(0);
    const [recipeName,setRecipeName]=useState("");
    const[advVisibility,setVisibility]=useState(false);
    function changeVisibility(){
        if(advVisibility){
        setVisibility(false);
        }
        else{
        setVisibility(true)
    }
    }

    function handleChange(e) {
        setCalories(e.target.value)
      }
 
    function handleChangeRecipe(e) {
        setRecipeName(e.target.value)
    }
 
 
  const searchRecipe = e => {
    e.preventDefault();
    const options = {
        method: 'GET',
        url:'https://api.spoonacular.com/recipes/complexSearch?apiKey='+process.env.REACT_APP_API_KEY+'&query='+recipeName+'&number=4',
    }
    axios.request(options).then(function (response) {
        navigate("/recipe",{ state:{ items:response.data,query:recipeName}});
        
        
    }).catch(function (error) {
        console.error(error);
    });
    
  }
    const handleSubmitMealPlan = e => {
        e.preventDefault();
        const options = {
            method: 'GET',
            url:'https://api.spoonacular.com/mealplanner/generate?apiKey='+process.env.REACT_APP_API_KEY+'&timeFrame=day&targetCalories='+
            calories,
          }
        axios.request(options).then(function (response) {
            navigate("/mealPlan",{ state: { items:response.data } });
        }).catch(function (error) {
            console.error(error);
        });
      }

     
      

      
  return ( 
  <>
    <Box sx={{ flexGrow: 1 }} >
        <Grid container  >
        <Grid xs={12} md={12} lg={12}>
        <div className='home-container' >
            <div className='heading'>
                <h1>Find a Recipe</h1>
                <h2>Search through thousands of recipes using advanced filtering</h2>
            <form onSubmit={searchRecipe} id="recipeSearchBtn">
                <TextField  label="Search" type="search"   color="warning"
                variant="standard" placeholder="eg:pasta,chicken ..etc" onChange={handleChangeRecipe}/>
                <button type='submit' name='submit' className='search-button' id="sb">SEARCH</button>
                </form>
                 <button  onClick={changeVisibility} className="advBtn">Advanced search</button>  
            </div>
            {advVisibility &&
            <div id='search-container' className="animate__animated animate__fadeIn ">
                <div className='search-box-container'>
                <h2> Search Recipes by ingredients</h2>
                <p className='search-info'>Find recipes to use ingredients you already have</p>
                    <div className='search-content'>
                        <button  className='search-button' onClick={() => { navigate('/RecipeByIng') }}>Let's go</button>
                        
                    </div>
                </div>
                <div className='search-box-container'>
                <h2>Search Recipes by Nutrients</h2>
                <p className='search-info'>Find recipes based on nutritional requirements</p>
                    <div className='search-content'>
                    <button  className='search-button' onClick={() => { navigate('/recipeByNutrients') }}>Let's go</button>
                        
                    </div>
                </div> 
                <div className='search-box-container'>
                <h2>Generate daily meal plan</h2>
                <p className='search-info'>Generate an entire meal plan for your day</p>
                    <div className='search-content'>
                        <form onSubmit={handleSubmitMealPlan}>
                        <label>Total calories for a day:<input type="text" name="recipeCalories" onChange={handleChange}  placeholder="eg:1500" required/></label>
                        <button type='submit' name='submit' className='search-button'>Generate</button>
                        </form>
                    </div>
                </div>
            
            </div>}
        </div>
        </Grid>
        </Grid>
    </Box>
    </>
  )
}

export default Home