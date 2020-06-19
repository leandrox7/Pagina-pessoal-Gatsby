import React from "react"
import styled from 'styled-components'
import foto from '../images/leandro.png'
import Container from '../components/container'

const Section = styled.section`
height:auto;
padding-top:100px;

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
    vertical-align: top;
`
const Li = styled.li`

display: inline-block;
    max-width: 275px;
    vertical-align: top;`
const Strong = styled.strong`
  font-family: 'Segoe UI';
  font-style: black;
  font-size:40px ;  
  font-weight:800; 
    color:rebeccapurple;
    
`
const P = styled.p`
margin-top:15px;
font-family: 'Segoe UI';
font-size: 18px;
    color: #666;
    margin-bottom: 12px;
    padding: 0 3px;
    text-align:left;`
const Span = styled.span`
    font-size: 14px;
    color: #999;`
const Center = styled.div`
margin-left: auto;
margin-right: auto;
width: 1000px;
text-align:center;
`



function opcoes() {

    return (

        <Section>

            <Container>
<Center>
    <Strong></Strong>
</Center>

            <Ul>
                <Li>
                    <Strong>WEBSITES</Strong>
                    <P> Além de bonito e moderno, seu site deve funcionar como um cartão
                        de visita na Internet e divulgar seu negócio, 24 hs por dia,
                        7 dias por semana. A idéia agência digital é especializada em
                        webdesign e criação de site em Porto Alegre. </P>
                    <Span>Fonte: IBGE, 2018</Span>
                </Li>

                <Li>
                    <Strong>WORDPRESS</Strong>
                    <P> O WordPress é o CMS mais usado no mundo, e por bons motivos.
                        Além de flexível e gratuito, ele conta com várias outras
                        vantagens em relação aos demais. Entenda por que essa
                        é a melhor opção para criar seu blog com nosso tutorial
                       </P>
                    <Span>Fonte: Boston Consulting Group (BCG), 2018</Span>
                </Li>

                <Li>
                    <Strong>SISTEMAS</Strong>
                    <P> Os sistemas de gestão podem organizar todas as tarefas que
                        devem ser executadas por você e por todas as pessoas que
                        trabalham na sua empresa. Por essa razão, ele é visto como
                        um otimizador de processos e de tempo de trabalho.</P>
                    <Span>Fonte: E-commerce Brasil, 2017</Span>
                </Li>
            </Ul>
            </Container>
        </Section>

    )
}
export default opcoes