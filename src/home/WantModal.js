import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, Input } from 'reactstrap';
import 'firebase/auth';
import 'firebase/database';
import firebase from 'firebase/app';

// Takes in props representing user's book want list (wantList), function to add to want list (addToWantList), 
// function to set want list (setWantList), whether a book is on the list (setIsOnList),
// text giving instructions to user and function to set text (text, setText), firebase user key (fbuserkey),
// and items on want list (wantListItems)
function WantModal(props) {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const [val, setVal] = useState('');
    const [list, setList] = useState([]);

    const handleSubmit = event => {
        event.preventDefault()
        if (val.length > 0) {
            setList((old) => [...old, val]);
        }
        setVal('');
    }

    useEffect(() => {
        const ref = firebase.database().ref(props.fbuserkey + '/want');
        let arr = [];
        props.wantListItems.forEach(book => {
            arr.push(book.key);
            ref.set(arr)
            .catch(err => console.log(err)); //log any errors for debugging
        })
    }, [props.wantListItems]); // eslint-disable-line react-hooks/exhaustive-deps

    let listItems = list.map((book) => {
        return <li key={book}>{book}</li>;
    });

    let confirmChanges = () => {
        list.forEach(book => {
            props.setWantList((old) => [...old, book]);
        });
        toggle();
        setVal('');
        setList([]);
        if (list.length > 0) {
            props.setText("");
        }
    }

    let clear = () => {
        props.setWantList([]);
        props.setIsOnList({});
        props.setText('Click edit to add books you want here.');
        firebase.database().ref(props.fbuserkey + '/want').set([]);
    }

    let handleOnChange = (event) => {
        let inputText = event.target.value;
        setVal(inputText);
    }

    let handleCancel = () => {
        toggle();
        setVal('');
        setList([]);
    }

    return (
        <div>
            <Button color="secondary" onClick={toggle}>Edit</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Books I Want</ModalHeader>
                <ModalBody>
                    <Form onSubmit={handleSubmit}>
                        <label htmlFor="addBook">Add books you want below:</label>
                        <Input type="text" value={val} onChange={handleOnChange}
                            placeholder="Book Title...">
                        </Input>
                        <ul>
                            {listItems}
                        </ul>
                        <Button className="add" color="secondary">Add to list</Button>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={handleCancel}>Cancel</Button>
                    <Button color="danger" onClick={confirmChanges}>Confirm changes</Button>
                </ModalFooter>
            </Modal>
            <Button className="clear" onClick={clear} color="primary">Clear</Button>
        </div>
    );
}

export default WantModal;

