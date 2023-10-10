import React from 'react'
import './Footer.css'
import {BiUpArrow} from "react-icons/bi";

const Footer = () => {
    const Scto=()=>{
        window.scrollTo(0,0)
    }
  return (
    <>
       <div className="Footer">
        <a onClick={Scto}>
        <div className="FooterBottomToTop">
          <BiUpArrow/>
        </div>
        </a>

        <div className="FooterVerRow">
            <div className="FooterVerCol">
                <div className="FooterVerColHead">Get To Know More</div>
                <ul>
                    <li>About</li>
                    <li>Service</li>
                    <li>Amazon Carrer</li>
                    <li>Gifts Products</li>
                    <li>New Products</li>
                    <li></li>
                </ul>
            </div>

            {/* next col */}
            <div className="FooterVerCol">
                <div className="FooterVerColHead">Connect to us</div>
                <ul>
                    <li>Meta</li>
                    <li>Instagram</li>
                    <li>Twitter</li>
                    <li>YouTube</li>
                  
                </ul>
            </div>


            <div className="FooterVerCol">
                <div className="FooterVerColHead">Make Money</div>
                <ul>
                    <li>Amazon Pay</li>
                    <li>Become An Affiliate</li>
                    <li>Sell On Orfee</li>
                    <li>Tradenin</li>
                  
                </ul>
            </div>


        </div>
        <hr />
        <div className="FooterLast">
            <span className="FooterMess">
                Amazon Clone &copy ; Happy life journey 
            </span>
        </div>
       </div>
    </>
  )
}

export default Footer

