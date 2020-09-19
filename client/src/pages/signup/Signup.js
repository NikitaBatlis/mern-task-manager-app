import React from 'react';
import '../../App.css';
import './Signup.css';
import { IconContext } from "react-icons";
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

export default function Signup() {

    return(
      <div className ="signupWrapper">
          <div className="signupContainer">
            <div className="signupHeader"><h1>Create Account</h1></div>
            <form className="signupForm" >
                <input type="email" id="email" placeholder="Email"></input> <br/>
                <input type="password" id="password" placeholder="Password"></input> <br/>
                <a href="http://localhost:3001/api/signup"><button className="signupbtns orangeButton">Register</button></a>
            </form>
            <div className="signupSubtext"><p>or</p></div>
            <IconContext.Provider value={{ className: 'react-icons' }}>
                <div className="signupSocialBtns">
                    <a href="http://localhost:3001/api/signup/local"><button className="signupbtns facebookButton"><FaFacebook/>Register with Facebook</button></a> <br/>
                    <a href="http://localhost:3001/api/signup/local"><button className="signupbtns googleButton"><FcGoogle/>Register with Google</button></a>
                </div>
            </IconContext.Provider>
        </div>
      </div>
    )
}