"use client"
import React, { useState } from "react";
import useFetch from "../components/useFetch";
export default function contact() {
  const [user,setUser] =useState({})
  const [errors,setErrors] = useState({})

    const handleChange = (e) =>{
    const name=e && e.target.name
    const value=e && e.target.value
    setUser({...user,[name]:value})
    

    }
    const handleValidateUser = (state) =>{
        let errors ={}
        let formIsValid = true
        if(!state.name){
            formIsValid = false;
            errors.name= "Name is Empty!"
        }
        if(!state.email){
            formIsValid = false;
            errors.email= "Email is Empty!"
        }
        if(!state.phone){
            formIsValid = false;
            errors.phone= "Phone is Empty!"
        }
        return {errors,formIsValid}
    }
    const handleSubmit =() =>{
        const validateObj = handleValidateUser(user)
        if(!validateObj.formIsValid){
            setErrors(validateObj.errors)
        }else{
            setErrors({})
        }        
    }
    const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

    
    return(
        <>
        {data &&
            data.map((item) => {
              return <p key={item.id}>{item.title}</p>;
            })}
    <div className="contact-container">
        <form className="contact-form">
        <label>Name</label>
        <div className="form-body">
            <input type="text" name="name" className="form-control" onChange={(e) =>handleChange(e)}/>
        <p>{errors.name}</p>
        </div>
        <label>Email</label>
        <div className="form-body">
            <input type="text" name="email" className="form-control" onChange={(e) =>handleChange(e)}/>
        <p>{errors.email}</p>
        </div>
        <label>Phone</label>
        <div className="form-body">
            <input type="tel" name="phone" className="form-control" onChange={(e) =>handleChange(e)}/>
        <p>{errors.phone}</p>
        </div>
        <div className="form-body">
            <button type="button" className="submit-btn" onClick={handleSubmit}>Submit</button>
        </div>
        </form>
    </div>
    </>
    )
}