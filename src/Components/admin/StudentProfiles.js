import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';

const StudentProfiles = () => {
  const [students, setStudents] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  const [selectedStudent, setSelectedStudent] = useState(null);

  useEffect(() => {
    const dummyStudents = [
      {
        id: 'S001',
        name: 'Aryan Sharma',
        email: 'aryan.sharma@example.com',
        course: 'B.Tech CSE',
        status: 'Approved',
        phone: '9876543210',
        address: 'New Delhi, India',
      },
      {
        id: 'S002',
        name: 'Neha Verma',
        email: 'neha.verma@example.com',
        course: 'B.Tech AI',
        status: 'Pending',
        phone: '9876523456',
        address: 'Lucknow, India',
      },
      {
        id: 'S003',
        name: 'Raj Patel',
        email: 'raj.patel@example.com',
        course: 'BCA',
        status: 'Rejected',
        phone: '9876500000',
        address: 'Ahmedabad, India',
      },
    ];
    setStudents(dummyStudents);
    setFiltered(dummyStudents);
  }, []);

  useEffect(() => {
    let result = students;

    if (filterStatus !== 'All') {
      result = result.filter((s) => s.status === filterStatus);
    }

    if (searchTerm !== '') {
      result = result.filter(
        (s) =>
          s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          s.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFiltered(result);
  }, [searchTerm, filterStatus, students]);

  const handleView = (student) => {
    setSelectedStudent(student);
  };

  const closeModal = () => {
    setSelectedStudent(null);
  };

  return (
    <div className="fixed-sidebar">
      <Sidebar />
      <div className="admin-content">
        <h2>Student Profiles</h2>

        <div className="filter-section">
          <input
            type="text"
            placeholder="Search by name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Approved">Approved</option>
            <option value="Pending">Pending</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>

        <div className="student-table">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Course</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((student) => (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>{student.course}</td>
                  <td>
                    <span className={`status ${student.status.toLowerCase()}`}>
                      {student.status}
                    </span>
                  </td>
                  <td>
                    <button
                      className="view-btn"
                      onClick={() => handleView(student)}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan="6">No students found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {selectedStudent && (
          <div className="modal-overlay" onClick={closeModal}>
            <div
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <h3>{selectedStudent.name}'s Profile</h3>
              <p><strong>ID:</strong> {selectedStudent.id}</p>
              <p><strong>Email:</strong> {selectedStudent.email}</p>
              <p><strong>Phone:</strong> {selectedStudent.phone}</p>
              <p><strong>Course:</strong> {selectedStudent.course}</p>
              <p><strong>Status:</strong> {selectedStudent.status}</p>
              <p><strong>Address:</strong> {selectedStudent.address}</p>
              <button className="close-btn" onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentProfiles;
