export default function Register(){
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
                <input type="text" />
              </div>

              <div className="input-group">
                <label>Email</label>
                <input type="text" />
              </div>

              <div className="input-group">
                <label>Password</label>
                <input type="text" />
              </div>

              <div className="input-group">
                <label>Re-enter Password</label>
                <input type="text" />
              </div>

              <button className="submit-btn">
                Register
              </button>

              <p className='tag'>Already a user? Login</p>

            </form>
            </div>
      </div>
    </div>
    );
}
