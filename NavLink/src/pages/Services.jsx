import { NavLink } from 'react-router-dom';
import '../index.css';

function Services() {
    return (
        <>
            <div>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/products">Products</NavLink>
                <NavLink to="/services" activeClassName="active">
                    Services
                </NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <h2>Services Page</h2>
            </div>
        </>
    );
}

export default Services;
