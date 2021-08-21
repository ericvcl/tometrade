import React, { useState, useEffect } from 'react';
import {
    Spinner,
    Button
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css'

// Takes in props representing information about book genre (genreSelection) and user's 
// book want list (wantList, addtoWantList, isOnList, setIsOnList)
function Top5List(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 576);

    useEffect(() => {
        window.addEventListener("resize", () => {
            const ismobile = window.innerWidth <= 576;
            if (ismobile !== isMobile) setIsMobile(ismobile);
        }, false);
    }, [isMobile]);

    let classNameList = isMobile ? "list-group-item topList" : "list-group-item d-flex justify-content-between align-items-center";

    let handleClick = (book) => {
        props.addToWantList(book);
        let newIsOnList = { ...props.isOnList };
        newIsOnList[book] = true;
        props.setIsOnList(newIsOnList);
    }


    let createList = (genreList) => {
        let topList = Object.values(genreList)[0].map((book, index) => {
            return <li className={classNameList} key={book}>{(index + 1) + ") "}{book}
                <Button variant="secondary" size="sm" onClick={() => handleClick(book)} disabled={props.isOnList[book]}>{!props.isOnList[book] ? 'Add to Books I want' : 'Added to Books I want'}</Button>
            </li>
        });
        return topList;
    };

    // empty array [] means this useEffect will run once
    useEffect(() => {
        fetch("./data.json")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    let topList;
    if (items.length !== 0) {
        topList = createList(items.genre[props.genre]);
    }

    if (error) {
        return <div className="alert alert-danger">Error: {error.message}</div>;
    } else if (!isLoaded) {
        return (
            <Spinner animation="grow" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        );
    } else {
        return (
            <div>
                <ul className="list-group list-group-flush">
                    {topList}
                </ul>
            </div>
        );
    }
}

export default Top5List;