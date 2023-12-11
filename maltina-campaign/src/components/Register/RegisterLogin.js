import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { REGISTER_URL } from '../../endpoint'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style/register.css';

const RegisterLogin = () => {
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [location, setLocation] = useState("");
  const [instagram_handle, setInstagram_handle] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirm_password] = useState("");

  let navigate = useNavigate();


  const handleFirstName = (event) => {
    setFirst_name(event.target.value);
  }
  const handleLastName = (event) => {
    setLast_name(event.target.value);
  }
  const handleEmail = (event) => {
    setEmail(event.target.value);
  }
  const handlePhoneNumber = (event) => {
    setPhone_number(event.target.value);
  }
  const handleLocation = (event) => {
    setLocation(event.target.value);
  }
  const handleInstagramHandle = (event) => {
    setInstagram_handle(event.target.value);
  }
  const handlePassword = (event) => {
    setPassword(event.target.value);
  }
  const handleConfirmPassword = (event) => {
    setConfirm_password(event.target.value);
  }


  const handleSubmit = async (e) => {
    e.preventDefault();

    const registerData = {
      first_name,
      last_name,
      email,
      phone_number,
      location,
      instagram_handle,
      password,
      confirmPassword

    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match!",{
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
      const response = await axios.post(REGISTER_URL, registerData);

      // Handle the response from the backend
      console.log(response.data);

      // Clear the input values
      e.target.elements.first_name.value = '';
      e.target.elements.last_name.value = '';
      e.target.elements.email.value = '';
      e.target.elements.phone_number.value = '';
      e.target.elements.location.value = '';
      e.target.elements.instagram_handle.value = '';
      e.target.elements.password.value = '';
      e.target.elements.confirmPassword.value = '';

      if (response.data) {
        toast.success("Registration successful!",{
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
        // Redirect to login page or any other action you want to perform after successful registration 
        navigate("/login"); // Redirect to login page  
      } else {
        toast.error("Registration failed. Please try again.",{
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
      // Handle errors
      console.error(error);
      if (error.response && error.response.status === 409) {
        toast.error("Email already in use. Please use a different email.",{
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
  }
}

  return (
    <div className='reg-main-cont'>
       <ToastContainer />
      <div className='register-cont'>
        <div className='form-dir'>
          <form className='form-wcontainer' onSubmit={handleSubmit}>
            <div>
              <label htmlFor="first_name">First Name:</label>
              <input
                type="text"
                id="first_name"
                value={first_name}
                style={{ fontSize: '14px' }}
                onChange={handleFirstName}
                name="first_name"
                required
              />
            </div>

            <div>
              <label className='labell' htmlFor="last_name">Last Name:</label>
              <input
                className='inputtt'
                type="text"
                id="last_name"
                value={last_name}
                style={{ fontSize: '14px' }}
                onChange={handleLastName}
                name="last_name"
                required />
            </div>

            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                style={{ fontSize: '14px' }}
                onChange={handleEmail}
                name="email"
                required />
            </div>

            <div>
              <label htmlFor="phone_number">Phone Number:</label>
              <input
                type="tel"
                id="phone_number"
                value={phone_number}
                style={{ fontSize: '14px' }}
                onChange={handlePhoneNumber}
                name="phone_number"
                required />
            </div>

            <div>
              <label htmlFor="location">Location:</label>
              <input
                type="text"
                id="location"
                value={location}
                style={{ fontSize: '14px' }}
                onChange={handleLocation}
                name="location"
                required />
            </div>

            <div>
              <label htmlFor="instagram_handle">Instagram Handle:</label>
              <input
                type="text"
                id="instagram_handle"
                value={instagram_handle}
                style={{ fontSize: '14px' }}
                onChange={handleInstagramHandle}
                name="instagram_handle" />
            </div>

            <div>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                style={{ fontSize: '14px' }}
                onChange={handlePassword}
                name="password"
                required />
            </div>

            <div>
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                style={{ fontSize: '14px' }}
                onChange={handleConfirmPassword}
                name="confirmPassword"
                required />
            </div>

            <div className='btn--btn'>
              <button type="submit">Submit</button>
            </div>

            <div className='a-a'>
              <span>Already have an account?</span>
              <NavLink to="/login">Login</NavLink>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterLogin;