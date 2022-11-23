import React , {useEffect, useState} from 'react'
import { Avatar } from '@mui/material';
import 'animate.css';
import "./nutrients.css"

function RecipeCards({recipe}) {

    const[recipeCard,setRecipeCard]=useState("");
    const [recipeData, setRecipeData] = useState({
        title:"",
        img:"",
        servingSize:"",
        calories:"",
        fat:"",
        carbs:"",
        protien:""
    })

    const setData = e => {
        setRecipeData(() => ({
            title:e.title,
            img:e.image,
            calories:e.nutrition.nutrients[0].amount,
            fat:e.nutrition.nutrients[1].amount,
            carbs:e.nutrition.nutrients[3].amount,
            protien:e.nutrition.nutrients[8].amount,
            servingSize:e.nutrition.weightPerServing.amount

            
        }))
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
        console.log(data)
        setData(data)
      })
      .catch(() => {
        console.log("error")
      })
  }, [recipe.id])

  return (
    <div className='card-container'>        
        <div className='card-content'>
        <Avatar src={recipeData.img} alt="recipe image" sx={{height:150 ,width:150}} />
            <div className='content'>
            <a href={recipeCard} className='goToRecipeLink' >{recipeData.title}</a>
                <h3><span >Serving size:</span> {recipeData.servingSize} g</h3>
                <h4><span className='nutrients-detail'>Calories:</span>  {recipeData.calories} Kcal</h4>
                <h4><span className='nutrients-detail'>Fat:</span> {recipeData.fat} g</h4>
                <h4><span className='nutrients-detail'>Carbohydrates:</span> {recipeData.carbs}g</h4>
                <h4><span className='nutrients-detail'>Protein:</span>  {recipeData.protien} g</h4>
            </div>
            
        </div>
        
  </div>
  )
}

export default RecipeCards