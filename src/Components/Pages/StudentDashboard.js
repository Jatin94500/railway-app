// StudentDashboard.js

import React from 'react';

function StudentDashboard() {
  // Sample data (replace with actual data fetching)
  const studentData = {
    name: "Smriti Pandey",
    photo: "student-photo.jpg", // Replace with actual image path
    enrollmentId: "STU12345",
    college: "University of Lucknow",
    branch: "Computer Science",
    semester: 6,
    email: "smritipandey.doe@example.com",
    phone: "1234567890",
    course: "Web Development",
    batch: {
      start: "2023-09-01",
      duration: "3 months",
    },
    mode: "Online",
    mentor: "Birju parshad",
    status: "Completed",
    certificateStatus: "Available",
    attendance: {
      attended: 25,
      total: 30,
    },
    project: {
      submissionStatus: "Reviewed",
      evaluationResult: "Excellent",
    },
    studyMaterials: [
      { title: "HTML Basics", type: "PDF", link: "#" },
      { title: "CSS Fundamentals", type: "Video", link: "#" },
    ],
    liveSessions: [
      { title: "React Introduction", date: "2023-12-15", time: "10:00 AM", link: "#" },
    ],
    notices: [
      "Project submission deadline extended to Dec 20.",
      "Mentor session scheduled for Dec 18 at 2 PM.",
    ],
    events: [
      { title: "Webinar: Advanced React", date: "2023-12-22", time: "11:00 AM", link: "#" },
    ],
    progress: 100,
  };


  return (
    <div className="student-dashboard">
      <h1 className="dashboard-title">Student Dashboard</h1>

      <button className="logout-btn">Logout</button> {/* Logout Button */}

      {/* 1. Student Profile Summary */}
      <div className="dashboard-section profile-summary">
        <img src={studentData.photo} alt="Student" className="profile-photo" />
        <div className="profile-details">
          <h2>{studentData.name}</h2>
          <p><strong>Enrollment ID:</strong> {studentData.enrollmentId}</p>
          <p><strong>College:</strong> {studentData.college}</p>
          <p><strong>Branch:</strong> {studentData.branch}, Semester {studentData.semester}</p>
          <p><strong>Email:</strong> {studentData.email}</p>
          <p><strong>Phone:</strong> {studentData.phone}</p>
          <button className="edit-profile-btn">Edit Profile</button>
        </div>
      </div>

      {/* 2. Training Details Overview */}
      <div className="dashboard-section training-details">
        <h2 className="section-title">Training Details</h2>
        <p><strong>Course:</strong> {studentData.course}</p>
        <p><strong>Batch:</strong> Start Date: {studentData.batch.start}, Duration: {studentData.batch.duration}</p>
        <p><strong>Mode:</strong> {studentData.mode}</p>
        <p><strong>Assigned Mentor:</strong> {studentData.mentor || "N/A"}</p>
        <p>
          <strong>Status:</strong>
          {/*  Dynamically set class based on the status */}
          <span className={`status-indicator ${studentData.status.toLowerCase()}`}></span>
          {studentData.status}
        </p>
      </div>

      {/* 3. Certificate Section */}
      <div className="dashboard-section certificate-section">
        <h2 className="section-title">Certificate</h2>
        <p><strong>Status:</strong> {studentData.certificateStatus}</p>
        {studentData.certificateStatus === "Available" && (
          <button>Download Certificate</button>
        )}
      </div>

      {/* 4. Attendance Tracker (Basic Example) */}
      <div className="dashboard-section attendance-tracker">
        <h2 className="section-title">Attendance</h2>
        <p>{studentData.attendance.attended} / {studentData.attendance.total} days attended</p>
        {/* Replace with a visual calendar or progress bar component */}
        {/* <progress value={studentData.attendance.attended} max={studentData.attendance.total}></progress> */}
      </div>

      {/* 5. Project Submission Section */}
      <div className="dashboard-section project-submission">
        <h2 className="section-title">Project Submission</h2>
        <p><strong>Submission Status:</strong> {studentData.project.submissionStatus}</p>
        {studentData.project.submissionStatus === "Reviewed" && (
          <p><strong>Evaluation Result:</strong> {studentData.project.evaluationResult}</p>
        )}
        <button>Upload Project/Report</button>
        {studentData.project.submissionStatus === "Reviewed" && (
          <button>Download Evaluation Result</button>
        )}
      </div>

      {/* 6. Study Materials / Resources */}
      <div className="dashboard-section study-materials">
        <h2 className="section-title">Study Materials</h2>
        <ul>
          {studentData.studyMaterials.map((material, index) => (
            <li key={index}>
              <a href={material.link} target="_blank" rel="noopener noreferrer">
                {material.title} ({material.type})
              </a>
              {/* You might add a download button here */}
            </li>
          ))}
        </ul>
        {/* Add search/filter functionality */}
      </div>

      {/* 7. Live Session / Class Links */}
      <div className="dashboard-section live-sessions">
        <h2 className="section-title">Live Sessions</h2>
        <ul>
          {studentData.liveSessions.map((session, index) => (
            <li key={index}>
              {session.title} - {session.date}, {session.time}
              <button className="join-btn" onClick={() => window.open(session.link, "_blank")}>
                Join
              </button>
            </li>
          ))}
        </ul>
        {/* Display recorded sessions if available */}
      </div>

      {/* 8. Notice Board (Personalized) */}
      <div className="dashboard-section personalized-notices">
        <h2 className="section-title">Notices</h2>
        <ul>
          {studentData.notices.map((notice, index) => (
            <li key={index}>{notice}</li>
          ))}
        </ul>
      </div>

      {/* 9. Feedback Form / Review (Basic) */}
      <div className="dashboard-section feedback-form">
        <h2 className="section-title">Feedback</h2>
        <textarea placeholder="Your feedback"></textarea>
        {/* Add star rating component here */}
        <button className="submit-feedback-btn">Submit Feedback</button>
      </div>

      {/* 10. Support / Chat Box  - Placeholder */}
      <div className="dashboard-section support-chat">
        <h2 className="section-title">Support</h2>
        {/* Implement chat box component here */}
        <p>Chat functionality will be added here.</p>
      </div>

      {/* 11. Important Downloads */}
      <div className="dashboard-section downloads">
        <h2 className="section-title">Downloads</h2>
        <ul className='download-list'>
          <li><a href="#">Admit Card (if applicable)</a></li>
          <li><a href="#">Guidelines</a></li>
          <li><a href="#">Report Format</a></li>
          <li><a href="#">Certificate Instructions</a></li>
        </ul>
      </div>

      {/* 12. Announcements / Events */}
      <div className="dashboard-section events">
        <h2 className="section-title">Events</h2>
        <div className="event-grid">
          {studentData.events.map((event, index) => (
            <div className="event-card" key={index}>
              <h3>{event.title}</h3>
              <p>{event.date}, {event.time}</p>
              <button className="join-btn" onClick={() => window.open(event.link, "_blank")}>Join</button>
            </div>
          ))}
        </div>
      </div>

      {/* 13. Progress Bar or Tracker */}
      <div className="dashboard-section progress-tracker">
        <h2 className="section-title">Progress</h2>
        <div className="progress-bar">
          <div className="progress-bar-fill" style={{ width: `${studentData.progress}%` }}></div>
        </div>
        <p>{studentData.progress}% Completed</p>
        {/* Add module breakdown if needed */}
      </div>
    </div>
  );
}

export default StudentDashboard;
