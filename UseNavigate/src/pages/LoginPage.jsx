import { useNavigate, useParams } from 'react-router-dom';
import { useState, useRef } from 'react';

function LoginPage() {
    const nameInputValueRef = useRef(null);
    const passwordInputValueRef = useRef(null);
    const navigate = useNavigate();

    const correctName = 'Rafael';
    const correctPassword = 1234;

    const handleSubmit = (e) => {
        e.preventDefault();

        const nameInput = nameInputValueRef.current.value;
        const passwordInput = parseInt(passwordInputValueRef.current.value);
        console.log(nameInput);
        console.log(passwordInput);

        correctName === nameInput && correctPassword === passwordInput ? navigate(`/${nameInput}`, {userInfo: "test"} ) : alert('Please check your data, something is wrong');
    };

    return (
        <>
            <div >
                <form id='form-box' onSubmit={handleSubmit}>
                    <label htmlFor="name">Insert Here your name:</label>
                    <input
                        name="name"
                        ref={nameInputValueRef}
                        type="text"
                        placeholder="Name"
                    />

                    <label htmlFor="password">Insert Here your password:</label>
                    <input
                        name="password"
                        ref={passwordInputValueRef}
                        type="password"
                        placeholder="Password"
                    />

                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    );
}

export default LoginPage;
