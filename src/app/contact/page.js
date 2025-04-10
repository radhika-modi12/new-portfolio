"use client";
import React from "react";
export default function Contact() {
  const handleChange = () => {
    
  };
  return (
    <div className="form-container">
      <form>
        <label>Name</label>
        <div className="form-control">
          <input type="text" name="name" onChange={handleChange} />
        </div>
        <label>Email</label>
        <div className="form-control">
          <input type="text" name="email" onChange={handleChange} />
        </div>
        <label>Phone Number</label>
        <div className="form-control">
          <input type="text" name="phone" onChange={handleChange} />
        </div>
        <div className="form-control">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
