import React, { useRef } from 'react';
import BookMatchDetails from './BookMatchDetails';

// Takes in props representing user's university (univ) and function to set university (setUniv)
function BookMatches(props) {
    // create refs to avoid using dom calls in react
    const cardRef1 = useRef();
    const cardRef2 = useRef();

    let matchName1 = "David Kostyk";
    let matchName2 = "Lisbeth Salander";

    if (props.univ !== "") {
        matchName1 = "David Kostyk (" + props.univ + " student)";
        matchName2 = "Lisbeth Salander (" + props.univ + " student)";
    }

    return (
        <section className="matches">
            <div className="mx-auto book-matches text-center font-weight-bold display-5"> Book matches </div>
            <div className="cards-container">
                <div className="row mx-auto d-flex justify-content-center col-12 equal">
                    {/* Book match 1 card */}
                    <div className="col-md-6" id="book-match-card-1" ref={cardRef1}>
                        <div className="card mb-4 box-shadow card-book" style={{ borderRadius: '25px!important' }}>
                            <div className="card-body">
                                <div className="card-title">Suggested Book Match:</div>
                                <ul>
                                    <li>{matchName1}</li>
                                    <li>They have, you want: Clean Codes </li>
                                    <li>You have, they want: Our History is the Future </li>
                                </ul>
                                <BookMatchDetails title="Clean Codes by Robert Cecil Martin"
                                    condition="Excellent"
                                    estWorth="$85"
                                    cardRef={cardRef1} />
                            </div>
                        </div>
                    </div>
                    {/* Book match 2 card */}
                    <div className="col-md-6" id="book-match-card-2" ref={cardRef2}>
                        <div className="card mb-4 box-shadow card-book">
                            <div className="card-body">
                                <div className="card-title">Suggested Book Match:</div>
                                <ul>
                                    <li>{matchName2}</li>
                                    <li>They have, you want: Value Sensitive Design </li>
                                    <li>You have, they want: Reseach Methods in Psychology </li>
                                </ul>
                                <BookMatchDetails title="Value Sensitive Design by Batya Friedman"
                                    condition="Fair"
                                    estWorth="$30"
                                    cardRef={cardRef2} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BookMatches;
