import React from 'react'
import './style/footer.css'
import { FaSpotify, FaYoutube } from 'react-icons/fa'
import Owoluabi from '../../images/favicon.png'

const Footer = () => {
  return (
    <div className='footer-div'>
      <div className='footer-inner-div'>
        <div className='footer-social-icons'>
            <div>
                <FaSpotify color='white' fontSize='44px' />
            </div>
            <div>
                <FaYoutube color='white' fontSize='44px' />
            </div>
        </div>
        <div></div>
        <div className='footer-logo'>
        <img src={Owoluabi} alt='footer-logo' className='footer-logo' />
        </div>
      </div>
    </div>
  )
}

export default Footer
