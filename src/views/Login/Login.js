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
      password: ""
    };
  }

  handleChangeInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
handleSubmit = e =>{
  e.preventDefault();
  console.log(this.state);
}
  render() {
  
    const url ='http://localhost:3000/#/';
    const {username, password} = this.state;

    fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(this.state), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));

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
                      <Col xs="6">
                        <Button
                          onSubmit={e => this.handleSubmit(e)}
                          href="#HomePage"
                          className="btn  btn-block"
                          color="primary"
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