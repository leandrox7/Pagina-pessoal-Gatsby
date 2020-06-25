import React from "react"

import  './slide.css'
import { Slide } from 'react-slideshow-image';
import {withGetScreen} from 'react-getscreen'
 
import Teste from '../components/teste'


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
          <Teste image='1'/>
          </div>
          <div className="each-slide">
          <Teste image='3'/>
          </div>
          <div className="each-slide">
        
          <Teste image='2'/>
     
          </div>
        </Slide>
      </div>
    )
}




  
export default Slideshow