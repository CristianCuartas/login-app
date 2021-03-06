import React, { Component } from "react";
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
  Alert,
  Collapse
} from "reactstrap";
import NEXT from './../../sources/img/curve-arrow.svg';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
      id:"",
      email:"",
      register:[],
      successVisible:false,
      errorVisible: false,
      collapsed: false,
    };
  }

onDismissError = () =>{
  this.setState({errorVisible: false})
}

onDismissSuccess =()=>{
  this.setState({successVisible:false})
}

toggle(){
  this.setState(state=>({collapsed:!state.collapsed}));
}

buttonSign = () =>{
  return(
    <Button
      href="#"
      onClick={(e)=> this.handleSubmit(e)}
      className="btn btn-block"
      color="primary"
      >
    Sign Up!<i className="fa fa-arrow-circle-right" />
    </Button>
  )
}
  sendData = () => {
    fetch("http://localhost:4000/users", {
      method: 'POST', 
      body: JSON.stringify({
        id: this.state.id,
        name:this.state.name,
        email: this.state.email,
        password: this.state.password
      }), 
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success', response));
}

statusRegistro = () =>{
  if (this.state.id === '' ||
  this.state.name === '' ||
  this.state.email === '' ||
  this.state.password === ''){
    this.setState({errorVisible:true})
  } else {
    this.setState({successVisible:true})
    this.toggle();
  }
}

handleSubmit = e =>{
  e.preventDefault();
  this.sendData();
  this.statusRegistro();
}

  render() {
    console.log(this.state.id);
    return (
      <div className="app flex-row align-items-center">
      <div style={{marginTop:"10px"}}>
      
        <Container>
        <a href="/"><img src={NEXT} style={{marginLeft:"160px"}}/></a>
          <Row className="justify-content-center">
            <Col md="6">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form>
                      <div className="row">
                        <div
                          className="col-md-12"
                          style={{ marginTop: "-42px" }}
                        >
                          <div className="text-center">
                          </div>
                        </div>
                      </div>
                      <h1 className="text-center"> Sign Up</h1> 
                      <br/>
                      <Alert  color="danger" isOpen={this.state.errorVisible} toggle={this.onDismissError}>
                        <b>No se ha podido registar el usuario exitosamente.</b>                  
                      </Alert>  
                      <Alert  color="success" isOpen={this.state.successVisible} toggle={this.onDismissSuccess}>
                      <b>Usuario registrado con éxito!</b>
                     </Alert>
                      <br/>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            @
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          name="id"
                          id="id"
                          type="text"
                          placeholder="Id"
                          autoComplete="id"
                          onChange={e => {
                            this.setState({id:e.target.value});
                          }}
                        />
                      </InputGroup>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            @
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          name="name"
                          id="name"
                          type="text"
                          placeholder="Name"
                          autoComplete="name"
                          onChange={e => {
                            this.setState({name:e.target.value});
                          }}
                        />
                      </InputGroup>
                      <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          @
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        id="password"
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        onChange={e => {
                          this.setState({password:e.target.value});
                        }}
                      />
                    </InputGroup>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            @
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          required
                          name="email"
                          id="email"
                          type="email"
                          placeholder="Email"
                          autoComplete="email"
                          onChange={e => {
                            this.setState({email:e.target.value});
                          }}
                        />
                      </InputGroup>
                      
                  <Collapse isOpen={this.state.collapsed}>
                  
                    <Button 
                   href="/"
                   className="btn btn-block"
                   outline color="success">
                   Go! <i className="fa fa-arrow-circle-right" />
                    </Button>
                    <br />
                  </Collapse>
                                
                      <Row>
                        <Col xs="12">
                        {this.buttonSign()}
                        </Col>
                      </Row>
              
                      
                    </Form>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
        </div>
      </div>
    );
  }
}

export default Login;
