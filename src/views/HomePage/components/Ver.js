import React, {Component} from 'react';
import { TableHeaderColumn, BootstrapTable } from 'react-bootstrap-table';
import { Table, Row, Col, Container, NavbarBrand, NavbarToggler, Nav, Navbar, Button, Collapse, NavItem, NavLink} from 'reactstrap';
import url from "./../../../Conection/server";

const dataVer = [
    {
        nombre: "Cristian",
        edad: 18
    },
    {
        nombre: "Ricardo",
        edad: 20
    },
    {
        nombre: "Juan",
        edad: 12
    }

]


class Ver extends Component{
    constructor(props){
        super(props);
        this.state={
          collapsed: true,
          data:[],
          token: "Bearer"
        };
        this.toggleNavbar = this.toggleNavbar.bind(this);
    }

    toggleNavbar(){
      this.setState({
        collapsed:!this.state.collapsed    
      })
    }

    getData = () => {
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
    

    componentDidMount(){
      this.getData();
    }

    render(){
      const aux = this.state.data.map((obj, idx) => {
        return (
          <tr key={idx} value={obj.id}>
            <td scope="col">{obj.id}</td>
            <td scope="col">{obj.name}</td>
            <td scope="col">{obj.cost}</td>
            <td scope="col">{obj.quantity}</td>
          </tr>
        )
      })
      console.log(this.state.data);
    return(
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
               <NavItem>
                <NavLink href="/#/logout">Registrar </NavLink>
               </NavItem>
                <NavLink href="#Modificar">Modificar </NavLink>
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
           <Table striped dark className="tableMap">
             <thead className="thead-light">
                <tr>
                  <th style={{width:"150px"}} scope="row">Id</th>
                  <th style={{width:"150px"}} scope="row">Nombre</th>
                  <th style={{width:"150px"}} scope="row">Costo</th>
                  <th style={{width:"150px"}} scope="row">Cantidad</th>
                </tr>
              </thead>
                <tbody>{aux}</tbody>
            </Table>
            </div>
          </div>
          </Container>
        </div>
            </div>
                  
        )
    }
}
export default Ver;