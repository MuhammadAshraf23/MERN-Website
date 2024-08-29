import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const spanStyle = {
  padding: '20px',
  background: '#efefef',
  color: '#000000',
};

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '200px',
  width:'100%',
};

const slideImages = [
  {
    url: 'https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/de6d1f5917591a14.png?q=20',
  },
  {
    url: 'https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/44fe68e438b997c9.jpeg?q=20',
    
  },
  {
    url: 'https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/7eafbb8481ddfeaf.jpg?q=20',
  },
  {
    url:'https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/20a160ef30776af8.jpeg?q=20'
  }
];

const SlideShow = () => {
  return (
    <div className="slide-container" style={{ width: '100%', margin: 'auto', overflow: 'hidden' }}>
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}>
            
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default SlideShow;
