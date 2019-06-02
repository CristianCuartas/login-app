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
      username: "",
      password: "",
      firstName:"",
      lastName:"",
      email:"",
      age:""
    };
  }

  handleChangeInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
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
                          name="firstName"
                          id="firstName"
                          type="text"
                          placeholder="First name"
                          autoComplete="firstName"
                          onChange={e => {
                            this.handleChangeInput(e);
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
                          name="lastName"
                          id="lastName"
                          type="text"
                          placeholder="Last name"
                          autoComplete="lastName"
                          onChange={e => {
                            this.handleChangeInput(e);
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
                          name="username"
                          id="username"
                          type="text"
                          placeholder="Username"
                          autoComplete="username"
                          onChange={e => {
                            this.handleChangeInput(e);
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
                            this.handleChangeInput(e);
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
                          name="age"
                          id="age"
                          type="number"
                          placeholder="Age"
                          autoComplete="age"
                          onChange={e => {
                            this.handleChangeInput(e);
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
                          onChange={e => this.handleChangeInput(e)}
                        />
                      </InputGroup>
                      <Row>
                        <Col xs="12">
                          <Button
                            href="#"
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
