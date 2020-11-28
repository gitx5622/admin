import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, Link } from 'react-router-dom';
import "./Auth.css";
import { SignIn } from '../store/auth/actions/authActions';
import background from '../images/background.jpg';
import { Form, FormGroup, FormInput ,Button, Card, CardBody} from "shards-react";

const Login = () => {

    const currentState = useSelector((state) => state.Auth);

    const [user, setUser] = useState({
        email:'',
        password: ''
    });
    const dispatch = useDispatch()

    const userLogin = (credentials) => dispatch(SignIn(credentials))


    const handleChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    const submitUser = (e) => {
        e.preventDefault()
        userLogin({
            email: user.email,
            password: user.password
        });
    }

    if(currentState.isAuthenticated){
        return <Redirect to='/' />
    }

    return (
        <div className="App"  style={{ backgroundImage:`url(${background})`,backgroundAttachment: "fixed",
            backgroundRepeat: "no-repeat",backgroundSize:"cover" }}>
            <div className="container Auth animated flash">
                <Card className="card-style">
                    <div className="card-body">
                        <h1 className="title">Admin Portal</h1>
                    </div>
                    <CardBody>
                        <Form onSubmit={submitUser}>
                            <FormGroup>
                                <label>Email</label>
                                <FormInput type="text" name="email" placeholder="Enter email" onChange={handleChange} />

                            </FormGroup>
                            <FormGroup>
                                <label>Password</label>
                                <FormInput type="password" name="password" placeholder="Enter password" onChange={handleChange}/>
                            </FormGroup>

                            { currentState.isLoading ? (
                                <Button
                                    color="primary"
                                    type="submit"
                                    block
                                    disabled
                                >
                                    Login...
                                </Button>
                            ) : (
                                <Button
                                    color="primary"
                                    type="submit"
                                    block
                                    disabled={ user.email === "" || user.password === ""  }
                                >
                                    Login
                                </Button>
                            )}
                        </Form>
                        <div className="mt-2" style={{display: "flex", justifyContent: "space-between"}}>
                            <div>
                                <small><Link to="/signup">Sign Up</Link></small>
                            </div>
                            <div>
                                <small><Link to="/forgotpassword">Forgot Password?</Link></small>
                            </div>
                        </div>

                    </CardBody>
                </Card>
            </div>
        </div>
    );
}

export default Login
