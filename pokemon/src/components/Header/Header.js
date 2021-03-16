import React from "react";
import styles from './Header.module.css'

const Header = ({title, descr, onClickButton}) => {

    const handleClick = () => {
        onClickButton && onClickButton('game')
    }

    return(
        <header className={styles.root}>
            <div className={styles.forest}></div>
            <div className={styles.container}>
                <h1>{title}</h1>
                <p>{descr}</p>
                <button onClick={handleClick}>
                    Start Game!
                </button>
            </div>
        </header>
    )
}

export default Header