export default function Login(){
    return (
         <div className="container">
      <div className="header">
        <h1>Job Tracker Application</h1>
      </div>
      <div className="layoutRegister">
        <div className="centreForm">
            <h2 >Login</h2>
         <form className="form">

              <div className="input-group">
                <label>Login</label>
                <input type="text" />
              </div>

              <div className="input-group">
                <label>Password</label>
                <input type="text" />
              </div>


              <button className="submit-btn">
                Login
              </button>

              <p className='tag'>Not a user? Register</p>

            </form>
            </div>
      </div>
    </div>
    );
}
