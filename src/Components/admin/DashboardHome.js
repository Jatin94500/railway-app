// src/admin/DashboardHome.js
import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import ApproveForm from './ApproveForm';

const DashboardHome = () => {
  return (
    <div className="admin-dashboard">
      <Sidebar />
      <div className="admin-main">
        <Navbar />
        <div className="admin-content">
          <h2 className="admin-heading">Welcome, Admin!</h2>
          <p className="admin-subtext">Use the sidebar to manage student forms, approvals, deadlines, and communication.</p>

          {/* Statistics Cards */}
          <div className="admin-cards">
            <div className="card card-blue">
              <h3>Total Applications</h3>
              <p>320</p>
            </div>
            <div className="card card-green">
              <h3>Verified Students</h3>
              <p>280</p>
            </div>
            <div className="card card-orange">
              <h3>Projects Submitted</h3>
              <p>198</p>
            </div>
            <div className="card card-purple">
              <h3>Pending Verifications</h3>
              <p>40</p>
            </div>
          </div>

          {/* Due Dates Panel */}
          <div className="panel-section">
            <h3>📅 Upcoming Due Dates</h3>
            <ul className="panel-list">
              <li>Document Verification – <strong>20th July 2025</strong></li>
              <li>Final Project Submission – <strong>25th July 2025</strong></li>
              <li>Merit List Publication – <strong>28th July 2025</strong></li>
            </ul>
          </div>

          {/* Messages from Students */}
          <div className="panel-section">
            <h3>📨 Messages from Students</h3>
            <ul className="panel-list messages">
              <li><strong>Ritika Sharma:</strong> I haven’t received verification email yet.</li>
              <li><strong>Aman Gupta:</strong> Can I update my project title?</li>
              <li><strong>Preeti Rao:</strong> Please confirm my form status.</li>
            </ul>
          </div>

          {/* Quick Navigation */}
          <div className="quick-links">

            <h3>Quick Actions</h3>
            <ul>
              <li><a href="/admin/forms">Manage Forms</a></li>
              <li><a href="/admin/meritlist">View Merit List</a></li>
              <li><a href="/admin/notifications">Send Notifications</a></li>
              <li><a href="/admin/batchmanagement">Batch Management</a></li>
            </ul>
          </div>
          <ApproveForm/>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
