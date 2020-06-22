import React from "react"
import styled from 'styled-components'
import image1 from '../images/slide1.png'
import image2 from '../images/slide2.png'
import image3 from '../images/logo-grande.png'
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
  function componetDidMount(){
    
  }
    return (
      <div className="slide-container">
       
        <Slide {...properties}>
          <div className="each-slide">
          <Image src={image1}></Image>
          </div>
          <div className="each-slide">
          <Image src={image2}></Image>
          </div>
          <div className="each-slide">
          <Image src={image3}></Image>
          </div>
        </Slide>
      </div>
    )
}

const Section = styled.section`
width:80%;
margin-left:auto;
margin-right:auto;
`
const Image = styled.img`
width:500px;
height:auto;
display: block;
margin-left: auto;
margin-right: auto;
`
function slide(){

        return(
            <Section>
                <Image src={image1}></Image>
            </Section>
       
        )
    
}
  
export default Slideshow