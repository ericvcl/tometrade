import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import BookMatchConfirm from './BookMatchConfirm';

// Takes in props representing book's title, condition, estimated worth (estWorth), and card ref (cardRef)
function BookMatchDetails(props) {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    function hideMatchCard() {
        let bookMatchCard = props.cardRef.current;
        bookMatchCard.style.display = 'none';
        bookMatchCard.classList.remove('col-md-6');
        setModal(!modal);
    }

    return (
        <div>
            <Button color="primary" onClick={toggle}>Details</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Book Match Details</ModalHeader>
                <ModalBody>
                    <ul>
                        <li>Book you want: {props.title}</li>
                        <li>Condition: {props.condition}</li>
                        <li>Estimated worth: {props.estWorth}</li>
                    </ul>
                </ModalBody>
                <ModalFooter>
                    <BookMatchConfirm cardRef={props.cardRef}
                        buttonRef={props.buttonRef}
                        hideMatchCard={hideMatchCard} />
                    <Button color="secondary" onClick={hideMatchCard}>Don't want to match</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default BookMatchDetails;