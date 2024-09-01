import React from 'react';
import Carousel from "react-multi-carousel";
import { bannerData } from '../../constants/data';
import { styled } from '@mui/material';
import 'react-multi-carousel/lib/styles.css';
export default function Banner() {

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1 // Show one item at a time
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1 // Show one item at a time
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1 // Show one item at a time
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1 // Show one item at a time
    }
  };

  const Img=styled("img")({
    width:'100%',
    height:'280px',
  })
  return (
    <Carousel 
    showDots={true}
    responsive={responsive} 
    infinite={true} 
    autoPlay={true}
    autoPlaySpeed={3000}
    keyBoardControl={true} 
    transitionDuration={500}>
      {bannerData.map(product => (
         <Img src={product.url} alt="" key={product.url} />
      ))}
    </Carousel>
  );
}
