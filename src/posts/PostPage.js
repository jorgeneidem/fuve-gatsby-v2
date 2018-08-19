import React, { Component } from "react";
import styled from "styled-components";
import Img from "gatsby-image";

const ImageGridWrapper = styled.div`
  margin: 0 0 20px 0;
  width: 100%;
  display: grid;
  grid-gap: 8px;  
  align-items: start;
  grid-template-areas: 
    "a a a a a a a a a"
    "b b b c c c c c c"
    "b b b e e e d d d";
  img {
    border-radius: 4px;
  }
`

const Image1 = styled.div`
 grid-area: a;
`

const Image2 = styled.div`
grid-area: b;
`

const Image3 = styled.div`
grid-area: c;
`

const Image4 = styled.div`
grid-area: d;
`

const Image5 = styled.div`
grid-area: e;
`

const PostPageBody = styled.div`  
  max-width: 64vw;
  margin: 0 auto;
  background-color: white;
  min-height: 800px;
  border-radius: 3px;
  padding: 30px 50px 70px 50px;
  h1 {
    text-align: center;
    font-size: 3rem;
    margin-bottom: 30px;
  }
  @media (max-width: 980px) {
    max-width: 98vw;
    padding: 30px 25px 35px 25px;
  }
`
const PostPageBodyContentWrapper = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
`

const PostPageBodyContent = styled.div`
grid-column-start: 2; 
grid-column-end: 4; 
line-height: 1.369;
padding-right: .5rem;
h3 {
  font-size: 1.4rem;
  line-height: 1.248;
  margin-bottom: .369rem;
}
h4 {
  margin-bottom: .428rem;
}
@media (max-width: 480px) {
  max-width: 94vw;
  padding: 0;
  h1 {
    font-size: 2rem;
  }
}
p {
  margin-bottom: .456rem;
}
@media (max-width: 980px) {
  grid-column-start: 1; 
  grid-column-end: 4; 
}
`

export default class PostPage extends Component {
  render() {
    const { data } = this.props;
    return (
      <PostPageBody>
        <article>
          <h1>{data.markdownRemark.frontmatter.title}</h1>
          <ImageGridWrapper>
            <Image1><Img sizes={data.markdownRemark.frontmatter.gallery_image_1.childImageSharp.sizes} /></Image1>
            <Image2><Img sizes={data.markdownRemark.frontmatter.gallery_image_2.childImageSharp.sizes} /></Image2>
            <Image3><Img sizes={data.markdownRemark.frontmatter.gallery_image_3.childImageSharp.sizes} /></Image3>
            <Image4><Img sizes={data.markdownRemark.frontmatter.gallery_image_4.childImageSharp.sizes} /></Image4>
            <Image5><Img sizes={data.markdownRemark.frontmatter.gallery_image_5.childImageSharp.sizes} /></Image5>
          </ImageGridWrapper>
          <PostPageBodyContentWrapper>
            <PostPageBodyContent
              dangerouslySetInnerHTML={{
                __html: data.markdownRemark.html
              }}
            />
          </PostPageBodyContentWrapper>
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
            sizes(maxWidth: 930) {
                ...GatsbyImageSharpSizes
              }
            }
          }
        gallery_image_2
          {
           childImageSharp{
             sizes(maxWidth: 930) {
                 ...GatsbyImageSharpSizes
               }
             }
           }
        gallery_image_3
           {
            childImageSharp{
              sizes(maxWidth: 930) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
            gallery_image_4
            {
             childImageSharp{
               sizes(maxWidth: 930) {
                   ...GatsbyImageSharpSizes
                 }
               }
             }
             gallery_image_5
           {
            childImageSharp{
              sizes(maxWidth: 930) {
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