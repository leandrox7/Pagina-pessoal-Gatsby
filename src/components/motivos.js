import React from "react"
import styled from 'styled-components'

const Section = styled.section`
padding-bottom:100px;

`
const Center = styled.div`
    margin-left: auto;
    margin-right: auto;
    width: 600px;
    text-align:center;
    `
const Title = styled.h2`

padding-bottom: 20px;
font-weight: 100;
line-height: 1.1;

color: #444;
    ::after{
        content: '';
        position: absolute;
        left: 50%;
        margin-top: 55px;
        width: 300px;
        height: 1px;
        margin-left: -150px;
        background: rebeccapurple;
    };

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
font-size: 45px;
    font-weight: 400;
    line-height: 1.42857;
    color:rebeccapurple;
`
const P = styled.p`
font-size: 18px;
    color: #666;
    margin-bottom: 12px;
    padding: 0 3px;`
const Span = styled.span`
    font-size: 14px;
    color: #999;`

function Motivos() {
    return (

     <Section>
            <Center><Title>Motivos para fazer um site agora mesmo</Title></Center>
            

            <Ul>
                <Li>
                    <Strong>116 milhões</Strong>
                    <P>de brasileiros acessam a internet</P>
                    <Span>Fonte: IBGE, 2018</Span>
                </Li>

                <Li>
                    <Strong>90%</Strong>
                    <P>dos consumidores pesquisam na internet antes de fechar negócio</P>
                    <Span>Fonte: Boston Consulting Group (BCG), 2018</Span>
                </Li>

                <Li>
                    <Strong>13 milhões</Strong>
                    <P>das micro e pequenas empresas brasileiras já possuem site</P>
                    <Span>Fonte: E-commerce Brasil, 2017</Span>
                </Li>
            </Ul>
        </Section>

       
    )
}
export default Motivos;