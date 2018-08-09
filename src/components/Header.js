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
  background: red;
  background: linear-gradient(110deg, #38A688, #2BB993, #26C299, #3CC39F);
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
  margin: 10px auto 60px auto;
  font-size: 32px;
  @media (max-width: 600px) {
    font-size: 24px;
  }
`

const NavBar = styled.nav`
padding-top: 3px;
  button {
    border: none;
    color: #ffffff;
    border-radius: 12px;
    padding: 17px 24px 18px 24px;
    margin-top: -6px;
    background-color: #3ED4AC;
    font-weight: 500;
    transition: .25s;

      a {
        color: #ffffff;
      }
      :hover {
        background-color: #42DCB3;
        cursor: pointer;
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
      <PayOff>Get the overview of <br/>new and future vehicles</PayOff>
      <NavBar><button>Receive updates</button></NavBar>
    </HeaderContainer>
  </HeaderWrapper>
)

export default Header
