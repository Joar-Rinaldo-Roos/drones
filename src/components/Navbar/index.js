import React, { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements'
import { IconContext } from 'react-icons'
import { animateScroll as scroll } from 'react-scroll/modules'
import { useAuth } from "../../contexts/AuthContext"
import { useLocation } from 'react-router-dom'
const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false)
  const hideNav = () => {
    if (useAuth == true) {
      Navbar = false
    }
  }

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', changeNav)

  }, []);
  const toggleHome = () => {
    scroll.scrollToTop();
  }
  const location = useLocation();
  if (location.pathname === "/shopping") {
    return null;
  }
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to='/' onClick={toggleHome}> Drones
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks to="about" smooth={true} duration={500} spy={false} exact='true' offset={-80} activeClass="active">About</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="discover" smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass="active">Discover</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="services" smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass="active">Services</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="sign-up" smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass="active">Sign Up</NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to="/signin">Sign in</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar