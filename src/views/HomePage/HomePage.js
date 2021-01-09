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
        <h1 className="display-3">Dashboard!</h1>
        <p className="lead">Welcome to user section, here have access to view, edit and delete the products.</p>
        <hr className="my-2" />
        <p>This is a practice the react js with a json-server and json-server-auth.</p>

        <Row>
        <Col md="12">
        <Button color="primary" onClick={this.toggle}>Read more...</Button>
        <Fade in={this.state.fadeIn} tag="p" className="mt-3">
            <a href="https://www.npmjs.com/package/json-server">json-server</a>
            <br/>
            <a href="https://www.npmjs.com/package/json-server-auth">json-server-auth</a>
            <br/>
            <a href="https://github.com/CristianCuartas/login-app">login-app</a>
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