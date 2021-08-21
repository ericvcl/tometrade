import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css'

// Takes in prop representing information about user (user)
function WelcomeHeader(props) {
    return (
        <div>
            <h1 className="mx-auto text-center welcome font-weight-bold"> Welcome, {props.user.displayName}!
            {' '}
            </h1>
            {props.children} {/* for button */}
        </div>
    );
}

export default WelcomeHeader;