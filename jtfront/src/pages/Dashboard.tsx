import "../index.css";

function Dashboard() {
  return (
    <div className="container">
      <div className="header">
        <h1>Job Tracker Application</h1>
      </div>

      <div className="layout">
        <div className="left-section">
          <button className="btn">
            New Application
          </button>
          <div className="job-card">
            1. Company - Role
          </div>

          <div className="job-card">
            2. Company - Role
          </div>

          <div className="job-card">
            3. Company - Role
          </div>

          <div className="job-card">
            4. Company - Role
          </div>

        </div>

        <div className="right-section">
          <div className="company-header">
            Company Name
          </div>
          <div className="content">
            <div className="box">
              Application Details
            </div>

            <div className="box">
              About Company
            </div>
          </div>
          <div className="bottom-box">
            Links Section
          </div>
        </div>
      </div>
    </div>
  )
}
export default Dashboard;