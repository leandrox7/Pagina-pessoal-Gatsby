import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import Solucoes from "../components/Solucoes"
import Motivo from "../components/motivos"
import Opcoes from "../components/opcoes"
import Sobre from "../components/sobre"


const IndexPage = () => (
  <Layout >
      <SEO  />
      <Hero />
      <Motivo/>
      <Solucoes/>
      <Opcoes/>
      <Sobre/>
  </Layout>
)

export default IndexPage
