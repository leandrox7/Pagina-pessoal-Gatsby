import React from "react"
import styled from 'styled-components'
import Image1 from '../components/image-slide1'
import Image2 from '../components/image-slide2'
import Image3 from '../components/image-slide3'
import  './slide.css'
import { Slide } from 'react-slideshow-image';

 
const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  pauseOnHover: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}
 
const Slideshow = () => {
  
    return (
      <div className="slide-container">
       
       <Slide {...properties}>
          <div className="each-slide">
          < Image1 />
          </div>
          <div className="each-slide">
          <Image2 />
          </div>
          <div className="each-slide">
          <Image3 />
          </div>
        </Slide>
      </div>
    )
}




  
export default Slideshow