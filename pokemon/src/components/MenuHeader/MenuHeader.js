import React, {useState} from 'react';
import Menu from "./Menu/Menu";
import NavBar from "./NavBar/NavBar";

const MenuHeader = () => {

    const [menuOpen, setMenuOpen] = useState(true)

    const handleClickButton = (isOpen) => {
        setMenuOpen(isOpen)
    }

    return(
        <>
            <Menu isOpen={menuOpen}/>
            <NavBar onClickButton={handleClickButton}/>
        </>
        )
}

export default MenuHeader