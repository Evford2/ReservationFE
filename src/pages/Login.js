import React from "react";
import { useRef, useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";


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

            <h1 className="mb-6 text-center text-lg font-semibold">Log in</h1>

            <Form.Group className="emailform" controlId="formEmail">

                <Form.Label className="mb-3">Email address</Form.Label>
                <Form.Control className="email" type="email" placeholder="Enter email" />

                <Form.Label className="mb-3">Password</Form.Label>
                <Form.Control className="password" type="password" placeholder="Password" />

            </Form.Group>

            <div className="loginbtncontainer">

                <Button className="loginbtn" variant="primary" type="submit">
                    Log in
                </Button>
            </div>
            <div className="px-5">
            <p className="text-sm text-right">
            Not Registered?
            <a href="/register" className="text-sky-400"> Sign up</a>
            </p>
            
            </div>
        </Form>
        </div>

    );

}