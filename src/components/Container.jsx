import React, { useState } from 'react';
import SignIn from './Signin';
import SignUp from './Signup';
import '../assets/styles/Style.css';

const Container = () => {
    const [isSignInActive, setIsSignInActive] = useState(true);

    const toggle = () => {
        setIsSignInActive(!isSignInActive);
    };

    return (
        <div className={`container ${isSignInActive ? '' : 'active'}`} id="container">
            {isSignInActive ? <SignIn toggle={toggle} /> : <SignUp toggle={toggle} />}
            <div className="toggle-container">
                <div className="toggle">
                    <div className="toggle-panel toggle-left">
                        <h1></h1>
                        <p></p>
                        <button className="hidden" onClick={toggle} id="login">Sign In</button>
                    </div>
                    <div className="toggle-panel toggle-right">
                        <h1></h1>
                        <p></p>
                        <button className="hidden" onClick={toggle} id="register">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Container;
