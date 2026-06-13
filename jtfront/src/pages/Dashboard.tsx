import "../index.css";
import { useState } from "react";

function Dashboard() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="container">
      <div className="header">
        <h1>Job Tracker Application</h1>
      </div>

      <div className="layout">
        <div className="left-section">
          <button className="btn" onClick={() => setOpenModal(true)}>
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

      {openModal && (
        <div className="modal-overlay">

          <div className="modal">

            <h2>New Job Application</h2>

            <form className="form">

              <div className="input-group">
                <label>Company</label>
                <input type="text" />
              </div>

              <div className="input-group">
                <label>URL</label>
                <input type="text" />
              </div>

              <div className="input-group">
                <label>Role</label>
                <input type="text" />
              </div>

              <div className="input-group">
                <label>Salary</label>
                <input type="text" />
              </div>

              <button className="submit-btn">
                Submit
              </button>

            </form>

          </div>

        </div>
      )}
    </div>
  )
}
export default Dashboard;