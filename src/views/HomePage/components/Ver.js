import React, {Component} from 'react';
import { TableHeaderColumn, BootstrapTable } from 'react-bootstrap-table';
import { Row, Col, Container, NavbarBrand, NavbarToggler, Nav, Navbar, Button, Collapse, NavItem, NavLink} from 'reactstrap';

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
        };
        this.toggleNavbar = this.toggleNavbar.bind(this);
    }
    toggleNavbar(){
      this.setState({
        collapsed:!this.state.collapsed    
      })
    }

    render(){
        return(
          <div className="app flex-row align-items-center">
      <div style={{marginTop:"50px"}}>
        <Container>
          <Navbar  color="faded" light>
            <NavbarBrand href="#" className="mr-auto"></NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Button href="#" className="" color="danger">
              Log out! <i className="fa fa-arrow-circle-right" />
            </Button>
             <Collapse isOpen={!this.state.collapsed} navbar>
              <Nav navbar>
              <NavItem>
                <NavLink href="#Ver">Ver </NavLink>
               </NavItem>
               <NavItem>
               <NavItem>
                <NavLink href="#Register">Registrar </NavLink>
               </NavItem>
                <NavLink href="#Modificar">Modificar </NavLink>
               </NavItem>
               <NavItem>
                <NavLink href="#Eliminar">Eliminar </NavLink>
               </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
          <div style={{marginTop:"200px"}}>

          <div className="table-reponsive">
            <Row>
              <Col md="12">
                <div className="table-ver">
                  <BootstrapTable
                    data={dataVer}
                    hover
                    striped
                    bordered={false}
                    className="texto-small tableloc"
                  >
                    <TableHeaderColumn
                      dataSort={true}
                      isKey
                      dataField={'nombre'}
                      dataAlign="center"
                      width={"250px"}
                    >
                      Nombre
                    </TableHeaderColumn>
                    <TableHeaderColumn
                      dataSort={true}
                      dataField={'edad'}
                      dataAlign="center"
                      width={"250px"}
                    >
                      {' '}
                      Edad{' '}
                    </TableHeaderColumn>
                    </BootstrapTable>
                    </div>
                    </Col>
                    </Row>
                    </div>
                    </div>
          </Container>
        </div>
            </div>
                  
        )
    }
}
export default Ver;