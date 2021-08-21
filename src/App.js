import React, { useState, useEffect } from 'react';
import { BrowserRouter as Route, Switch, Redirect } from 'react-router-dom';
import About from './about/About';
import Home from './home/Home';
import Profile from './profile/Profile';
import NavBar from './home/Nav';
import Footer from './home/Footer';
import WelcomeHeader from './home/WelcomeHeader'
import './index.css';
import firebase from 'firebase/app';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { Button } from 'reactstrap';
import 'firebase/auth';
import 'firebase/database';

const uiConfig = {
    signInFlow: 'popup',

    signInOptions: [
        {
            provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
            requireDisplayName: true
        },
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
    credentialHelper: 'none',
    callbacks: {
        // Avoid redirects after sign-in.
        signInSuccessWithAuthResult: () => false,
    },

};

function App() {

    const [errorMessage, setErrorMessage] = useState(undefined);
    const [user, setUser] = useState(undefined);
    const [univ, setUniv] = useState(""); // state of what university user attends (set in Profile page)


    // (card state is lifted to app level to maintain card state between routes)
    /* --- Want Card --- */
    // state for 'Books I want' is lifted to allow other components to add to it
    const [wantList, setWantList] = useState([]);

    // for greyed out add buttons, uses key val pair (book > "true"/"false") to determine whether or not
    // boook is on the list
    const [isOnList, setIsOnList] = useState({});
    const [text2, setText2] = useState('Click edit to add books you want here.');

    let addToWantList = (bookTitle) => {
        setWantList([...wantList, bookTitle]);
    };

    /* --- Have Card --- */
    const [val, setVal] = useState("");
    const [list, setList] = useState([]);
    const [haveList, setHaveList] = useState([]);
    const [text, setText] = useState('Click edit to add books you have here.');


    /* --- Signing in / out --- */
    useEffect(() => {
        firebase.auth().onAuthStateChanged((firebaseUser) => {
            if (firebaseUser) {
                setUser(firebaseUser);
            } else {
                setUser(null);
            }
        })
    })

    const handleSignOut = () => {
        setErrorMessage(null);
        setIsOnList({});
        setWantList([]);
        setHaveList([]);
        firebase.auth().signOut();
    }

    /* --- Pulling books from db on log in --- */
    // get book list based on user's key and list type
    const getBookList = (key, type) => {
        key.once('value').then((snapshot) => {
            if (snapshot.val() !== null) {
                let val = (snapshot.val());
                if (type === 'have') {
                    let listItems = val.map((book) => {
                        return <li key={book}>{book}</li>;
                    });
                    listItems.forEach(book => {
                        setHaveList((old) => [...old, book]);
                    });
                    setText('');
                } else {
                    let onList = {};
                    val.forEach(book => {
                        setWantList((old) => [...old, book]);
                        onList[book] = true;
                    });
                    setIsOnList(onList);
                    setText2('');
                }
            }
        });
    }

    let content = null;

    let userEmail = "";
    if (user !== undefined && user !== null) {
        userEmail = user.email;
    }

    useEffect(() => {
        if (userEmail !== "") {
            getBookList(firebase.database().ref(userEmail.replace(/[^a-zA-Z0-9]/g, "") + '/have'), 'have');
            getBookList(firebase.database().ref(userEmail.replace(/[^a-zA-Z0-9]/g, "") + '/want'), 'want');
        }
    }, [userEmail]);

    /* --- Content to be display based on if user is logged in or not --- */
    if (!user) { // signed out
        content = (
            <div>
                {errorMessage && <p className="alert alert-danger">{errorMessage}</p>}
                <div className="sign-in-box">
                    <div className="mx-auto sign-in text-center font-weight-bold display-5"> Sign In or Sign Up</div>
                    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
                </div>
            </div>
        );
    }
    else { // signed in
        content = (
            <div>
                {errorMessage && <p className="alert alert-danger">{errorMessage}</p>}
                <WelcomeHeader user={user} >
                    {/* log out button is child element */}
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 align-self-center text-center">
                                <Button color="primary" onClick={handleSignOut} >
                                    Log Out
                            </Button>
                            </div>
                        </div>
                    </div>
                </WelcomeHeader>
            </div >
        );
    }

    return (
        <div className="appContainer">
            <NavBar />
            <div className="content">
                <Switch>
                    {/* Note: it was necessary for all these states to be lifted to App level and passed down as props to properly maintain state) */}
                    <Route exact path="/">
                        <Home user={user}
                            userContent={content}
                            isSignedIn={user}
                            univ={univ}
                            setUniv={setUniv}
                            fbuserkey={(userEmail).replace(/[^a-zA-Z0-9]/g, "")}
                            wantList={wantList}
                            setWantList={setWantList}
                            isOnList={isOnList}
                            setIsOnList={setIsOnList}
                            addToWantList={addToWantList}
                            val={val}
                            setVal={setVal}
                            list={list}
                            setList={setList}
                            haveList={haveList}
                            setHaveList={setHaveList}
                            text={text}
                            setText={setText}
                            text2={text2}
                            setText2={setText2} />
                    </Route>
                    <Route path="/profile">
                        <Profile user={user}
                            userContent={content}
                            isSignedIn={user}
                            univ={univ}
                            setUniv={setUniv}
                            fbuserkey={(userEmail).replace(/[^a-zA-Z0-9]/g, "")}
                        />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Redirect to="/" />
                </Switch>
            </div>
            <Footer />
        </div>
    );
}

export default App;
