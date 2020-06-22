import React from "react"
import styled from 'styled-components'
import background from '../images/solucoes.jpg'
import Container from '../components/container'

import logo1 from '../images/mysql.jpg'
import logo2 from '../images/nodejs_logo.png'
import logo3 from '../images/react.png'
import logo4 from '../images/c#.png'
import logo5 from '../images/logo.png'

const Section = styled.section`
width: 100%;
max-width:1900px;
max-height:90vh;
margin-left: auto;
margin-right: auto;


   `
const Filtro = styled.div`

    background-color: rgba(88, 83, 239, 0.5);
    height: 105vh;
    max-width: 100vw;
    `
const BoxLeft = styled.div`
width:50%;
height:90vh;
padding-left:10vw;
padding-top: 10vh;
display:inline-block;
vertical-align: top;
`
const BoxRight = styled.div`
    width:50%;
    height:90vh;
    background:url('${background}');
    background-position: center;
    background-repeat: no-repeat; 
    background-size: cover; 
    max-width:1000px;
    max-height:1000px;
    display:inline-block;
    vertical-align: top;
     `
const Texto1 = styled.div` 
color:rebeccapurple;
font-family: 'Segoe UI';
font-size:3.0rem ;
font-weight:900;

line-height:1.1;
`
const Texto2 = styled.div`
    margin-top: 50px;
    color: #444;
    font-family: 'Segoe UI';
    font-style: black;
    font-size:1.2rem;   
    line-height:1.1;
    max-width: 90%;`
const Texto3 = styled.div`
   color:whitesmoke;
    font-family: 'Segoe UI';
    font-style: black;
    font-size:1.5rem ;   
    max-width: 35vw;`
const BoxUl = styled.div`
 padding-top: 10px;
`
const Ul = styled.ul`
list-style-type: circle;
color: whitesmoke;
`
const Li = styled.li`
 margin-top: 20px;
`

const Logo = styled.img`
width:130px;
height:130px;
`
function Solucoes() {
    return (
        <Section>


            <BoxLeft>
                <Texto1>
                    VOCÊ PRECISA DE UM SITE?
                     </Texto1>

                <Texto2>
                    Não estar na internet é estar um passo atrás dos seus concorrentes.
                    Em um mundo cada vez mais conectado é fundamental poder ser encontrado
                    de forma facíl e rápida pelo seu publico alvo.
                    <br /><br /><br />
                   Trabalho para potencializar seus negócios de forma rápida e financeiramente viável.
                   Tudo isso sem abrir mão da qualidade e das melhores tecnoligias disponíveis no mercado.
                            
                     </Texto2>

                
            </BoxLeft>

            <BoxRight>






            </BoxRight>

        </Section>
    )
}

export default Solucoes