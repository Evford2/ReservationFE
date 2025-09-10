import React from "react";
import { useRef, useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import "./Register.css";

export default function Login(){
    const userRef= useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    //useEffect(() => {
        //userRef.current.focus();
    //}, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    return(
        <div className="logincontainer">
        <Form className="loginform">

            <h1 className="loginheader">Log in</h1>
            <Form.Group className="nameform" controlId="formEmail">

                <Form.Label className="mb-3">First:</Form.Label>
                <Form.Control className="firstname" type="text" placeholder="Enter email" />

                <Form.Label className="mb-3">Last:</Form.Label>
                <Form.Control className="lastname" type="text" placeholder="Password" />

                
            </Form.Group>
            <Form.Group className="emailform" controlId="formEmail">

                <Form.Label className="mb-3">Email address</Form.Label>
                <Form.Control className="email" type="email" placeholder="Enter email" />

                <Form.Label className="mb-3">Password</Form.Label>
                <Form.Control className="password" type="password" placeholder="Password" />

                <Form.Label className="mb-3">Confirm Password</Form.Label>
                <Form.Control className="password" type="password" placeholder="Password" />
            </Form.Group>

            <div className="loginbtncontainer">

                <Button className="loginbtn" variant="primary" type="submit">
                    Register
                </Button>
            </div>
            
        </Form>
        </div>

    );

}