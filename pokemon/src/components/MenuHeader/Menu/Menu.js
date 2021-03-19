import React, {useState} from 'react';
import styles from './Menu.module.css';
import cn from 'classnames';
import {Link} from 'react-router-dom'

const routes = [
    {
        href: "home",
        text: 'HOME'
    },
    {
        href: "game",
        text: 'GAME'
    },
    {
        href: "about",
        text: 'ABOUT'
    },
    {
        href: "contact",
        text: 'CONTACT'
    },
]

 const Menu = ({menuOpen}) => {

    const handleClick = (menuOpen) => {

    }

    return(
        <div className={cn(styles.menuContainer, {
            [styles.active]: menuOpen === true,
            [styles.deactive]: menuOpen === false,
        }, ) }>
            <div className={styles.overlay}/>
            <div className={styles.menuItems}>
                <ul>
                    {routes.map(rout =>  <li onClick={handleClick}><Link to={rout.href}>{rout.text}</Link></li>)}
                </ul>
            </div>
        </div>
    )
}

export default Menu