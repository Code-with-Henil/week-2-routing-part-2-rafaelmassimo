import { NavLink } from 'react-router-dom';
import "../index.css"

function Contact() {
    return (
        <>
            <div>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/products">Products</NavLink>
                <NavLink to="/services" >Services</NavLink>
                <NavLink to="/contact" activeClassName="active">Contact</NavLink>
                <h2>Contact Page</h2>
            </div>
        </>
    );
}

export default Contact;
