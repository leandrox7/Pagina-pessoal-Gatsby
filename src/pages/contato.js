import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/footer"
import styled from 'styled-components'
import Container from '../components/container'
const axios = require('axios');

const color = '#f2f2f2';
const Box = styled.div`
padding-top:150px;
margin-left:auto;
margin-right:auto;
background-color:none;
width:500px;
`
const Form = styled.form`
padding-top:40px;
border: 2px solid ${color};
padding-left: 40px;
padding-right: 40px;
`
const Label = styled.label`
color: #707070;
font-family: 'Segoe UI';
font-style: black;
font-size:1rem ;
font-weight:400;
line-height:3.1;
vertical-align:middle;


`
const TextArea= styled.textarea`
width:415px;
margin-top:10px;`
const Input = styled.input`
margin-left:auto;
float: right;
width:300px;
padding: 12px 20px;
box-sizing: border-box;
border: none;
border-bottom: 2px solid ${color};
font-family: 'Segoe UI';
`
const Line = styled.div`
display:block;
width:100%;
margin-top:10px;
height:60px;
background-color:none;
text-align:left;
`
const Button = styled.button`
width:100%;
height:50px;
background-color:#663399;
color:white;
font-family: 'Segoe UI';
font-style: black;
font-size:1.3rem ;
font-weight:700;
line-height:1.1;
border-style:none;
border-radius:3px;
`






class ContatoPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      email: '',
      assunto: '',
      mensagem: '',
    };
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }
  handleSubmit = event => {
    event.preventDefault();
    
    axios.post('https://masterapi7.azurewebsites.net/api/leandroContatoes',  {
        nome: this.state.nome, email: this.state.email, assunto: this.state.assunto, mensagem:this.state.mensagem})
      .then(function (response) {
        console.log(response);
        alert('deu bom');
      })
      .catch(function (error) {
        console.log(error);
        alert('deu ruim');
      });
  }

  render(){
      return(<Layout >
        <SEO title="Leandro Rodrigues | Contato" />
        <Container>
            <Box>

                <Form method="post" onSubmit={this.handleSubmit}>
                    <Line>
                        <Label> Nome</Label>
                        <Input type="text" name="nome" id="nome" placeholder="José Carlos" onChange={this.myChangeHandler}/></Line>
                    <Line>
                        <Label> Email</Label>
                        <Input type="email" name="email" id="email" placeholder="seu-email@mail.com" onChange={this.myChangeHandler}/>
                    </Line>

                    <Line> 
                        <Label>Assunto</Label>
                        <Input type="text" name="assunto" id="assunto" placeholder="Selecione um assunto..." onChange={this.myChangeHandler} />
                    </Line>

                    <Line>
                        <Label> Mensagem</Label>
                        <TextArea name="mensagem" id="mensagem" rows="2" placeholder="Escreva sua mensagem aqui" onChange={this.myChangeHandler} />
                    </Line>
                    <Line>

                    </Line>
                    <Button type="submit">Enviar</Button>
                    <Line>

                    </Line>
                   
                </Form>
            </Box>
        </Container>

        <Footer />
    </Layout>)
  }
}


export default ContatoPage
