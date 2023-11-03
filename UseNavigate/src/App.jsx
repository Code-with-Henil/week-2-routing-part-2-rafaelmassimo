// ## useNavigate:

// Build a basic sign-up form for your website. After successful form submission, use the `useNavigate` hook to navigate to a "Welcome"
// page that thanks the user for signing up. Hint: Use time intervals to mock the behavior.

import './App.css';
import LoginPage from './pages/LoginPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<LoginPage />} />
                    <Route path="/:user" element={<WelcomePage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
