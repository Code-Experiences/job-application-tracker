import "../index.css";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Register(){
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
              </div>

              <div className="input-group">
                <label>Email</label>
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
              </div>

              <div className="input-group">
                <label>Password</label>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
              </div>

              <div className="input-group">
                <label>Re-enter Password</label>
                <input type="password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>
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
