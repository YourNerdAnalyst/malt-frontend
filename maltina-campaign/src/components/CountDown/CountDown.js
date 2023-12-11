import React, { useEffect, useState, useMemo } from 'react';
import './style/countdown.css';


 const CountDown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
   const targetDate = useMemo(() => new Date('2023-07-02T00:00:00'), []);

   useEffect(() => {
    let interval; // Declare the interval variable

    const now = new Date().getTime();
    const distance = targetDate.getTime() - now;

    if (distance <= 0) {
      // Target date has completed, stop the countdown
      clearInterval(interval);
      setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      return;
    }

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance <= 0) {
        // Target date has completed, stop the countdown
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);




   return (
    <div className='count-container'>
      <div className='count-left'>
        <h1>SHARE HAPPINESS COUNTDOWN:</h1>
        <h3>{targetDate.toString()}</h3>
      </div>
       <div className='count-right'>
        <div className='firstrow'>
          <div>
            <h1>{timeLeft.days}</h1>
            <h6>Days</h6>
          </div>
          <div>
            <h1>{timeLeft.hours}</h1>
            <h6>Hours</h6>
          </div>
        </div>
         <div className='secondrow'>
          <div>
            <h1>{timeLeft.minutes}</h1>
            <h6>Minutes</h6>
          </div>
          <div>
            <h1>{timeLeft.seconds}</h1>
            <h6>Seconds</h6>
          </div>
        </div>
      </div>
    </div>
  );
};
 export default CountDown;