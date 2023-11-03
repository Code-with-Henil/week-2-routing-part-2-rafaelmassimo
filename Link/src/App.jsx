// ## Link:

// Create a simple website with two pages - "Home" and "About."
//  Add navigation links using the `<Link>` component that allow users to switch between these two pages.
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Home from './pages/Home';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
