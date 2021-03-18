import React, {useState} from 'react';
import styles from './Menu.module.css';
import cn from 'classnames';

 const Menu = ({isOpen}) => {

    const routes = [
        {
            href: "#welcome",
            text: 'HOME'
        },
        {
            href: "#game",
            text: 'GAME'
        },
        {
            href: "#about",
            text: 'ABOUT'
        },
        {
            href: "#contact",
            text: 'CONTACT'
        },
    ]

    return(
        <div className={cn(styles.menuContainer, !isOpen ? [styles.active ]: isOpen) }>
            <div className={styles.overlay}/>
            <div className={styles.menuItems}>
                <ul>
                    {routes.map(rout =>  <li><a href={rout.href}>{rout.text}</a></li>)}
                </ul>
            </div>
        </div>
    )
}

export default Menu