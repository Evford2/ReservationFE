import React from "react";
import { useRef, useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import "./Register.css";
import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EMAIL_REGEX = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

export default function Register(){
    const emailRef= useRef();
    const errRef = useRef();

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        emailRef.current.focus();
    },[])

    useEffect(() => {
        const result = EMAIL_REGEX.test(email);
        console.log(result);
        console.log(email);
        setValidEmail(result);
    },[email])

    useEffect(() => {
        const result = PWD_REGEX.test(pwd);
        console.log(result);
        console.log(pwd);
        setValidPwd(result);
        const match = pwd === matchPwd;
        setValidMatch(match);
    },[pwd, matchPwd])

    useEffect(() => {
        setErrMsg('');
    }, [email, pwd, matchPwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const v1 = EMAIL_REGEX.test(email);
        const v2 = PWD_REGEX.test(pwd);
        if (!v1 || !v2) {
            setErrMsg("Invalid Entry");
            return;
        }
    }

    return(
        <div className="logincontainer">
        <Form onSubmit={handleSubmit} className="loginform">

            <h1 className="loginheader">Log in</h1>
            <Form.Group className="nameform" controlId="formEmail">

                <Form.Label className="mb-3">First:</Form.Label>
                <Form.Control className="firstname" type="text" placeholder="Enter email" />

                <Form.Label className="mb-3">Last:</Form.Label>
                <Form.Control className="lastname" type="text" placeholder="Password" />

                
            </Form.Group>
            <Form.Group className="emailform" controlId="formEmail">

                <Form.Label className="mb-3">Email address
                    <span class={validEmail ? "valid" : "hide"}>
                        <FontAwesomeIcon className="check" icon={faCheck} />
                    </span>
                    <span class={validEmail || !email ? "hide" : "invalid"}>
                        <FontAwesomeIcon icon={faTimes} />
                    </span>
                </Form.Label>
                <Form.Control className="email" type="email" placeholder="Enter email" 
                     
                              
                              controlId="email"
                              ref={emailRef}
                              autoComplete="off"
                              onChange={(e) => setEmail(e.target.value)}
                              required
                              aria-invalid={validEmail ? "false" : "true"}
                              aria-describedby="uidnote"
                              onFocus={() => setEmailFocus(true)}
                              onBlur={() => setEmailFocus(false)} 
                />

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