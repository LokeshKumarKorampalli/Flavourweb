// src/components/Signin.jsx
import React, { useState } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { validateEmail, handleFirebaseError } from '../utils/validationUtils';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icons
import '../assets/styles/Container.css'; // Make sure this path is accurate


const SignIn = ({ toggle }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [success, setSuccess] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility

  const navigate = useNavigate();

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
        navigate('/home');
      }, 1000);
    } catch (error) {
      console.error("Error logging in: ", error);
      const friendlyMessage = handleFirebaseError(error.code);
      setError(friendlyMessage);
    }
  };

  // Function to handle forgot password
  const handleForgotPassword = async () => {
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email.');
      return;
    } else {
      setEmailError('');
    }

    try {
      await sendPasswordResetEmail(auth, email);
      setSuccess("Password reset email sent! Check your inbox.");
    } catch (error) {
      console.error("Error resetting password: ", error);
      const friendlyMessage = handleFirebaseError(error.code);
      setError(friendlyMessage);
    }
  };

  // Function to toggle password visibility
  const toggleShowPassword = () => {
    setShowPassword((prevShow) => !prevShow);
  };

  return (
    <div className="form-container sign-in">
      <form onSubmit={handleLogin}>
        <h1>Sign In</h1>
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        {emailError && <p className="error-message">{emailError}</p>}

        <div className="password-input-container">
          <input 
            type={showPassword ? "text" : "password"} // Toggle input type
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          <span className="eye-icon" onClick={toggleShowPassword}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        {passwordError && <p className="error-message">{passwordError}</p>}
        
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>} {/* Display success message */}

        <a href="#" onClick={(e) => { e.preventDefault(); handleForgotPassword(); }}>
          Forgot Your Password?
        </a>
        
        <button type="submit">Login In</button>
      </form>
      <button onClick={toggle} id="register">Sign Up</button>
    </div>
  );
};

export default SignIn;