import React from 'react';
// import { propTypes } from 'react-bootstrap/esm/Image';
import UserProfile from './UserProfile';
import 'firebase/database';

// Takes in props representing the user (user), content to display if user isn't signed in (userContent), 
// user's info if signed in (isSignedIn), user's university name (univ), and function to set university (setUniv)
function Profile(props) {
    if (props.isSignedIn !== undefined && props.isSignedIn !== null) {
        return (
            <div>
                {props.userContent}
                <UserProfile user={props.user}
                    univ={props.univ}
                    setUniv={props.setUniv} />
            </div>
        )
    } else {
        return (
            <div>
                {props.userContent}
            </div>
        )
    }
}

export default Profile;