import React from 'react'
import './styles/home.css'
import HomeSection from '../components/HomeSection/HomeSection'
import Owoluabi from '../components/Owoluabi/Owoluabi'
import Generate from '../components/Generate/Generate'
// import CountDown from '../components/CountDown/CountDown'


const Home = () => {
  return (
    <div className='home-container'>
      <HomeSection />
      <Owoluabi />
      <Generate />
      
      
    
    </div>
  )
}

export default Home
