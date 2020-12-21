import {useState} from 'react';
import Logo from '../images/logo.png';
import '../styles/Header.css';
import {Link} from "react-router-dom";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'; 
 
 function Header() {
      const [isOpen, setIsOpen] = useState(false);
      const toggle = () => setIsOpen(!isOpen);
   return (
     <div className = "header">
        <Navbar className = "header__navbar" expand="md">
        <Link to = "/">
        <img className = "header__logo" src = {Logo} alt="" />
        <NavbarBrand className = "header__brandName">
        We For You
        </NavbarBrand>
        </Link>
        <NavbarToggler className="header__toggle navbar-light" onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink className = "header__ul nav-link active" href="/">Home</NavLink>
            </NavItem>
              <NavItem>
              <NavLink className = "header__ul" href="/center/">Centers</NavLink>
            </NavItem>
              <NavItem>
              <NavLink className = "header__ul" href="/developer/">Developer</NavLink>
            </NavItem>
              <NavItem>
              <NavLink className = "header__ul" href="/about/">About</NavLink>
            </NavItem>
          </Nav>
          
        </Collapse>
      </Navbar> 
     </div>
   );     
 }

 export default Header;