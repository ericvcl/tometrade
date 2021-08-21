import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

// Takes in props representing references to the card (cardRef), button (buttonRef), and
// function to hide the selected match card (hideMatchCard)
function BookMatchConfirm(props) {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    function hideModal() {
        let bookMatchCard = props.cardRef.current;
        bookMatchCard.style.display = 'none';
        bookMatchCard.classList.remove('col-md-6');
        setModal(!modal);
        props.hideMatchCard();
    }

    return (
        <div>
            <Button color="primary" onClick={toggle}>Want to match</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>You've confirmed your book match!</ModalHeader>
                <ModalBody>
                    Thanks for confirming the match! When the other student confirms as well, you'll be notified. Then
                    you'll be able to exchange contact information and communicate trading plans using whatever platform
                    suits you best.
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={hideModal}>Okay</Button>{' '}
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default BookMatchConfirm;