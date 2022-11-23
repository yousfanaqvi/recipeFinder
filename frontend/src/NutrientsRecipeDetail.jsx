import RecipeCards from "./RecipeCards";
import { useLocation } from "react-router-dom";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import "animate.css"
export default function Meal( ) {
  const { state } = useLocation();
  return (
    <Box sx={{ flexGrow: 1 }} >
    <Grid container  >
      <Grid xs={12} md={12} lg={12}>
      <div className='recipe-card-container '>
      <h1>Recipes By Nutrients</h1>
      <h2>Click recipe title for instructions</h2>
        <div  className="cards animate__animated animate__backInDown" >
          {state.map(recipe => {
            return <RecipeCards key={recipe.id} recipe={recipe} />
           })}
        </div>
      </div>
      </Grid>
    </Grid>
    </Box>
    
  )
   
  
}