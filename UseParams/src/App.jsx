// ## useParams:

// Develop a simple recipe app. Create a route for individual recipes, and use the `useParams` hook to display the recipe details.
//  You can have a list of recipes, and when a user clicks on one, it should show the details on a new page.
//  You can hard code the recipe data.

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import bookRecipes from './recipesBook';
import RecipeInfo from './components/RecipeInfo';
import Recipes from './components/Recipes';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Recipes />} />

                    <Route
                        path="/:recipeInfo"
                        element={<RecipeInfo recipes={bookRecipes} />}
                    />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
