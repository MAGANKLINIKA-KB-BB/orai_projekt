import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Login.css';

const Login = () => {
  
  return (
    <div className='form'>
      <h1 className='loginh1'>Please log in</h1>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address:</Form.Label>
          <Form.Control type="email" placeholder="email@email.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Password:</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
    </Form>
    <Button variant="primary" onClick={() =>{console.log("Bejelentkezés gomb megnyomva")}}>Log in</Button>
    </div>

  );
}

export default Login