// src/admin/meritlist/StudentRow.js
import React from 'react';

function StudentRow({ student, onSelect, onReject, onView }) {
  return (
    <tr className={student.status}>
      <td>{student.name}</td>
      <td>{student.email}</td>
      <td>{student.college}</td>
      <td>{student.branch}</td>
      <td>{student.domain}</td>
      <td>
        <span className={`status-badge ${student.status}`}>
          {student.status.charAt(0).toUpperCase() + student.status.slice(1)}
        </span>
      </td>
      <td>{student.trainingId || 'N/A'}</td>
      <td>
        <div className="action-buttons">
          <button className="view-btn" onClick={onView}>
            View
          </button>
          
          {student.status === 'pending' && (
            <>
              <button className="select-btn" onClick={onSelect}>
                Select
              </button>
              <button className="reject-btn" onClick={onReject}>
                Reject
              </button>
            </>
          )}
        </div>
      </td>
    </tr>
  );
}

export default StudentRow;
