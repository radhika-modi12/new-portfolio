"use client"
import React, { useState } from "react";
export default function contact() {
  const [user,setUser] =useState({})
  console.log({user})
    const handleChange = (e) =>{
    const name=e && e.target.name
    const value=e && e.target.value
    setUser({...user,[name]:value})
    

    }
    return(
    <div className="contact-container">
        <form className="contact-form">
        <label>Name</label>
        <div className="form-body">
            <input type="text" name="name" className="form-control" onChange={(e) =>handleChange(e)}/>
        </div>
        <label>Email</label>
        <div className="form-body">
            <input type="text" name="email" className="form-control" onChange={(e) =>handleChange(e)}/>
        </div>
        <label>Phone</label>
        <div className="form-body">
            <input type="tel" name="phone" className="form-control" onChange={(e) =>handleChange(e)}/>
        </div>
        <div className="form-body">
            <button type="button" className="submit-btn">Submit</button>
        </div>
        </form>
    </div>
    )
}