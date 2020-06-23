/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const Layout = ({ children }) => {
  

  return (
    <>
      <Header siteTitle="LEANDRO RODRIGUES" />
      <div
        style={{
          margin: `0 auto`,
          
          padding: `0 0rem 0rem`,
        }}
      >
        <main>{children}</main>
        <Footer/>
         
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
