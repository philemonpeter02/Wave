import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "./layout.css"
import { Helmet } from "react-helmet"
import Footer from "./Footer/Footer.js"
import Navbar from "./Navbar/index.js"
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      
        allContentfulLink(sort: {fields: [createdAt], order: ASC} ){
          edges{
            node{
              title
              url
              createdAt
            }
          }
        }
      }
  `)
  
  
  return (
    <>
    <Helmet
  title={data.site.siteMetadata.title}
  meta={[
    { name: 'description', content: data.site.siteMetadata.description },
    { name: 'keywords', content: data.site.siteMetadata.keywords },
  ]}
/>
    <Navbar />
        <main>{children} </main>
    <Footer data={data} >
      Designed And Developed By Philemon Peter.<br /><a href="mailto:philemon.peter02@gmail.com" >Email us </a>to ask anything. © 2021.
    </Footer>
        
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
