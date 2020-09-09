import React  from 'react';
import '../css/main.css'
import profilepic from '../images/profile.jpeg'
import prog1 from '../images/prog1.jpg';
import prog2 from '../images/prog2.jpg';
import temp from '../images/temp.jpg';
import devops from '../images/devops.png';
import { Card, CardBody, Row, Col, CardHeader,CardImg, Progress} from 'shards-react'
import Charts from "./Charts";
import PieCharts from "./PieCharts";
import { Input } from 'antd';
import { FullScreen, useFullScreenHandle } from "react-full-screen";

const { Search } = Input;


const Main = () => {
    const closeNav = () => {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft= "0";
        window.location.reload();
    }
    const openNav = () => {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";

    }
    const handle = useFullScreenHandle();
        return (
            <div>
                <FullScreen handle={handle}>
                <div id="mySidenav" className="sidenav">
                    <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
                    <ul>
                        <li><i className="fa fa-home fa-2x" style={{color:"#F36F21"}} aria-hidden="true"><a href="#">Home</a></i></li>
                        <li><i className="fab fa-servicestack fa-2x"><a href="#">Services</a></i></li>
                        <li><i className="fas fa-mug-hot fa-2x"><a href="#">Clients</a></i></li>
                        <li><i className="fas fa-address-book fa-2x"><a href="#">Contact</a></i></li>
                        <li><i className="fas fa-palette fa-2x"><a href="#">Pages</a></i></li>
                        <li><i className="fas fa-table fa-2x"><a href="#">Tables</a></i></li>
                        <li><i className="fas fa-globe-africa fa-2x"><a href="#">Maps</a></i></li>
                        <li><i className="fas fa-chart-pie fa-2x"><a href="#">Charts</a></i></li>
                        <li><i className="fas fa-cogs fa-2x"><a href="#">Settings</a></i></li>
                        <li><i className="fab fa-app-store fa-2x"><a href="#">Applications</a></i></li>
                        <li><i className="fas fa-chart-pie fa-2x"><a href="#">Followers</a></i></li>
                        <li><i className="fas fa-globe-africa fa-2x"><a href="#">Subscribers</a></i></li>
                        <li><i className="fas fa-newspaper fa-2x"><a href="#">Articles</a></i></li>
                    </ul>
                </div>

                <div id="main">
                    <Row>
                        <Col><span style={{ fontSize:"30px", cursor:"pointer"}} onClick={openNav}>&#9776;      Doctorateessays</span></Col>

                        <Col> <Search
                            placeholder="input search text"
                            enterButton="Search"
                            size="large"
                            style={{ width: 400, marginTop:"10px" }}
                            onSearch={value => console.log(value)}
                        /></Col>
                        <Col>
                            <div className="right-navbar" style={{float: "right"}}>
                        <span style={{cursor:"pointer"}}>
                            <ul>
                                <li><i className="fas fa-sms fa-2x" style={{paddingRight: "20px",color:"#60FC8D"}}/></li>
                                 <li><i className="fas fa-expand fa-2x" onClick={handle.enter} style={{paddingRight: "20px"}}/></li>
                                <li><img className="profilepic" src={profilepic} width="50" height="50" style={{borderRadius:"100px"}}/></li>
                            </ul>
                              </span>
                            </div>
                        </Col>
                    </Row>
                    <hr/>
                    <Row>
                        <Col>
                            <Card style={{ width: 220, backgroundColor:"#E6438A", borderRadius:"10px", minHeight:"100px", paddingTop:"30px",paddingLeft:"10px" }}>
                                <Row>
                                    <Col><h3>Users<br/>1200</h3></Col>
                                    <Col><i className="fas fa-users fa-3x"/></Col>
                                </Row>
                            </Card>,
                        </Col>
                        <Col>
                            <Card style={{ width: 220, backgroundColor:"#D44ED6", borderRadius:"10px",minHeight:"100px", paddingTop:"30px",paddingLeft:"10px" }}>
                                <Row>
                                    <Col><h3>Videos<br/>1200</h3></Col>
                                    <Col><i className="fab fa-youtube fa-3x"/></Col>
                                </Row>
                            </Card>,
                        </Col>
                        <Col>
                            <Card style={{ width: 220, backgroundColor:"#61DEF5", borderRadius:"10px",minHeight:"100px", paddingTop:"30px",paddingLeft:"10px" }}>
                                <Row>
                                    <Col><h3>Posts<br/>1200</h3></Col>
                                    <Col><i className="fas fa-asterisk fa-3x"/></Col>
                                </Row>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: 220, backgroundColor:"#5DDAA6",borderRadius:"10px",minHeight:"100px", paddingTop:"30px",paddingLeft:"10px" }}>
                                <Row>
                                    <Col><h3>Tags<br/>1200</h3></Col>
                                    <Col><i className="fas fa-atom fa-3x"/></Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                    <Card>
                        <CardBody>
                            <Row>
                                <Col>
                                    <i className="fas fa-tint fa-3x">    Performance Indicator</i>
                                    <Charts/>
                                </Col>
                                <Col>
                                    <i className="fab fa-app-store fa-3x">    ACHIEVEMENT TARGET</i>
                                    <PieCharts/>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                    <br/>
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
                            <Card style={{ maxWidth: "700px", maxHeight:"300px"}}>
                                <CardImg src={temp} style={{height:"330px"}}/>
                            </Card>
                        </Col>
                    </Row>
                    <br/>
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="card">
                                <img className="card-img-top" src={prog2} alt="Card image cap"/>
                                    <div className="card-body">
                                        <h4 className="card-title">Agile Methodology</h4>
                                        <p className="card-text">Agile methodology is a type of project management process, mainly used for software development, where demands and solutions
                                            evolve through the collaborative effort of self-organizing and cross-functional teams and their customers.
                                            In the Agile model, both development and testing activities are concurrent, unlike the Waterfall model.</p>
                                        <a href="#" className="btn btn-primary">Tell me more &rarr;</a>
                                    </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card">
                                <img className="card-img-top" src={prog1} alt="Card image cap"/>
                                    <div className="card-body">
                                        <h4 className="card-title">INTRODUCTION TO CICD</h4>
                                        <p className="card-text">Continuous integration, delivery and deployment are practices designed to help increase the speed of development
                                            and the release of well-tested products. Continuous integration encourages developers to integrate their
                                            code frequently to a shared code base early and each integration is verified by a build to minimize
                                            integration errors. </p>
                                        <a href="#" className="btn btn-primary">Tell me more &rarr;</a>
                                    </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card">
                                <img className="card-img-top" src={devops} alt="Card image cap"/><br/><br/>
                                <div className="card-body">
                                    <h4 className="card-title">Continuous Deployment (CD)</h4>
                                    <p className="card-text">Continuous deployment extends so that the software build will automatically
                                        deploy if it passes all tests.The last step will automatically deploy whatever build components/packages successfully exit the delivery pipeline.
                                        Such automatic deployments can be configured and provide clarity on precisely what has is presently in production.</p>
                                    <a href="#" className="btn btn-primary">Tell me more &rarr;</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </FullScreen>
            </div>
        );
}

export default Main;