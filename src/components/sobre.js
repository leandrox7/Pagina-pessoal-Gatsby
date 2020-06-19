import React from "react"
import styled from 'styled-components'
import foto from '../images/leandro.png'
import Container from '../components/container'

const Section = styled.section`
height:auto;
padding-top:100px;
padding-bottom:100px;
`
const Ul = styled.ul`
    margin: 0 auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    align-items: center;
    max-width: 1120px;
    padding: 50px 0 0;
    text-align: center;
`
const Li = styled.li`

display: inline-block;
    max-width: 275px;
    vertical-align: top;`
const Strong = styled.strong`
  font-family: 'Segoe UI';
  font-style: black;
  font-size:20px ;
  font-weight:900;
  max-width: 500px;
  line-height: 1.42857;
  color:rebeccapurple;
  vertical-align: top;
    
`
const P = styled.p`
font-family: 'Segoe UI';
  font-style: medium;
  font-size:12px ;
    color: #666;
    margin-bottom: 12px;
    padding: 0 3px;
    text-align:justify;
    line-height: 1.6;`
const Span = styled.span`
    font-size: 14px;
    color: #999;`
const Center = styled.div`
margin-left: auto;
margin-right: auto;
width: 100%;
text-align:center;
display:inline-block;
`
const Imagem = styled.img`
    margin-top:10vh;
    border-radius: 50%;
    width:200px;
    height:200px;
`
const Texto1 = styled.div`
color: #707070;
  font-family: 'Segoe UI';
  font-style: black;
  font-size:20px ;  
  font-weight:800; 
   `
const Texto2 = styled.div`
margin-top: 20px;
  color: #707070;
  font-family: 'Segoe UI';
  font-style: black;
  font-size:16px ;  
 
  padding-left: 5%;
  padding-right: 5%;
  text-align: left;`
const Texto3 = styled.div`
  margin-top: 10vh;
  color: #707070;
  margin-left: 10vw;
  font-family: 'Segoe UI';
  font-style: black;
  font-size:10px ;
  font-weight:900;
  max-width: 500px;`


function sobre() {

    return (

        <Section>

            <Container>
<Center>
<Imagem src={foto} alt="Fotografia do desenvolvedor" />

<div>
    Leandro Rodrigues
</div>

<div>
    Estudante de Ciência da Computação - UFRGS
</div>
</Center>

            <Ul>
                <Li>
                    <Texto1>GRADUAÇÃO</Texto1>
                    <Texto2> As Principais Soluções Empresariais, com as tecnologias
                        mais sólidas da atualidade. seu sistema sempre acessível
                        nas plataformas web e mobile.</Texto2>
                   
                </Li>

                <Li>
                    <Texto1>EXPERIÊNCIA PROFISSIONAL</Texto1>
                    <Texto2> Lorem Ipsum É Simplesmente Uma Simulação De Texto
                        Da Indústria Tipográfica E De Impressos, E Vem Sendo
                        Utilizado Desde O Século XVI, Quando Um Impressor
                        Desconhecido Pegou Uma Bandeja De Tipos.</Texto2>
                    
                </Li>

                <Li>
                    <Texto1>TECNOLOGIAS</Texto1>
                    <Texto2> Lorem Ipsum É Simplesmente Uma Simulação De Texto
                        Da Indústria Tipográfica E De Impressos, E Vem Sendo
                        Utilizado Desde O Século XVI, Quando Um Impressor
                        Desconhecido Pegou Uma Bandeja De Tipos.</Texto2>
                 
                </Li>
            </Ul>
            </Container>
        </Section>

    )
}
export default sobre