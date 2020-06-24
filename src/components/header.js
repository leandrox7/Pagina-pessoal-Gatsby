import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'
import Logo from '../components/image-mini-logo'
import Container from '../components/container'


const Navbar = styled.header`
position:fixed;
background-color:white;
width:100%;
z-index: 20;
`
const Line = styled.div`
        content: '';
        
        margin-left:auto;
        margin-right:auto;
        width: 100%;
        height: 1px;
        background-image: linear-gradient(to right, #4527C2,#16DAE1,#663399);
    `
const BoxL = styled.div`
display:inline-block;
width:20%;
background-color:none;
padding-top: 20px;
`
const BoxR = styled.div`
scroll-behavior: smooth;
display:inline-block;
width:80%;
height: 123px;
vertical-align: top;
padding-top:50px;
padding-left:50px;
background-color:none;
`
const Text = styled.div`
text-decoration:none;
  color: #707070;
  font-family: 'Segoe UI';
  font-style: black;
  font-size:20px ;  
  font-weight:400; 
  margin-right:94px;
  display:inline-block;
`


const Header = ({ siteTitle }) => (
  <Navbar>
    <Container>

      <BoxL>
        <Logo/>
      </BoxL>
      <BoxR>
      <Link to="/"><Text >Home</Text></Link>
      <Link to="/#tecnologia"><Text >Tecnologia</Text></Link>
      <Link to="/#sobre"><Text >Sobre</Text></Link>
       <Link to="/contato"><Text>Contato</Text></Link>
      </BoxR>
     
    </Container>
    <Line/>
  </Navbar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
