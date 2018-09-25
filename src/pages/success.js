import React, { Component } from "react";
import styled from "styled-components";
import Link from 'gatsby-link'

const PostPageBody = styled.div`  
  margin: 0 auto;  
  width: 80%;
  max-width: 580px;
  background-color: white;
  min-height: 220px;
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

const HomeLinkWrapper = styled.div`
text-align: center;
margin: 0 auto;
width: 80%;
max-width: 700px;
@media (max-width: 480px) {
  width: 96%;
}
`

const PostPageBodyContent = styled.div`
font-size: calc(1rem + 0.125vw);
text-align: center;
margin: 0 auto;
width: 70%;
max-width: 500px;
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

@media (max-width: 480px) {
  width: 94%; 
  padding: 0;
  h3, h4 {
    font-size: 1rem;
    margin-bottom: 0.45rem;
  }
  p {
    margin-bottom: 1.125rem;
  }
}
`

export default class PostPage extends Component {
  render() {
    const { data } = this.props;
    return (
      <PostPageBody>
        <article>
          <h1>Thank you</h1>
            <PostPageBodyContent>
                <h4>You're about to sign up to receive an e-mail when new vehicles are added to Fuve.</h4>
                <p>New car models aren't announced every day, so expect to hear from us monthly, at most. You will have to confirm in a separate email before the signup is completed.</p>
            </PostPageBodyContent>
            <HomeLinkWrapper>
              <Link to={`/`}>
                Go to front page
              </Link>
            </HomeLinkWrapper>
        </article>
      </PostPageBody>
    );
  }
};