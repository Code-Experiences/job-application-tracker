import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function Login() {
  const [loginInfo, setLoginInfo]=useState({
    email:'',
    password:'',
  })

  const handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
    setLoginInfo({...loginInfo, [e.target.name]:e.target.value});
  }

  const navigate = useNavigate();
  const handleSubmit=async(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();

    try{
      const response= await axios.post('http://127.0.0.1:3000/auth/login',loginInfo);
      console.log('Form data submitted successfully:', response.data);
      if(response.data){
        localStorage.setItem("id", response.data.user_id);
        navigate("/")
      }
    }
    catch(error){
      console.error('Error submitting form data:', error);
    }

  };

  

 // const navigate= useNavigate();
  // const handleRedirect=() =>{
  //   navigate('/');
  // }

  return (
    <div className="container">
      <div className="header">
        <h1>Job Tracker Application</h1>
      </div>
      <div className="layoutRegister">
        <div className="centreForm">
          <h2 >Login</h2>
          <form className="form" onSubmit={handleSubmit}>

            <div className="input-group">
              <label>Email</label>
              <input type="text" name="email" placeholder='Enter your email' value={loginInfo.email} onChange={handleChange}/>
            </div>

            <div className="input-group">
              <label>Password</label>
              <input type="password" name="password" placeholder='password' value={loginInfo.password} onChange={handleChange} />
            </div>


            <button className="submit-btn" type="submit" > 
              Login
            </button>

            <p className='tag'>Not a user? Register</p>

          </form>
        </div>
      </div>
    </div>
  );
}
