import React from "react";
import './Header.css'
import { GiHamburgerMenu } from "react-icons/gi";
import {BsSearch} from "react-icons/bs";
import {IoMdBasket} from "react-icons/io";
import {ImLocation2} from "react-icons/im";

import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <nav className="header">
        <div className="headerTop">
          <div className="headerLeftNav">
            <GiHamburgerMenu />
          </div>
          {/* Logo */}
          <Link to='/'>
            <img className="logo" src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Emblem.jpg" alt="logo" />
          </Link>
          {/* Logo */}

          {/* Serach Box */}
          <div className="headerSearch">
            <input type="text" className="headerSearchInput" />
            <BsSearch className="headerSearchIcon"/>
          </div>


          {/* Link */}
          <div className="headerNavbar">
            {/* Signout/Signin */}
            <Link to='/Login' className="headerLink">
                <div className="headerOption">
                    <span className="headerOption_One">
                        Hello
                    </span>
                    <span className="headerOption_Two">
                        User
                    </span>
                </div>
            </Link>
            {/* Return Order */}
            <Link to='/Orders' className="headerLink">
                <div className="headerOption">
                    <span className="headerOption_One">
                        Return
                    </span>
                    <span className="headerOption_Two">
                        Orders
                    </span>
                </div>
            </Link>
            {/* Prime  */}
            <Link to='/' className="headerLink">
                <div className="headerOption">
                    <span className="headerOption_One">
                        Try
                    </span>
                    <span className="headerOption_Two">
                        Prime
                    </span>
                </div>
            </Link>
            {/* Profile */}
            <Link to='/Profile' className="headerLink">
                <div className="headerOption">
                    <span className="headerOption_One">
                        Your
                    </span>
                    <span className="headerOption_Two">
                        Profile
                    </span>
                </div>
            </Link>
            {/* Basket */}
            <Link to='/Cart' className="headerLink">
                <div className="headerOption_Basket">
                    <IoMdBasket/>
                    <span className="headerOption_Two basketcount">
                        4
                    </span>
                </div>
            </Link>
          </div>
        </div>
        {/* Navbar Bottom */}
         <div className="headerBottom">
            {/* Address */}
            <div className="headerAddress">
                <div className="headerAddress_Icon">
                    <ImLocation2/>
                </div>
                <div className="headerOption">
                    <span className="headerOption_One">
                        Deliver To
                    </span>
                    <span className="headerOption_Two">
                        Easy Coding
                    </span>
                </div>
            </div>
            {/* Header bottom nav */}
          <div className="headerbottom_Navbar">
          <span>
                <Link to='/ListProducts' className="headerLink">All Products</Link>
            </span>

            <span>Book</span>
            <span>New Relase</span>
            <span>Gift Ideas</span>
            <span>Easy Coding</span>
            <span>Amazon Pay</span>
          </div>

         </div>
        {/* Navbar Bottom */}

        
      </nav>
    </>
  );
};

export default Header;
