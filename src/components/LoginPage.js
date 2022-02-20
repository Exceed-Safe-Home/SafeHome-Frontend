import React from 'react'
import LoginForm from './LoginForm'
import LoginFormHeader from './LoginFormHeader'
import "./LoginPage.css"

const LoginPage = () => {
  return ( 
  <div className="login-page">
    <LoginFormHeader/>
    <LoginForm/>
  </div>
  )
}

export default LoginPage