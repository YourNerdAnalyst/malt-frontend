import React, { useState } from 'react';
import axios from 'axios';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      // Send a POST request to the backend to initiate the password reset process
      const response = await axios.post('https://maltina-api.onrender.com/api/forgot-password', { email });

      // Handle the response from the backend
      console.log(response.data);

      // Display a success message to the user
      alert('Password reset email sent!');
    } catch (error) {
      console.error('Error during password reset:', error);
      // Display an error message to the user
      alert('Password reset failed. Please try again.');
    }
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={handleEmailChange} required />
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default ForgotPassword;