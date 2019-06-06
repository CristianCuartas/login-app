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
  Row
} from "reactstrap";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
      id:"",
      email:"",
      register:[]
    };
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

handleSubmit = e =>{
  e.preventDefault();
  this.sendData();
}

  render() {
    console.log(this.state.register);
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
                      <h1 className="text-center">Sign Up</h1>
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
                      
                      <Row>
                        <Col xs="12">
                          <Button
                            href="#"
                            onClick={(e)=> this.handleSubmit(e)}
                            className="btn btn-block"
                            color="primary"

                          >
                            Sign Up!<i className="fa fa-arrow-circle-right" />
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
