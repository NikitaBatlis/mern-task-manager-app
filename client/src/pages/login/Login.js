import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import '../../App.css';
import './Login.css';
import { IconContext } from "react-icons";
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import axios from 'axios';

export default function Login() {

    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const history = useHistory();

    const login = () => {
        axios.post(`http://localhost:3001/api/login/local`, {
            username: loginEmail,
            password: loginPassword
        }, {
            withCredentials: true
        }).then(res => {
            console.log(res);
            history.push('/dashboard');
        }).catch(err => {
            // TODO display error message
            if (err.response != null && err.response.data != null && err.response.data.message != null) {
                console.log(err.response.data.message);
            }
            
        });
    };

    return(
      <div className ="loginWrapper">
          <div className="loginContainer">
            <div className="loginHeader"><h1>Sign In</h1></div>
            <div className="loginForm" >
                <input type="email" id="email" placeholder="Email" onChange={(e) => setLoginEmail(e.target.value)}></input> <br/>
                <input type="password" id="password" placeholder="Password" onChange={(e) => setLoginPassword(e.target.value)}></input> <br/>
                <button className="loginbtns orangeButton" onClick={login}>Login</button>
                <a href="http://localhost:3000/signup"><p>Create an Account</p></a>
            </div>
            <div className="loginSubtext"><p>or</p></div>
            <IconContext.Provider value={{ className: 'react-icons' }}>
                <div className="loginSocialBtns">
                    <a href="http://localhost:3001/api/login/facebook"><button className="loginbtns facebookButton"><FaFacebook/>Continue with Facebook</button></a> <br/>
                    <a href="http://localhost:3001/api/login/google"><button className="loginbtns googleButton"><FcGoogle/>Continue with Google</button></a>
                </div>
            </IconContext.Provider>
        </div>
      </div>
    )
}