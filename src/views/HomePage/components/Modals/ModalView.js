import React, {Component} from "react";
import PropTypes from "prop-types";
import {Modal, ModalHeader, ModalBody, ModalFooter, Button}  from "reactstrap";
import url from "../../../../Conection/server";
import { relative } from "path";


class ModalView extends Component {
    constructor(props){
        super(props);
        this.state = {
            modal: this.props.modalview,
            data: {}
        }
    }

    toggle = (value) => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }))
        this.getDataByID(value);
        
    }

    getDataByID(value){
        fetch(url+ "products/" + value, {
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


    render() {
        console.log(this.state.data);
        return (
            <div>
                <Modal isOpen={this.state.modal}>
                    <ModalHeader>Información del producto</ModalHeader>
                    <ModalBody>
                    <div className="row">
                  <div className="col-md-6">               
                      <dl className="param">
                        <dt> Id del producto: </dt>
                        <dd> {this.state.data.id} </dd>
                      </dl>
              
                  </div>
                  <div className="col-md-6">        
                      <dl className="param">
                        <dt> Nombre del producto: </dt>
                        <dd> {this.state.data.name} </dd>
                      </dl>
            
                  </div>
                  <div className="col-md-6">                 
                      <dl className="param">
                        <dt> Costo del producto: </dt>
                        <dd className=""> {this.state.data.cost} </dd>
                      </dl>
           
                  </div>
                  <div className="col-md-6">        
                    <dl className="param">
                      <dt> Cantidad del producto: </dt>
                      <dd> {this.state.data.quantity} </dd>
                    </dl>
      
                </div>
                  <div className="col-md-6">            
                      <dl className="param">
                        <dt> Id de ubicación: </dt>
                        <dd> {this.state.data.locationId} </dd>
                      </dl>
           
                  </div>
                  <div className="col-md-6">
                      <dl className="param">
                        <dt> Id de familia: </dt>
                        <dd> {this.state.data.familyId} </dd>
                      </dl>
                  </div>
                </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button  className="btn-secondary" onClick={() => {this.setState({modal: false})}}> Cerrar  </Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

ModalView.propTypes = {
    modalview: PropTypes.bool.isRequired
}

export default ModalView;