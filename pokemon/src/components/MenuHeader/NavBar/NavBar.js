import React, {useState} from 'react';
import styles from './NavBar.module.css';
import cn from 'classnames';

const NavBar = ({menuOpen, bgActive = false, onClickButton}) => {


    return(
        <nav className={cn(styles.root, bgActive? styles.bgActive : '')}>
            <div className={styles.navWrapper}>
                <p className={styles.brand}>
                    LOGO
                </p>
                <a onClick={onClickButton} className={cn(styles.menuButton , menuOpen ? styles.active : '')}>
                    <span/>
                </a>
            </div>
        </nav>
    )
}

export default NavBar