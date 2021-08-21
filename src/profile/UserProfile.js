import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, Input, Label } from 'reactstrap';

// Takes in props representing the user (user), user's university name (univ), 
// and function to set university (setUniv)
function UserProfile(props) {
    const [modal, setModal] = useState(true);
    const toggle = () => setModal(!modal);

    let attendsUniv = "";

    if (props.univ !== "") {
        attendsUniv = "Attends: " + props.univ;
    }

    let handleOnChange = (event) => {
        let inputText = event.target.value;
        if (inputText.length > 0) {
            props.setUniv(inputText);
        }
    }

    let handleSubmit = event => {
        event.preventDefault();
        toggle();
    }

    return (
        <div>
            <div className="mx-auto book-matches text-center font-weight-bold display-5"> About you </div>
            <img className="profile-pic" src="img/default-profile.jpg" alt="User's profile" />

            <div className="text-center">
                Name: {props.user.displayName}
                <br></br>
                {attendsUniv}

                <Modal isOpen={modal} toggle={toggle}>
                    <ModalHeader toggle={toggle}>Hi there, {props.user.displayName}!</ModalHeader>
                    <ModalBody>
                        <Form className="univ-form" onSubmit={handleSubmit}>
                            <Label for="student-univ">To get you set up for book matching, what university do you attend? (Click the X if you've already submitted)</Label>
                            <Input type="text"
                                className="univ-name"
                                onChange={handleOnChange}></Input>
                            <Button className="submit" color="primary">Submit</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        </div>
    )
}

export default UserProfile;