import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'
import logo from '../images/LogoAzul.png'
import Container from '../components/container'

const Navbar = styled.header`
position:fixed;
background-color:white;
width:100%
`
const BoxL = styled.div`
display:inline-block;
width:20%;
background-color:none;
`
const BoxR = styled.div`
display:inline-block;
width:80%;
height: 123px;
vertical-align: top;
padding-top:50px;
padding-left:50px;
background-color:none;
`

const Text = styled.span`
  color: #707070;
  font-family: 'Segoe UI';
  font-style: black;
  font-size:20px ;  
  font-weight:400; 
  margin-right:94px;
  display:inline-block;
`
const Imagem = styled.img`
padding-top:20px;
display:inline-block;
`

const Header = ({ siteTitle }) => (
  <Navbar>
    <Container>

      <BoxL>
        <Imagem src={logo}></Imagem>
      </BoxL>
      <BoxR>
        <Text>Home</Text>
        <Text>Tecnologia</Text>
        <Text>Sobre</Text>
        <Text>Contato</Text>
      </BoxR>
    </Container>
  </Navbar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
