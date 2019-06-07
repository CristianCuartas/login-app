import React, {Component} from 'react';
import {
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
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

class Eliminar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    collapsed: true,
    modal: false,
    data:[],
    token: "Bearer",
    id: '',
    };
    this.toggleNavbar = this.toggleNavbar.bind(this);
  }

  toggleDelete = () =>{
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
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

 DeleteData =()=>{
  fetch(urlProducts + `${this.state.id}` , {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': this.state.token,
    }
  }).then(response => response.json())
    .catch(error => console.error('Error:', error))
    .then(response => this.setState({'Success': response }));
 }

handleDelete = e => {
  e.preventDefault();
  this.DeleteData();
  window.location.reload();
}

componentDidMount(){
  this.selectUdaptade();
}

  render() {
    const closeBtn = <button className="close" onClick={this.toggleDelete}>&times;</button>;
    const aux = this.state.data.map((obj, idx) => {
      return (
        <tr key={idx} value={obj.id}>
          <td scope="col">{obj.id}</td>
          <td scope="col">{obj.name}</td>
          <td scope="col">{obj.cost}</td>
          <td scope="col">{obj.quantity}</td>
          <td><Button className="text-right" outline color="danger" onClick={this.toggleDelete} style={{ marginBottom: '1rem' }}>Eliminar</Button></td>
        </tr>
      )
    });
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
                <NavLink href="#HomePage">Página principal </NavLink>
               </NavItem>
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
                  <th style={{width:"150px"}} scope="row">Eliminar</th>
                </tr>
              </thead>
                <tbody>{aux}</tbody>
            </Table>
            </div>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggleDelete} close={closeBtn}>Eliminar producto</ModalHeader>
            <ModalBody>
            <Form>
            <Row form>
              <Col md={12}>
                <FormGroup>
                  <Label for="id"><b> Id del producto:</b></Label>
                  <Input onChange={(e) => {this.setState({id: e.target.value});}}
                  type="text" name="id" placeholder="" />
                </FormGroup>
              </Col>
              </Row>
              </Form>
            </ModalBody>
            <ModalFooter>
              <Button  color="danger" onClick={(e) => this.handleDelete(e)}>Eliminar</Button>{' '}
              <Button  outline color="secondary" onClick={this.toggleDelete}>Cancelar</Button>
            </ModalFooter>
          </Modal>
        </div>
          </Container>
        </div>
      </div>
    );
  }
}

export default Eliminar;