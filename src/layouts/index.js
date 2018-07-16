import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import './index.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Fuve – Find your future vehicle' },
        { name: 'keywords', content: 'future-proof, future, cars, vehicles, electric, hydrogen, fuel cell, hybrid, ev, evs' },
      ]}
    />
    <Header 
      siteTitle={data.site.siteMetadata.title}
      backgroundImage={data.background.sizes}
    />
    
      {children()}
    
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
        desc
      }
    }
    background: imageSharp(id: { regex: "/bg.jpeg/" }) {
      sizes(
        maxWidth: 2000, 
        duotone: {
          highlight: "#0C3028",
          shadow: "#000000"
        },
        quality: 80
      ) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`