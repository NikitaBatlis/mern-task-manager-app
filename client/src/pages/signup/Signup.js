import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import '../../App.css';
import './Signup.css';
import axios from 'axios';

export default function Signup() {

    const [registerUsername, setRegisterUsername] = useState('');
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const history = useHistory();


    const register = () => {
        axios.post(`http://localhost:3001/api/signup`, {
            username: registerUsername,
            email: registerEmail,
            password: registerPassword
        }, {
            withCredentials: true
        }).then(res => {
            history.push('/login');
        });
    };

    return(
      <div className ="signupWrapper">
          <div className="signupContainer">
            <div className="signupHeader"><h1>Create Account</h1></div>
            <div className="signupForm" >
                <input type="text" id="username" placeholder="Username" onChange={(e) => setRegisterUsername(e.target.value)}></input> <br/>
                <input type="email" id="email" placeholder="Email" onChange={(e) => setRegisterEmail(e.target.value)}></input> <br/>
                <input type="password" id="password" placeholder="Password" onChange={(e) => setRegisterPassword(e.target.value)}></input> <br/>
                <button className="signupbtns orangeButton" onClick={register}>Register</button>
            </div>
        </div>
      </div>
    )
}