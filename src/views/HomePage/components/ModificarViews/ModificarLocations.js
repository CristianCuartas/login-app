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
import { TableHeaderColumn, BootstrapTable } from 'react-bootstrap-table';
import url from "./../../../../Conection/server";
import "./../../../../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css";
import ModalUdapte from './../../components/Modals/ModalUdapteLocations';

class ModificarLocations extends Component {
  constructor(props) {
    super(props);
    this.state = {
    collapsed: true,
    collapsedUdapte: false,
    modal: false,
    data:[],
    token: "Bearer",
    id: '',
    name:"",
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


  selectUdaptade = () => {
    fetch(url + "locations", {
      method: 'GET', // or 'PUT'
      headers:{
        'Content-Type': 'application/json',
        'Authorization': this.state.token,
      }
      
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => this.setState({ data: response }));
  }
  componentDidMount(){
    this.selectUdaptade();
  }

renderDetail(cell, row){
  return(
    <Button outline color="primary" onClick={()=>{this.openModal(row.id)}}>Modificar producto</Button>
  )
}

openModal(value){
this.refs.children3.toggle(value);
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
            <div className="container">
              <div className="row">
                  <div className="col-md-12">
                    <BootstrapTable data={this.state.data}  bordered={ false } hover striped>
                      <TableHeaderColumn 
                      isKey width={"50"}
                      dataAlign="center"
                      dataField={"id"}> 
                      Producto ID 
                      </TableHeaderColumn>
                      <TableHeaderColumn 
                      width={"50"}
                      dataAlign="center" 
                      dataField={"name"}> 
                      Nombre  
                       </TableHeaderColumn>
                      <TableHeaderColumn width={"50"}
                      dataAlign="center"
                      dataFormat={(cell, row) => this.renderDetail(cell,row)}
                      >
                       Acciones
                      </TableHeaderColumn>
                    </BootstrapTable>
                  </div>
                </div>
                  <ModalUdapte modaludaptelocation={this.state.modal} ref={"children3"}/>
            </div>      
            </div>
            </div>
            </Container>
            </div>
            </div>
    );
  }
}

export default ModificarLocations;