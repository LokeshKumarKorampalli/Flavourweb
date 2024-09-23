// src/components/Signup.jsx
import React, { useState } from 'react';
import { auth, db } from '../firebase'; // Adjust the import path
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

const SignUp = ({ toggle }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            // Create user with email and password
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Save user information to Firestore
            await setDoc(doc(db, "users", user.uid), {
                name: name,
                email: email,
            });

            alert("Registration successful");
            // Redirect or perform further actions
        } catch (error) {
            console.error("Error registering: ", error);
            alert("Registration failed");
        }
    };

    return (
        <div className="form-container sign-up">
            <form onSubmit={handleRegister}>
                <h1>Create Account</h1>
                <span>or use your email for registration</span>
                <input 
                    type="text" 
                    placeholder="Name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    required 
                />
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
                <button type="submit">Register</button>
            </form>
            <button onClick={toggle} id="login">Sign In</button>
        </div>
    );
};

export default SignUp;