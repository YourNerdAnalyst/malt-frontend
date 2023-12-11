import React, { useState } from 'react'
import './style/generate.css'
import { NavLink } from 'react-router-dom'
import Logo from '../../images/favicon.png'

const Generate = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isOpen1, setIsOpen1] = useState(false)
    const toggle = () => setIsOpen(!isOpen)
    const toggle1 = () => setIsOpen1(!isOpen1)
  return (
    <section className='generate animation-on' id='generate'>
        <div className="overlayy"></div>

      <div className='inner-cont'>
        <h1>Create Your Family Badge and Win Airtime from Maltina</h1>
        <div className='endpoints-cont'>
            <div className='how-to-win' onClick={toggle}>
                How To Win
            </div>
            {isOpen && (
                    <div className='dropdown-menu'>
                        <h5 className='animation-on'>1. Click on the register button below and enter your details</h5>
                        <h5 className='animation-on'>2. Proceed to generating your badge by Clicking on the Create Entry button</h5>
                        <h5 className='animation-on'>3. Tell us what makes you Happy.</h5>
                        <h5 className='animation-on'>4. Click on ADD Image</h5>
                        <h5 className='animation-on'>5. Click download to generate your customized happiness badge</h5>
                        <h5 className='animation-on'>6. Post your Happiness badge on Social Media using the hashtag #HappinessHappensWithMaltina & tag @maltina and win 500 Naira airtime.</h5>
                    </div>
                )}

            <div className='register'>
                    <NavLink to='/register'>
                <button>
                        Register
                </button>
                    </NavLink>
            </div>
            <div className='register'>
                    <NavLink to='/login'>
                <button>
                        Login
                </button>
                    </NavLink>
            </div>


            <div className='generate-badge' onClick={toggle1}>
                Generate Your Family Badge
            </div>
            {isOpen1 && (
                <div className='image-input-div'>
                    <div className='entry-img'>
                    
                <div className='frame-wave-topp'>
                    <div className='overla'></div>
                    <svg viewBox="0 0 500 200">
                      <path d="M 0 50 C 150 150 300 0 500 80 L 500 0 L 0 0" fill="#000000"></path>
                      <path d="M 0 50 C 150 150 330 -30 500 50 L 500 0 L 0 0" fill="#F6881F" opacity="6.8"></path>
                    <path d="M 0 50 C 215 150 250 0 500 100 L 500 0 L 0 0" fill="#F6881F" opacity="0.5"></path>
                    </svg>
                    <img src={Logo} alt='' className='logoneww' />
                </div>
              

              <iframe className='iframe-frame' id="frame" title="Preview" style={{ width: '100%', height: '500px' }} />
             

             <div className='textarea-divv'>
                <div className='text-innerr'>
                <p>What do you love about your family?: </p>
                <h6>My Squad Name: </h6>
                </div>
              </div>

           <div className='frame-wave-bottomm'>
              <div className='overlaa'></div>
              <svg viewBox="0 0 500 200" style={{ transform: 'scaleY(-1) scaleX(-1)'}}>
                <path d="M 0 50 C 150 150 300 0 500 80 L 500 0 L 0 0" fill="#000000"></path>
                <path d="M 0 50 C 150 150 330 -30 500 50 L 500 0 L 0 0" fill="#F6881F" opacity="0.8"></path>
                <path d="M 0 50 C 215 150 250 0 500 100 L 500 0 L 0 0" fill="#F6881F" opacity="0.5"></path>
              </svg>
            </div>

                    </div>

                    <div className='entry-button'>
                            <NavLink to='/entry'>
                        <button>
                                Create Entry
                        </button>
                            </NavLink>
                    </div>
                </div>
            )}

          {/* <div className='register'>
                    <NavLink to='/csr'>
                <button>
                        Maltina Happiness Kiosk
                </button>
                    </NavLink>
            </div> */}

        </div>
      </div>
    </section>
  )
}

export default Generate
