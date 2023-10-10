import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <>
    <div className="login">
        <Link to='/'>
            <img className='LoginLogo' src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="img" />
        </Link>
        {/* Login Form start */}
        <div className='LoginContainer'>
         <h1>Sign In</h1>
         <form>
            <h3>Email</h3>
            <input type="email" placeholder='Enter your Email' required />
            <h3>Password</h3>
            <input type="password" placeholder='Enter Your Password' required />
            <button className='LoginButton'>Sign In</button>
         </form>
         <p>By Continuing, You agree to Amazon's condition of use and privacy
            Notice.
         </p>
         <button className='LoginButton'>Create Your Amazon Account</button>
        </div>
    </div>
    </>
  )
}

export default Login
