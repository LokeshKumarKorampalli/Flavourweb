import React from 'react';

const SignUp = ({ toggle }) => {
    return (
        <div className="form-container sign-up">
            <form>
                <h1>Create Account</h1>
                <span>or use your email for registration</span>
                <input type="text" placeholder="Name" required />
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <button type="submit">Register</button>
            </form>
            <button onClick={toggle} id="login">Sign In</button>
        </div>
    );
};

export default SignUp;
