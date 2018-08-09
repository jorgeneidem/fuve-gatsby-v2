import React, { Component } from "react";
import styled from 'styled-components';

const PostPageBody = styled.div`  
  max-width: 64vw;
  margin: 0 auto;
  background-color: white;
  min-height: 800px;
  border-radius: 3px;
  padding: 50px;
  h1 {
    text-align: center;
    font-size: 3rem;
    margin-bottom: 10px;
  }
  @media (max-width: 480px) {
    max-width: 94vw;
    padding: 20px;
    h1 {
      font-size: 2rem;
    }
  }
`

export default class PostPage extends Component {
  render() {
    const { data } = this.props;
    return (
      <PostPageBody>
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: data.markdownRemark.html
          }}
        />
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
      }
    }
  }
`;