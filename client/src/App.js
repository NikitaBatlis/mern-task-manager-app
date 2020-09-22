import React, { useEffect } from 'react';
//Imports styles
import './App.css';
//Import Pages

export default function App(props) {
  const { children } = props
  

  useEffect(() => {
    checkFacebook();
  }, []);

  function checkFacebook() {
    if (window.location.hash && window.location.hash === '#_=_') {
      window.location.replace(window.location.href.split('%')[0]);
    }
  }
  
  console.log(props);

  return (
    <div>
      {children}
    </div>
  )
}
