import React from "react"
import styled from 'styled-components'
import background from '../images/solucoes.jpg'

const Section = styled.section`
width: 100%;
max-width:1900px;
max-height:90vh;
margin-left: auto;
margin-right: auto;
`
const BoxLeft = styled.div`
width:50%;
height:90vh;
padding-left:10vw;
padding-top: 10vh;
display:inline-block;
vertical-align: top;

height:90vh;


 /* Telefones em paisagem e abaixo */
 @media (max-width: 480px) { 
   
   width:90%;
   margin-left:5%;
margin-right:5%;
  
}
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
       /* Telefones em paisagem e abaixo */
@media (max-width: 480px) { 
   
    display:none;
   
 }
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