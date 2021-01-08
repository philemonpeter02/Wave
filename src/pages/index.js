import React from "react"
import CardSection from "../components/CardSection/CardSection"
import HeroSection from "../components/Hero/Hero"
import Layout from "../components/layout"
import SEO from "../components/seo"
import WaveSection from "../components/WaveSection/WaveSection"
import CellSection from "../components/Cell/CellSection"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    
    <HeroSection />
    <CardSection />
    <WaveSection image={require('../images/background2.jpg')}
                 logo={require('../images/logo-react.png')}
                 title="React for Designers"
                 text="Learn how to build a modern site using React and the most efficient libraries to get your site/product online. Get familiar with components,
                       Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with Netlify." />
   <CellSection />
  </Layout>
  
)

export default IndexPage
