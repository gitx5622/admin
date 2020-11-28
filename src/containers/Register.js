import React,{useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, Link } from 'react-router-dom';
import background from '../images/background.jpg';
import "./Auth.css";
import { SignUp } from '../store/auth/actions/authActions';
import { Form, FormGroup, FormInput ,Button, Card, CardBody, CardHeader} from "shards-react";

const Register = () => {
    const currentState = useSelector((state) => state.Auth);

    const [user, setUser] = useState({
        username:'',
        email: '',
        password: ''
    });
    const dispatch = useDispatch();

    const addUser = (credentials) => dispatch(SignUp(credentials));

    const handleChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    };
    const submitUser = (e) => {
        e.preventDefault();
        addUser({
            username: user.username,
            email: user.email,
            password: user.password,
        });
    };

    if(currentState.isAuthenticated){
        return <Redirect to='/' />
    }
    return (
        <div>
        <div className="App"  style={{ backgroundImage:`url(${background})`,backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center', backgroundSize: 'cover'}}>
            <div className="container Auth animated flash">
                <Card className="card-style">
                    <CardHeader>
                        <h1 className="title">Admin Portal</h1>
                    </CardHeader>
                   <CardBody>
                        <Form onSubmit={submitUser}>
                            <div className="form-group">
                                <label>User Name</label>
                                <FormInput type="text" name="username" placeholder="Enter username"  onChange={handleChange}/>
                            </div>
                            <FormGroup>
                                <label>Email</label>
                                <FormInput type="email" name="email" placeholder="Enter email" onChange={handleChange} />
                            </FormGroup>
                            <div className="form-group">
                                <label>Password</label>
                                <FormInput type="password" name="password" placeholder="Enter password" onChange={handleChange}/>
                            </div>
                            { currentState.isLoading ? (
                                <Button
                                    color="primary"
                                    type="submit"
                                    block
                                    disabled
                                >
                                    Registering...
                                </Button>
                            ) : (
                                <Button
                                    color="primary"
                                    type="submit"
                                    block
                                    disabled={ user.username === "" || user.email === "" || user.password === ""  }
                                >
                                    Register
                                </Button>
                            )}
                        </Form>
                        <div className="mt-2">
                            <small>Have an account? <Link to="/login">Please login</Link></small>
                        </div>
                   </CardBody>
                </Card>
            </div>
        </div>
        </div>
    );

}

export default Register