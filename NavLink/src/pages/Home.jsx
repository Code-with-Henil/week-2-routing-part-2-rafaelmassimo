import { NavLink } from 'react-router-dom';
import '../index.css';

function Home() {
    return (
        <>
            <div>
                <NavLink to="/" activeClassName="active">Home</NavLink>
                <NavLink to="/products">Products</NavLink>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <h2>Home Page</h2>
            </div>
        </>
    );
}

export default Home;
