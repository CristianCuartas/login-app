import React, {Component} from 'react';
import {
  Button,
  Card,
  CardTitle,
  CardText,
  Col,
  Container,
  Row,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

class ModificarView extends Component {
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
                <NavLink href="#HomePage">Página principal </NavLink>
               </NavItem>
              <NavItem>
                <NavLink href="#Ver">Ver </NavLink>
               </NavItem>
               <NavItem>
               {/*<NavItem>
                <NavLink href="/#/logout">Registrar </NavLink>
               </NavItem>*/}
                <NavLink href="#Modificar">Modificar </NavLink>
               </NavItem>
               <NavItem>
                <NavLink href="#Eliminar">Eliminar </NavLink>
               </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
            </Container>
            <div style={{marginTop:"150px"}} className="d-flex content-justify-center">
            <Container>
            <Row>
          <Col md="4" >
            <Card body>
              <CardTitle className="text-center">Modificar productos</CardTitle>
              <Button href="#Modificar"outline color="primary">Modificar</Button>
            </Card>
          </Col>    
          </Row>
            </Container>
            </div>
            </div>
            </div>
    );
  }
}

export default ModificarView;