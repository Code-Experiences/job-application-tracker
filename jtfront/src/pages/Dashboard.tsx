import "../index.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [openModal, setOpenModal] = useState(false);
  const [jobList, setJobList] = useState<any[]>([]);
  const [selectedJobId, setSelectedJobId] = useState<any | null>(null);
  const [selectedJob, setSelectedJob] =useState<any | null>(null);
  const [openProfile, setOpenProfile] =useState(false);

   const id= localStorage.getItem('id');

  useEffect(() => {
   
    const fetchData = async () => {
      if (!id) {
      console.log("No ID found in localStorage");
      navigate('/login');
      return;
    }
      try {
        const response = await fetch(`http://127.0.0.1:3000/applications/${id}`);
        const data = await response.json();
        setJobList(data.data);
      }
      catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {

    if (!selectedJobId) return;

    const fetchJobDetails = async () => {

      try {

        const response = await fetch(
          `http://127.0.0.1:3000/applications/${id}/${selectedJobId}`
        );

        const data = await response.json();

        setSelectedJob(data.data);

      } catch (error) {

        console.log(error);
      }
    };

    fetchJobDetails();

  }, [selectedJobId]);

  useEffect(()=>{console.log(selectedJobId)},[selectedJobId])

  const navigate = useNavigate();
   const handleRedirect = () => {
      localStorage.clear();
        navigate('/login'); 
    };

  return (
    <div className="container">
      <div className="header">
        <h1>Job Tracker Application</h1>
        <div className="profile-section">
          <div className="profile" onClick={()=>setOpenProfile(!openProfile)}>
            R
          </div>
          {openProfile && (
            <div className="dropdown">
              <button className="logout-btn" onClick={handleRedirect}>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="layout">
        <div className="left-section">
          <button className="btn" onClick={() => setOpenModal(true)}>
            New Application
          </button>
          {jobList.map((job, index) => (
            <div className="job-card" key={job.application_id} onClick={() => setSelectedJobId(job.application_id)}>
              {index + 1}. {job.company.name} - {job.role}

            </div>
          ))}

        </div>

        <div className="right-section">
          <div className="company-header">
            {selectedJob ? selectedJob.role : "Company Name"}
          </div>
          <div className="content">
            <div className="box">
              <h3>Application Details</h3>

              {selectedJob ? (
                <>

                  <p>
                    <strong>Application ID:</strong>
                    {" "}
                    {selectedJob.application_id}
                  </p>

                  <p>
                    <strong>User ID:</strong>
                    {" "}
                    {selectedJob.user_id}
                  </p>

                  <p>
                    <strong>Company ID:</strong>
                    {" "}
                    {selectedJob.company_id}
                  </p>

                  <p>
                    <strong>Role:</strong>
                    {" "}
                    {selectedJob.role}
                  </p>

                  <p>
                    <strong>Status:</strong>
                    {" "}
                    {selectedJob.status}
                  </p>

                  <p>
                    <strong>Application Date:</strong>
                    {" "}
                    {new Date(
                      selectedJob.application_date
                    ).toLocaleDateString()}
                  </p>

                  <p>
                    <strong>URL:</strong>
                  </p>

                  <a
                    href={selectedJob.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {selectedJob.url}
                  </a>

                </>
              ) : (
                <p>Select a job</p>
              )}
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