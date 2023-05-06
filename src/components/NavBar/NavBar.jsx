
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { NavLink } from 'react-router-dom';
import { CartWidget } from '../CartWidget/CartWidget';



const NavBar = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <NavLink className={({ isActive }) => isActive ? 'btn btn-info' : "btn btn-outline-info"} to="/">Productos</NavLink>
          <Nav className="me-auto">
            <NavLink className={({ isActive }) => isActive ? 'btn btn-info' : 'btn btn-outline-info'} to="/category/Producto A">Categoria A</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'btn btn-info' : 'btn btn-outline-info'} to="/category/Producto B">Categoria B</NavLink>
          </Nav>
          <Nav>
            <NavLink to="/carrito"><CartWidget/></NavLink>
            
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar