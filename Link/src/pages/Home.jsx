import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Apple from './apple.png';
import './Home.css';

function Home() {
    return (
        <>
            <div>
                <NavLink activeClassName="active" to={'/'}>
                    Home
                </NavLink>
                <NavLink to={'/about'}>About</NavLink>

                <Link to={'https://www.apple.com/ca'}>
                    <img src={Apple}></img>
                </Link>

                <h1 className="text-8xl font-bold underline">Hello world!</h1>
            </div>
        </>
    );
}

export default Home;
