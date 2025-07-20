// src/admin/DocumentVerification.js
import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';

const DocumentVerification = () => {
  const [documents, setDocuments] = useState([]);

  // Dummy data for student documents (replace with Firebase later)
  useEffect(() => {
    const dummyDocs = [
      {
        id: 1,
        studentName: 'Anjali Sharma',
        email: 'anjali@example.com',
        docType: 'Aadhaar Card',
        docURL: 'https://via.placeholder.com/150',
        status: 'Pending',
      },
      {
        id: 2,
        studentName: 'Rohit Mehta',
        email: 'rohit@example.com',
        docType: '10th Marksheet',
        docURL: 'https://via.placeholder.com/150',
        status: 'Pending',
      },
    ];
    setDocuments(dummyDocs);
  }, []);

  const handleApprove = (id) => {
    setDocuments((prev) =>
      prev.map((doc) =>
        doc.id === id ? { ...doc, status: 'Approved' } : doc
      )
    );
  };

  const handleReject = (id) => {
    setDocuments((prev) =>
      prev.map((doc) =>
        doc.id === id ? { ...doc, status: 'Rejected' } : doc
      )
    );
  };

  return (<div className='fixed-sidebar'>
    <Sidebar/>
    <div className="admin-content">
      <h2>Document Verification</h2>
      <div className="document-grid">
        {documents.map((doc) => (
          <div className="doc-card" key={doc.id}>
            <h4>{doc.studentName}</h4>
            <p><strong>Email:</strong> {doc.email}</p>
            <p><strong>Document:</strong> {doc.docType}</p>
            <a href={doc.docURL} target="_blank" rel="noopener noreferrer">
              View Document
            </a>
            <p><strong>Status:</strong> {doc.status}</p>
            <div className="doc-buttons">
              <button onClick={() => handleApprove(doc.id)}>Approve</button>
              <button onClick={() => handleReject(doc.id)}>Reject</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default DocumentVerification;
