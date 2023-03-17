import React from 'react'
import footerlogo from './Stylesheets/footerlogo.png'
const Footer = () => {
  return (
    <div>
        <div class="textcenter">
            <div id="first">
                <img src={footerlogo} alt="" />
            </div>
            <div id="sec">
                <h3><a href="/">Featured by</a></h3>
                <h3><a href="">Content</a></h3>
                <h3><a href="">Contact us</a></h3>
                <h3 id='h3'><a href="">Search for Movies, Tv Shows and more details.</a></h3>
            </div>
        </div>
    </div>
  )
}

export default Footer;