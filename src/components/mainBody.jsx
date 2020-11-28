import React, { Component } from "react";
import {
  Card,
  CardBody,
  Row,
  Col,
  CardHeader,
  CardImg,
  Progress,
} from "shards-react";
import Charts from "./Charts";
import PieCharts from "./PieCharts";
import profilepic from "../images/profile.png";
import prog1 from "../images/prog1.jpg";
import prog2 from "../images/prog2.jpg";
import temp from "../images/temp.jpg";
import logo from "../images/download.svg";
import devops from "../images/devops.png";

class MainBody extends Component {
  render() {
    const {
      isAuthenticated,
      openNav,
      SignedInLinks,
      SignedOutLinks,
    } = this.props;
    return (
      <div>
        <Row>
          <Col>
            <span
              style={{ fontSize: "30px", cursor: "pointer" }}
              onClick={openNav}
            >
              &#9776; <img src={logo} width="30" height="30" alt="" />{" "}
              Admin Portal
            </span>
          </Col>
          <Col>
            <div className="right-navbar" style={{ float: "right" }}>
              <span style={{ cursor: "pointer" }}>
                <ul style={{display:"flex"}}>
                  {isAuthenticated ? SignedInLinks : SignedOutLinks}
                  <li style={{paddingLeft:"20px"}}>
                    <img
                      className="profilepic"
                      src={profilepic}
                      width="40"
                      height="40"
                      style={{ borderRadius: "100px" }}
                      alt=""
                    />
                  </li>
                </ul>
              </span>
            </div>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <Card
              style={{
                width: 220,
                backgroundColor: "#E6438A",
                borderRadius: "10px",
                minHeight: "100px",
                paddingTop: "30px",
                paddingLeft: "10px",
              }}
            >
              <Row>
                <Col>
                  <h3>
                    Users
                    <br />
                    {this.props.getUsers}
                  </h3>
                </Col>
                <Col>
                  <i className="fas fa-users fa-3x" />
                </Col>
              </Row>
            </Card>
            <br/>
          </Col>
          <Col>
            <Card
              style={{
                width: 220,
                backgroundColor: "#D44ED6",
                borderRadius: "10px",
                minHeight: "100px",
                paddingTop: "30px",
                paddingLeft: "10px",
              }}
            >
              <Row>
                <Col>
                  <h3>
                    Videos
                    <br />
                    1200
                  </h3>
                </Col>
                <Col>
                  <i className="fab fa-youtube fa-3x" />
                </Col>
              </Row>
            </Card>
            <br/>
          </Col>
          <Col>
            <Card
              style={{
                width: 220,
                backgroundColor: "#61DEF5",
                borderRadius: "10px",
                minHeight: "100px",
                paddingTop: "30px",
                paddingLeft: "10px",
              }}
            >
              <Row>
                <Col>
                  <h3>
                    Posts
                    <br />
                    1200
                  </h3>
                </Col>
                <Col>
                  <i className="fas fa-asterisk fa-3x" />
                </Col>
              </Row>
            </Card>
            <br/>
          </Col>
          <Col>
            <Card
              style={{
                width: 220,
                backgroundColor: "#5DDAA6",
                borderRadius: "10px",
                minHeight: "100px",
                paddingTop: "30px",
                paddingLeft: "10px",
              }}
            >
              <Row>
                <Col>
                  <h3>
                    Tags
                    <br />
                    1200
                  </h3>
                </Col>
                <Col>
                  <i className="fas fa-atom fa-3x" />
                </Col>
              </Row>
            </Card>
            <br/>
          </Col>
        </Row>
        <Card>
          <CardBody>
            <Row>
              <Col>
                <i className="fas fa-tint fa-3x"> Performance Indicator</i>
                <Charts />
              </Col>
              <Col>
                <i className="fab fa-app-store fa-3x"> ACHIEVEMENT TARGET</i>
                <PieCharts />
              </Col>
            </Row>
          </CardBody>
        </Card>
        <br />
        <Row>
          <Col>
            <Card style={{ maxWidth: "800px" }}>
              <CardHeader>ACHIEVEMENT TARGET</CardHeader>
              <CardBody>
                <h3>Finish 100 task</h3>
                <Progress theme="primary" value={50} />;
                <h3>Get 10 attending</h3>
                <Progress theme="info" value={70} />;
                <h3>Get less than 10 complaint</h3>
                <Progress theme="success" value={80} />;
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card style={{ maxWidth: "700px", maxHeight: "300px" }}>
              <CardImg src={temp} style={{ height: "330px" }} />
            </Card>
          </Col>
        </Row>
        <br />
        <div className="row">
          <div className="col-sm-4">
            <div className="card">
              <img className="card-img-top" src={prog2} alt="" />
              <div className="card-body">
                <h4 className="card-title">Agile Methodology</h4>
                <p className="card-text">
                  Agile methodology is a type of project management process,
                  mainly used for software development, where demands and
                  solutions evolve through the collaborative effort of
                  self-organizing and cross-functional teams and their
                  customers. In the Agile model, both development and testing
                  activities are concurrent, unlike the Waterfall model.
                </p>
                <a href="/" className="btn btn-primary">
                  Tell me more &rarr;
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <img className="card-img-top" src={prog1} alt="" />
              <div className="card-body">
                <h4 className="card-title">INTRODUCTION TO CICD</h4>
                <p className="card-text">
                  Continuous integration, delivery and deployment are practices
                  designed to help increase the speed of development and the
                  release of well-tested products. Continuous integration
                  encourages developers to integrate their code frequently to a
                  shared code base early and each integration is verified by a
                  build to minimize integration errors.{" "}
                </p>
                <a href="/" className="btn btn-primary">
                  Tell me more &rarr;
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <img className="card-img-top" src={devops} alt="" />
              <br />
              <br />
              <div className="card-body">
                <h4 className="card-title">Continuous Deployment (CD)</h4>
                <p className="card-text">
                  Continuous deployment extends so that the software build will
                  automatically deploy if it passes all tests.The last step will
                  automatically deploy whatever build components/packages
                  successfully exit the delivery pipeline. Such automatic
                  deployments can be configured and provide clarity on precisely
                  what has is presently in production.
                </p>
                <a href="/" className="btn btn-primary">
                  Tell me more &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainBody;
