import React, {Component} from 'react';
import {
  Col,Row,
  Button,
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Jumbotron,
  Fade
} from "reactstrap";
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    collapsed: true,
    fadeIn: false
    };
    this.toggleNavbar = this.toggleNavbar.bind(this);
  }

  toggleNavbar(){
    this.setState({
      collapsed:!this.state.collapsed    
    })
  }

  
  toggle=()=> {
    this.setState({
        fadeIn: !this.state.fadeIn
    });
  }

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
               {/*<NavItem>
                <NavLink href="/#/logout">Registrar </NavLink>
               </NavItem>*/}
               <NavItem>
                <NavLink href="#ModificarView">Modificar </NavLink>
               </NavItem>
               <NavItem>
                <NavLink href="#Eliminar">Eliminar </NavLink>
               </NavItem>
              </Nav>
            </Collapse>
          </Navbar>  
          <br/>
          <Row>
          <Col md="12">
          <div>
      <Jumbotron>
        <h1 className="display-3">Hola men!</h1>
        <p className="lead">Bienvenido a tu sección de usuario, acá tendras acceso 
        a ver, modificar y eliminar los productos.</p>
        <hr className="my-2" />
        <p>Esto es una practica de React JS con un jsonAPI.</p>

        <Row>
        <Col md="12">
        <Button color="primary" onClick={this.toggle}>Leer más</Button>
        <Fade in={this.state.fadeIn} tag="h1" className="mt-3">
            Eres increible!
        </Fade>
        </Col>
        </Row>
      </Jumbotron>
    </div>
          </Col>
          </Row>       
          </Container>
          </div>
      </div>
    );
  }
}

export default HomePage;