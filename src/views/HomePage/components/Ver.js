import React, {Component} from 'react';
import { TableHeaderColumn, BootstrapTable } from 'react-bootstrap-table';
import { Table, Row, Col, Container, NavbarBrand, NavbarToggler, Nav, Navbar, Button, Collapse, NavItem, NavLink} from 'reactstrap';
import url from "./../../../Conection/server";
import "./../../../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css";
import ModalView from "./Modals/ModalView";

class Ver extends Component{
    constructor(props){
        super(props);
        this.state={
          collapsed: true,
          data:[],
          token: "Bearer",
          modal: false
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
        method: 'GET', 
        headers:{
          'Content-Type': 'application/json',
          'Authorization': this.state.token,
        }
      }).then(res => res.json())
      .then(response => this.setState({ data: response }))
      .catch(error => console.error('Error:', error))
      
    }
    
    componentDidMount(){
      this.getData();
    }


    renderDetails(cell,row){
      return(
          <Button outline color="primary" onClick={() => this.openModal(row.id)}> Ver producto</Button>
        )
    }

    openModal(value){
     this.refs.child.toggle(value);
    }

    render(){
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
                      <TableHeaderColumn 
                      width={"50"}
                      dataAlign="center"
                      dataField={"cost"}> 
                      Costo 
                      </TableHeaderColumn>
                      <TableHeaderColumn 
                      width={"50"}
                      dataAlign="center"
                      dataField={"quantity"}> 
                      Cantidad 
                      </TableHeaderColumn>
                      <TableHeaderColumn width={"50"}
                      dataAlign="center"
                      dataFormat={(row,cell) => this.renderDetails(row, cell)}>
                       Acciones
                      </TableHeaderColumn>
                    </BootstrapTable>
                  </div>
                </div>
                <ModalView modalview={this.state.modal} ref={"child"}/>
            </div>      
            </div>
            </div>
            </Container>
            </div>
            </div>
        )
    }
}
export default Ver;