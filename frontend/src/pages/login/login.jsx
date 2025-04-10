
import "./login.scss";
import axios  from "axios";
import { useState,useEffect } from "react";
import React, { Component } from "react";
import {Route, useNavigate} from 'react-router-dom';


const Login=()=> {
    const [data, setData] = useState([]);
const [status,setLoginStatus]=useState("");
    useEffect(() => {
        fetch('http://localhost:3001/user/login').then((data) => data.json())
        .then((data) => setLoginStatus(data.loggedIn))
      
    
      }, [])
    const navigate = useNavigate();
    const handlesubmit =(e)=> {
        // if(status){
            
        //         axios.get('http://localhost:3001/logout').then((response) => response.json())
             
        //         axios.get('http://localhost:3001/user/login').then((data) => data.json())
        //         .then((data) => setLoginStatus(data.loggedIn))
              
        //         axios.post("http://localhost:3001/user/login",{phone: e.target.phone.value,password: e.target.password.value}).then((response) => {
        //             if (response.data.message) {
        //             //   setLoginStatus(response.data.message);
        //               console.log(response.data.message);
        //             } else {
        //               setLoginStatus(response.data[0].user_id);
        //               console.log(response.data[0].user_id);
        //             navigate("users");
                        
        //             }
                    
        //           });
            
        // }
        
        axios.post("http://localhost:3001/user/login",{phone: e.target.phone.value,password: e.target.password.value},{withCredentials: true}).then((response) => {
        if (response.data.message=="successfull") {
               setLoginStatus("true");
               navigate("home");
            } else {
              setLoginStatus(false);
             alert(response.data.message)
           
         }
 
        
           
          });
        
    };
    
    return(
        <div className="body">
        <div className="container" id="container">
        <div className="form-container sign-in-container">
            <form onSubmit={handlesubmit}>
                <h1>Login</h1>
                <input type="number"   placeholder="Phone Number" name="phone"    required/>
                <input type="password" placeholder="Password"     name="password" required/>
             <button type="submit"> Login </button>
            </form>
        </div>
        <div className="overlay-container">
            <div className="overlay">
                <div className="overlay-panel overlay-left">
                    <h1>Welcome Back!</h1>
                </div>
                <div className="overlay-panel overlay-right">
                    <h1>ezi</h1>
                </div>
            </div>
        </div>
    </div>
    </div>
    )
}
export default Login