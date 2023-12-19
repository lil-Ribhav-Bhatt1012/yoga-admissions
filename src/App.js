import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    batch: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
       
       const response = await axios.post('http://localhost:3000/api/enroll', formData);
       console.log(response.data);
       
     } catch (error) {
       console.error(error);
       
    }
  };

  return (
    <div className="container">
      <h1>Yoga Class Enrollment Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input className="input" type="text" name="name" placeholder="Name" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input className="input" type="number" name="age" placeholder="Age" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="batch">Batch</label>
          <select className="select" name="batch" onChange={handleChange}>
            <option value="6-7AM">6-7AM</option>
            <option value="7-8AM">7-8AM</option>
            <option value="8-9AM">8-9AM</option>
            <option value="5-6PM">5-6PM</option>
          </select>
        </div>
        <button className="button" type="submit">Enroll</button>
      </form>
    </div>
  );
}

export default App;
