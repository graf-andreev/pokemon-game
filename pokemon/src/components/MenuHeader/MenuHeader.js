import React, {useState} from 'react';
import Menu from "./Menu/Menu";
import NavBar from "./NavBar/NavBar";

const MenuHeader = ({bgActive}) => {

    const [menuOpen, setMenuOpen] = useState(null)

    const handleClickButton = () => {
        setMenuOpen(prevState => !prevState)
    }

    return(
        <>
            <Menu menuOpen={menuOpen}/>
            <NavBar menuOpen={menuOpen} bgActive={bgActive} onClickButton={handleClickButton}/>
        </>
        )
}

export default MenuHeader