import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import logo from '../images/fuve-logo-white.png'

const HeaderWrapper = styled.div`
  background: none;
  margin-bottom: 1rem;
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
  bottom: 100px;
  left: 0;
  z-index: -1000;
  @media (min-width: 660px) {
    transform: rotate(-8deg) scale(1.2,1.2);
    bottom: 60px;
  }
  @media (min-width: 960px) {
    transform: rotate(-4deg) scale(1.2,1.2);
  }
`

const PayOff = styled.div`
  color: #f8f8f8;
  font-weight: 300;
  max-width: 600px;
  margin: 0 auto 80px auto;
  font-size: 34px;
  @media (max-width: 600px) {
    font-size: 28px;
    margin: 0 auto 30px auto;
  }
`

const NavBar = styled.nav`
form {
  margin-bottom: -10px;
  > div {
    position: relative;
    
    > label {
      font-size: .75em;
      font-weight: 400;
      color: #ffffff;
      position: absolute;
      top: -12px;
      left: 4px;
      visibility: hidden;
      
    }
  }

}
input[type=email] {
  color: rgba(255,255,255,0.75);
  background: #27A886;
  margin: 4px;
  border: none;
  border-radius: 6px;
  -webkit-appearance: none;
  padding: 14px 16px 15px 16px;
  transition: .25s;
  min-width: 215px;
  :focus {
    outline: 0;
    background: #307F6A;
    color: #f9f9f9;
  }
  :hover {
    background: #307F6A;
  }
}

#email:required {
  box-shadow: none;
}

#email:focus ~ #submit-email-button {
  background: #363434;
  color: rgba(255,255,255,0.85);
}

#email:focus ~ #email-label {
  visibility: visible;
}

#email:focus::-webkit-input-placeholder { /* Chrome/Opera/Safari */
  color:transparent;
}
  
#email:focus:-moz-placeholder { /* Firefox 18- */
  color:transparent;
}
  
#email:focus::-moz-placeholder { /* Firefox 19+ */
  color:transparent;
}
  
#email:focus:-ms-input-placeholder { /* IE */
  color:transparent;
}
  
#email:focus::-ms-input-placeholder { /* IE Edge */
  color:transparent;
}


button[type=submit] {
  margin: 4px;
  border: none;
  color: rgba(255,255,255,0.7);
  border-radius: 6px;
  padding: 14px 16px 15px 16px;
  background: #307F6A;
  font-weight: 400;
  transition: .25s;
  :focus {
    box-shadow: 0 0 1em 0.1875em rgba(18,64,52,.25);
    outline: 0;
    background: #363434;
    color: rgba(255,255,255,1);
  }
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
          <div>
          <input type="email" name="email" id="email" placeholder="Your email address" autoComplete="off" required />
          <label for="email" id="email-label">Your email address</label>
          <button type="submit" id="submit-email-button">Get updates</button>
          </div>
        </form>
      </NavBar>
    </HeaderContainer>
  </HeaderWrapper>
)

export default Header
