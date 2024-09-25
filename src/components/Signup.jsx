// src/components/Signup.jsx
import React, { useState } from 'react';
import { auth, db } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { validateEmail, handleFirebaseError } from '../utils/validationUtils'; // Import utility functions
import '../assets/styles/Container.css'; // Make sure this path is accurate

const SignUp = ({ toggle }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState(''); // New state for confirm password
    const [error, setError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState(''); // New state for confirm password error
    const [success, setSuccess] = useState(''); // State to store success message

    const handleRegister = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess(''); // Clear previous success message

        // Validate email
        if (!validateEmail(email)) {
            setEmailError('Please enter a valid email.');
            return;
        } else {
            setEmailError('');
        }

        // Validate password
        if (password.length < 6) {
            setPasswordError('Password must be at least 6 characters.');
            return;
        } else {
            setPasswordError('');
        }

        // Validate confirm password
        if (password !== confirmPassword) {
            setConfirmPasswordError('Passwords do not match.');
            return;
        } else {
            setConfirmPasswordError('');
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Save user information to Firestore
            await setDoc(doc(db, "users", user.uid), {
                name: name,
                email: email,
            });

            setSuccess("Account successfully created!"); // Set success message
            
            // Wait 2 seconds and switch to Sign In view
            setTimeout(() => {
                toggle(); // Switch to Sign In component
            }, 1000); // 2000 milliseconds = 2 seconds
        } catch (error) {
            console.error("Error registering: ", error);
            const friendlyMessage = handleFirebaseError(error.code);
            setError(friendlyMessage);
        }
    };

    return (
        <div className="form-container sign-up">
            <form onSubmit={handleRegister}>
                <h1>Create Account</h1>
                
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
                {emailError && <p className="error-message">{emailError}</p>}
                
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />
                {passwordError && <p className="error-message">{passwordError}</p>}
                
                <input 
                    type="password" 
                    placeholder="Confirm Password" 
                    value={confirmPassword} 
                    onChange={(e) => setConfirmPassword(e.target.value)} 
                    required 
                />
                {confirmPasswordError && <p className="error-message">{confirmPasswordError}</p>}
                
                {error && <p className="error-message">{error}</p>}
                {success && <p className="success-message">{success}</p>} {/* Display success message */}

                <button type="submit">Register</button>
            </form>
            <button onClick={toggle} id="login">Sign In</button>
        </div>
    );
};

export default SignUp;