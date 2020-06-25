import React from "react"
import styled from 'styled-components'
import Container from '../components/container'
import Github from '../components/image-Github'
import Whatsapp from '../components/image-Whatsapp'
import Linkedin from '../components/image-Linkedin'

const Section = styled.footer`
background-color: #707070;
`
const Center = styled.div`
margin-left:auto;
margin-right:auto;
width:250px;
height:18vh;
min-height:80px;
text-align:center;
align-items: center;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;

 /* Telefones em paisagem e abaixo */
 @media (max-width: 480px) { 
   
  width:100%;
  height:80px;
  
}
`
const A = styled.a`
margin-right:10px;`
function footer() {

    return (  
        <Section>
          
                <Container> 
                  <Center>
                    <A href='https://www.linkedin.com/in/leandro-rodrigues-b3014b162/' target="_blank"><Linkedin/></A>
                    <A href='https://github.com/leandrox7' target="_blank"><Github/></A>
                    <A href='https://api.whatsapp.com/send?phone=5551992797381&text=Olá, visitei seu site e gostaria de falar sobre um projeto' target="_blank"><Whatsapp/></A>
                  </Center>
                </Container>
        </Section>
      )
}
export default footer