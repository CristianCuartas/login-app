import React, {Component} from "react";
import PropTypes from "prop-types";
import {Modal, ModalHeader, ModalBody, ModalFooter, Button, Form, FormGroup, Label, Input}  from "reactstrap";
import urlProducts from "../../../../Conection/serverBD";
import url from "../../../../Conection/server";

class ModalUdapte extends Component{
    constructor(props){
        super(props);
        this.state={
            data:{},
            modal: this.props.modaludapte,
            producto: [],
            id:'',
            name:'',
            cost:'',
            quantity:'',
            token: "Bearer",
        }
    }

    toggle = (value) =>{
        this.setState(prevState=>({
            modal: !prevState.modal
        }))
        this.getDataById(value);
    }

    getDataById =(value)=>{
        fetch(url + "products/" + value, {
            method: "GET",
            headers: {
              "content-type": "application/json",
              "Authorization": "Bearer "
            }
          }).then(response =>
            response.json().then(data => {  
              this.setState({
                data: data
              });
            })
          );
    }

    udapteData =()=>{
      fetch(urlProducts + `${this.state.data.id}` , {
        method: 'PUT',
        body: JSON.stringify({
          "id": this.state.data.id,
          "name": this.state.name,
          "cost": this.state.cost ,
          "quantity": this.state.quantity
        }),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': this.state.token,
        }
      }).then(response => response.json())
      .then(response => this.setState({ producto: response }))  
      .catch(error => console.error('Error:', error))
        
     }
    handleUdapte = e => {
      e.preventDefault();
      this.udapteData();
    }

    render(){
      console.log(this.state.data.id)
      console.log(this.state.id);
      console.log(this.state.name);
      console.log(this.state.cost);
      console.log(this.state.quantity);
        return(
            <div>
            <Modal isOpen={this.state.modal}>
            <ModalHeader>Modificar el producto</ModalHeader>
            <ModalBody>
            <Form>
            <div className="row">
              <FormGroup className="form-group col-md-6">
              <Label>Id:</Label>
              <Input disabled defaultValue={this.state.data.id} type="text" onChange={(e)=>{this.setState({id:e.target.value})}}></Input>
              </FormGroup>
              <FormGroup className="form-group col-md-6">
              <Label>Nombre:</Label>
              <Input defaultValue={this.state.data.name} type="text" onChange={(e)=>{this.setState({name:e.target.value})}}></Input>
              </FormGroup>
              </div>
              <div className="row">
              <FormGroup className="form-group col-md-6">
              <Label>Costo:</Label>
              <Input defaultValue={this.state.data.cost} type="text" onChange={(e)=>{this.setState({cost:e.target.value})}}></Input>
              </FormGroup>
              <FormGroup className="form-group col-md-6">
              <Label>Cantidad:</Label>
              <Input defaultValue={this.state.data.quantity} type="text" onChange={(e)=>{this.setState({quantity:e.target.value})}}></Input>
              </FormGroup>
              </div>
            </Form>
            </ModalBody>
            <ModalFooter>
            <Button  color="primary" onClick={(e) => this.handleUdapte(e) }> Actualizar  </Button>
            <Button  className="btn-secondary" onClick={() => {this.setState({modal: false})}}> Cerrar  </Button>
            </ModalFooter>
            </Modal>
            </div>
        )
    }
}

ModalUdapte.propTypes={
    modaludapte: PropTypes.bool.isRequired
}

export default ModalUdapte;
