import React from 'react'
import './style/homesection.css'
// import Slide1 from '../../images/newimage/THH Image 01.png'
// import Slide2 from '../../images/newimage/THH Image 02.jpg'
// import Slide3 from '../../images/newimage/THH Image 03.jpg'
// import Slide4 from '../../images/newimage/THH Image 04.jpg'
// import Slide5 from '../../images/newimage/THH Image 05.jpg'
// import Slide6 from '../../images/newimage/THH Image 06.jpg'
// import Slide7 from '../../images/newimage/THH Image 07.jpg'
// import Slide8 from '../../images/newimage/THH Image 08.jpg'
// import Slide9 from '../../images/newimage/THH Image 09.jpg'
import Owoluabi from '../../images/newimage/favicon.png'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/bundle";
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
// import CountDown from '../CountDown/CountDown'

SwiperCore.use([Autoplay]);


const HomeSection = () => {
  return (
    <div className='section-container'>
     <div className='swiper-div'>
        <Swiper
         slidesPerView={1}
         spaceBetween={0}
         speed={10000}
         loop={true}
         autoplay={{
           delay: 9500,
           disableOnInteraction: false,
         }}
        >
           <SwiperSlide>
            <div className='swiper-img'>
            <div className='dark-lay'></div>
               <div className='swiper-inner-img target-1'>
               {/* <img src={Slide1} alt='slide1' className='img-target' /> */}
               </div>
            </div>
           </SwiperSlide>
           <SwiperSlide>
            <div className='swiper-img'>
            <div className='dark-lay'></div>
               <div className='swiper-inner-img target-2'>
               {/* <img src={Slide2} alt='slide2' className='img-target'  /> */}
               </div>
            </div>
           </SwiperSlide>
           <SwiperSlide>
            <div className='swiper-img'>
            <div className='dark-lay'></div>
               <div className='swiper-inner-img target-3'>
               {/* <img src={Slide3} alt='slide2' className='img-target'  /> */}
               </div>
            </div>
           </SwiperSlide>
           <SwiperSlide>
            <div className='swiper-img'>
            <div className='dark-lay'></div>
               <div className='swiper-inner-img target-4'>
               {/* <img src={Slide4} alt='slide2' className='img-target'  /> */}
               </div>
            </div>
           </SwiperSlide>
           <SwiperSlide>
            <div className='swiper-img'>
            <div className='dark-lay'></div>
               <div className='swiper-inner-img target-5'>
               {/* <img src={Slide5} alt='slide2' className='img-target'  /> */}
               </div>
            </div>
           </SwiperSlide>
           <SwiperSlide>
            <div className='swiper-img'>
            <div className='dark-lay'></div>
               <div className='swiper-inner-img target-6'>
               {/* <img src={Slide6} alt='slide2' className='img-target'  /> */}
               </div>
            </div>
           </SwiperSlide>
           <SwiperSlide>
            <div className='swiper-img'>
            <div className='dark-lay'></div>
               <div className='swiper-inner-img target-7'>
               {/* <img src={Slide7} alt='slide2' className='img-target'  /> */}
               </div>
            </div>
           </SwiperSlide>
           <SwiperSlide>
            <div className='swiper-img'>
            <div className='dark-lay'></div>
               <div className='swiper-inner-img target-8'>
               {/* <img src={Slide8} alt='slide2' className='img-target'  /> */}
               </div>
            </div>
           </SwiperSlide>
           <SwiperSlide>
            <div className='swiper-img'>
            <div className='dark-lay'></div>
               <div className='swiper-inner-img target-9'>
               {/* <img src={Slide9} alt='slide2' className='img-target'  /> */}
               </div>
            </div>
           </SwiperSlide>
        </Swiper>
     </div>

     <div className='bottom-logo-div'>
         <img src={Owoluabi} alt='bottom-logo' className='bottom-logo' />
     </div>

     <div className='social-icons'>
        <ul>
         <li>
            <a
            href='https://www.facebook.com/MaltinaNigeria'
            target='_blank'
            rel="noreferrer"
            >
               <FaFacebook color='#e89925' fontSize='38px' />
            </a>
         </li>
         <li>
            <a
            href='https://www.instagram.com/maltina/'
            target='_blank'
            rel="noreferrer"
            >
               <FaInstagram color='#e89925' fontSize='38px' />
            </a>
         </li>
         <li>
            <a
            href='https://twitter.com/Maltina'
            target='_blank'
            rel="noreferrer"
            >
               <FaTwitter color='#e89925' fontSize='38px' />
            </a>
         </li>
        </ul>
     </div>

         {/* <div className='count-div'>
         <CountDown />
         </div> */}
    </div>
  )
}

export default HomeSection
