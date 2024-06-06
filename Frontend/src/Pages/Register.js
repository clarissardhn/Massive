import "../Style/Login.css";
import { Form, Button } from "react-bootstrap";
import validation from "./LoginValidation";
import react, { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function Register() {
  const [values, setvalues] = useState({
    name: '',
    email: '',
    password: ''
   })

   const navigate = useNavigate();
   const [errors, setErrors] = useState({})
   const handleInput = (event) => {
    setvalues(prev => ({...prev, [event.target.name]: [event.target.value]}))
   }

   const handlesubmit =(event) => {
    event.preventDefault();
    setErrors(validation(values));
    if(errors.name === "" && errors.email === "" && errors.password === "") {
      axios.post('http://localhost:8081/Register', values)
      .then(res => {
        navigate('/');
      })
      .catch(err => console.log(err));
    }

   }

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <Form action="" onSubmit={handlesubmit}>
          <h3>REGISTER</h3>
          <p className="text-center">Get started today! Create your account by <br/>entering your details below</p>

          <Form.Group controlId="formFullName" className="mt-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" 
            onChange={handleInput} name="name"/>
            {errors.name && <span className="text-danger">{errors.name}</span>}
          </Form.Group>

          <Form.Group controlId="formBasicEmail" className="mt-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter Email" 
             onChange={handleInput} name="email"/>
             {errors.email && <span className="text-danger">{errors.email}</span>}
          </Form.Group>

          <Form.Group controlId="formBasicPassword" className="mt-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter Password" 
             onChange={handleInput} name="password"/>
             {errors.password && <span className="text-danger">{errors.password}</span>}
          </Form.Group>
          
          <Button variant="success" type="submit" className="btn-block mt-4">
            Register
          </Button>
          <p className="forgot-password text-center mt-3">
            Have an account? <a className="Textregister" href="/login">Login</a>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default Register;
