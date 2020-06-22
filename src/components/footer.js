import React from "react"
import styled from 'styled-components'
import foto from '../images/leandro.png'
import Container from '../components/container'

const Section = styled.section`
height:100px;
background-color: whitesmoke;
`
const Line = styled.div`
        content: '';
       
        width: 100%;
        height: 1px;
        background-image: linear-gradient(to right, #4527C2,#16DAE1,#663399);
    `


function footer() {

    return (  
        <Section>
<Container>
   
</Container>
        </Section>
      )
}
export default footer