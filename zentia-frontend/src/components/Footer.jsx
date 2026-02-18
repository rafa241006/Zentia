import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div>
            {/* --left section-- */}
            <div>
                <img src={assets.logo} alt=""/>

                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
            </div>
            
            {/* --mid section-- */}
            <div>
                <p>COMPANY</p>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                </ul>
                    
            </div>

            {/* --right section-- */}
            <div>
                <p>GET IN TOUCH</p>
                <ul>
                    <li>+94 074 3749</li>
                    <li>company@gmail.com</li>
                </ul>
                    
            </div>
        </div>

        <div>
            {/* --copyright text--- */}
            <hr />
            <p>Copyright 2026@ Zentia - All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer