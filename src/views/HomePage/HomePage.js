import React, {Component} from 'react';
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
  Form,
  Row,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";


class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    collapsed: true,
    };
    this.toggleNavbar = this.toggleNavbar.bind(this);
  }

  toggleNavbar(){
    this.setState({
      collapsed:!this.state.collapsed    
    })
  }
  handleChangeInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };


  render() {
    return (

      <div className="app flex-row align-items-center">
      <div style={{marginTop:"50px"}}>
        <Container>
          <Navbar  color="faded" light>
            <NavbarBrand href="#" className="mr-auto"></NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Button className="" color="danger" href="/#/logout">
            Log out! <i className="fa fa-arrow-circle-right" />
            </Button>
             <Collapse isOpen={!this.state.collapsed} navbar>
              <Nav navbar>
              <NavItem>
                <NavLink href="#Ver">Ver </NavLink>
               </NavItem>
               <NavItem>
                <NavLink href="/#/logout">Registrar </NavLink>
               </NavItem>
               <NavItem>
                <NavLink href="#Modificar">Modificar </NavLink>
               </NavItem>
               <NavItem>
                <NavLink href="#Eliminar">Eliminar </NavLink>
               </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
          </Container>
        </div>
      </div>
    );
  }
}

export default HomePage;