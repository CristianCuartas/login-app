import React, {Component} from "react";
import PropTypes from "prop-types";
import {Modal, ModalHeader, ModalBody, ModalFooter, Button, Form, FormGroup, Label, Input}  from "reactstrap";
import urlLocations from "../../../../Conection/serverBDLocation";
import url from "../../../../Conection/server";

class ModalUdapteLocation extends Component{
    constructor(props){
        super(props);
        this.state={
            data:{},
            modal: this.props.modaludaptelocation,
            producto: [],
            id:'',
            name:'',
        }
    }

    toggle = (value) =>{
        this.setState(prevState=>({
            modal: !prevState.modal
        }))
        this.getDataById(value);
    }

    getDataById =(value)=>{
        fetch(url + "locations/" + value, {
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
      fetch( urlLocations + `${this.state.data.id}` , {
        method: 'PUT',
        body: JSON.stringify({
          "id": this.state.data.id,
          "name": this.state.name,
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
      // window.location.reload();
    }

    render(){
      console.log(this.state.data.id)
      console.log(this.state.id);
      console.log(this.state.name);
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

ModalUdapteLocation.propTypes={
    modaludaptelocation: PropTypes.bool.isRequired
}

export default ModalUdapteLocation;
