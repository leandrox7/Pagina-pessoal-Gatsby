import React from "react"
import styled from 'styled-components'
import Container from '../components/container'
import Slide from '../components/slide'

const Section = styled.section`
height:auto;
padding-bottom:50px;
padding-top:150px;

`

const Box = styled.div`
    min-height:450px;
 
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
                    <Box>
                        { teste()}
                    </Box>
                       
                    
               
           
                </Container>
        </Section>
    
    )

}

export default Hero