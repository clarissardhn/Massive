import react, { useState } from "react"
import "../Style/Login.css"
import {Form, Button, } from "react-bootstrap"
import validation from "./LoginValidation";
import { navigate, useNavigate } from "react-router-dom"
import axios from 'axios'

function Login() {
   const [values, setvalues] = useState({
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
    if(errors.email === "" && errors.password === ""){
      axios.post('http://localhost:8081/Login', values)
      .then(res => {
        if(res.data === "Success") {
          navigate('/Homepage');
        }else{
          alert("No record existed");
        }
      })
      .catch(err => console.log(err));
    }

   }

return (
<div className="auth-wrapper">
      <div className="auth-inner">
        <Form action="" onSubmit={handlesubmit}>
          <h3>LOGIN</h3>
          <p className="text-center">Enter the Username and Password Corectly</p>
          <Form.Group controlId="formBasicEmail" className="mt-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Email" name="email"
            onChange={handleInput} className="Email"/>
            {errors.email && <span className="text-danger">{errors.email}</span>}
          </Form.Group>

          <Form.Group controlId="formBasicPassword" className="mt-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name="password"
            onChange={handleInput} className="Pass" />
             {errors.password && <span className="text-danger">{errors.password}</span>}
          </Form.Group>

          <Button variant="success" type="submit" className="btn-block mt-3">
            Login
          </Button>
          <p className="forgot-password text-center">
            Don't have an <br/>account? <a className="Textregister" href="/register">Register</a>
          </p>
        </Form>
      </div>
    </div>
)

}

export default Login