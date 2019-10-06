import React from "react";
import "./style.css";

const styles = {
    headerStyle: {
        background: "tan",
        fontSize: 100

    },
    headingStyle: {
    }
};


function Header(props) {
    return (
        <>
        <jumbotron>
            <h1>React Memory Game</h1>
            <h3>Click an image to begin!</h3>
        </jumbotron>
 
        </>

    );
}

export default Header;
