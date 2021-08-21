import React from 'react';
import HaveModal from './HaveModal';

// Takes in props representing information about user's book have list (val, setVal, list, setList, haveList, 
// setHaveList), firebase user key (fbuserkey), and text to display on have card (text, setText)
function HaveCard(props) {
    const handleSubmit = event => {
        event.preventDefault()
        if (props.val.length > 0) { //props
            props.setList((old) => [...old, props.val]); //props
        }
        props.setVal(''); //props
    }

    return (
        <div>
            {/* <!-- "Books I Have" Card --> */}
            <div className="card-body">
                <div className="card-title">Books I Have:</div>
                <p id="hasQuote">{props.text}</p>
                <ul id="hasCardList">
                    {props.haveList}
                </ul>
                <HaveModal val={props.val}
                    setVal={props.setVal} 
                    list={props.list} 
                    setList={props.setList} 
                    text={props.text}
                    setText={props.setText}
                    haveList={props.haveList}
                    setHaveList={props.setHaveList} 
                    handleSubmit={handleSubmit}
                    fbuserkey={props.fbuserkey} />
            </div>
        </div>)
}

export default HaveCard;