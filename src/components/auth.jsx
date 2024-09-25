import React, { useState } from 'react';
import SignIn from './Signin'; // Import from components
import SignUp from './Signup'; // Import from components
import '../assets/styles/Container.css'; // Make sure this path is accurate

const Auth = () => {
    const [isSignIn, setIsSignIn] = useState(true);

    const toggle = () => {
        setIsSignIn((prev) => !prev);
    };

    return (
        <div>
            {isSignIn ? <SignIn toggle={toggle} /> : <SignUp toggle={toggle} />}
        </div>
    );
};

export default Auth;