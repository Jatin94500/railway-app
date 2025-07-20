// src/admin/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="admin-sidebar">
      <h3>Admin Panel</h3>
      <nav>
        <ul>
          <li><Link to="/admin/dashboard">Dashboard</Link></li>
          <li><Link to="/admin/forms">Approve Forms</Link></li>
          <li><Link to="/admin/students">Student Profiles</Link></li>
          <li><Link to="/admin/tracker">Selection Tracker</Link></li>
          <li><Link to="/admin/notifications">Notifications</Link></li>
          <li><Link to="/admin/documents">Document Verification</Link></li>
          <li><Link to="/admin/meritlist">Merit List</Link></li>
          <li><Link to="/admin/domain-batch">Domain Batch Management</Link></li>
          <li><Link to="/admin/login">Logout</Link></li>

        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
