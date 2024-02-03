import React,{useState}from 'react';
import "../styles/u.css"
export default function U() {
  return (
    <>
      <div className="appointment">
        <div className="appointment-container">
          <h2>Doctor's Appointment Portal</h2>

          <form id="appointmentForm">

            <label htmlFor="name">Name:</label>
            <i className="fa-solid fa-user"></i>
            <input type="text" id="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" required />

            <label htmlFor="phone">Phone:</label>
            <input type="tel" id="phone" required />

            <label htmlFor="date">Date:</label>
            <input type="date" id="date" required />

            <label htmlFor="time">Time:</label>
            <input type="time" id="time" required />

            <label htmlFor="Department">Specialist:</label>
            <select name="Department" id="Department">
              <option value="Obesity & Gynacology">Obesity & Gynacology</option>
              {/* ... other options ... */}
            </select>

            <label htmlFor="DoctorName">Doctor Name:</label>
            <select name="DoctorName" id="DoctorName">
              <option value="Prasad Hota">Prasad Hota</option>
              {/* ... other options ... */}
            </select>

            <br />

            <button type="submit">Book Appointment</button>
          </form>
        </div>
      </div>
    </>
  );
}
