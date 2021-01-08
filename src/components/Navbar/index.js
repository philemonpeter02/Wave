import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import { IconContext } from "react-icons/lib";
import {Nav, NavbarContainer, NavLogo, NavIcon, MobileIcon, NavMenu, NavItem, NavLinks, MenuBars} from './NavbarElements';

const Navbar = () => {
const [click, setClick] = useState(false)
const [scroll, setScroll] = useState(false)

const handleClick = () => setClick(!click)
const changeNav = () => {
    if(window.scrollY >= 80 ){
        setScroll(true)
    }else{

        setScroll(false)
    }
}

useEffect(() => {
changeNav()
window.addEventListener("scroll", changeNav)
}, [])

    return (
        <>
           <IconContext.Provider value={{ color: "#141414"}}>
               <Nav active={scroll} click={click}>
                   <NavbarContainer>
                       <NavLogo to="/">
                           <NavIcon />
                               Phil's
                       </NavLogo>
                       <MobileIcon onClick={handleClick}>
                           {click ? <FaTimes fill="#fff;" /> : <MenuBars fill="white" />}
                       </MobileIcon>
                       <NavMenu onClick={handleClick} click={click}>
                           <NavItem>
                               <NavLinks to="/">Home</NavLinks>
                           </NavItem>
                           <NavItem>
                               <NavLinks to="/About">About</NavLinks>
                           </NavItem>
                           <NavItem>
                               <NavLinks to="/Contact">Contact Us</NavLinks>
                           </NavItem>
                       </NavMenu>
                   </NavbarContainer>
               </Nav>
           </IconContext.Provider> 
        </>
    )
}

export default Navbar
