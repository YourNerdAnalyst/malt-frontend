import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { LOGIN_URL } from '../../endpoint';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import './style/login.css';

const Login = () => {
  let navigate = useNavigate();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmail = (event) => {
    setEmail(event.target.value)
  }
  const handlePassword = (event) => {
    setPassword(event.target.value)
  }

  // const handleForgotPassword = () => {
  //   // Redirect to a new route
  //   navigate('/forgot-password');
  // };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();

    const loginData = {
      email,
      password
    }

    if (!password || !email) {
      toast.error("Please enter both password and email!",{
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        backgroundColor: 'red',
        color: '#fff',
      });
      return;
    }

  
    try {
      // Send a POST request to the backend
      const response = await axios.post(LOGIN_URL, loginData);

      // Handle the response from the backend
      console.log(response.data);

       // Clear the input values
       event.target.elements.email.value = '';
       event.target.elements.password.value = '';
  
      if (response.data) {
        toast.success("Login successful!",{
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          backgroundColor: 'green',
          color: '#fff',
        });
        // Redirect to dashboard page or any other action you want to perform after successful login
        navigate('/entry'); // Redirect to dashboard page
      } else {
        toast.error("Login failed. Please try again.",{
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          backgroundColor: 'red',
          color: '#fff',
        });
      }
    } catch (error) {
      console.error('Error during login:', error);
      toast.error("Login failed. Please try again.",{
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        backgroundColor: 'red',
        color: '#fff',
      });
    }
  };
  return (
    <div className='login-main-cont'>
       <ToastContainer />
      <div className='login-container'>
        <div className='form-dir'>
          <form className='form-lcontainer' onSubmit={handleLoginSubmit}>
            <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={email} onChange={handleEmail} name="email" required />
            </div>
           
            <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" value={password} onChange={handlePassword} name="password" required />
            </div>

            <div className='bttn'>
            <button type="submit">Login</button>
            </div>

            <div className='aa-aa'>
              <NavLink 
              to="#" 
              // onClick={handleForgotPassword}
              >Forgotten password?</NavLink>
            </div>

            <div className='aa-aa'>
              <span>New to our site?</span>
              <NavLink to="/register">Register or sign up</NavLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;