// src/admin/DomainBatchManagement.js
import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';

const DomainBatchManagement = () => {
  const [selectedDomain, setSelectedDomain] = useState('');
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);

  const domains = ['AI/ML', 'Web Development', 'Cybersecurity'];

  useEffect(() => {
    const dummyData = [
      {
        id: 'A101',
        name: 'Aryan Sharma',
        domain: 'AI/ML',
        batch: 'Batch A',
        attendance: false,
      },
      {
        id: 'W102',
        name: 'Priya Yadav',
        domain: 'Web Development',
        batch: 'Batch B',
        attendance: true,
      },
      {
        id: 'A103',
        name: 'Ravi Verma',
        domain: 'AI/ML',
        batch: 'Batch A',
        attendance: true,
      },
      {
        id: 'C104',
        name: 'Neha Sen',
        domain: 'Cybersecurity',
        batch: 'Batch C',
        attendance: false,
      }
    ];
    setData(dummyData);
  }, []);

  const filteredData = data.filter(student =>
    (selectedDomain === '' || student.domain === selectedDomain) &&
    (student.name.toLowerCase().includes(search.toLowerCase()) ||
     student.id.toLowerCase().includes(search.toLowerCase()))
  );

  const toggleAttendance = (id) => {
    setData(prev =>
      prev.map(student =>
        student.id === id
          ? { ...student, attendance: !student.attendance }
          : student
      )
    );
  };

  const groupByBatch = (students) => {
    const groups = {};
    students.forEach(student => {
      if (!groups[student.batch]) groups[student.batch] = [];
      groups[student.batch].push(student);
    });
    return groups;
  };

  return (
    <div className="fixed-sidebar">
      <Sidebar />
      <div className="admin-content">
        <h2>Domain-wise Batch Management</h2>

        <div className="filter-bar">
          <select value={selectedDomain} onChange={(e) => setSelectedDomain(e.target.value)}>
            <option value="">All Domains</option>
            {domains.map((domain) => (
              <option key={domain} value={domain}>{domain}</option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Search by name or ID"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {Object.entries(groupByBatch(filteredData)).map(([batch, students]) => (
          <div key={batch}>
            <h3>{batch}</h3>
            <table className="admin-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Domain</th>
                  <th>Attendance</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student.id}>
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.domain}</td>
                    <td>
                      <button
                        onClick={() => toggleAttendance(student.id)}
                        className={student.attendance ? 'present' : 'absent'}
                      >
                        {student.attendance ? 'Present' : 'Absent'}
                      </button>
                    </td>
                    <td>
                      <button onClick={() => alert(`Viewing ${student.name}`)}>View</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};


export default DomainBatchManagement;
