import React, {Component} from 'react';
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
  Form,
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
                      <div className="row">
                        <div
                          className="col-md-12"
                          style={{ marginTop: "-42px" }}
                        >
                          <div className="text-center">
                          </div>
                        </div>
                      </div>
                      <h1 className="text-center text-warning">Has login with successful!</h1>
                      <br/>
                    <h3 className="text-center">Welcome bro</h3>
                    <br/>
                    <br/>
                      <Row>
                      <Col xs="12">
                        <Button
                          href="#"
                          className="btn  btn-block"
                          outline color="danger"
                        >
                          Log out! <i className="fa fa-arrow-circle-right" />
                        </Button>
                      </Col>
                    </Row>
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