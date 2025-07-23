// src/admin/meritlist/MeritList.js
import React, { useState } from 'react';
import StudentRow from './StudentRow';
import StudentModal from './StudentModal';
import { generateTrainingID } from './utils/generateTrainingID';
import { exportToPDF } from './utils/exportToPDF';
import { exportToExcel } from './utils/exportToExcel';

function MeritList() {
  // Mock data for applicants
  const [students, setStudents] = useState([
    {
      id: 1,
      name: 'Smriti Pandey',
      email: 'smriti@example.com',
      college: 'University of Lucknow',
      branch: 'Computer Science',
      domain: 'Web Development',
      status: 'pending',
      trainingId: null
    },
    {
      id: 2,
      name: 'Rahul Kumar',
      email: 'rahul@example.com',
      college: 'Delhi University',
      branch: 'Information Technology',
      domain: 'Data Science',
      status: 'pending',
      trainingId: null
    },
    {
      id: 3,
      name: 'Priya Singh',
      email: 'priya@example.com',
      college: 'Mumbai University',
      branch: 'Electronics',
      domain: 'Mobile App Development',
      status: 'pending',
      trainingId: null
    }
  ]);
   const handleExportToPDF = () => {
    exportToPDF(filteredStudents, 'Student Selection List');
  };

  const handleExportToExcel = () => {
    exportToExcel(filteredStudents, 'Student Selection List');
  };

  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const handleSelect = (id) => {
    setStudents(students.map(student => {
      if (student.id === id) {
        return {
          ...student,
          status: 'selected',
          trainingId: generateTrainingID(student.id)
        };
      }
      return student;
    }));
  };

  const handleReject = (id) => {
    setStudents(students.map(student => {
      if (student.id === id) {
        return {
          ...student,
          status: 'rejected',
          trainingId: null
        };
      }
      return student;
    }));
  };

  const openStudentModal = (student) => {
    setSelectedStudent(student);
    setIsModalOpen(true);
  };

  const closeStudentModal = () => {
    setSelectedStudent(null);
    setIsModalOpen(false);
  };

  // Filter students based on status and search term
  const filteredStudents = students.filter(student => {
    const matchesFilter = filter === 'all' || student.status === filter;
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         student.email.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="merit-list-container">
      <h1>Student Selection</h1>
      
      <div className="filters-container">
        <div className="search-container">
          <input 
            type="text" 
            placeholder="Search by name or email" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="filter-container">
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="all">All Applications</option>
            <option value="pending">Pending</option>
            <option value="selected">Selected</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>
      </div>
      
       <div className="export-buttons">
        <button className="export-btn pdf-btn" onClick={handleExportToPDF}>
          Export to PDF
        </button>
        <button className="export-btn excel-btn" onClick={handleExportToExcel}>
          Export to Excel
        </button>
      </div>
      
      <div className="table-container">
        <table className="students-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>College</th>
              <th>Branch</th>
              <th>Domain</th>
              <th>Status</th>
              <th>Training ID</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map(student => (
              <StudentRow 
                key={student.id}
                student={student}
                onSelect={() => handleSelect(student.id)}
                onReject={() => handleReject(student.id)}
                onView={() => openStudentModal(student)}
              />
            ))}
          </tbody>
        </table>
      </div>
      
      {isModalOpen && selectedStudent && (
        <StudentModal 
          student={selectedStudent}
          onClose={closeStudentModal}
          onSelect={() => handleSelect(selectedStudent.id)}
          onReject={() => handleReject(selectedStudent.id)}
        />
      )}
    </div>
  );
}

export default MeritList;
