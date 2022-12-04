import React , {useEffect, useState} from 'react'
import { Avatar } from '@mui/material';
import 'animate.css';
import "./recipeByIng.css"

function IngCard({recipe}) {

  console.log(recipe);
    const[recipeCard,setRecipeCard]=useState("");
    const [recipeData, setRecipeData] = useState({
        title:"",
        img:"",
    })

    const setData = e => {
        setRecipeData(() => ({
            title:e.title,
            img:e.image,
            
        }))
        console.log("nutrients"+e.nutrition.nutrients);
      }
  useEffect(() => {
    fetch(
       'https://api.spoonacular.com/recipes/'+recipe.id+'/card?apiKey='+process.env.REACT_APP_API_KEY+'&mask=ellipseMask&backgroundImage=none'
    )
      .then(response => response.json())
      .then(data => {
        setRecipeCard(data.url)
      })
      .catch(() => {
        console.log("error")
      })

      fetch(
     'https://api.spoonacular.com/recipes/'+recipe.id+'/information?apiKey='+process.env.REACT_APP_API_KEY+'&includeNutrition=true'
    )
      .then(response => response.json())
      .then(data => {
       setData(data)
      })
      .catch(() => {
        console.log("error")
      })
  }, [recipe.id])

  return (     
        <div  className='Ing-img-title'>
        <Avatar src={recipeData.img} alt="recipe image" sx={{height:100 ,width:100, m:2}} />
            <a href={recipeCard} className='goToRecipeLink' >{recipeData.title}</a>
        </div>
  )
}

export default IngCard







































