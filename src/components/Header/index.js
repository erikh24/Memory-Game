import React from "react";
import "./style.css";


function Header(props) {
    return (
        <>
            <div>
                <h1>Harry Potter React Memory Game</h1>
                <br></br>
                <h3>Click an image to begin!</h3>
                <br></br>
                <h3>Be careful! Don't click the same character twice or you'll lose.</h3>
            </div>
        </>

    );
}

export default Header;
