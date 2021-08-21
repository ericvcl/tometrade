import React, { useState } from 'react';
import {
    ButtonGroup,
    Dropdown,
    DropdownButton,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css'
import TopTradesTitle from './TopTradesTitle';
import Top5List from './Top5List';

// Takes in props representing information about user's book want list (wantList, addtoWantList, isOnList, 
// setIsOnList)
function MonthlyTopTrades(props) {
    const [genreTitle, setGenreTitle] = useState("Mystery");
    const [genreSelection, setGenreSelection] = useState(0);
    let handleClick = (choice, selectionNum) => {
        setGenreTitle(choice);
        setGenreSelection(selectionNum);
    };

    return (
        <div>
            <div className="mx-auto recently-listed text-center font-weight-normal mt-4 display-5"> Monthly Top Trades</div>
            <div className="col-md-8 mx-auto">
                <div className="card mb-4 box-shadow card-book">
                    <div className="card-body">
                        <div className="card-header d-flex justify-content-between align-items-center font-weight-bold">
                            <TopTradesTitle genre={genreTitle} />
                            <div className="dropdown">
                                <ButtonGroup>
                                    <DropdownButton variant="secondary" as={ButtonGroup} title="Select Genre.." id="bg-nested-dropdown">
                                        <Dropdown.Item eventKey="1" onClick={() => handleClick("Mystery", 0)}>Mystery</Dropdown.Item>
                                        <Dropdown.Item eventKey="2" onClick={() => handleClick("Fantasy", 1)}>Fantasy</Dropdown.Item>
                                        <Dropdown.Item eventKey="3" onClick={() => handleClick("Thriller", 2)}>Thriller</Dropdown.Item>
                                    </DropdownButton>
                                </ButtonGroup>
                            </div>
                        </div>
                        <Top5List genre={genreSelection} wantList={props.wantList} addToWantList={props.addToWantList} isOnList={props.isOnList} setIsOnList={props.setIsOnList} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MonthlyTopTrades;
