import React, { useState } from 'react';

const Imageslider = ({ Images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextBtn = () => {
    setCurrentIndex((index) => (index === Images.length - 1 ? 0 : index + 1));
  };

  const prevBtn = () => {
    setCurrentIndex((index) => (index === 0 ? Images.length - 1 : index - 1));
  };

  return (
    <div>
        <div className='wrapper'>
        <button onClick={prevBtn}>Prev</button>
      <img className='imagebox' src={Images[currentIndex]} alt="slider" />
      <button onClick={nextBtn}>Next</button>
        </div>
      
    </div>
  );
};

export default Imageslider;

