import React from "react";
import "./style.css";

function NavBar(props) {
    return (
        <nav>
            <ul>
                <li>
                    <a href="/Memory-Game">{props.title}</a>
                </li>

                <li id="currentScore">Current Score: {props.score}</li>

                <li id="topScore">Top Score: {props.topScore}</li>

            </ul>

            <p>
                <li id="winLose">{props.winLose}</li>
            </p>

        </nav>
    );
};

export default NavBar;
