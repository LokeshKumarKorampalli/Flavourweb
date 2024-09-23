// src/components/Signin.jsx
import React, { useState } from 'react';
import { auth } from '../firebase'; // Adjust the import path
import { signInWithEmailAndPassword } from 'firebase/auth';

const SignIn = ({ toggle }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            alert("Login successful");
            // Redirect or perform further actions
        } catch (error) {
            console.error("Error logging in: ", error);
            alert("Login failed: " + error.message);
        }
    };

    return (
        <div className="form-container sign-in">
            <form onSubmit={handleLogin}>
                <h1>Sign In</h1>
                <span>or use your email password</span>
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />
                <a href="#" onClick={(e) => e.preventDefault()}>Forget Your Password?</a>
                <button type="submit">Login In</button>
            </form>
            <button onClick={toggle} id="register">Sign Up</button>
        </div>
    );
};

export default SignIn;