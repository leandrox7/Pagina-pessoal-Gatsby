import React from "react"
import styled from 'styled-components'
import foto from '../images/leandro.png'
import logo from '../images/leandro-logo.png'
import Container from '../components/container'
import Slide from '../components/slide'

const Section = styled.section`
height:auto;
padding-bottom:50px;
padding-top:150px;

`
const BoxRigth = styled.div`
    
    text-align: center;
    margin-right: 0vw;

    width: 40%;
    background-color:none;
    display:inline-block;
    vertical-align: top;
    
`
const BoxLeft = styled.div`
    
    height: auto;
    width: 60%;
    background-color: none;
    display:inline-block;
    

`
const ButtonRoxo = styled.button`
 width:70px;
    height:20px;
    font-family: 'Segoe UI';
    font-style:'Semibold';
    font-size:8px;
    color:white;
    box-shadow: 10px 8px 6px#756D6D;
    background-color:#5853EF;
    font-weight:600;
    border-width: 0px;
    border: none;
`
const ButtonCinza = styled.button`
 width:70px;
    height:20px;
    font-family: 'Segoe UI';
    font-style:'Semibold';
    font-size:10px;
    color:#6B6B71;
    box-shadow: 10px 8px 6px#756D6D;
    font-weight:600;
    border-width: 0px;
    border: none;
`
const Imagem = styled.img`
    margin-top:10vh;
    border-radius: 50%;
    width:200px;
    height:200px;
@media (max-width: 767px) {
  
}
@media (min-width: 1200px) and (max-width:1500px) {
    margin-top:10vh;
    border-radius: 50%;
    width:100px;
    height:100px;
}`
const Title = styled.h1`
margin-top: 10vh;
color: #707070;
color:rebeccapurple;
font-family: 'Segoe UI';
font-style: black;
font-size:3rem ;
font-weight:900;
max-width: 600px;
display: block;
line-height:1.1;
`
const Texto2 = styled.div`
    margin-top: 10vh;
    color: #707070;
    font-family: 'Segoe UI';
    font-style: black;
    font-size:1rem ; 
    max-width: 600px;
  `
const Texto3 = styled.div`
    font-family: 'Segoe UI';
    font-style:'Regular';
    font-size:1.6rem;
    color:#C5C3C3;
    margin-top:0px;
`
const Texto4 = styled.div`
    font-family: 'Segoe UI';
    font-style:'Regular';
    font-size:1.2rem;
    color:#C5C3C3;
    margin-left: 0vw;
    margin-top:10px;
    max-width: 300vw;
`
const Logo = styled.img`
    margin-top:15vh;
    
`
function teste(){
    if (typeof window !== `undefined`)
                         {
                           return <Slide></Slide>
                         }
                        
}


function Hero() {

    return (
       
            <Section name='home'>
                 <Container>
                    
                       { teste()}
                    
               
           
                </Container>
        </Section>
    
    )

}

export default Hero