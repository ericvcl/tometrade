import React from 'react';
import BookMatches from './BookMatches';
import Discover from './Discover';
import HaveWant from './HaveWant';
import MonthlyTopTrades from './MonthlyTopTrades';
import 'firebase/database';

// Takes in props representing information about the user and sign-in authentication (user, userContent, isSignedIn),
// user's university (univ, setUniv), firebase user key (fbuserkey), user's book want list (wantList, setWantList, isOnList, 
// setIsOnList, addtoWantList), user's book have list (val, setVal, list, setList, haveList, setHaveList), and text to
// display on have and want cards (text, setText, text2, setText2)
function Home(props) {
    if (props.isSignedIn !== undefined && props.isSignedIn !== null) {
        return (
            <div>
                {props.userContent}
                <HaveWant wantList={props.wantList}
                    setWantList={props.setWantList}
                    addToWantList={props.addToWantList}
                    setIsOnList={props.setIsOnList} 
                    fbuserkey={props.fbuserkey}
                    val={props.val}
                    setVal={props.setVal}
                    list={props.list}
                    setList={props.setList}
                    haveList={props.haveList}
                    setHaveList={props.setHaveList} 
                    text={props.text}
                    setText={props.setText}
                    text2={props.text2}
                    setText2={props.setText2} />
                <BookMatches univ={props.univ}
                    setUniv={props.setUniv} />
                <Discover wantList={props.wantList}
                    addToWantList={props.addToWantList}
                    isOnList={props.isOnList}
                    setIsOnList={props.setIsOnList} />
                <MonthlyTopTrades wantList={props.wantList}
                    addToWantList={props.addToWantList}
                    isOnList={props.isOnList}
                    setIsOnList={props.setIsOnList} />
            </div>
        )
    } else {
        return (
            <div>
                {props.userContent}
            </div>
        )
    }
}

export default Home;