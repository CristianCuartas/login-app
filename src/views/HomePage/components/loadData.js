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
  Table
} from "reactstrap";
import url from "./../../../Conection/server";
import urlProducts from "../../../Conection/serverBD";

class loadData extends Component {
  constructor(props) {
    super(props);
    this.state = {
    collapsed: true,
    collapsedUdapte: false,
    producto: [],
    data:[],
    token: "Bearer",
    id: '',
    name:"",
    cost:"" ,
    quantity:""
    };
    this.toggleNavbar = this.toggleNavbar.bind(this);
  }

  toggleUdapte = () =>{
    this.setState({
      collapsedUdapte: !this.state.collapsedUdapte
    })
    
  }

  toggleNavbar(){
    this.setState({
      collapsed:!this.state.collapsed    
    })
  }
  // `products/${this.state.id}`
  selectUdaptade = () => {
    fetch(url + "products", {
      method: 'GET', // or 'PUT'
      headers:{
        'Content-Type': 'application/json',
        'Authorization': this.state.token,
      }
      
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => this.setState({ data: response }));
  }

 udapteData =()=>{
  fetch(urlProducts + `${this.state.id}` , {
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
  window.location.reload();
}

componentDidMount(){
  this.selectUdaptade();
}

  render() {
    const aux = this.state.data.map((obj, idx) => {
      return (
        <tr key={idx} value={obj.id}>
          <td scope="col">{obj.id}</td>
          <td scope="col">{obj.name}</td>
          <td scope="col">{obj.cost}</td>
          <td scope="col">{obj.quantity}</td>
          <td><Button className="text-right" outline color="primary" onClick={this.toggleUdapte} style={{ marginBottom: '1rem' }}>Modificar</Button></td>
        </tr>
      )
    });
    console.log(this.state.id);
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <div style={{marginTop:"100px"}}>
          <h1 className="text-center">P R O D U C T O S</h1>
          <br />
          <div className="text-center">
           <Table  className="tableMap">
             <thead className="">
                <tr>
                  <th style={{width:"150px"}} scope="row">Id </th>
                  <th style={{width:"150px"}} scope="row">Nombre</th>
                  <th style={{width:"150px"}} scope="row">Costo</th>
                  <th style={{width:"150px"}} scope="row">Cantidad</th>
                  <th style={{width:"150px"}} scope="row">Modificar</th>
                </tr>
              </thead>
                <tbody>{aux}</tbody>
            </Table>
            </div>
          <Collapse isOpen={this.state.collapsedUdapte}>
          <Form>
          <Row form>
            <Col md={1}>
              <FormGroup>
                <Label for="id">Id:</Label>
                <Input onChange={(e) => {this.setState({id: e.target.value});}}
                type="text" name="id" placeholder="" />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label for="name">Nombre:</Label>
                <Input onChange={(e) => {this.setState({name: e.target.value});}}
                type="text" name="name" placeholder="Nuevo nombre" />
              </FormGroup>
            </Col>
          <Col md={3}>
          <FormGroup>
            <Label for="cost">Costo:</Label>
            <Input onChange={(e) => {this.setState({cost: e.target.value});}}
            type="text" name="cost" placeholder= "Nuevo costo" />
          </FormGroup>
          </Col>
          <Col md={3}>
          <FormGroup>
            <Label for="quantity">Cantidad:</Label>
            <Input onChange={(e) => {this.setState({quantity: e.target.value});}}
            type="text" name="quantity" placeholder="Nueva cantidad"/>
          </FormGroup>
          </Col>
          </Row>
          <Button color="primary" onClick={(e) => this.handleUdapte(e)} >Update</Button>
          <br></br>
          <br></br>
          <p></p>
        </Form>
        </Collapse>
        </div>
          </Container>
        </div>
    );
  }
}

export default loadData;