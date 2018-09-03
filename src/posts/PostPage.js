import React, { Component } from "react";
import styled from "styled-components";
import Img from "gatsby-image";

const HeroImageWrapper = styled.div`
  margin: 0 auto 40px auto;
  width: 90%;
  img {
    border-radius: 4px;
  }
  @media (max-width: 480px) {
    width: 96%;
    margin: 0 auto 12px auto;
  }
`

const Image1 = styled.div`
`

const PostPageBody = styled.div`  
  margin: 0 auto;  
  width: 80%;
  max-width: 980px;
  background-color: white;
  min-height: 800px;
  border-radius: 4px;
  padding-bottom: 30px;
  h1 {
    text-align: center;
    font-size: 3rem;
    padding: 22px 0;
  }
  @media (max-width: 480px) {
    width: 96%;
    h1 {
      font-size: 2rem;
    }
  }
  
`

const PostPageBodyContent = styled.div`
font-size: calc(1rem + 0.125vw);
margin: 0 auto;
width: 80%;
max-width: 700px;
line-height: 1.45;
h3 {
  font-size: 1.227rem;
  font-weight: 600;
  line-height: 1.373;
  margin-bottom: 1.45rem;
}
h4 {
  font-size: calc(1rem + 0.125vw);
  margin-bottom: .428rem;
}
p {
  margin-bottom: 1.75rem;
}
table {
  font-size: .9rem;
  border: 1px solid #dfe2e5;
}

table th,td {
  border: 1px solid #dfe2e5;
}

table th:first-child,
table td:first-child {
  padding-left: .85rem;
}

table thead {
  background-color: rgb(238,238,238);
}

@media (max-width: 480px) {
  width: 94%; 
  padding: 0;
  table {
    font-size: .8rem;
  } 
  h3, h4 {
    font-size: 1rem;
    margin-bottom: 0.45rem;
  }
  p {
    margin-bottom: 1.125rem;
  }
  td,
  th {
    padding-left:   0.3rem;
    padding-right:  0.3rem;
    padding-top:    0.3rem;
    padding-bottom: 0.3rem
  }
}
`

export default class PostPage extends Component {
  render() {
    const { data } = this.props;
    return (
      <PostPageBody>
        <article>
          <h1>{data.markdownRemark.frontmatter.title}</h1>
          <HeroImageWrapper>
            <Image1><Img sizes={data.markdownRemark.frontmatter.gallery_image_1.childImageSharp.sizes} /></Image1>
          </HeroImageWrapper>
            <PostPageBodyContent
              dangerouslySetInnerHTML={{
                __html: data.markdownRemark.html
              }}
            />
        </article>
      </PostPageBody>
    );
  }
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD YYYY")
        gallery_image_1
         {
          childImageSharp{
            sizes(maxWidth: 830) {
                ...GatsbyImageSharpSizes
              }
            }
          }
        cover_image {
          childImageSharp{
              sizes(maxWidth: 930) {
                  ...GatsbyImageSharpSizes
                }
            }
        }
      }
    }
  }
`;