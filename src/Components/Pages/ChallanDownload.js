// src/Components/Pages/ChallanDownload.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ChallanDownload() {
  const navigate = useNavigate();
  const [challanGenerated, setChallanGenerated] = useState(false);
  
  // Mock student data
  const studentData = {
    name: "Smriti Pandey",
    trainingId: "TR202300001",
    email: "smriti@example.com",
    college: "University of Lucknow",
    domain: "Web Development",
    fees: 5000,
    validUntil: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString() // 7 days from now
  };

  const handleGenerateChallan = () => {
    // In a real app, this would call an API to generate the challan
    setChallanGenerated(true);
  };

  const handleDownloadChallan = () => {
    // In a real app, this would download a PDF
    alert('Challan downloaded successfully. Please print and visit the office for stamping and fee submission.');
  };

  return (
    <div className="challan-container">
      <h1>Fee Challan Generation</h1>
      
      {!challanGenerated ? (
        <div className="challan-info">
          <p>You have been selected for the summer training program. Please generate your fee challan to proceed with the payment.</p>
          
          <div className="student-details">
            <h2>Student Details</h2>
            <p><strong>Name:</strong> {studentData.name}</p>
            <p><strong>Training ID:</strong> {studentData.trainingId}</p>
            <p><strong>Email:</strong> {studentData.email}</p>
            <p><strong>College:</strong> {studentData.college}</p>
            <p><strong>Training Domain:</strong> {studentData.domain}</p>
            <p><strong>Fee Amount:</strong> ₹{studentData.fees}</p>
          </div>
          
          <button 
            className="generate-challan-btn"
            onClick={handleGenerateChallan}
          >
            Generate Challan
          </button>
        </div>
      ) : (
        <div className="challan-preview">
          <div className="challan-card">
            <div className="challan-header">
              <h2>Fee Payment Challan</h2>
              <p className="challan-id">Challan #: CH{Math.floor(Math.random() * 1000000)}</p>
            </div>
            
            <div className="challan-body">
              <div className="challan-student-details">
                <p><strong>Name:</strong> {studentData.name}</p>
                <p><strong>Training ID:</strong> {studentData.trainingId}</p>
                <p><strong>Email:</strong> {studentData.email}</p>
                <p><strong>College:</strong> {studentData.college}</p>
                <p><strong>Training Domain:</strong> {studentData.domain}</p>
              </div>
              
              <div className="challan-fee-details">
                <p><strong>Fee Amount:</strong> ₹{studentData.fees}</p>
                <p><strong>Valid Until:</strong> {studentData.validUntil}</p>
              </div>
              
              <div className="challan-instructions">
                <h3>Instructions:</h3>
                <ol>
                  <li>Download and print this challan</li>
                  <li>Visit the training office for challan stamping</li>
                  <li>Submit the fees at the designated counter</li>
                  <li>Keep a copy of the stamped challan for your records</li>
                </ol>
              </div>
              
              <div className="challan-signature">
                <div className="signature-box">
                  <p>Student Signature</p>
                </div>
                <div className="signature-box">
                  <p>Office Stamp</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="challan-actions">
            <button 
              className="download-challan-btn"
              onClick={handleDownloadChallan}
            >
              Download Challan (PDF)
            </button>
            
            <button 
              className="back-btn"
              onClick={() => navigate('/student/dashboard')}
            >
              Back to Dashboard
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChallanDownload;
