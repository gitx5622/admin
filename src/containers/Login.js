import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { SignIn } from "../store/auth/actions/authActions";
import {Row, Col, Button} from 'shards-react';


const Login = () => {
  const currentState = useSelector((state) => state.Auth);

  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();

  const userLogin = (credentials) => dispatch(SignIn(credentials));

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const submitUser = (e) => {
    e.preventDefault();
    userLogin({
      username: user.username,
      password: user.password,
    });
  };

  if (currentState.isAuthenticated) {
    return <Redirect to="/" />;
  }
    return (
      <div>
      <div className="login-form">
        <div className="col-md-4 offset-md-4">
          <center>
              <Button href="/" block theme="info">Go Home</Button><br/>
            <h3>Login</h3>
          </center>
          <form onSubmit={submitUser}>
              <div className="form-group">
                <input 
                type="text" 
                name="username"
                placeholder="Username"
                className="form-control" 
                id="username"
                onChange={handleChange} 
                />
              </div>
              <div className="form-group">
                <input 
                type="password" 
                name="password"
                placeholder="Password"
                onChange={handleChange}
                className="form-control" 
                id="password"/>
              </div>
              <Row>
              <Col>
              <Button
                  outline
                  theme="success"
                  type="submit"
                  className="btn btn-solid order-color"
                  name="login"
                >
                  Login
                  </Button>
                </Col>
              <Col>
                <h6>Dont have an account    <a href="/register">Register</a></h6>
              </Col>
              </Row>   
            </form>
        </div>
        </div>
      </div>
    );
}

export default Login;
