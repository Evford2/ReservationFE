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
        <div className="justify-center flex flex-row items-center min-h-screen bg-sky-200">
        <Form className="pt-5 size-96 rounded-xl bg-white border-2 border-slate-500">

            <h1 className="mb-6 text-center text-lg font-semibold">Log in</h1>

            <Form.Group className="mb-3 flex flex-col px-5" controlId="formEmail">

                <Form.Label className="mb-3">Email address</Form.Label>
                <Form.Control className="mb-3 h-7 bg-slate-200 rounded border-1 border-slate-500" type="email" placeholder="Enter email" />

                <Form.Label className="mb-3">Password</Form.Label>
                <Form.Control className="mb-3 h-7 bg-slate-200 rounded border-1 border-slate-500" type="password" placeholder="Password" />

            </Form.Group>

            <div className="pt-5 px-5 flex flex-col items-center justify-center">

                <Button className="mt-2 w-full bg-green-500 rounded border-2 border-green-500 hover:bg-white hover:border-blue-500 hover:border-solid hover:border-2" variant="primary" type="submit">
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