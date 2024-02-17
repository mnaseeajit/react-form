


import React, { useState } from 'react';

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(false);

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    // Validate email format
    setEmailValid(/^\S+@\S+\.\S+$/.test(newEmail));
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    // Validate password length
    setPasswordValid(newPassword.length >= 8);
  };

  const handleConfirmPasswordChange = (event) => {
    const newConfirmPassword = event.target.value;
    setConfirmPassword(newConfirmPassword);
    // Validate password match
    setConfirmPasswordValid(newConfirmPassword === password);
  };

  const handleSubmit = () => {
    if (emailValid && passwordValid && confirmPasswordValid) {
      alert('Form submitted successfully');
    } else {
      alert('Can’t submit the form. Please check your inputs.');
    }
      
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Sign Up</h1>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          style={{ borderColor: emailValid ? 'green' : 'red' }}
        />
        {!emailValid && <p style={{ color: 'red' }}>Invalid email format</p>}
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          style={{ borderColor: passwordValid ? 'green' : 'red' }}
        />
        {!passwordValid && <p style={{ color: 'red' }}>Password must be at least 8 characters</p>}
      </div>
      <div>
        <label>Confirm Password:</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          style={{ borderColor: confirmPasswordValid ? 'green' : 'red' }}
        />
        {!confirmPasswordValid && <p style={{ color: 'red' }}>Passwords do not match</p>}
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default SignUpForm;
