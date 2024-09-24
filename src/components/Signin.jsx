// src/components/Signin.jsx
import React, { useState } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { validateEmail, handleFirebaseError } from '../utils/validationUtils';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const SignIn = ({ toggle }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [success, setSuccess] = useState('');
    
    const navigate = useNavigate(); // Initialize useNavigate

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

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

        try {
            await signInWithEmailAndPassword(auth, email, password);
            setSuccess("Login successful!");
            
            // Redirect to /home after a successful login
            setTimeout(() => {
                navigate('/home'); // Navigate to /home
            }, 1000); // Delay for 1 second to show the success message
        } catch (error) {
            console.error("Error logging in: ", error);
            const friendlyMessage = handleFirebaseError(error.code);
            setError(friendlyMessage);
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
                {emailError && <p className="error-message">{emailError}</p>}
                
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />
                {passwordError && <p className="error-message">{passwordError}</p>}
                
                {error && <p className="error-message">{error}</p>}
                {success && <p className="success-message">{success}</p>} {/* Display success message */}

                <a href="#" onClick={(e) => e.preventDefault()}>Forget Your Password?</a>
                <button type="submit">Login In</button>
            </form>
            <button onClick={toggle} id="register">Sign Up</button>
        </div>
    );
};

export default SignIn;