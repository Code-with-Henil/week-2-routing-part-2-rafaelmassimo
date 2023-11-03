import { useParams } from 'react-router-dom';

function RecipeInfo(props) {
    let { recipeInfo } = useParams();
    
    const recipe = props.recipes.find((recipe) => recipe.title === recipeInfo);
    // console.log(recipe.ingredients);
    // console.log(recipe.instructions);

    return (
        <>
            <div id='recipe-box'>
                <h2>Recipe: {recipeInfo}</h2>
                <hr />
                <div id='instructions'>
                    <p>Ingredients:</p>
                    <br />
                    <ul>
                        {recipe.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                </div>

                <div id='instructions'>
                    <p>Instructions:</p>
                    <ul>
                        {recipe.instructions.map((instruction, index) => (
                            <li key={index}>{instruction}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default RecipeInfo;
