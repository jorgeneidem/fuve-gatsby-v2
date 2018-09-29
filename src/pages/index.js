import React from 'react'
import PostListing from '../components/VehiclePlug'

const IndexPage = ({data}) => (
  <div style={{
    margin: '0 auto',
    padding: '0px 1rem 1.45rem',
    paddingTop: 0,
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gridGap: 30,
    gridRowGap: 33,
    maxWidth: 1280
  }}>
    {data.allMarkdownRemark.edges.map(({node}) => {
      return <PostListing key={node.id} post={node} />
    })}
  </div>
);

export default IndexPage

export const query = graphql`
  query SiteMeta {
    site {
      siteMetadata {
        title
        desc
      }
    }
      allMarkdownRemark(
        sort: { fields: [frontmatter___availability], order: DESC }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              date(formatString: "MMMM DD YYYY")
              availability
              cover_image {
                childImageSharp {
                  sizes(maxWidth: 940) {
                    srcSet
                  }
                }
              }
            }
            fields {
              slug
            }
            html
          }
        }
      }
    }
`