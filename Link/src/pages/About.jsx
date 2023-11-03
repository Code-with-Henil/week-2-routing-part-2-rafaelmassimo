import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './About.css';

function About() {
    return (
        <>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink activeClassName="active" to={'/about'}>
                About
            </NavLink>

            <h2>This is the About Page</h2>
        </>
    );
}

export default About;
