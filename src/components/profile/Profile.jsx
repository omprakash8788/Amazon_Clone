import React from 'react'
import './Profile.css'
import { Link } from 'react-router-dom'
const Profile = () => {
  return (
    <>
    <div className="profile">
    <Link to='/'>
            <img className='ProfileLogo' src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="img" />
        </Link>
        {/* profile  */}
        <div className="profilecontainer">
            <h1>Your Profile</h1>
            <form>
                <h3>Name </h3>
                <input type="text" placeholder='Enter your Name' required />
                <h3>Email</h3>
                <input type="email" placeholder='Enter your email' required />
                <h3>Mobile</h3>
                <input type="number" placeholder='Enter your Number' required />
                <button className='profilebutton'>Update</button>
                 
            </form>
        </div>
    </div>
    </>

  )
}

export default Profile
