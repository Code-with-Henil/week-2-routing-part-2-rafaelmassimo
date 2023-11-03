// ## NavLink:

// Build a navigation menu for your website with three sections - "Products," "Services," and "Contact."
// Use the `<NavLink>` component to highlight the currently active link in the menu as users navigate between these sections.
// Use any styling method.
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Products from './pages/Products';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Home from './pages/Home';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/Services" element={<Services />} />
                    <Route path="/Contact" element={<Contact />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
