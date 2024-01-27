
import React, { useState, useEffect } from 'react';
import img1 from './p.jpg';
import img2 from './pp.jpg';
import img3 from './ppp.jpg';
import { Link } from 'react-router-dom';

const Gallery = () => {
  const texts = [
    "High interest on a savings account: Depositing money in a savings account may result in a higher interest rate",
    "Access to advanced financial products: banks can offer access to investments, pension funds",
    "Professional customer service: Most banks offer professional customer service that can assist you with issues",
    // Add more text entries here
  ];
  const imageUrls = [img1, img2, img3];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentTextIndex((prevIndex) => (prevIndex === 0 ? texts.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentTextIndex((prevIndex) => (prevIndex === texts.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNextClick();
    }, 10000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentTextIndex]);

  return (
    <div className="gallery">
      <button className="prev-button" onClick={handlePrevClick}>
        <span>◄</span>
      </button>
      <div className="text-container">
        <div style={{color:'white',fontSize:'30px'}} className="text">{texts[currentTextIndex]}</div>
        <img style={{ width: '1030px', height: '320px', position: 'relative', top: '160px' }} src={imageUrls[currentTextIndex]} alt="Description of the image" />
      </div>
      <button className="next-button" onClick={handleNextClick}>
        <span>►</span>
      </button>
    </div>
  );
};

export default function Home() {
  return (
    <div>
      <h1 style={{ color: 'lightskyblue', fontSize: '50px' }}>Welcome to Sv - Bank Banking pays off</h1>
     <Link to={'/SigninUser'}> <button className='btn1' >Sign In</button></Link>
     <Link to={'/register'}><button className='btn1' >Create Account</button></Link>
      <br />
      <br />
      <Gallery />
    </div>
  );
}