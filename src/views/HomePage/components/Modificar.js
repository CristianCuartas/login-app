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
  NavLink,
  FormGroup,
  Label,
  Input,

} from "reactstrap";
import url from "./../../../Conection/server";

class Modificar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    collapsed: true,
    producto: [],
    token: "Bearer",
    id: '',
    name:"",
    cost:"" ,
    quantity:""
    };
    this.toggleNavbar = this.toggleNavbar.bind(this);
  }

  toggleNavbar(){
    this.setState({
      collapsed:!this.state.collapsed    
    })
  }
 udapteData =()=>{
  fetch(url + "products", {
    method: 'PUT',
    body: JSON.stringify({
      "id":   this.state.id,
      "name": this.state.name,
      "cost": this.state.cost ,
      "quantity": this.state.quantity
    }),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': this.state.token,
    }
  }).then(response => response.json())
    .catch(error => console.error('Error:', error))
    .then(response => this.setState({ producto: response }));
 }
handleUdapte = e => {
  e.preventDefault();
  this.udapteData();
}
  render() {
    console.log(this.state.id);
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
          <div style={{marginTop:"100px"}}>
          <Form>
          <Row form>
            <Col md={3}>
              <FormGroup>
                <Label for="id">Id:</Label>
                <Input onChange={(e) => {this.setState({id: e.target.value});}}
                type="text" name="id" placeholder="Change id product" />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label for="name">Name:</Label>
                <Input onChange={(e) => {this.setState({name: e.target.value});}}
                type="text" name="name" placeholder="Change name product" />
              </FormGroup>
            </Col>
          <Col md={3}>
          <FormGroup>
            <Label for="cost">Cost:</Label>
            <Input onChange={(e) => {this.setState({cost: e.target.value});}}
            type="text" name="cost" placeholder="Change cost product"/>
          </FormGroup>
          </Col>
          <Col md={3}>
          <FormGroup>
            <Label for="quantity">Quantity:</Label>
            <Input onChange={(e) => {this.setState({quantity: e.target.value});}}
            type="text" name="quantity" placeholder="Change quantity product"/>
          </FormGroup>
          </Col>
          </Row>
          <Button onClick={(e) => this.handleUdapte(e)} >Update</Button>
        </Form>
        </div>
          </Container>
        </div>
      </div>
    );
  }
}

export default Modificar;