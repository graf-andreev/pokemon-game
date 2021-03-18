import React from "react";
import styles from './Game.module.css';

const GamePage = ({onChangePage}) => {

    const handleClick = () => {
        onChangePage && onChangePage('home')
    }

    return (
        <div>
            <button onClick={handleClick}>
               Go home!
            </button>
        </div>
    )
}

export default GamePage