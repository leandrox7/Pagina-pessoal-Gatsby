import React from "react"
import styled from 'styled-components'
import Foto from '../components/image-sobre'
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
    vertical-align: top;
    margin-bottom:40px;

    `
const Center = styled.div`

margin-left: auto;
margin-right: auto;
width: 100%;
text-align:center;
display:inline-block;
padding-bottom:80px;
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
  font-size:17px ;  

  padding-left: 5%;
  padding-right: 5%;
  text-align: left;
  text-align: justify;

  `
const Texto3 = styled.div`
  color: #707070;
  font-family: 'Segoe UI';
  font-style: black;
  font-size:20px ; 
  font-weight:400;

`

function sobre() {

    return (

        <Section name='sobre'>

            <Container>
                <Center>
                    <Foto />
                    <div style={{ marginTop: "20px" }}>
                        <Texto3>
                            Leandro Rodrigues
                        </Texto3>

                        <Texto3>
                            Estudante de Ciência da Computação - UFRGS
                        </Texto3>
                    </div>
                </Center>

                <Ul>
                    <Li>
                        <Texto1>GRADUAÇÃO</Texto1>
                        <Texto2>O curso de Ciência da Computação objetiva formar profissionais
                        qualificados para planejar, projetar, desenvolver, implantar e
                        gerenciar sistemas de computação, abrangendo desde soluções simples
                            com computadores pessoais até redes corporativas complexas.</Texto2>

                    </Li>

                    <Li>
                        <Texto1>EXPERIÊNCIA PROFISSIONAL</Texto1>
                        <Texto2> <b>Decision IT -</b> Desenvolvimento e manutenção de sistemas em C# utilizando ASP.NET,
                             criação e manutenção de consultas para Oracle e SQL Server.
                             <br /><b>IDE JR -</b> Desenvolvimento de websites utilizando Node.js, PHP e Wordpress. </Texto2>

                    </Li>

                    <Li>
                        <Texto1>TECNOLOGIAS</Texto1>
                        <Texto2> Framework .NET e .NET Core, React.js e PHP</Texto2>

                    </Li>
                </Ul>
            </Container>
        </Section>

    )
}
export default sobre