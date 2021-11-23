import React, {useState,useEffect} from 'react'
import {Nav, NavbarContainer, MobileIcon, NavItem, NavMenu, NavLinks} from './navbarElement';
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import Logo from '../../img/Logo.png'
import './navbar.css'
const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = ()=>{
        if(window.scrollY >=80){
           setScrollNav(true)
           
        }
        else{
            setScrollNav(false)
        }
    }

    useEffect(()=>{window.addEventListener('scroll',changeNav)},[])
    const toggleHome = ()=>{
        scroll.scrollToTop()
    }
    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>  
                <NavLinks to="intro"><img src={Logo} alt='Logo Bach' className='nav-logo'></img></NavLinks>          
                <MobileIcon onClick={toggle}>
                        <FaBars />
                </MobileIcon >
                <NavMenu>
                        <NavItem>
                        <NavLinks to="about">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="project">Project</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contact">Contact</NavLinks>
                        </NavItem>         
                </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar