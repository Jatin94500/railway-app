import React, { useState } from 'react';

function Registration() {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    dob: '',
    fatherName: '',
    contactNumber: '',
    email: '',
    // photograph: null, // Placeholder for file upload
    collegeName: '',
    course: '',
    branch: '',
    currentYear: '',
    collegeRollNumber: '',
    universityRegNumber: '',
    academicPerformance: '',
    preferredDomain: '',
    trainingDuration: '',
    batchTiming: '',
    modeOfTraining: '',
    permanentAddress: '',
    currentAddress: '',
    city: '',
    state: '',
    pinCode: '',
    // idProof: null, // Placeholder for file upload
    idNumber: '',
    declaration: false,
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // File upload handling (placeholders for now)
  // const handleFileChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.files[0],
  //   });
  // };

  const handleRegistration = async (event) => {
    event.preventDefault();
    setError('');

    // Basic client-side validation (add more as needed)
    if (!formData.name || !formData.email || !formData.password) { // etc
      setError('Please fill in all required fields.');
      return;
    }

    setLoading(true);

    try {
      // In a real app, you'd send formData to your backend for registration
      // with proper file handling (e.g. using FormData and fetch)
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // For now, just send all data
      });

      const data = await response.json();
      setLoading(false);

      if (response.ok) {
        console.log('Registration successful!');
        alert('Registration successful! Please log in.');
      } else {
        setError(data.message || 'Registration failed. Please try again.');
      }
    } catch (err) {
      setLoading(false);
      setError('An error occurred during registration. Please try again later.');
      console.error(err);
    }
  };

  return (
    <div className="registration-page">
      <div className="registration-container">
        <h2 className="registration-title">Summer Training Registration</h2>
        {error && <p className="registration-error">{error}</p>}
        <form onSubmit={handleRegistration} className="registration-form">
          <h3>Personal Details</h3>
          <div className="form-group">
            <label htmlFor="name" className="input-label">Full Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="form-input" />
          </div>
          <div className="form-group">
            <label htmlFor="gender" className="input-label">Gender</label>
            <select id="gender" name="gender" value={formData.gender} onChange={handleChange} required className="form-input">
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="dob" className="input-label">Date of Birth</label>
            <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} required className="form-input" />
          </div>
          <div className="form-group">
            <label htmlFor="fatherName" className="input-label">Father's Name / Guardian Name</label>
            <input type="text" id="fatherName" name="fatherName" value={formData.fatherName} onChange={handleChange} required className="form-input" />
          </div>
          <div className="form-group">
            <label htmlFor="contactNumber" className="input-label">Contact Number (Mobile)</label>
            <input type="tel" id="contactNumber" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required className="form-input" />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="input-label">Email Address</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="form-input" />
          </div>
          {/* File upload fields (uncomment and implement separately) */}
          {/* <div className="form-group">
            <label htmlFor="photograph" className="input-label">Photograph Upload (Passport size)</label>
            <input type="file" id="photograph" name="photograph" onChange={handleFileChange} required className="form-input" />
          </div> */}

          <h3>Academic Information</h3>
          <div className="form-group">
            <label htmlFor="collegeName" className="input-label">College/University Name</label>
            <input type="text" id="collegeName" name="collegeName" value={formData.collegeName} onChange={handleChange} required className="form-input" />
          </div>
          <div className="form-group">
            <label htmlFor="course" className="input-label">Course</label>
            <input type="text" id="course" name="course" value={formData.course} onChange={handleChange} required className="form-input" />
          </div>
          <div className="form-group">
            <label htmlFor="branch" className="input-label">Branch/Stream</label>
            <input type="text" id="branch" name="branch" value={formData.branch} onChange={handleChange} required className="form-input" />
          </div>
          <div className="form-group">
            <label htmlFor="currentYear" className="input-label">Current Year/Semester</label>
            <input type="text" id="currentYear" name="currentYear" value={formData.currentYear} onChange={handleChange} required className="form-input" />
          </div>
          <div className="form-group">
            <label htmlFor="collegeRollNumber" className="input-label">College Roll Number / Enrollment Number</label>
            <input type="text" id="collegeRollNumber" name="collegeRollNumber" value={formData.collegeRollNumber} onChange={handleChange} required className="form-input" />
          </div>
          <div className="form-group">
            <label htmlFor="universityRegNumber" className="input-label">University Registration Number (if applicable)</label>
            <input type="text" id="universityRegNumber" name="universityRegNumber" value={formData.universityRegNumber} onChange={handleChange} className="form-input" />
          </div>
          <div className="form-group">
            <label htmlFor="academicPerformance" className="input-label">Academic Performance</label>
            <input type="text" id="academicPerformance" name="academicPerformance" value={formData.academicPerformance} onChange={handleChange} required className="form-input" />
          </div>

          <h3>Training Preferences</h3>
          <div className="form-group">
            <label htmlFor="preferredDomain" className="input-label">Preferred Training Domain</label>
            <input type="text" id="preferredDomain" name="preferredDomain" value={formData.preferredDomain} onChange={handleChange} required className="form-input" />
          </div>
          <div className="form-group">
            <label htmlFor="trainingDuration" className="input-label">Training Duration</label>
            <input type="text" id="trainingDuration" name="trainingDuration" value={formData.trainingDuration} onChange={handleChange} required className="form-input" />
          </div>
          <div className="form-group">
            <label htmlFor="batchTiming" className="input-label">Preferred Batch Timing</label>
            <input type="text" id="batchTiming" name="batchTiming" value={formData.batchTiming} onChange={handleChange} required className="form-input" />
          </div>
          <div className="form-group">
            <label htmlFor="modeOfTraining" className="input-label">Mode of Training</label>
            <input type="text" id="modeOfTraining" name="modeOfTraining" value={formData.modeOfTraining} onChange={handleChange} required className="form-input" />
          </div>

          <h3>Address Details</h3>
          <div className="form-group">
            <label htmlFor="permanentAddress" className="input-label">Permanent Address</label>
            <textarea id="permanentAddress" name="permanentAddress" value={formData.permanentAddress} onChange={handleChange} required className="form-input"></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="currentAddress" className="input-label">Current Address (if different)</label>
            <textarea id="currentAddress" name="currentAddress" value={formData.currentAddress} onChange={handleChange} className="form-input"></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="city" className="input-label">City</label>
            <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} required className="form-input" />
          </div>
          <div className="form-group">
            <label htmlFor="state" className="input-label">State</label>
            <input type="text" id="state" name="state" value={formData.state} onChange={handleChange} required className="form-input" />
          </div>
          <div className="form-group">
            <label htmlFor="pinCode" className="input-label">PIN Code</label>
            <input type="text" id="pinCode" name="pinCode" value={formData.pinCode} onChange={handleChange} required className="form-input" />
          </div>

          <h3>ID Proof</h3>
          {/* File upload fields (uncomment and implement separately) */}
          {/* <div className="form-group">
            <label htmlFor="idProof" className="input-label">Upload College ID Card / Any Government ID</label>
            <input type="file" id="idProof" name="idProof" onChange={handleFileChange} required className="form-input" />
          </div> */}
          <div className="form-group">
            <label htmlFor="idNumber" className="input-label">ID Number</label>
            <input type="text" id="idNumber" name="idNumber" value={formData.idNumber} onChange={handleChange} required className="form-input" />
          </div>

          <div className="form-group form-group-checkbox">
            <input type="checkbox" id="declaration" name="declaration" checked={formData.declaration} onChange={handleChange} required className="form-checkbox" />
            <label htmlFor="declaration" className="checkbox-label">
              I hereby declare that all the information provided is true to the best of my knowledge.
            </label>
          </div>

          <button type="submit" className="registration-button" disabled={loading}>
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Registration;
