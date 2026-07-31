import "../index.css";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const passwordRules = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[!@#$%^&*]/.test(password),
  };

  const isEmailValid = emailRegex.test(email);

  const isPasswordValid = Object.values(passwordRules).every(Boolean);

  const passwordsMatch =
    password === confirmPassword && confirmPassword !== "";

  const isFormValid =
    name.trim() !== "" &&
    email.trim() !== "" &&
    password !== "" &&
    confirmPassword !== "" &&
    password === confirmPassword;
  return (
    <div className="container">
      <div className="header">
        <h1>Job Tracker Application</h1>
      </div>
      <div className="layoutRegister">
        <div className="centreForm">
          <h2 >Register</h2>
          <form className="form">

            <div className="input-group">
              <label>Name</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>

            <div className="input-group">
              <label>Email</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              {email && !isEmailValid && (
                <p className="error">Please enter a valid email address</p>
              )}
            </div>

            <div className="input-group">
              <label>Password</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              {password && (
                <div className="password-box">
                  <p className={passwordRules.length ? "valid" : "invalid"}>
                    {passwordRules.length ? "✓" : "✗"} At least 8 characters
                  </p>

                  <p className={passwordRules.uppercase ? "valid" : "invalid"}>
                    {passwordRules.uppercase ? "✓" : "✗"} One uppercase letter
                  </p>

                  <p className={passwordRules.lowercase ? "valid" : "invalid"}>
                    {passwordRules.lowercase ? "✓" : "✗"} One lowercase letter
                  </p>

                  <p className={passwordRules.number ? "valid" : "invalid"}>
                    {passwordRules.number ? "✓" : "✗"} One number
                  </p>

                  <p className={passwordRules.special ? "valid" : "invalid"}>
                    {passwordRules.special ? "✓" : "✗"} One special character
                  </p>
                </div>
              )}
            </div>

            <div className="input-group">
              <label>Re-enter Password</label>
              <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

              {confirmPassword && !passwordsMatch && (
                <p className="error">Passwords do not match</p>
              )}

              {confirmPassword && passwordsMatch && (
                <p className="success">Passwords match ✓</p>
              )}
              
            </div>

            <button className="submit-btn" disabled={!isFormValid}>
              Register
            </button>

            <p className='tag'>Already a user?<Link to='/login'> Login</Link></p>

          </form>
        </div>
      </div>
    </div>
  );
}
