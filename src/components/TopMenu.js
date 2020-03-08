import React, { useContext } from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink, Container
} from 'reactstrap';

import  {Link}  from "react-router-dom";
import {CartContext} from '../contexts/Cart'

const TopMenu = (props) => {

  const {cartItems} = useContext(CartContext)

  return (
    <Container>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Son Lam Thai</NavbarBrand>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink> <Link to="/">Home</Link></NavLink>
          </NavItem>
          <NavItem>
            <NavLink ><Link to="/products">Products</Link></NavLink>
          </NavItem>
          <NavItem >
            <NavLink >
              <Link to="/products">Cart ({cartItems.length})</Link>
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </Container>
  );
}

export default TopMenu;