import { NavLink } from 'react-router-dom';
import bookRecipes from '../recipesBook';

function Recipes() {
    return (
        <div id='recipe-box'>
            <h2>Choose one of the following recipes:</h2>
            {bookRecipes.map((recipe, index) => (
                <NavLink key={index} to={`/${recipe.title}`}>
                    <h3>{recipe.title}</h3>
                </NavLink>
            ))}
        </div>
    );
}
    // old version to help to remember the easy way to do it
        {/* <h2>Choose one of the following recipes:</h2>
            <NavLink to="/Spaghetti Carbonara">
            <h3>Spaghetti Carbonara</h3>
            </NavLink>

            <NavLink to="/Penne alla Vodka">
            <h3>Penne alla Vodka</h3>
            </NavLink>

            <NavLink to="/Fettuccine Alfredo">
            <h3>Fettuccine Alfredo</h3>
            </NavLink>

            <NavLink to="/Lasagna">
            <h3>Lasagna</h3>
            </NavLink>

            <NavLink to="/Pesto Linguine">
            <h3>Pesto Linguine</h3>
            </NavLink> */}
        
    

export default Recipes
