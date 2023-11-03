import { NavLink } from 'react-router-dom';
import '../index.css';

function Products() {
    return (
        <>
            <div>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/products" activeClassName="active">
                    Products
                </NavLink>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <h2>Products Page</h2>
            </div>
        </>
    );
}

export default Products;
