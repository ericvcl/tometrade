import React from 'react';
import HaveCard from './HaveCard';
import WantModal from './WantModal';
import 'firebase/database';

// Takes in props representing information about user's book want list (wantList, setWantList, addToWantList, 
// setIsOnList), firebase user key (fbuserkey), user's book have list (val, setVal, list, setList, haveList, setHaveList), 
// and text to display on have and want cards (text, setText, text2, setText2)
function HaveWant(props) {
    let wantListItems = props.wantList.map((book) => {
        return <li key={book}>{book}</li>;
    });

    return (
        <section className="books">
            <div className="mx-auto books-profile text-center font-weight-bold display-5"> Books I have and want</div>
            <div className="cards-container">
                <div className="row mx-auto d-flex justify-content-center col-12 equal">

                    {/* <!-- "Books I Have" Card --> */}
                    <div className="col-md-6">
                        <div className="card mb-4 box-shadow card-book">
                            <HaveCard
                                val={props.val}
                                setVal={props.setVal}
                                list={props.list}
                                setList={props.setList}
                                haveList={props.haveList}
                                setHaveList={props.setHaveList}
                                fbuserkey={props.fbuserkey}
                                text={props.text}
                                setText={props.setText} />
                        </div>
                    </div>

                    {/* <!-- "Books I Want" Card --> */}
                    <div className="col-md-6">
                        <div className="card mb-4 box-shadow card-book">
                            <div className="card-body">
                                <div className="card-title">Books I Want:</div>
                                <p id="wantsQuote">{props.text2}</p>
                                <ul id="wantsCardList">
                                    {wantListItems}
                                </ul>
                                <WantModal wantList={props.wantList}
                                    addToWantList={props.addToWantList}
                                    setWantList={props.setWantList}
                                    setIsOnList={props.setIsOnList}
                                    text={props.text2}
                                    setText={props.setText2}
                                    fbuserkey={props.fbuserkey}
                                    wantListItems={wantListItems} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>)
}

export default HaveWant;