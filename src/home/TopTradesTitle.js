import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css'

// Takes in prop representing book genre (genreTitle)
function TopTradesTitle(props) {
    return (
        <div><span id="top-5-title">Genre: {props.genre}</span></div>
    )
}

export default TopTradesTitle;