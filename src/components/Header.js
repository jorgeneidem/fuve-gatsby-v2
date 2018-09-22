import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import logo from '../images/fuve-logo-white.png'

const HeaderWrapper = styled.div`
background: none;
  margin-bottom: 1.45rem;
  overflow: hidden;
  position: relative;
  text-align: center;
  h1 img {
    width: 102px;
  }
  @media (max-width: 600px) {
    h1 img {
      width: 90px;
    } 
  }
`

const HeaderContainer = styled.div` 
  padding: 1.45rem 1.0875rem;
  z-index: -1000;
  &:after{
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: #BAB7B6;
  background: linear-gradient(110deg, #38A688, #2BB993, #26C299, #3CC39F);
  /* background: linear-gradient(110deg, #B7B4B4, #BAB7B6, #BFBCBB, #C2BFBE); */
  transform-origin: 0 100%;
  transform: rotate(-12deg) scale(1.2,1.2);
  bottom: 0;
  left: 0;
  z-index: -1000;
  @media (min-width: 660px) {
    transform: rotate(-8deg) scale(1.2,1.2);
  }
  @media (min-width: 960px) {
    transform: rotate(-4deg) scale(1.2,1.2);
  }
`

const PayOff = styled.div`
  color: #f8f8f8;
  font-weight: 300;
  max-width: 600px;
  margin: 10px auto 50px auto;
  font-size: 34px;
  @media (max-width: 600px) {
    font-size: 28px;
    margin: 0 auto 30px auto;
  }
`

const NavBar = styled.nav`
form {
  margin-bottom: -10px;
}
input[type=text] {
  background: #f6f6f6;
  margin: 4px;
  border: none;
  border-radius: 6px;
  -webkit-appearance: none;
  padding: 14px 16px 15px 16px;
  :hover {  
    color: #282828;  
    background: #ffffff;
  }
  :focus {
    background: #ffffff;
  }
}
button {
  margin: 4px;
  border: none;
  color: #f0f0f0;
  border-radius: 6px;
  padding: 14px 16px 15px 16px;
  background-color: #3E3D3D;
  font-weight: 400;
  transition: .25s;
  
    :hover {  
      background-color: #4D4B4A;
      cursor: pointer;
    }

    :active {  
      background-color: #363434;
      
    }
}
`

const Header = ({ siteTitle, backgroundImage }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <h1 style={{ margin: 0, display: 'inline-block' }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          <img src={logo} alt="Fuve logo" />
        </Link>
      </h1>
      <PayOff>Future versions of <br/>electric vehicles</PayOff>
      <NavBar>
        <form action="/success" name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field" style={{display: 'inline-block' }}>
          <input type="hidden" name="form-name" value="contact" />
          <input type="text" name="email" id="email" placeholder="Enter your email address" style={{minWidth: 214 }} />
          <button type="submit">Get updates</button>
        </form>
      </NavBar>
    </HeaderContainer>
  </HeaderWrapper>
)

export default Header
