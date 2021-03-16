import React, {useState} from 'react';
import styles from './NavBar.module.css';
import cn from 'classnames';

const NavBar = ({onClickButton}) => {

    const [isOpen, setIsOpen] = useState(false)

    const handlerOpenMenu = () => {
        setIsOpen(!isOpen)
        onClickButton && onClickButton(isOpen)
    }

    return(
        <nav className={styles.root}>
            <div className={styles.navWrapper}>
                <p className={styles.brand}>
                    LOGO
                </p>
                <a onClick={handlerOpenMenu} className={cn(styles.menuButton , isOpen ? styles.active : '')}>
                    <span/>
                </a>
            </div>
        </nav>
    )
}

export default NavBar