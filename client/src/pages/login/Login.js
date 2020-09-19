import React from 'react';
import '../../App.css';
import './Login.css';
import { IconContext } from "react-icons";
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

export default function Login() {

    return(
      <div className ="loginWrapper">
          <div className="loginContainer">
            <div className="loginHeader"><h1>Sign In</h1></div>
            <form className="loginForm" >
                <input type="email" id="email" placeholder="Email"></input> <br/>
                <input type="password" id="password" placeholder="Password"></input> <br/>
                <a href="http://localhost:3001/api/login/local"><button className="loginbtns orangeButton">Login</button></a>
                <a href="http://localhost:3000/signup"><p>Create an Account</p></a>
            </form>
            <div className="loginSubtext"><p>or</p></div>
            <IconContext.Provider value={{ className: 'react-icons' }}>
                <div className="loginSocialBtns">
                    <a href="http://localhost:3001/api/login/local"><button className="loginbtns facebookButton"><FaFacebook/>Continue with Facebook</button></a> <br/>
                    <a href="http://localhost:3001/api/login/local"><button className="loginbtns googleButton"><FcGoogle/>Continue with Google</button></a>
                </div>
            </IconContext.Provider>
        </div>
      </div>
    )
}