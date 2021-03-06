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
  Alert
} from "reactstrap";
import url from './../../Conection/server';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      visible: false,
      redirectToReferrer:false,
      error: ""
    };
    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss(){
    this.setState({ visible:false });
  }

  sendData = () => {
    fetch(url + "signin", {
      method: 'POST', 
      body: JSON.stringify({
        email: this.state.username,
        password: this.state.password
      }), 
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      localStorage.setItem( 'access_token', JSON.stringify(data.accessToken))                
      if (data.accessToken !== undefined){
        window.location="http://localhost:3000/#/HomePage"
      } else {               
          this.setState({
            error: data
          })
          setTimeout(() =>{
            this.setState({
              visible:true
            })          
          },1000);
        }                           
      })
    .catch(error => console.error('Error:', error))   
}

handleSubmit = e =>{
  e.preventDefault();
  this.sendData();
  
}

  render() {
    const {error, visible} = this.state;
    return (
      <div className="app flex-row align-items-center">
      <div style={{marginTop:"150px"}}>
        <Container>
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
                      <h1 className="text-center">Log in</h1>
                      <br/>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            @
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          name="username"
                          id="username"
                          type="text"
                          placeholder="Username"
                          autoComplete="username"
                          onChange={(e) => {this.setState({username: e.target.value});}}
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
                          onChange={(e) => {this.setState({password: e.target.value});}}

                        />
                      </InputGroup>

                      <Alert color="danger" isOpen={visible} toggle={this.onDismiss}>
                      <b>{error}</b>
                      </Alert>

                      <Row>
                      <Col xs="6">
                        <Button
                          type="button"
                          href="#HomePage"
                          className="btn  btn-block"
                          color="primary"
                          onClick={(e) => this.handleSubmit(e)}
                        >
                          Go! <i className="fa fa-arrow-circle-right" />
                        </Button>
                      </Col>
                      <Col xs="6">
                        <Button
                          href="#Register"
                          className="btn  btn-block"
                          outline color="info"
                        >
                          Sign Up Now!<i className="fa fa-arrow-circle-right" />
                        </Button>
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