import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, Input } from 'reactstrap';
import 'firebase/auth';
import 'firebase/database';
import firebase from 'firebase/app';

// Takes in props representing value of user's input (val), function to set value (setVal),
// list of books user has (list), function to set list (setList), text giving instructions to user (text),
// function to set text (setText), function to set user's have list (setHaveList), function to handle 
// submissions (handleSubmit), and firebase user key (fbuserkey)
function HaveModal(props) {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    let listItems = props.list.map((book) => {
        return <li key={book}>{book}</li>;
    });

    useEffect(() => {
        const ref = firebase.database().ref(props.fbuserkey + '/have');
        let arr = [];
        props.haveList.forEach(book => {
            arr.push(book.key);
            ref.set(arr)
                .catch(err => console.log(err)); //log any errors for debugging
        })
    }, [props.haveList]); // eslint-disable-line react-hooks/exhaustive-deps

    let ConfirmChanges = () => {
        listItems.forEach(book => {
            props.setHaveList((old) => [...old, book]);
        });
        toggle();
        props.setVal('');
        if (listItems.length > 0) {
            props.setText("");
        }
        props.setList([]);
    }

    let clear = () => {
        props.setHaveList([]);
        props.setText('Click edit to add books you have here.');
        firebase.database().ref(props.fbuserkey + '/have').set([]);

    }

    let handleOnChange = (event) => {
        let inputText = event.target.value;
        props.setVal(inputText);
    }

    let handleCancel = () => {
        toggle();
        props.setVal('');
        props.setList([]);
    }

    return (
        <div>
            <Button color="secondary" onClick={toggle}>Edit</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Books I Have</ModalHeader>
                <ModalBody>
                    <Form onSubmit={props.handleSubmit}>
                        <label htmlFor="addBook">Add books you have below:</label>
                        <Input type="text" value={props.val} onChange={handleOnChange}
                            placeholder="Book Title...">
                        </Input>
                        <ul>
                            {listItems}
                        </ul>
                        <Button
                            className="add" color="secondary">Add to list</Button>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={handleCancel}>Cancel</Button>
                    <Button color="danger" onClick={ConfirmChanges}>Confirm changes</Button>
                </ModalFooter>
            </Modal>
            <Button className="clear" onClick={clear} color="primary">Clear</Button>
        </div>
    );
}

export default HaveModal;