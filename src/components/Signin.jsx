import React from 'react';

const SignIn = ({ toggle }) => {
    return (
        <div className="form-container sign-in">
            <form>
                <h1>Sign In</h1>
                <span>or use your email password</span>
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <a href="#">Forget Your Password?</a>
                <button type="submit">Login In</button>
            </form>
            <button onClick={toggle} id="register">Sign Up</button>
        </div>
    );
};

export default SignIn;
