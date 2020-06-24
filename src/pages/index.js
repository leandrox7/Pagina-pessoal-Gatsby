import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import Solucoes from "../components/Solucoes"
import Motivo from "../components/motivos"
import Opcoes from "../components/opcoes"
import Footer from "../components/footer"
import Sobre from "../components/sobre"


const IndexPage = () => (
  <Layout >
    <SEO  />
    <Hero />
    <Motivo/>
    <Solucoes/>
    <Opcoes/>
    <Sobre/>
    <Footer/>
   
  </Layout>
)

export default IndexPage
