import React from "react"
import styled from 'styled-components'
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
    vertical-align: top;
    
       /* Telefones em paisagem e abaixo */
@media (max-width: 480px) { 
    margin-bottom:50px;
    
 }
 `
const Strong = styled.strong`
  font-family: 'Segoe UI';
  font-style: black;
  font-size:40px ;  
  font-weight:800; 
  color:rebeccapurple;
  max-width:90vw;
   /* Telefones em paisagem e abaixo */
@media (max-width: 480px) { 
    font-size:20px;
    
 }
    
`
const P = styled.p`
margin-top:15px;
font-family: 'Segoe UI';
font-size: 18px;
    color: #666;
    margin-bottom: 12px;
    padding: 0 3px;
    text-align:justify;`
const Center = styled.div`
margin-left: auto;
margin-right: auto;
width: 100%;
text-align:center;
`



function opcoes() {

    return (

        <Section name='tecnologia'>

            <Container>
            <Center>
    <Strong>Soluçoes personalizadas para você</Strong>
</Center>

            <Ul>
                <Li>
                    <Strong>WEBSITES</Strong>
                    <P> Além de bonito e moderno, seu site deve funcionar como um cartão
                        de visita na Internet e divulgar seu negócio, 24 hs por dia,
                        7 dias por semana. </P>
                  
                </Li>

                <Li>
                    <Strong>WORDPRESS</Strong>
                    <P> O WordPress é o CMS mais usado no mundo, e por bons motivos.
                        Além de flexível e gratuito. Entenda por que essa é a melhor
                        opção para criar seu blog, pagina pessoal ou e-comerce, entre em contato.
                       </P>
                    
                </Li>

                <Li>
                    <Strong>SISTEMAS</Strong>
                    <P>Ter um sistema feito sobmedida para resolver os problemas
                         do seu negócio aumenta a produtividade e permite que 
                         você foque seus esforços no que realmente importa. 
                        
                    </P>
                   
                </Li>
            </Ul>
            </Container>
        </Section>

    )
}
export default opcoes