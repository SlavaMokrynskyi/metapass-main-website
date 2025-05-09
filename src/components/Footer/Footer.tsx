import React from 'react'
import XBtn from './TwitterBtn'
import TelegramBtn from './TelegramBtn'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <h6>METAPASS</h6>
        <p>About us</p>
        <p>Work with Us</p>
        <div className='btn-div'>
          <XBtn/>
          <TelegramBtn/>
        </div>
        <p>Terms of Use & Privacy Policy</p>
    </div>
  )
}
export default Footer
